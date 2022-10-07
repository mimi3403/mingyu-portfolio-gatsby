module.exports = {
  siteMetadata: {
    title: `Mingyu Hong`,
    siteUrl: `https://www.yourdomain.tld`,
    author: "Mingyu Hong",
    description: "A Personal Website for Mingyu Hong",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",
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
