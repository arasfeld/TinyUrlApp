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

interface Props {
  className?: string;
  items?: Url[];
  loading: boolean;
  onSelect: (
    shortUrl: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>;
}

export function UrlTable({
  className,
  items,
  loading = false,
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
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
