const publicUrl = process.env.BASE_HREF || '/';

module.exports = {
  build: {
    publicUrl,
  },
  theme: 'minima',
  siteConfig: {
    url: 'https://daggerok.guthub.io/saber-examples',
    author: 'daggerok',
    email: 'daggerok@gmail.com',
    description: `Write an awesome description for your new site here. You can edit this line in saber-config.yml.
      It will appear in your document head meta (for Google search results) site description.`,
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about.html' },
    ],
    social: {
      twitter: 'daggerok',
      github: 'daggerok',
      rss: true,
    },
  },
  plugins: [
    { resolve: 'saber-plugin-query-posts' },
    {
      resolve: 'saber-plugin-feed',
      options: {
        atomFeed: true,
      },
    },
  ],
};
