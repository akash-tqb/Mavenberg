
import Hero from "@/sections/homepage/hero";
import Products from "@/sections/homepage/products";
import Services from "@/sections/homepage/services";
import WhyUs from "@/sections/homepage/whyUs";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Mavenberg Innovations | Digitalize your buisness with our IT solutions</title>
      <meta name="description" content="Weave your digital DNA with our transformative solutions. Digitize your operations, streamline processes, and unlock growth opportunities with cutting-edge technology. Discover how our expertise can drive your digital success." />
    </Head>
    <main className="bg-maven-bg overflow-hidden">
        <Hero />
        <Products />
        <Services />
        <WhyUs />
    </main>
    </>
    
  );
}
