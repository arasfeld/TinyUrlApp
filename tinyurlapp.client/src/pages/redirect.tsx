import { useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUrl } from '@/services/api';

function Redirect() {
  const { shortUrl } = useParams();
  const navigate = useNavigate();

  const getLongUrlAndRedirect = useCallback(
    async (shortUrl: string) => {
      const url = await getUrl(shortUrl);
      if (!url) {
        navigate('/');
      }

      window.location.href = url.longUrl;
    },
    [navigate]
  );

  useEffect(() => {
    if (!shortUrl) return;

    getLongUrlAndRedirect(shortUrl);
  }, [getLongUrlAndRedirect, shortUrl]);

  return undefined;
}

export default Redirect;
