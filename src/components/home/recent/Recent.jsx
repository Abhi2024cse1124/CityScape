import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='Check out our latest property listing! Discover a variety of homes, apartments, and commercial spaces available for sale or rent. Dont miss out on your chance to find your dream property today!' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
