'use client'
import Hero, { ubuntu } from '@/components/Hero/Hero';
import Loading from '@/components/Loading/Loading'
import Navbar from '@/components/Navbar/Navbar';
import { ModeToggle } from '@/components/theme/ThemeToggle'
import React, { useEffect, useState } from 'react'
import LocomotiveScroll from 'locomotive-scroll';

function Page() {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }, []);
  if (isLoading) {
    return <Loading />;
  }
 

const locomotiveScroll = new LocomotiveScroll();
console.log(locomotiveScroll)


  return (
    <div className={ubuntu.className}>
      <Navbar/>
      <Hero/>
      
      {/* <h1>Page content</h1> */}
      <ModeToggle />
    </div>
  );
}

export default Page;
