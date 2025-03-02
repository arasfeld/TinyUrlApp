import { useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TypographyP } from '@/components/ui/typography';
import { getUrl } from '@/services/api';

function Redirect() {
  const { shortUrl } = useParams();
  const navigate = useNavigate();

  const getLongUrlAndRedirect = useCallback(async () => {
    if (!shortUrl) return;

    const url = await getUrl(shortUrl);
    if (!url) {
      navigate('/');
    }

    window.location.href = url.longUrl;
  }, [navigate, shortUrl]);

  useEffect(() => {
    getLongUrlAndRedirect();
  }, [getLongUrlAndRedirect]);

  return <TypographyP>Loading...</TypographyP>;
}

export default Redirect;
