import React from 'react'
import '../Styles/ArticlePage.css'
import Footer from './Footer'
import Squiggle from './Squiggle'

export default function ArticlePage() {
  return (
    <>
    <div className='article-page-conatiner'>
    <div className='left-container'>
      <h1>This is Article Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quasi cum rerum qui explicabo at exercitationem corporis, beatae possimus natus debitis numquam! Officia ducimus harum animi sunt incidunt corrupti facilis in autem voluptatum id, voluptates velit ab repudiandae ullam repellendus quos ad doloribus quas aut explicabo iste iusto, quam nostrum? Illum, distinctio sequi nisi quae culpa fugit facere necessitatibus doloribus iste maiores velit officiis repellendus obcaecati quibusdam laboriosam debitis voluptate iure, quis magni quisquam perspiciatis similique. Itaque ullam similique sequi voluptate animi facilis aperiam numquam, magnam, commodi consequuntur cum omnis. Quis optio provident error consequatur quos odit sunt tempora blanditiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet provident fuga nihil sequi error illo cumque ad possimus libero. Sed libero, adipisci neque voluptatum vitae modi debitis velit, consequatur, quis rerum eum ducimus officiis. Unde molestiae nobis tempore ipsa eos quis, accusantium excepturi consectetur quam doloremque voluptatibus itaque ducimus cum?
      </p>
    </div>
    <div className='right-container'></div>
    </div>
      <Squiggle/>
      <Footer/>
    </>
  )
}
