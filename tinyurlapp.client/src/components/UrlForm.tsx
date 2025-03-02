import { FormEvent, useCallback, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { Url } from '@/types';

interface Props {
  className?: string;
  onSubmit: (url: Url, event: FormEvent) => Promise<void>;
}

export function UrlForm({ className, onSubmit }: Props) {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      setSubmitting(true);
      await onSubmit({ longUrl, shortUrl }, event);
      setSubmitting(false);
      setLongUrl('');
      setShortUrl('');
    },
    [longUrl, onSubmit, shortUrl]
  );

  return (
    <div className={cn('flex flex-col gap-6', className)}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Create a Tiny URL</CardTitle>
          <CardDescription>
            Enter a long URL and an optional short URL to create a tiny URL.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="longUrl">Long URL</Label>
                <Input
                  disabled={submitting}
                  id="longUrl"
                  onChange={(e) => setLongUrl(e.target.value)}
                  required
                  type="url"
                  value={longUrl}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="shortUrl">Short URL (optional)</Label>
                <Input
                  disabled={submitting}
                  id="shortUrl"
                  onChange={(e) => setShortUrl(e.target.value)}
                  type="text"
                  value={shortUrl}
                />
              </div>
              <Button disabled={submitting} type="submit">
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
