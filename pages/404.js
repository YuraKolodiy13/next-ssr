import Link from "next/link";

const ErrorPage = () => (
  <div className='container'>
    <h1>Error 404</h1>
    <Link href='/'><a>Home</a></Link>
  </div>
);

export default ErrorPage;