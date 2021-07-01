/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable react/no-unescaped-entities */
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

import gitub from "../assets/github.svg";
import gitlab from "../assets/gitlab.svg";
import discord from "../assets/discord.svg";

const Home = () => {
  const hello = ["Hello", "Hola"];
  return (
    <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="description" content="My personal portfolio" />
      <meta name="keywords" content="portfolio" />
      <meta name="author" content="Isidro Casiano" />
      <title>Isidro's Portfolio</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" />
    </Head>
      <div className={styles.maincontent}>
        <h1>{hello[Math.floor(Math.random()*hello.length)]}, I'm Isidro</h1>
        <p>Just a 19 year old programmer.</p>
      </div>
      <div className={styles.links}>
        <ul className={styles.linklist}>
          <li><Link href="https://github.com/JuanPablo2655"><a target="_blank"><Image src={gitub} /></a></Link></li>
          <li><Link href="https://gitlab.com/JuanPablo2655"><a target="_blank"><Image src={gitlab} /></a></Link></li>
          <li><Link href="https://discord.gg/kWvkjh4"><a target="_blank"><Image src={discord} /></a></Link></li>
        </ul>
      </div>
    </>
  );
};

export default Home;