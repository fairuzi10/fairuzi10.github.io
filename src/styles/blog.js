import { css } from '@emotion/core'

export default css`
  p {
    text-align: justify;
  }

  blockquote {
    background: #f8f9fa;
    border-left: 0.3rem solid #e5e5e5;
    margin-left: -1rem;
    padding: 0.8rem;
  }

  .img-potrait {
    width: 50%;
    margin-left: 25%;
    margin-bottom: 1rem;
  }

  figcaption.img-caption {
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 1em;
    font-size: 0.9rem;
    margin-top: -1em;
  }
  iframe {
    max-width: 100%;
    display: block;
    margin: auto;
  }
  figcaption.iframe-caption {
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 1em;
    font-size: 0.9rem;
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
  h2 {
    font-size: 1.8rem;
    font-weight: bold;
  }
  h3 {
    font-size: 1.6rem;
    font-weight: bold;
  }
  h4 {
    font-size: 1.4rem;
    font-weight: bold;
  }
  h5 {
    font-size: 1.2rem;
  }
  h6 {
    font-size: 1rem;
  }

  code.language-text {
    color: #dd4a68;
  }
`
