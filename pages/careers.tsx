import CareerCards from "@/sections/careerspage/career-cards";
import CarrersHero from "@/sections/careerspage/careers-hero";
import CareersPerks from "@/sections/careerspage/careers-perks";
import WorkCulture from "@/sections/careerspage/work-culture";

export default function careers() {
  return (
    <>
      <CarrersHero />
      <WorkCulture />
      <CareersPerks/>
      <CareerCards />
    </>
  );
}
