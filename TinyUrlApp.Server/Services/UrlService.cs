using TinyUrlApp.Server.Models;

namespace TinyUrlApp.Server.Services;

public class UrlService
{
    private readonly List<UrlModel> _urlMappings;

    public UrlService()
    {
        _urlMappings = [];
    }

    public IEnumerable<UrlModel> Get()
    {
        return _urlMappings;
    }

    public UrlModel? Get(string shortUrl)
    {
        return _urlMappings.FirstOrDefault((url) => url.ShortUrl == shortUrl);
    }

    public UrlModel Create(string longUrl, string? shortUrl)
    {
        var generatedShortUrl = GenerateShortUrl();
        var urlModel = new UrlModel
        {
            ShortUrl = string.IsNullOrWhiteSpace(shortUrl) ? generatedShortUrl : shortUrl,
            LongUrl = longUrl,
            ClickCount = 0
        };
        _urlMappings.Add(urlModel);
        return urlModel;
    }

    public bool Delete(string shortUrl)
    {
        var urlModel = _urlMappings.FirstOrDefault(u => u.ShortUrl == shortUrl);
        if (urlModel != null)
        {
            _urlMappings.Remove(urlModel);
            return true;
        }
        return false;
    }

    private static string GenerateShortUrl()
    {
        return Guid.NewGuid().ToString()[..8];
    }
}
