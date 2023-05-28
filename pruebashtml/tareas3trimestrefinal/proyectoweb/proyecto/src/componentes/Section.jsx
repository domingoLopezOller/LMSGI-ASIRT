import React from 'react'
import './Section.css'
import MyCard from './MyCard'

const Section = () => {
  return (
    <section>
        <MyCard color="naranja  " />
        <MyCard color="verde" />
        <MyCard color="azul" />
    </section>
  )
}

export default Section