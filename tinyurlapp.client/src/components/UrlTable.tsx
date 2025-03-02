import { Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { TypographyP } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import type { Url } from '@/types';
import { DeleteDialog } from './DeleteDialog';

interface Props {
  className?: string;
  items?: Url[];
  loading: boolean;
  onDelete: (
    shortUrl: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>;
  onSelect: (
    shortUrl: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>;
}

export function UrlTable({
  className,
  items,
  loading = false,
  onDelete,
  onSelect,
}: Props) {
  if (loading) {
    return <TypographyP>Loading...</TypographyP>;
  }

  if (!items?.length) {
    return <TypographyP>No results</TypographyP>;
  }

  return (
    <Table className={cn('table table-striped', className)}>
      <TableHeader>
        <TableRow>
          <TableHead>Short URL</TableHead>
          <TableHead>Long URL</TableHead>
          <TableHead>Click Count</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.shortUrl}>
            <TableCell>
              <Button
                onClick={(event) => onSelect(item.shortUrl, event)}
                variant="link"
              >
                {item.shortUrl}
              </Button>
            </TableCell>
            <TableCell className="text-left">{item.longUrl}</TableCell>
            <TableCell>{item.clickCount}</TableCell>
            <TableCell>
              <DeleteDialog
                onDelete={(event) => onDelete(item.shortUrl, event)}
              >
                <Button size="icon" variant="outline">
                  <Trash />
                </Button>
              </DeleteDialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
