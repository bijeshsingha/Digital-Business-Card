import React from "react"

export default function Info() {
    return (
        <div className="info-section">
            <img src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"  alt="the-rock" className="rock-image" />
            <h2 className="info name">Dwayne The Rock</h2>
            <p className="info desig">Frontend Developer</p>
            <p className="info website"><small>dwayne-the-rock.website</small></p>
            <div className="contact">
                <button className="email-btn" ><img src="/images/email-icon.svg" />Email</button>
                <button className="l-btn" ><img src="/images/linkedIn-icon.svg" />LinkedIn</button>
            </div>
        </div>
    )
}
