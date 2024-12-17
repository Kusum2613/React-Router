import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import Contact from './pages/Contact'
import { Route,Routes } from 'react-router-dom'
import ContactLayout from './layout/ContactLayout'
import Contactinfo from './components/Contactinfo'
import ComponentForm from './components/ComponentForm'
import NotFound from './components/NotFound'
import JobsLayout from './layout/JobsLayout'
import Jobs, { JobsLoader } from './pages/Jobs'
import JobDetail from './components/JobDetail'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='container'>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Product/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<ContactLayout/>}/>
      <Route path='/info' element={<Contactinfo/>}/>
      <Route path='/form' element={<ComponentForm/>}/>
      <Route path="/jobs" element={<JobsLayout />}>
            <Route index element={<Jobs />} />
          </Route>
      <Route path=':id' element={<JobDetail/>}/>
      <Route path="*" element={<NotFound/>}/>
      
      </Routes>
      </div>
      
    </div>
  )
}

export default App
