import React from 'react'
import { Fullpage, Slide } from 'fullpage-react'
import Helmet from 'react-helmet'
import foto from './asset/foto.jpg'
import lara_logo from './asset/lara.png'
import f10web from './asset/f10web.png'
import { injectGlobal } from 'emotion'
import styled, { css } from 'react-emotion'
import { Container } from 'reactstrap'

injectGlobal`
  html {
    font-size: 10px;
    font-family: 'Arvo';

    @media(min-width: 576px) {
      font-size: 13px;
    }

    @media(min-width: 768px) {
      font-size: 16px;
    }
  }
`

const Jumbotron = styled.div`
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem;
  background-color: ${props => props.color};
`

const Achievement = ({ name }) => (
  <div className="col-12 col-md-6">
    <Jumbotron color="#ff6b6b">
      <h5><b>{name}</b></h5>
    </Jumbotron>
  </div>
)

const Project = ({ image, link, name, desc }) => (
  <Jumbotron color="#26de81">
    <div className="row">
      <div className="col-12 col-lg-2 text-center d-flex 
        align-items-center justify-content-center">
        <img src={image} />
      </div>
      <div className="col">
        <a href={link} css={css`
          font-size: 1.5rem;
          font-weight: bold;
          color: inherit;

          :hover {
            color: inherit;
            text-decoration: none;
          }
        `}>{name}</a><br />
        {desc}
      </div>
    </div>
  </Jumbotron>
)

const Wrapper = ({ children }) => (
  <Container css={css`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    `}>
    <div css={css`
      text-align: center;
      flex: 1;
    `}>
      {children}
    </div>
  </Container>
)

const socmed = css`
  text-decoration: none;
  color: inherit;
  margin: 2rem;
  :hover {
    color: inherit;
}
`

const Slide1 = () => (
  <Wrapper>
    <h1 className="display-4">Hello!</h1>
    <img className="img-responsive" css={css`
      border-radius: 50%;
      border: 1.5px solid rgb(33, 37, 41);
      max-height: 17em;
    `} src={foto} />
    <br /><br />
    <h3>I am</h3>
    <h1><b>Muhammad Fairuzi Teguh</b></h1>
    <h3>A sophomore in computer science who loves to code</h3>
  </Wrapper>
)

const Slide2 = () => (
  <Wrapper>
    <i className="fas fa-graduation-cap fa-3x"></i>
    <h1 className="display-4">Educations</h1>
    <h4>Computer Science - Universitas Indonesia</h4>
    <h6>2017 - 2021 (Expected)</h6>
    <h6>Current GPA: 3.86</h6>
    <br />
    <h4>SMAN 14 Jakarta</h4>
    <h6>2014 - 2017</h6>
    <br />
    <h4>SMPN 182 Jakarta</h4>
    <h6>2011 - 2014</h6>
    <br />
    <h4>SDN Cawang 04 Pagi</h4>
    <h6>2006 - 2011</h6>
  </Wrapper>
)

const Slide3 = () => (
  <Wrapper>
    <i className="fas fa-trophy fa-3x"></i>
    <h1 className="display-4">Achievements</h1>
    <div className="row">
      <Achievement name="Fourth place at DKI Jakarta Mathematics Competition" />
      <Achievement name="Bronze medal at National Science Olympiad 2016" />
      <Achievement name="Bronze medal at 1st International Olympiad of Metropolises" />
      <Achievement name="Top 16 Indonesian Computing Olympiad Team 2017" />
    </div>
  </Wrapper>
)

const Slide4 = () => (
  <Wrapper>
    <i className="fas fa-code fa-3x"></i>
    <h1 className="display-4">Projects</h1>
    <div className="row justify-content-center">
      <div className="text-left col-10 col-md-8">
        <Project image={f10web} link="https://fairuzi10.github.io" 
          name="fairuzi10.github.io" 
          desc=" My personal website built with GatsbyJS (React + GraphQL) 
          and Djago REST backend."
        />
        <Project image={lara_logo} link="https://line.me/R/ti/p/%40yni1319d" name="Lara"
          desc="A line reminder bot connected with Google Calendar API.
          Used by Tarung (Fasilkom UI 2017) primarily for reminding assignments deadline."
        />
      </div>
    </div>
  </Wrapper>
)

const Slide5 = () => (
  <Wrapper>
    <i className="fas fa-address-book fa-3x"></i>
    <h1 className="display-4">Contacts</h1>
    <h5>{'Let\'s keep in touch!'}</h5>
    <a className={socmed} href="https://www.facebook.com/profile.php?id=100008425810381"><i className="fab fa-facebook-square fa-3x"></i></a>
    <a className={socmed} href="https://www.linkedin.com/in/m-fairuzi-teguh/"><i className="fab fa-linkedin fa-3x"></i></a>
    <a className={socmed} href="https://github.com/fairuzi10"><i className="fab fa-github-square fa-3x"></i></a>
    <a className={socmed} href="/"><i className="fab fa-chrome fa-3x"></i></a>
  </Wrapper>
)

class CV extends React.Component {
  render() {
    const slides = [
      <Slide key='1' css={css`
        background-color: #3498db;
        `}>
        <Slide1 />
      </Slide>,
      <Slide key='2' css={css`
        background-color: #f1c40f;
        `}>
        <Slide2 />
      </Slide>,
      <Slide key='3' css={css`
        background-color: #e74c3c;
        `}>
        <Slide3 />
      </Slide>,
      <Slide key='4' css={css`
        background-color: #2ecc71;
        `}>
        <Slide4 />
      </Slide>,
      <Slide key='5' css={css`
        background-color: #9b59b6;
        `}>
        <Slide5 />
      </Slide>
    ];

    const fullPageOptions = {
      scrollSensitivity: 0,
      touchSensitivity: 0,
      scrollSpeed: 500,
      hideScrollBars: true,
      enableArrowKeys: true
    };
    fullPageOptions.slides = slides;

    return (
      <div>
        <Helmet
          title="Curriculum Vitae"
          script={[
            {
              defer: true,
              src: 'https://use.fontawesome.com/releases/v5.0.6/js/all.js'
            }
          ]}
          meta={[
            {
              name: 'description',
              content:
                'My curriculum vitae which contains my work experience, achievements, projects and other things related to my computer science background.'
            }
          ]}
        />
        <Fullpage {...fullPageOptions} />
      </div>
    );
  }
}

export default CV;
