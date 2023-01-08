import React from 'react'

import { Helmet } from 'react-helmet'

import './screen-dekstop.css'

const ScreenDekstop = (props) => {
  return (
    <div className="screen-dekstop-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="screen-dekstop-screen-dekstop">
        <div className="screen-dekstop-hero-section-frame">
          <button className="screen-dekstop-hero-text-buttons">
            <div className="screen-dekstop-headline-subhead">
              <span className="screen-dekstop-text H1-WorkSans">
                <span>Discover digital art &amp; Collect NFTs</span>
              </span>
              <span className="screen-dekstop-text02 BodyText-WorkSans">
                <span>
                  NFT marketplace UI created with Anima for Figma. Collect, buy
                  and sell art from more than 20k NFT artists.
                </span>
              </span>
            </div>
            <button className="screen-dekstop-button">
              <img
                alt="RocketLaunchI1433"
                src="/playground_assets/rocketlaunchi1433-avv.svg"
                className="screen-dekstop-rocket-launch"
              />
              <span className="screen-dekstop-text04">
                <span>Get Started</span>
              </span>
            </button>
            <div className="screen-dekstop-additional-info">
              <div className="screen-dekstop-total-sale">
                <span className="screen-dekstop-text06 H4-SpaceMono">
                  <span>
                    240k+
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span className="screen-dekstop-text08">
                  <span>Total Sale</span>
                </span>
              </div>
              <div className="screen-dekstop-auctions">
                <span className="screen-dekstop-text10 H4-SpaceMono">
                  <span>100k+</span>
                </span>
                <span className="screen-dekstop-text12">
                  <span>Auctions</span>
                </span>
              </div>
              <div className="screen-dekstop-artists">
                <span className="screen-dekstop-text14 H4-SpaceMono">
                  <span>240k+</span>
                </span>
                <span className="screen-dekstop-text16">
                  <span>Artists</span>
                </span>
              </div>
            </div>
          </button>
          <div className="screen-dekstop-highlighted-n-f-t">
            <img
              alt="ImagePlaceholderI1318"
              src="/playground_assets/imageplaceholderi1318-he1g-200h.png"
              className="screen-dekstop-image-placeholder"
            />
            <div className="screen-dekstop-frame230">
              <span className="screen-dekstop-text18 H5-WorkSans">
                <span>Space Walking</span>
              </span>
              <div className="screen-dekstop-artist-card">
                <div className="screen-dekstop-avatar">
                  <div className="screen-dekstop-asset122">
                    <img
                      alt="AvatarPlaceholderI1318"
                      src="/playground_assets/avatarplaceholderi1318-mzyn-200h.png"
                      className="screen-dekstop-avatar-placeholder"
                    />
                  </div>
                </div>
                <span className="screen-dekstop-text20 Base(Body)-WorkSans">
                  <span>Animakid</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScreenDekstop
