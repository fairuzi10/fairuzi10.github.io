import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <style
          id="loading-style"
          dangerouslySetInnerHTML={{
            __html: `
              body {
                background-color: #e6ecf0;
                margin: 0;
              }
              .py-3 {
                padding-top: 1rem!important;
                padding-bottom: 1rem!important;
              }
              .navbar {
                position: relative;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -ms-flex-wrap: wrap;
                flex-wrap: wrap;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                justify-content: space-between;
                padding: .5rem 1rem;
                box-shadow: 0px 10px 20px -10px rgba(0,64,128,0.2);
              }
              .bg-white {
                background-color: #fff!important;
              }
              .navbar-light .navbar-brand {
                color: rgba(0,0,0,.9);
              }
              .navbar-brand {
                display: inline-block;
                padding-top: .3125rem;
                padding-bottom: .3125rem;
                margin-right: 1rem;
                font-size: 1.25rem;
                line-height: inherit;
                white-space: nowrap;
              }
              a {
                color: #007bff;
                text-decoration: none;
                background-color: transparent;
                -webkit-text-decoration-skip: objects;
              }
              @media (min-width: 576px) {
                .container {
                  max-width: 540px;
                }
              }
              @media (min-width: 768px) {
                .container {
                  max-width: 720px;
                }
              }
              @media (min-width: 992px) {
                .container {
                  max-width: 960px;
                }
              }
              .container {
                padding-right: 15px;
                padding-left: 15px;
                margin-right: auto;
                margin-left: auto;
              }
              .card {
                background-color: #ffffff;
                padding: 2rem;
                margin: 1rem;
                border-radius: 0.5rem;
                box-shadow: 0px 10px 40px -10px rgba(0,64,128,0.2);
              }
              .placeholder-content {
                height: 20px;
                overflow: hidden;
                background: #000;
                animation-duration: 1.7s;
                animation-fill-mode: forwards;
                animation-iteration-count: infinite;
                animation-timing-function: linear;
                animation-name: placeholderAnimate;
                background: #f6f7f8;
                background: linear-gradient(to right, #eee 2%, #ddd 18%, #eee 33%);
                background-size: 1300px;
                margin-bottom: 16px;
              }
              @keyframes placeholderAnimate {
                0%{ background-position: -650px 0; }
                100%{ background-position: 650px 0; }
              }
              .w-90 {
                width: 90%;
              }
              .w-80 {
                width: 80%;
              }
              .w-70 {
                width: 70%;
              }
              .w-60 {
                width: 60%;
              }
            `
          }}
        />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div id="loading-body">
          <nav className="py-3 navbar navbar-expand-md navbar-light bg-white">
            <a href="/" className="navbar-brand">
              Fairuzi10
            </a>
          </nav>
          <div className="container">
            <div className="card">
              <div className="placeholder-content w-90" />
              <div className="placeholder-content w-60" />
              <div className="placeholder-content w-80" />
              <div className="placeholder-content w-70" />
            </div>
          </div>
        </div>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const loadingBody = document.getElementById('loading-body');
              if (loadingBody) loadingBody.style.display = 'none';
            `
          }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
}
