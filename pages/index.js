import Head from "next/head";
import About from "../Layouts/About/About";
import Banner from "../Layouts/Banner/Banner";
import Contact from "../Layouts/contact/Contact";
import Portfolio from "../Layouts/portfolio/Portfolio";
import Service from "../Layouts/service/Service";

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
       <Contact />
    </div>
  )
}
