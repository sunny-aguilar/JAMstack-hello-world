import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hello World!</h1>
    <p>My name is Sunny.</p>
    <p>I'm currently studying computer science at OSU. Web development has alway been a hobby of mine and I'm taking it to the next level =D.</p>
    <p>My current studies have me focused on C++ and Python which has helped my understanding of web technologies and computers overall.</p>
    <p>I'm also currently working on FCC's front-end certificate when I can get a break from school since school can be overwhelming!</p>
    <p>Web technologies I have worked with:</p>
    <ul>
      <li>JavaScript</li>
      <li>jQuery</li>
      <li>React</li>
      <li>CSS3</li>
      <li>HTML5</li>
      <li>NPM</li>
      <li>Git/Github</li>
      <li>PHP</li>
      <li>MySQL</li>
      <li>AJAX</li>
      <li>Python</li>
    </ul>
    <Link to="/page-2/">Next Page</Link>
  </div>
)

export default IndexPage
