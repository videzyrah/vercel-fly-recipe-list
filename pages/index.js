import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <h1 className ={styles.title}>Homepage</h1>
      <Link href={'/placeholder-json/users'} >
          <a className={styles.single}>
            <h3>A list of Fake People</h3>
          </a>
      </Link>
      <p>Fetched from https://jsonplaceholder.typicode.com/</p>
      
      <Link href={'greg-recipes/recipe-list'} >
          <a className={styles.single}>
            <h3>Recipes from Gregs DjangoRestAPI</h3>
          </a>
      </Link>
      <p>These are recipes fetched from Django RestAPI on fly.io</p>
      <Image src="/images/apiFetchCode.png" alt="site logo" width={350} height={100} />
    </div>
  )
}
