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
  }

  figcaption.img-caption {
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 1em;
  }
  p + figcaption.img-caption {
    margin-top: -1em;
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
`
