import React from 'react'
import { Link } from 'gatsby'
import appleLogo from '../components/img/appleLogo.png'

export default function mainPage() {
  return (
    <section className="mainPage">
      <div className="main-grid">
        <div className="center" >
          <h2>Come along and CHARGE FORWARD
            <br/>
            With The Septobots</h2>
          <p>We are FRC Team #7777, The Septobots, a non-profit community FIRST Robotics Competition team of high-school students from the Heart of The Salinas Valley</p>
          <br/>
          <p>As students at Greenfield High School, we are committed to building a brighter future for ourselves and our community. 
            One way we have chosen to do this is by participating in the FIRST Robotics Competition (FRC). 
            Through this program, we have gained valuable knowledge and skills in robotics, as well as the opportunity to work collaboratively towards a shared goal. 
            In addition to the technical skills and teamwork that we have developed through FRC, we have also learned the importance of perseverance and problem-solving. 
            The challenges that we have faced during the competition have taught us to approach problems with a positive attitude and to never give up. 
            These are valuable lessons that we can carry with us beyond our time in FRC and into our future careers and personal lives
            We are grateful for the chance to be a part of such a meaningful and enriching experience.</p>
          <br/>
          <Link to="https://team7777.com/about/"><button type="button" className="learnMore"> Learn more about our team </button></Link>
        </div>
      </div>
      <div className="sub-grid">
        <div className="left" >
          <h2>Current Events</h2>
          <p>January - Build Season Begins</p>
        </div>
        <div className="right" >
          <h2>Current Sponsors</h2>
          <img src={appleLogo} alt="Apple Logo" className="appleLogo" />
          <p>Apple</p>
        </div>
      </div>
    </section>
  )
}
