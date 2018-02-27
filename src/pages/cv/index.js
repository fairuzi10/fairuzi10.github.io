import React from 'react'
import { SectionsContainer, Section, Header } from 'react-fullpage'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import foto from './asset/foto.jpg'
import toki_logo from './asset/toki-logo.png'
import f10web from './asset/f10web.png'
import './style.css'

const ChildWrapper = styled.div`
  text-align: center;
  flex: 1;
`

const Wrapper = ({ color, children }) => (
  <Section color={color}>
    <div className="container d-flex justify-content-center align-items-center">
      <ChildWrapper>
        {children}
      </ChildWrapper>
    </div>
  </Section>
)

class CV extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
    }
  }

  render() {
    let options = {
      sectionclassName:     'section',
      anchors:              ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour', 'sectionFive'],
      scrollBar:            false,
      navigation:           true,
      verticalAlign:        true,
      sectionPaddingTop:    '50px',
      sectionPaddingBottom: '50px',
      arrowNavigation:      true,
      delay:                1000,
      scrollCallback: (states) => this.setState({current: states.activeSection}),
    };

    const {current} = this.state

    return (
      <div>
        <Helmet
          title='Fairuzi10 | CV'
          script={[
              { defer: true, src: 'https://use.fontawesome.com/releases/v5.0.6/js/all.js'},
          ]}
          meta={[
            { name: 'description', content: 'Curriculum Vitae Muhammad Fairuzi Teguh yang difokuskan \
ke bidang ilmu komputer.' }
          ]}
        />
        <SectionsContainer {...options} activeSection={current}>
          <Wrapper color="#3498db">
            <h1 className="display-4">Hello!</h1>
            <img className="img-responsive" id="profpic" src={foto} />
            <br /><br />
            <h3>I am</h3>
            <h1><b>Muhammad Fairuzi Teguh</b></h1>
            <h3>A first year computer science student who loves to code</h3>
          </Wrapper>
          <Wrapper color="#f1c40f">
            <i className="fas fa-graduation-cap fa-3x"></i>
            <h1 className="display-4">Educations</h1>
            <h4>Computer Science - Universitas Indonesia</h4>
            <h6>2017 - 2021 (Expected)</h6>
            <h6>Current GPA: 3.79</h6>
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
          <Wrapper color="#e74c3c">
            <i className="fas fa-trophy fa-3x"></i>
            <h1 className="display-4">Achievements</h1>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="j-red">
                  <h5><b>Fourth place at DKI Jakarta Mathematics Competition</b></h5>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="j-red">
                  <h5><b>Bronze medal at National Science Olympiad 2016</b></h5>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="j-red">
                  <h5><b>Bronze medal at 1st International Olympiad of Metropolises</b></h5>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="j-red">
                    <h5><b>Top 16 Indonesian Computing Olympiad Team 2017</b></h5>
                </div>
              </div>
            </div>
          </Wrapper>
          <Wrapper color="#2ecc71">
            <i className="fas fa-code fa-3x"></i>
            <h1 className="display-4">Projects</h1>
            <div className="row justify-content-center">
              <div className="text-left col-10 col-md-8">
                <div className="row j-green">
                  <div className="col-12 col-lg-2 text-center">
                    <img src={f10web} />
                  </div>
                  <div className="col">
                    <a href="http://fairuzi10.github.io" className="proj-title">fairuzi10.github.io</a><br />
                    My personal website built with GatsbyJS (React). In development for using Djago REST backend.
                  </div>
                </div>
                <div className="row j-green">
                  <div className="col-12 col-lg-2 text-center">
                    <img src={toki_logo} />
                  </div>
                  <div className="col">
                    <a href="http://olimpiade-komputer.ia-toki.org" className="proj-title">olimpiade-komputer.ia-toki.org</a><br />
                    A website built with Jekyll containing resources for learning informatics olympiad. Focused on SEO and analytics.
                  </div>
                </div>
              </div>
              <h5>And many other projects mainly related to competitive programming</h5>
            </div>
          </Wrapper>
          <Wrapper color="#9b59b6">
            <i className="fas fa-address-book fa-3x"></i>
            <h1 className="display-4">Accounts</h1>
            <h5>Want to know more about me?</h5>
            <a className="socmed" href="https://www.facebook.com/profile.php?id=100008425810381"><i className="fab fa-facebook-square fa-3x"></i></a>
            <a className="socmed" href="https://www.linkedin.com/in/m-fairuzi-teguh/"><i className="fab fa-linkedin fa-3x"></i></a>
            <a className="socmed" href="https://github.com/fairuzi10"><i className="fab fa-github-square fa-3x"></i></a>
            <a className="socmed" href="/"><i className="fab fa-chrome fa-3x"></i></a>
          </Wrapper>
        </SectionsContainer>
      </div>
    );
  }
};

export default CV;