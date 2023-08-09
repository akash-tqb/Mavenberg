import AboutUsHero from "@/sections/aboutUs/aboutus-hero";
import Location from "@/sections/aboutUs/locations";
import OurTeam from "@/sections/aboutUs/ourteam";
import TimeLine from "@/sections/aboutUs/timeline";
import Values from "@/sections/aboutUs/values";
export default function AboutUs() {
  return (
    <>
      <AboutUsHero />
      <TimeLine />
      <Values />
      <Location/>
      {/* <OurTeam/> */}
    </>
  );
}
