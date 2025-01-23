import Image from 'next/image'
import { Ubuntu } from 'next/font/google'

export const ubuntu = Ubuntu({
  weight: ['400', '500'], // Specify font weights
  subsets: ['latin'], // Specify subsets
  style: ['normal'], // Include normal styles only
  variable: '--font-ubuntu', // Optional CSS variable

})

function Hero() {


  return (
    <main className='w-full flex justify-between items-center sm:px-72 sm:py-44 py-20 sm:flex-row flex-col gap-5'>
      {/* Wrapper div to apply ref */}
      <div >
        <Image
          src={'/subodh.jpg'}
          alt='Subodh Ravidas'
          width={250}
          height={250}
          className='rounded-full'
          // loading='lazy'
        />
      </div>
      <div className='flex justify-center items-center flex-col gap-1'>
        <p className='text-sm text-zinc-500'>Hello, I&apos;m</p>
        <h1 className={`sm:text-5xl text-4xl font-semibold tracking-widest ${ubuntu.className}`}>Subodh Ravidas</h1>
        <p className='text-zinc-500'>Full Stack Developer</p>
        <div className='flex space-x-4 mt-4'>
          <button className="p-2 px-5 rounded-full border text-normal" >Download CV</button>
          <button className="p-2 px-5 rounded-full dark:bg-white bg-black dark:text-black text-white text-normal" >Contact info</button>
        </div>
      </div>
    </main>
  )
}

export default Hero
