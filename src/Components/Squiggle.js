import React from 'react'
import '../Styles/Squiggles.css'

export default function Squiggle() {
  return (
      <>
       <div className="squiggles">
                <button id="squiggle-button">Squiggles</button>
                <div id="squiggle-items">
                    <span>Check out ‘Candidly NITR’ podcast on Spotify, Google Podcasts & Apple Podcasts</span>
                    <span>Spotify: <a href="#0">http://bit.ly/Spotify%5FCN</a></span>
                    <span>Google Podcasts: <a href="#0">http://bit.ly/GooglePodcast%5FCN </a></span>
                    <span>Apple Podcasts: <a href="#0">http://bit.ly/ApplePodcasts%5FCN</a></span>
                    <span>Latest Youtube video (Freshers Video 2021): <a href="#0">https://youtu.be/O%5FxMd9qLC2U</a></span>
                </div>
        </div>
    </>
  )
}
