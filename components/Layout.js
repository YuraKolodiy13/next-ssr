import Link from "next/link";
import Head from "next/head";

export const Layout = ({children, title = 'Next app'}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <ul className='container'>
        <li>
          <Link href={'/'}><a>Home</a></Link>
        </li>
        <li>
          <Link href={'/about'}><a>About</a></Link>
        </li>
      </ul>
      <main className='container'>
        {children}
      </main>
    </>
  )
};