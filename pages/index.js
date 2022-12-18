import Head from "next/head";
import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";
import Portfolio from "../Components/portfolio/Portfolio";
import Service from "../Components/service/Service";

export default function Home() {
  return (
    <div>
        <Head>
            <title>NEXT PORTFOLIO</title>
        </Head>
       <Banner />
       <About />
       <Service />
       <Portfolio />
    </div>
  )
}
