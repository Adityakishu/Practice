import React from 'react'
import './Netflix.css'
import netflix_logo from '../Images/Netflix-logo.png'

export default function Netflix() {
  return (

    <>
    
    <div className="header">
     <nav>
        <img src={netflix_logo} className="logo"/>
        <div>
            <button className="language-btn">English<img src="" alt=""/></button>
            <a href="login" className="btn-link">
            <button>Sign In</button>
            </a>
        </div>
    </nav>
    <div className="header-content">
        <h1>Unlimited movies, TV shows and more</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <p>Ready to watch? Enter your email or mobile number to create or restart your membership.</p>
        <form className="email-signup">
            <input type="email" placeholder="email address" required/>
            <button type="submit">Get Started</button>
        </form>
    </div>
  </div>

  <div className="features">
    <div className="row">
        <div className="text-col">
            <h2>Enjoy on your TV</h2>
            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
        </div>
        <div className="img-col">
            <img src="./tv.png" alt=""/>
        </div>
    </div>
    <div className="row">
        <div className="img-col">
            <img src="./mobile-0819.jpg" alt=""/>
        </div>
        <div className="text-col">
            <h2>Download your shows to watch offline</h2>
            <p>Save your favourites easily and always have something to watch.</p>
        </div>
        
    </div>
    <div className="row">
        <div className="text-col">
            <h2>Watch everywhere</h2>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </div>
        <div className="img-col">
            <img src="./device-pile-in.png"/>
            <div className="video-overlay">
                <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" autoplay loop muted></video>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="img-col">
            <img src="./AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png" alt=""/>
        </div>
        <div className="text-col">
            <h2>Create profiles for kids</h2>
            <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
        </div>
    </div>
  </div>
  <div className="faq">
    <h2>Frequently asked question</h2>
    <ul className="doubt">
        <li>
            <input type="radio" name="doubt" id="first"/>
            <label for="first">What is Netflix?</label>
            <div className="answer">
                <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

                    You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
            </div>
        </li>
        <li>
            <input type="radio" name="doubt" id="second"/>
            <label for="second">How much does Netflix cost?</label>
            <div className="answer">
                <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.</p>
            </div>
        </li>
        <li>
            <input type="radio" name="doubt" id="third"/>
            <label for="third">Where can i watch</label>
            <div className="answer">
                <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                    You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
            </div>
        </li>
        <li>
            <input type="radio" name="doubt" id="four"/>
            <label for="four">How do i cancel</label>
            <div className="answer">
                <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
            </div>
        </li>
        <li>
            <input type="radio" name="doubt" id="five"/>
            <label for="five">Is Netflix is good for kids</label>
            <div className="answer">
                <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

                    Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
            </div>
        </li>
        <li>
            <input type="radio" name="doubt" id="six"/>
            <label for="six">What can I watch on netflix</label>
            <div className="answer">
                <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
            </div>
        </li>
    </ul>
    <small>Ready to watch? Enter your email or mobile number to create or restart your membership.</small>
    <form className="email-signup">
        <input type="email" placeholder="email address" required/>
        <button type="submit">Get Started</button>
    </form>
  </div>
    </>

  )
}