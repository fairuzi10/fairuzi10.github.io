import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Wrapper from '../../../components/wrapper'
import axios from 'axios'
import loader from './asset/loader.svg'
import loaderBig from './asset/loader-big.svg'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import Dotdotdot from 'react-dotdotdot'
import Linkify from 'react-linkify'
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
  Alert,
  Tooltip,
} from 'reactstrap'

const MessageContainer = styled.div`
  background-color: #f8f9fa;
  padding: 1rem;
  margin: 1rem 0;
  box-shadow: 0 8px 6px -6px #777;
  overflow-wrap: break-word;
`

const StyledLink = styled.span`
  color: #777;
  cursor: pointer;
  margin: 0 0.5rem;
  pointer-events: ${props => props.disabled? 'none': 'auto'};
`

// begin of utility that are used across component
const myAxios = axios.create({baseURL: 'https://fairuzi10.pythonanywhere.com/saved-messages/'})

function handlePasswordChange(event) {
  this.setState({
    password: event.target.value
  })
}
// end of utility

class FormPesan extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      valid: null,
      text: '',
      password: '',
      loading: false,
    }

    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePasswordChange = handlePasswordChange.bind(this)
  }

  handleTextChange(event) {
    this.setState({
      valid: event.target.value.length > 0,
      text: event.target.value,
    })
  }

  handleSubmit(event) {
    this.setState({
      loading: true,
    })
    let data = { 
      text: this.state.text
    }
    if (this.state.password !== '') {
      data.password = this.state.password
    }
    myAxios.post('create/', data)
      .then(() => {
        this.props.searchMessage(data)
      })
      .then(() => {
        this.setState({
          loading: false,
          valid: null,
          text: '',
          password: '',
          passwordMask: '',
        })
      })
      .catch(this.props.alertError)
    event.preventDefault()
  }
  
  render() {
    return (
      <div className='mt-2'>
        <h3 className="text-center">Simpan Pesan</h3>
        <Form onSubmit={ this.handleSubmit } autoComplete="off">
          <FormGroup>
            <Label>Pesan Anda</Label>
            <Input type="textarea" name="text" rows="6" 
                onChange={this.handleTextChange} onBlur={this.handleTextChange} 
                valid={this.state.valid}
                value={this.state.text}/>
              { !this.state.valid &&
                <FormFeedback>Pesan tidak boleh kosong!</FormFeedback>
              }
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input type="password" name="password" placeholder="Opsional" 
              onChange={this.handlePasswordChange}
              value={this.state.password}/>
          </FormGroup>
            <Button color='primary' disabled={!this.state.valid || this.state.loading}>
              Kirim {this.state.loading && <img src={loader} />}</Button>
        </Form>
      </div>
    )
  }
}

class CariPesan extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
      loading: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePasswordChange = handlePasswordChange.bind(this)
  }

  handleSubmit(event) {
    this.setState({
      loading: true,
    })
    let data = {}
    if (this.state.password !== '') {
      data.password = this.state.password
    }
    this.props.searchMessage(data)
      .then(() => {
        this.setState({
          loading: false,
          password: '',
          passwordMask: '',
        })
      })
      .catch(this.alertError)
    event.preventDefault()
  }

  render() {
    return (
      <div className='mt-3'>
        <h3 className="text-center">Cari Pesan</h3>
        <Form onSubmit={this.handleSubmit} autoComplete="off">
          <FormGroup>
            <Label>Password</Label>
            <Input type="password" name="password" 
              value={this.state.password} 
              onChange={this.handlePasswordChange} />
          </FormGroup>
          <Button color='primary' disabled={this.state.loading}>
            Cari {this.state.loading && <img src={loader} />}</Button>
        </Form>
      </div>
    )
  }
}

class DeleteLink extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
    }

    this.deleteMessage = this.deleteMessage.bind(this)
    this.deleteError = this.deleteError.bind(this)
  }

  deleteError(error, data) {
    let pesan = null
    if (error.response.status === 404) {
      this.props.searchMessage(data)
      this.props.alertError('Pesan telah dihapus sebelumnya. Daftar pesan telah diperbarui.')
    }
    else {
      this.props.alertError()
    }
  }

  deleteMessage() {
    this.setState({
      loading: true,
    })
    let data = {}
    if (this.props.password !== '') {
      data.password = this.props.password
    }
    myAxios.delete(`delete/${this.props.pk}/`, {data: data})
      .then(() => {
        this.props.searchMessage(data)
      })
      .then(() => {
        this.setState({
          loading: false,
        })
      })
      .catch((error) => {this.deleteError(error, data)})
  }
  
  render() {
    return (
      <StyledLink onClick={this.deleteMessage}
          disabled={this.state.loading}>
        hapus
      </StyledLink>
    )
  }
}

