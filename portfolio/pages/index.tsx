import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <div>
        <h1>Hello, I'm Isidro</h1>
        <p>Just a 19 year old programmer.</p>
      </div>
      <div>
        <Link href="https://github.com/JuanPablo2655"><a target="_blank">GitHub</a></Link>
        <Link href="https://gitlab.com/JuanPablo2655"><a target="_blank">GitLab</a></Link>
        <Link href="https://discord.gg/kWvkjh4"><a target="_blank">Discord</a></Link>
      </div>
    </>
  )
};

export default Home;