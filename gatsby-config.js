module.exports = {
  siteMetadata: {
    title: `Fairuzi's Personal Website`,
    author: `Muhammad Fairuzi Teguh`,
    siteUrl: `https://fairuzi10.github.io`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-images`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-katex`,
          `gatsby-remark-prismjs`,
          `gatsby-plugin-sitemap`,
          {
            resolve: `gatsby-remark-embed-video`,
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              // height: 400 // Optional: Overrides optional.ratio
            }
          },
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-emojis`,
            options: {
              // Deactivate the plugin globally (default: true)
              active : true,
              // Add a custom css class
              class  : 'emoji-icon',
              // Select the size (available size: 16, 24, 32, 64)
              size   : 32,
              // Add custom styles
              styles : {
                display      : 'inline',
                margin       : '0',
                'margin-top' : '1px',
                position     : 'relative',
                width        : '20px'
              }
            }
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/blog`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
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
          windows: false
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-112414390-1",
      },
    }
  ]
}
