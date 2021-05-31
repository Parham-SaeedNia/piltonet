import Head from "next/head";

import ContactUs from "../components/ContactUs";
import Contributers from "../components/Contributers";
import Description from "../components/Description";
import Faq from "../components/Faq";
import { Header } from "../components/Header";
import NewsForm from "../components/NewsForm";
import Roadmap from "../components/Roadmap";
import Slogan from "../components/Slogan";
import Team from "../components/Team";

export default function Home() {
  return (
    <>
      <Head>
        <title>Piltonet</title>
        <link rel="icon" href="/" />
      </Head>
      <Header />
      <Slogan />
      <Description />
      <Roadmap />
      <Team />
      <Contributers />
      <Faq />
      <ContactUs />
      <NewsForm />
      <footer>Copyright © 2021 Piltonet - All rights reserved</footer>
    </>
  );
}
