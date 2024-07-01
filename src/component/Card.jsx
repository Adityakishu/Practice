import React from 'react';
import './Card.css';
import abc from '../Images/textanalyze1.png';
import abcd from '../Images/calculator.png';
import netfliximage from '../Images/Netflix-logo.png';
import youtube from '../Images/youtube.jpg';

export default function Card() {
  return (
    <>
      <div className="container me-2">
        <div className="row">
          <div className="col-md-4">
            <div className="card custom-card" style={{width: '18rem'}}>
              <img src={abc} className="card-img-top custom-card-img" alt="Card image 1"/>
              <div className="card-body">
                <h5 className="card-title">Card title 1</h5>
                <p className="card-text">Analyze your text here.</p>
                <a href="/Textanalyzer" className="btn btn-primary">Textanalyzer</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card custom-card" style={{width: '18rem'}}>
              <img src={abcd} className="card-img-top custom-card-img" alt="Card image 2"/>
              <div className="card-body">
                <h5 className="card-title">Calculator</h5>
                <p className="card-text">Calculate here.</p>
                <a href="/Calculator" className="btn btn-primary">Calculator</a>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="card custom-card" style={{width: '18rem'}}>
              <img src={netfliximage} className="card-img-top custom-card-img" alt="Card image 3"/>
              <div className="card-body">
                <h5 className="card-title">Netflix</h5>
                <p className="card-text">Watch unlimited movies, TV shows and more content</p>
                <a href="/Netflix" className="btn btn-primary">Go</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card custom-card" style={{width: '18rem'}}>
              <img src={youtube} className="card-img-top custom-card-img" alt="Card image 4"/>
              <div className="card-body">
                <h5 className="card-title">YouTube</h5>
                <p className="card-text">Watch your favorite video and don't forget to subscribe my channel.</p>
                <a href="https://www.youtube.com/" className="btn btn-primary">Go</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card custom-card" style={{width: '18rem'}}>
              <img src="" className="card-img-top custom-card-img" alt="Card image 5"/>
              <div className="card-body">
                <h5 className="card-title">Animation</h5>
                <p className="card-text">.</p>
                <a href="/WheelAnimation" className="btn btn-primary">Go</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card custom-card" style={{width: '18rem'}}>
              <img src="" className="card-img-top custom-card-img" alt="Card image 6"/>
              <div className="card-body">
                <h5 className="card-title">Card title 6</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
