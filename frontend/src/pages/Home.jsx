import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Products from '../components/Products';
import PromoSection from '../components/PromoSection';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />  
      <PromoSection />
      <Footer />  
    </>
  )
}

export default Home
