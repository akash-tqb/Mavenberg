import CareerCards from "@/sections/careerspage/career-cards";
import CarrersHero from "@/sections/careerspage/careers-hero";
import CareersPerks from "@/sections/careerspage/careers-perks";
import WorkCulture from "@/sections/careerspage/work-culture";
import Head from "next/head";

export default function careers() {
  return (
    <>
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Careers| Join Our Dynamic Team</title>
      <meta name="description" content="Be at the forfront of digital transformation and help build one of a kind products. Join us!" />
    </Head>
      <CarrersHero />
      <WorkCulture />
      <CareersPerks/>
      <CareerCards />
    </>
  );
}
