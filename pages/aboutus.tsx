import AboutUsHero from "@/sections/aboutUs/aboutus-hero";
import Location from "@/sections/aboutUs/locations";
import OurTeam from "@/sections/aboutUs/ourteam";
import TimeLine from "@/sections/aboutUs/timeline";
import Values from "@/sections/aboutUs/values";
import Head from "next/head";
export default function AboutUs() {
  return (
    <>
        <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>About Us | Discover Our Inspiring Journey</title>
      <meta name="description" content="We blend experienced professionals and young talent to unify vast customer data. Specializing in PLM, integration, and digitalization, with 20+ successful partnerships." />
    </Head>
      <AboutUsHero />
      <TimeLine />
      <Values />
      <Location/>
      {/* <OurTeam/> */}
    </>
  );
}
