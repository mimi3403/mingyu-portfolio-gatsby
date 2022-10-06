module.exports = {
  siteMetadata: {
    title: `mingyu-portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
    author: "Mingyu Hong",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
