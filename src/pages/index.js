import Head from 'next/head'
import Image from 'next/image'

import Main from '@/components/Main';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>John Chacpi | Front-End Developer</title>
        <meta name="description" content="Personal Portfolio made by John Chacpi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
