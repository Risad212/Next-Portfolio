import Layouts from '../Components/Layouts/Layouts'
import '../styles/globals.css'
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
// own css files here

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </>
  )
}

export default MyApp
