
const domains = [
    "example.com",
    "google.com",
    "facebook.com",
    "twitter.com",
    "youtube.com",
    "amazon.com",
    "yahoo.com",
    "reddit.com",
    "instagram.com",
    "linkedin.com",
    "ebay.com",
    "wikipedia.org",
    "netflix.com",
    "wordpress.org",
    "bing.com",
    "msn.com",
    "aliexpress.com",
    "apple.com",
    "stackoverflow.com",
    "tumblr.com",
    "pinterest.com",
    "imdb.com",
    "adobe.com",
    "bbc.co.uk",
    "craigslist.org",
    "github.com",
    "etsy.com",
    "microsoft.com",
    "espn.com",
    "nytimes.com",
    "whatsapp.com",
    "cnn.com",
    "fandom.com",
    "dropbox.com",
    "nasa.gov",
    "bbc.com",
    "soundcloud.com",
    "theguardian.com",
    "huffpost.com",
    "forbes.com",
    "foxnews.com",
    "spotify.com",
    "bloomberg.com",
    "usatoday.com",
    "stackexchange.com",
    "bbc.com",
    "techcrunch.com",
    "theguardian.com",
    "businessinsider.com",
    "walmart.com"
  ]
  


/**
 * Generates a random domain from the available domains.
 * @returns A randomly generated domain.
 */
export default function generateDomain() {
    return domains[Math.floor(Math.random() * domains.length)];
}
