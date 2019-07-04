import { css } from '@emotion/core'
import { COLOR } from '@/utils/theme'

export default css`
  @import url('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css');
  @import url('https://fonts.googleapis.com/css?family=Arvo&display=swap');

  * {
    font-family: 'Arvo';
  }

  body {
    background-color: ${COLOR.blueFade};
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

  .img-caption {
    margin-top: -1em;
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 1em;
  }

  .gatsby-resp-image-link {
    margin-bottom: 1em;
  }

  blockquote {
    background: #f8f9fa;
    border-left: 0.3em solid #e5e5e5;
    padding: 1em;
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
`
