import React from 'react'
import { useState, useEffect } from 'react';


const DarkThemeButton = () => {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        if(window.matchMedia("(prefers-color-scheme: dark").matches) {
            setTheme("dark")
        }    
    })

   useEffect(() => {
    if(theme === "dark") {
      document.documentElement.classList.add("dark")
    }
    else {
      document.documentElement.classList.remove("dark")
    }
   }, {theme})

   const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "ligth" : "dark");
   };
  return (
    <button className='bg-purple-900 p-4 text-white' onClick={handleThemeSwitch}>
        Dark Mode
    </button>
  )
}

export default DarkThemeButton