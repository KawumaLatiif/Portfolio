'use client';
import {useEffect,useState} from 'react';
import {Moon,Sun} from 'lucide-react';
export default function ThemeToggle(){
 const [isDark,setIsDark]=useState(false);
 useEffect(()=>{let dark=window.matchMedia('(prefers-color-scheme: dark)').matches;try{const saved=localStorage.getItem('kawuma-theme');if(saved)dark=saved==='dark';}catch{}document.documentElement.classList.toggle('dark',dark);setIsDark(dark);},[]);
 function toggle(){const dark=!isDark;document.documentElement.classList.toggle('dark',dark);setIsDark(dark);try{localStorage.setItem('kawuma-theme',dark?'dark':'light');}catch{}}
 return <button onClick={toggle} className="p-3 rounded-lg bg-gray-100 text-primary-800 border border-gray-300" aria-label={isDark?'Switch to light mode':'Switch to dark mode'} aria-pressed={isDark}>{isDark?<Sun size={20}/>:<Moon size={20}/>}</button>;
}
