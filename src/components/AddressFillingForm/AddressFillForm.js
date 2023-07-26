import React from 'react'
import Axios from 'axios'
export default function AddressFillForm() {
  return (
    <>
    <form>
      <h1>Material Design Contact Form with Validation</h1>
      <input placeholder="Name" type="text" defaultValue="" required="" />
      <input
        placeholder="Email address"
        type="email"
        onblur="this.setAttribute('value', this.value);"
        defaultValue=""
        required=""
      />
      <span className="validation-text">Please enter a valid email address.</span>
      <input placeholder="Location" type="text" defaultValue="" required="" />
      <div className="flex">
        <textarea placeholder="Message" rows={1} required="" defaultValue={""} />
      </div>
      <button>Send</button>
    </form>
    <a href="https://twitter.com/mildrenben" target="_blank">
      <i className="fa fa-twitter" />
      Follow Me
    </a>
    <link
      rel="stylesheet"
      href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:400"
      rel="stylesheet"
      type="text/css"
    />
  </>
  
  )
}
