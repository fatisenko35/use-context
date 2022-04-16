import React from 'react'
import Button from './Button'
import Header from './Header'
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import Profile from './Profile'

const Container = () => {
    const {theme} = useContext(ThemeContext)
    console.log(theme)
  return (
    <div className={`App ${theme}`}>
        <Header />
        <hr/>
        <Button />
        <Profile />
    </div>
  )
}

export default Container