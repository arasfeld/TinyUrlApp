namespace TinyUrlApp.Server.Models;

public class UrlModel
{
    public int ClickCount { get; set; }
    public required string LongUrl { get; set; }
    public string? ShortUrl { get; set; }
}