class CopyLink extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false,
    }

    this.toggle = this.toggle.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  toggle() {
    this.setState({
      clicked: !this.state.clicked,
    })
  }

  handleClick(event) {
    this.toggle()
    setTimeout(this.toggle, 500)
  }

  render() {
    return (
      <span>
        <CopyToClipboard text={this.props.message.text} 
            id={`salin-${this.props.message.pk}`} >
          <StyledLink onClick={this.handleClick}>
            salin
          </StyledLink>
        </CopyToClipboard>
        <Tooltip  placement="bottom" isOpen={this.state.clicked} 
            target={`salin-${this.props.message.pk}`} >
          copied!
        </Tooltip>
      </span>
    )
  }
}

class ListPesan extends React.Component {
  render() {
    const messages = this.props.messages
    const content = messages? (
      messages.map((message) => (
        <MessageContainer key={message.pk}>
          <div className='text-right'>
            <DeleteLink pk={message.pk} 
              searchMessage={this.props.searchMessage}
              password={this.props.password}
              alertError={this.props.alertError} />
            <CopyLink message={message} />
          </div>
          <Linkify>
            <Dotdotdot clamp={8}>
              {message.text}
            </Dotdotdot>
          </Linkify>
        </MessageContainer>
      ))
    ): (
      <div className='text-center'>
        <img src={loaderBig} />
      </div> 
    )
    return (
      <div className='mt-3'>
        <h3 className="text-center">Pesan Tersimpan</h3>
        {content}
      </div>
    )
  }
}

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
      messages: null,
      error: '',
    }

    this.searchMessage = this.searchMessage.bind(this)
    this.alertError = this.alertError.bind(this)
    this.ignoreError = this.ignoreError.bind(this)
  }

  searchMessage(data) {
    // get data from server and save it (also password)
    return new Promise(
      function (resolve) {
        myAxios.post('', data)
          .then((response) => {
            this.setState({
              messages: response.data,
              password: data.password
            })
          })
          .then(resolve)
          .catch((error) => {
            if (error.response.status === 503) this.searchMessage(data)
            else this.alertError(error)
          })
      }.bind(this)
    )
  }

  alertError(error, pesan) {
    const message = pesan || 'Maaf, terjadi kesalahan. Silakan beri tahu admin agar segera diperbaiki.'
    console.log(message)
    this.setState({
      error: message,
    })
  }

  ignoreError() {
    this.setState({
      error: '',
    })
  }

  componentDidMount() {
    // load unprotected message on initial load
    this.searchMessage({})
  }

  render() {
    return (
      <Wrapper>
        <Helmet
          title='Saved Messages'
          meta={[
            { name: 'description', content: 'Kirim pesan untuk dibaca di komputer lain' },
          ]}
        />
        <div className='text-center'>
          <h1 className='display-4'>Saved Messages</h1>
          <div className="text-muted">
            Kirim pesanmu untuk dibaca di komputer lain nanti. <br />
            Contoh: https://www.ideone.com/xjX4Tx, https://docs.google.com/xXxXx...<br />
          </div>
          <br />
        </div>
        <div>
      </div>
        <Row>
          {
            this.state.error !== '' && (
              <Col sm="12">
                <Alert color="danger" isOpen={this.state.error !== ''} toggle={this.ignoreError}>
                  {this.state.error}
                </Alert>
              </Col>
            )
          }
          <Col xs="12" lg="5">
            <FormPesan searchMessage={this.searchMessage}
              alertError={this.alertError} />
          </Col>
          <Col xs="12" lg="7">
            <CariPesan searchMessage={this.searchMessage}
              alertError={this.alertError} />
            <ListPesan messages={this.state.messages} 
              searchMessage={this.searchMessage}
              password={this.state.password}
              alertError={this.alertError} />
          </Col>
        </Row>
      </Wrapper>
    )
  }
}
export default Index