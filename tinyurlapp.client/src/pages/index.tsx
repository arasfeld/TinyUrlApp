import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TypographyH1 } from '@/components/ui/typography';
import { UrlForm } from '@/components/UrlForm';
import { UrlTable } from '@/components/UrlTable';
import { createUrl, getUrls } from '@/services/api';
import { Url } from '@/types';

function Index() {
  const [loading, setLoading] = useState(false);
  const [urls, setUrls] = useState<Url[]>();
  const navigate = useNavigate();

  const populateUrls = useCallback(async () => {
    setLoading(true);
    const response = await getUrls();
    setUrls(response);
    setLoading(false);
  }, []);

  const handleSelect = useCallback(
    async (shortUrl: string) => {
      navigate(shortUrl);
    },
    [navigate]
  );

  const handleSubmit = useCallback(
    async (url: Url) => {
      await createUrl(url.longUrl, url.shortUrl);
      populateUrls();
    },
    [populateUrls]
  );

  useEffect(() => {
    populateUrls();
  }, [populateUrls]);

  return (
    <div className="flex w-full flex-col gap-6">
      <TypographyH1>Tiny URL Service</TypographyH1>
      <div className="flex gap-18">
        <UrlForm className="max-w-sm" onSubmit={handleSubmit} />
        <UrlTable items={urls} loading={loading} onSelect={handleSelect} />
      </div>
    </div>
  );
}

export default Index;
