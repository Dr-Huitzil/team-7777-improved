import { Link } from 'gatsby'
import React from 'react'
{/* <Link to="mailto:ghsseptobots7777@gmail.com?subject=Septobots,%20Roll%20Out&body=Hey%20there%20Septobots,%20"></Link> */}

export default function SubPage() {
  return (
<section className="contactSection">
<div className="contain" id="contactUs">

<div className="wrapper">
  <div className="contacts">
    <h3>Find Us</h3>
    <ul>
      <li>Greenfield High School</li>
      <li>205 S. El Camino Real</li>
      <li>Greenfield, CA 93927</li>
    </ul>
    <br/>
    <h3>Email Us</h3>
    <ul>
      <li>ghsseptobots7777@gmail.com</li>
    </ul>
  </div>

  <div className="form">
    <h3>Send us a message</h3>
    <form method="POST" action="https://getform.io/f/cdace237-195c-4846-b3c0-c93683c6f0f3">
      <p>
        <input type="text" placeholder='First Name' name="first_Name"/>
      </p>
      <p>
        <input type="text" placeholder='Last Name' name="last_Name"/>
      </p>
      <p>
        <input type="text" placeholder='Phone Number' name="phone"/>
      </p>
      <p>
        <input type="text" placeholder='Email Address' name="email"/>
      </p>
      <p className='full-width'>
        <textarea name="message" id="" cols="30" rows="7" placeholder='Write Your Message'></textarea>
      </p>
      <p className='full-width'>
        <button>Send</button>
      </p>
    </form>
  </div>
</div>
</div>
</section>
  )
}
