import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
    const [showAmazing, setShowAmazing] = useState(false);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setShowAmazing(prevShowAmazing => !prevShowAmazing);
      }, 2500); // Change text every 5 seconds
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex justify-center lg:hidden z-0 mb-6">
            <div className="relative">
            <p className="text-lg tracking-wider text-maven-orange">
              Happy <span className="text-maven-white">Independence</span>{" "}
              <span className="text-[#22c55e]">Day</span>
            </p>
            <Image
              src="/independenceday.svg"
              width={200}
              height={100}
              className="absolute top-[-80%] opacity-50"
              alt="navimage"
            />
            <Image
            src="/flag.gif"
            width={128}
            height={88}
            className="absolute h-10 w-14 right-[-25%] -rotate-6 top-[-60%] opacity-60"
            alt="nav-flag"/>
            </div>
                      </div>
      <div className="flex flex-col gap-12 lg:gap-0 justify-between lg:flex-row">
        <div className="lg:w-1/2 flex flex-col gap-12 items-center">
          <h1 className="mb-10 font-sans text-xl text-center font-bold text-maven-white sm:text-4xl leading-8">
            Digitize Your Business with Our{' '}
            <span
          className={`inline-block bg-clip-text  ${
            showAmazing ? 'bg-gradient-to-r from-maven-blue to-maven-orange' : 'bg-gradient-to-r from-maven-orange to-maven-blue'
          } text-transparent transition-all duration-100`}
        >            {showAmazing ? 'Disruptive Solutions' : 'Transformative Innovations'}
            </span>
          </h1>
          <div className="h-96 w-96 hidden lg:block">
            <Image
              src="/heroImage.svg"
              alt="heroImage"
              width={400}
              height={200}
            />
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col items-center justify-center">
        <div>
          <div className="grid grid-cols-4">
            <div className="flex flex-col col-span-1 justify-center items-center">
              <div className="rounded-full border-2 flex items-center justify-center w-12 h-12 border-maven-white">
                <div className="rounded-full w-7 h-7 bg-maven-blue"></div>
              </div>
              <div className="h-10 w-[2px] bg-maven-white"></div>
            </div>
            <div className="col-span-3">
              <h1 className="text-maven-white text-xl font-bold pt-2">
                Weaving Your{" "}
                <span className="text-maven-blue text-transparent bg-clip-text bg-gradient-to-r from-maven-blue to-maven-orange">Digital DNA</span>
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="flex flex-col col-span-1 justify-center items-center">
              <div className="rounded-full border-4 flex items-center justify-center w-10 h-10 border-maven-orange"></div>
              <div className="h-8 w-[2px] bg-maven-white"></div>
            </div>
            <div className="flex flex-col col-span-3 space-y-4">
              <h1 className="text-maven-orange md:text-xl text-lg tracking-wide font-bold">
                PLM Process Consulting
              </h1>
              {/* <h4 className="text-maven-white text-sm">
                We perform detailed analysis and view on product development
                process and scope the gaps where our expertise can aid in your
                needs.{" "}
              </h4> */}
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="flex flex-col col-span-1 justify-center items-center">
              <div className="rounded-full border-4 flex items-center justify-center w-10 h-10 border-maven-blue"></div>
              <div className="h-8 w-[2px] bg-maven-white"></div>
            </div>
            <div className="flex flex-col col-span-3 space-y-4">
              <h1 className="text-maven-blue md:text-xl text-lg tracking-wide font-bold">
                PLM Implementation
              </h1>
              {/* <h4 className="text-maven-white text-sm">
                We provide best in class implementation like single click
                automations, custom work flow handlers and we ensure that our
                customizations are as independent as possible.{" "}
              </h4> */}
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="flex flex-col col-span-1 justify-center items-center">
              <div className="rounded-full border-4 flex items-center justify-center w-10 h-10 border-maven-orange"></div>
              <div className="h-8 w-[2px] bg-maven-white"></div>
            </div>
            <div className="flex flex-col col-span-3 space-y-4">
              <h1 className="text-maven-orange md:text-xl text-lg tracking-wide font-bold">
                Data Migration
              </h1>
              {/* <h4 className="text-maven-white text-sm">
                We assure hassle free migration of existing heterogeneous CAD
                and PLM systems into a coherent system environments.
              </h4> */}
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="flex flex-col col-span-1 justify-center items-center">
              <div className="rounded-full border-4 flex items-center justify-center w-10 h-10 border-maven-blue"></div>
              <div className="h-8 w-[2px] bg-maven-white"></div>
            </div>
            <div className="flex flex-col col-span-3 space-y-4">
              <h1 className="text-maven-blue md:text-xl text-lg tracking-wide font-bold">
                Enterprise Integration
              </h1>
              {/* <h4 className="text-maven-white text-sm">
                We seamlessly integrate and enable application-independent data
                with other enterprise application to ensure timely information
                exchange with users.{" "}
              </h4> */}
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="flex flex-col col-span-1 justify-center items-center">
              <div className="rounded-full border-4 flex items-center justify-center w-10 h-10 border-maven-orange"></div>
              <div className="h-8 w-[2px] bg-maven-white"></div>
            </div>
            <div className="flex flex-col col-span-3 space-y-4">
              <h1 className="text-maven-orange md:text-xl text-lg tracking-wide font-bold">
                PLM Managed Services
              </h1>
              {/* <h4 className="text-maven-white text-sm">
                We ensure digital connectivity across different systems from
                architectural design to installation and deployment.
              </h4> */}
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="flex flex-col col-span-1 items-center">
              <div className="rounded-full border-4 flex justify-center w-10 h-10 border-maven-blue"></div>
              <div className="h-8 w-[2px] bg-maven-white"></div>
            </div>
            <div className="flex flex-col col-span-3 space-y-4">
              <h1 className="text-maven-blue md:text-xl text-lg tracking-wide font-bold">
                Engineering Automation
              </h1>
              {/* <h4 className="text-maven-white text-sm">
                Our expertise in engineering solutions enable you to leveraging
                us in various domains like CAD data automations and
                customization , manufacturing engineering simulations and
                engineering analysis.
              </h4> */}
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="flex flex-col col-span-1 items-center">
              <div className="rounded-full border-4 flex justify-center w-10 h-10 border-maven-orange"></div>
            </div>
            <div className="flex flex-col col-span-3 space-y-4">
              <h1 className="text-maven-orange md:text-xl text-lg tracking-wide font-bold">
               Simulation Services
              </h1>
              {/* <h4 className="text-maven-white text-sm">
                Our expertise in engineering solutions enable you to leveraging
                us in various domains like CAD data automations and
                customization , manufacturing engineering simulations and
                engineering analysis.
              </h4> */}
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
