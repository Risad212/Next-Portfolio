import Head from "next/head";
import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";
import Clients from "../Components/clients/Clients";
import Portfolio from "../Components/Portfolio/Portfolio";

export default function Home() {
  return (
    <div>
       <Banner />
       <About />
       <Portfolio />
       <Clients />
    </div>
  )
}
