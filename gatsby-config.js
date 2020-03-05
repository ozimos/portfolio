const config = require("./src/data")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    author: `@gatsbyjs`,
    about: "Get the hottest gist about me",
    title: "John Doe",
    logo: "https://gatsby-theme-portfolio.smakosh.com/favicon/favicon-512.png",
    author: "John Doe",
    url: "https://gatsby-theme-portfolio.smakosh.com",
    legalName: "John Doe",
    description: "I’m John and I’m a Backend & Devops engineer!",
    socialLinks: {
      twitter: "http://www.twitter.com/smakosh",
      github: "https://github.com/smakosh",
      linkedin: "https://www.linkedin.com/in/ismail-ghallou-630149122/",
      instagram: "https://instagram.com/smakosh19",
      youtube: "https://www.youtube.com/user/smakoshthegamer",
      google: "https://plus.google.com/u/0/+IsmailSmakoshGhallou",
      telegram: "https://t.me/smakosh",
      stackOverflow: "https://stackoverflow.com/users/story/7396786",
    },
    googleAnalyticsID: "UA-88875900-7",
    themeColor: "#6b63ff",
    backgroundColor: "#6b63ff",
    social: {
      facebook: "appId",
      twitter: "@smakosh",
    },
    address: {
      city: "City",
      region: "Region",
      country: "Country",
      zipCode: "ZipCode",
    },
    contact: {
      email: "email",
      phone: "phone number",
    },
    foundingDate: "2019",
    recaptcha_key: "6Lcs6lQUAAAAAEwhNH2IsobIe2csdda4TU3efpMN",
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/common/Layout/index.jsx"),
        },
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `src/content`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        headers: {
          Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        },
        fetchOptions: {},
        variables: {
          username: "smakosh",
        },
      },
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: config.themeColor,
        showSpinner: false,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.googleAnalyticsID,
        head: true,
      },
    },
    {
      resolve: "gatsby-plugin-favicon",
      options: {
        logo: `${__dirname}/src/images/gatsby-icon.png`,
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.defaultTitle,
        short_name: "example",
        start_url: "/",
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "minimal-ui",
        icon: `${__dirname}/src/images/gatsby-icon.png`,
      },
    },
    // 'gatsby-plugin-offline',
  ],
}
