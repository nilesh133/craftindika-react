import React from 'react'

const BlogHero = ({heroImg}) => {
    console.log(heroImg)
  return (
    <div>
      <img src = {heroImg} style = {{width: "100%", height: "400px", objectFit: "cover"}}/>
    </div>
  )
}

export default BlogHero;
