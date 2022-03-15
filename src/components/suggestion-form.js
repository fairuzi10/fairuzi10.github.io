import React, { useState } from 'react'
import { GoogleReCaptcha } from 'react-google-recaptcha-v3'

import { Card } from '../components/card'

export default props => {
  const [recaptchaToken, setRecaptchaToken] = useState('')

  return (
    <Card className="bg-grad-green-blue mx-3">
      <form
        method="POST"
        action="https://getform.io/f/7d498883-1801-4258-acb1-9d58cebf7eac"
      >
        <h4>Kotak Saran</h4>
        <div className="form-group">
          <label htmlFor="name">Nama</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Nama (opsional)"
          />
        </div>
        <div className="form-group">
          <label htmlFor="suggestion">Saran</label>
          <textarea
            className="form-control"
            id="suggestion"
            name="suggestion"
            required
            placeholder={
              props.placeholder || 'Saran konten, penyuntingan, atau apa pun'
            }
            rows={props.rows || '4'}
          />
        </div>
        <input
          type="hidden"
          id="captchaResponse"
          name="g-recaptcha-response"
          value={recaptchaToken}
        />
        <GoogleReCaptcha
          onVerify={token => {
            setRecaptchaToken(token)
          }}
        />
        <button type="submit" className="d-block ml-auto btn btn-light">
          Kirim
        </button>
      </form>
    </Card>
  )
}
