const publicUrl = process.env.BASE_HREF || '/';

module.exports = {
  build: {
    publicUrl,
  },
  theme: 'minima',
  siteConfig: {
    url: 'https://daggerok.guthub.io/saber-examples',
    author: 'daggerok',
    email:
      'daggerok@gmail.com',
    description: `Write an awesome description for your new site here.
      You can edit this line in saber-config.yml of in saber-config.js files.
      It will appear in your document head meta (for Google search results) site description.`,
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about.html' },
    ],
    social: {
      rss: true,
      github: 'daggerok',
      twitter: 'daggerok',
    },
  },
  plugins: [
    { resolve: 'saber-plugin-prismjs' },
    { resolve: 'saber-plugin-query-posts' },
    {
      resolve: 'saber-plugin-feed',
      options: {
        atomFeed: true,
      },
    },
  ],
};
