import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hello World!</h1>
    <p>My name is Sunny.</p>
    <p>I'm currently studying computer science at OSU. Web development has alway been a hobby of mine and I'm taking it to the next level =D.</p>
    <p>My current studies have me focused on C++ and Python which has helped my understanding of web technologies and computers overall.</p>
    <p>I'm also currently working on FCC's front-end certificate when I can get a break from school since it can be overwhelming!</p>
    <Link to="/page-2/">Next Page</Link>
  </div>
)

export default IndexPage
