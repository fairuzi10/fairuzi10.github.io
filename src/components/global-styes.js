import { css } from '@emotion/core'
import { COLOR } from '../styles/theme'

export default css`
  body {
    background-color: ${COLOR.blueFade};
    color: ${COLOR.dark};
  }

  .black-link {
    color: ${COLOR.dark} !important;
  }

  .black-link:hover {
    color: ${COLOR.dark} !important;
  }

  .grey-link {
    color: #777 !important;
  }

  .grey-link:hover {
    color: #777 !important;
  }

  .gatsby-resp-image-link {
    margin-bottom: 1em;
  }

  hr.section-divider {
    margin: 3em 0;
    border: 0;
    text-align: center;
  }

  hr.section-divider:before {
    content: '...';
    font-size: 2em;
    top: -1em;
    position: relative;
    letter-spacing: 1em;
    margin-left: 1em;
    color: rgb(33, 37, 41);
  }

  .blog-post p {
    text-align: justify;
  }

  .dark-text {
    color: ${COLOR.dark};
  }

  .text-decoration-none {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4 {
    font-weight: bold;
  }

  ${[50, 100, 150, 200, 250, 300, 350, 400, 450, 500].map(
    breakpoint => `.img-${breakpoint} {
        max-width: ${breakpoint}px;
        margin: auto;
      }`
  )}
`
