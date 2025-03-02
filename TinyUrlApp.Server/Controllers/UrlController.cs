using Microsoft.AspNetCore.Mvc;
using TinyUrlApp.Server.Models;
using TinyUrlApp.Server.Services;

namespace TinyUrlApp.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UrlController : ControllerBase
{
    private readonly UrlService _urlService;

    public UrlController(UrlService urlService)
    {
        _urlService = urlService;
    }

    [HttpGet]
    public ActionResult<string> Get()
    {
        var urls = _urlService.Get();
        return Ok(urls);
    }

    [HttpGet("{shortUrl}")]
    public ActionResult<UrlModel> Get(string shortUrl)
    {
        var url = _urlService.Get(shortUrl);
        if (url == null) {
            return NotFound();
        }
        url.ClickCount++;
        return url;
    }

    [HttpPost]
    public ActionResult<UrlModel> Create([FromBody] UrlModel urlModel)
    {
        if (urlModel == null || string.IsNullOrEmpty(urlModel.LongUrl))
        {
            return BadRequest("Invalid URL data.");
        }

        var createdUrl = _urlService.Create(urlModel.LongUrl, urlModel.ShortUrl);
        return Ok(createdUrl);
    }

    [HttpDelete("{shortUrl}")]
    public IActionResult Delete(string shortUrl)
    {
        var result = _urlService.Delete(shortUrl);
        if (!result)
        {
            return NotFound();
        }
        return NoContent();
    }
}
