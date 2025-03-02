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

export function UrlForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      // Handle form submission logic here
      console.log('Long URL:', longUrl);
      console.log('Short URL:', shortUrl);
    },
    [longUrl, shortUrl]
  );

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
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
                  id="shortUrl"
                  onChange={(e) => setShortUrl(e.target.value)}
                  type="text"
                  value={shortUrl}
                />
              </div>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
