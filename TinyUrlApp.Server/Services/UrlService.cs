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

    public UrlModel Create(string longUrl, string? shortUrl)
    {
        var generatedShortUrl = GenerateShortUrl();
        var urlModel = new UrlModel
        {
            ShortUrl = shortUrl ?? generatedShortUrl,
            LongUrl = longUrl,
            ClickCount = 0
        };
        _urlMappings.Add(urlModel);
        return urlModel;
    }

    private static string GenerateShortUrl()
    {
        return Guid.NewGuid().ToString()[..8];
    }
}
