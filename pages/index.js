import Head from "next/head";
import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";

export default function Home() {
  return (
    <div>
        <Head>
            <title>NEXT PORTFOLIO</title>
        </Head>
       <Banner />
       <About />
    </div>
  )
}
