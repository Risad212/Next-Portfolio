import Head from "next/head";
import About from "../Layouts/About/About";
import Banner from "../Layouts/Banner/Banner";
import Contact from "../Components/contact/Contact";
import Portfolio from "../Layouts/portfolio/Portfolio";
import Service from "../Layouts/service/Service";
import Blog from "../Layouts/Blog/Blog";

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
       <Blog />
       <Contact />
    </div>
  )
}
