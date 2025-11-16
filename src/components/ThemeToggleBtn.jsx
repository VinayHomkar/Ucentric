import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggleBtn = ({ theme, setTheme }) => {

    useEffect(()=>{
const prefersDarkMode = window.matchMedia ('(prefers-color-scheme: dark)').
matches;
setTheme (theme || (prefersDarkMode ? 'dark': 'light'))
}, [])

    useEffect(()=>{
if(theme === 'dark'){
document.documentElement.classList.add('dark')
}else{
document.documentElement.classList.remove('dark')
}
localStorage.setItem('theme', theme)
}, [theme])

  return (
    <>
<button>
{theme === 'dark' ? (
<div
          onClick={() => setTheme('light')}
          className="flex items-center justify-center px-4 py-2 rounded-full 
                     bg-gradient-to-r from-[#38b6ff] to-[#000433] 
                     animate-gradient cursor-pointer hover:scale-105 transition-all"
                       style={{
    backgroundSize: '200% 200%',
    animation: 'gradientMove 25s ease infinite', // <-- slower speed here
  }}
        >
          <img src={assets.sun_icon} className="w-6 h-6" alt="Sun Icon" />
        </div>
      ) : (
        <div
          onClick={() => setTheme('dark')}
          className="flex items-center justify-center px-4 py-2 rounded-full 
                     bg-gradient-to-r from-[#38b6ff] to-[#000433] 
                     animate-gradient cursor-pointer hover:scale-105 transition-all"
        >
          <img src={assets.moon_icon} className="w-6 h-6" alt="Moon Icon" />
        </div>
)}
</button>
</>
  )
}

export default ThemeToggleBtn