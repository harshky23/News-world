import React from 'react'
import Navbar from '../components/Navbar'
import Newslist from '../components/Newslist'
import {AppProvider} from '../context/AppContext'
import '../components/global.css';

export default function MainPage() {
  return (
    <>
    <AppProvider>
    <Navbar/>
    <Newslist/>
    </AppProvider>
    </>
  )
}
