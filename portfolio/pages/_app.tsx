/* eslint-disable jsx-a11y/alt-text */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import useDarkMode from 'use-dark-mode'
import { useEffect, useState } from 'react';
import { Switch } from '../assets/Switch';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const darkMode = useDarkMode(true);
  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  return (
    <>
      <button onClick={darkMode.value === true ? darkMode.disable : darkMode.enable}><Switch /></button>
      {isMounted && <Component {...pageProps} />}
    </>
  )
};

export default MyApp
