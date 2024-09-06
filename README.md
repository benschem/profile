# Profile Example

## The content

This is a static website, meaning it's delivered to the web browser exactly as it's stored. It's made using regular HTML and CSS, with a sprinkling of Javascript to make the dark mode toggle switch and to hide the down arrow on scroll. The site is hosted on [Github pages](https://github.com/benschem/profile).

## The styling

The CSS that styles my index page is composed of two parts - a _Normalise_ section, which aims to render elements more intuitively and consistently, and a _Page Styling_ section, which is where the magic happens.

I have tried to use modern CSS techniques and attempted to follow best practises regarding responsiveness. I hope this can serve as a good inspiration and example for you to follow with your own profile.

## The icons

I used [Feather Icons](https://feathericons.com/), a collection of simple, free, open-source icons. At it's core, Feather is a collection of SVG files that get inserted into the page with Javascript. I've chosen to load Feather from a CDN provider via a <script> tag in the head of my HTML.

## The images

The images are all AI generated using [Bing Image Creator](https://www.bing.com/images/create) and [Adobe Firefly](https://www.adobe.com/au/products/firefly/features/text-to-image.html). I used [Photopea](https://www.photopea.com/) to resize the images and convert them to .webp to make the filesizes as small as possible so they load faster.

## What are all those other files?

- **CNAME** - A Canonical Name record is a type of resource record in the Domain Name System (DNS) that maps one domain name to another. This allows me to use another domain name that I own - [benschem.dev](https://benschem.dev) - instead of the free Github Pages domain name [benschem.github.io/profile](https://benschem.github.io/profile/).
- **.gitignore** - This file tells Git which files and folders to ignore when committing. I've told it to ignore the file `.DS_Store`, which is a macOS file that stores custom attributes of its containing folder, such as folder view options, icon positions, and other visual information. The name is an abbreviation of Desktop Services Store.
- **robots.txt** - A robots.txt file tells search engine crawlers which URLs the crawler can access on your site.
- **sitemap.xml** - An XML sitemap is a file that tells search engines which URLs on your website should be indexed.
- **404.html** - This is a custom error page shown when the requested URL could not be found. 404 is a HTTP status code that indicates that the browser was able to communicate with the server, but the server could not find what was requested.
- **favicon.ico** - This is a small image that is shown in browser tabs and bookmarks.
