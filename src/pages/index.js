import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/Navbar';
import Main from '@/components/Main';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import About from '@/components/About';
import Skills from '@/components/Skills';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>John Chacpi | Front-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Main />
        <About />
        <Skills />
      </main>
    </>
  )
}
