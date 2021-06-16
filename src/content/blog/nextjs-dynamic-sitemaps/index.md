---
title: 'Next.js: dynamic sitemaps with SSR'
summary: 'Use Next.js’s built-in server side rendering functionality to build sitemaps from your dynamic CMS content.'
date: '2021-06-14'
---

Good sitemaps are an important part of maximising the SEO performance of your site. They let crawlers know where to find pages to index, when they were last updated, how often they are likely to change, and more.

Generally, sitemaps take the form of an XML file, made up of `<url>` blocks representing each of the pages you want to be discovered and indexed. The sitemap specification can be found [here](https://www.sitemaps.org/protocol.html).

This is all well and good, but if you are creating pages dynamically, e.g. by pulling content from a CMS, then how are you supposed to know the URLs of all of your pages in advance? It would be a laborious task to have to compile your sitemap manually, and remember to update it every time you add or remove content. Luckily, you can leverage Next.js’s server side rendering functionality to build a dynamic sitemap on demand.

Start by creating a `sitemap.xml.js` file in your `pages/` directory.

To begin with, it can look something like this:

```jsx
const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://example.com</loc>
    </url>
</urlset>
`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default Sitemap;
```

Notice that the `Sitemap` component is just a no-op — it doesn’t need to return anything as the `getServerSideProps` function will handle the response to the `/sitemap.xml` route being requested. You need to return an empty `props` object so that Next.js doesn’t complain, even though you won’t be using any props in your component.

The template string will form the basis of our sitemap — substitute *example.com* for your own domain.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://example.com</loc>
    </url>
</urlset>
```

The next few lines deal with the response: setting the Content-Type header so that the requester knows we’re sending XML, writing the XML content, and then closing the connection.

```js
res.setHeader('Content-Type', 'text/xml');
res.write(sitemap);
res.end();
```

Now, with your site running in development, head to `http://localhost:3000/sitemap.xml` and you should see your raw XML content returned.

Once you’ve confirmed that the basics are working, you can fill in any static routes by hand. This could be things like an about page, pricing page, contact page... anything with a fixed URL that isn't going to change. Simply add more `<url>` blocks to your sitemap template as you need.

The next step is to build a list of URLs from your dynamic content. Exactly how this is done will depend on your setup, but the concept remains the same. Whichever CMS you are using, you should be able to get a list of your articles/posts/other dynamic content along with their respective slugs — you have likely done this already if you have a 'list' page where you show all of your articles.

For example, the [Ghost CMS](https://ghost.org/docs/content-api/#posts) posts route, or the [Strapi CMS](https://strapi.io/documentation/developer-docs/latest/developer-resources/content-api/content-api.html#get-entries) get content route.

Then all that’s left to do is build a list of `<url>` blocks from the slugs of your dynamic content.

You could do this by mapping over your array of content within your XML string template:

```js
// articles returned from CMS
const articles = [
  {
    title: 'Hello world',
    slug: 'hello-world',
    ...
  },
  ...
]

const sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://example.com</loc>
    </url>
    ${articles.map(post => `
    <url>
        <loc>https://example.com/blog/${post.slug}</loc>
    </url>`).join('\n')}
</urlset>
`;
```

Finally, you can embellish your `<url>` blocks with any more information you can provide — for example most CMSs will provide a date on which the content was last edited, which you could include in a `<lastmod>` tag.

Now when a crawler fetches your `/sitemap.xml` route, Next.js will return a valid sitemap file that is always up to date with your latest dynamic content. Nice!

*Note: you may need escape special characters in your URLs to build a valid sitemap. See the 'entity escaping' section of the sitemaps spec page.*
