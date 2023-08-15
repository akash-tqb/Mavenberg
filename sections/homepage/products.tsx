import Link from "next/link";
import { useState } from "react";

export default function Products() {
  return (
    <div
      id="products"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20"
    >
      <div className="flex flex-row justify-between">
        <div className="flex flex-col mb-12">
          <h1 className="sm:text-5xl mb-6 text-3xl font-sans font-bold tracking-wide text-maven-white">
            Our <span className=" text-maven-blue">Products</span>
          </h1>
          <h3 className="text-maven-white">
            Discover and harness the potential of your data scattered across
            disparate systems using our product offerings
          </h3>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 lg:grid-rows-2 gap-8">
        <div className="xl:h-80 xl:block flex flex-col xl:overflow-hidden lg:col-span-2">
          <Link href="/products/mavendx">
            <div className="group relative mx-auto h-full w-full overflow-hidden rounded-[16px] p-[1px] transition-all duration-300 ease-in-out bg-maven-orange/40 hover:bg-gradient-to-r hover:from-maven-orange via-maven-bg to-maven-orange">
              <div className="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 lg:right-20 lg:left-20 lg:-top-80 lg:-bottom-80 bg-gradient-to-r from-transparent via-maven-white/90 to-transparent group-hover:visible"></div>
              <div className="relative rounded-[15px] bg-maven-bg h-full shadow-inner p-6">
                <div className="absolute h-4/6 inset-0 bg-no-repeat opacity-40 bg-[url(/mavendx.svg)] bg-cover bg-center [mask-image:linear-gradient(180deg,black,rgba(0,0,0,0))]"></div>

                <div className="space-y-4   transition-all duration-300 xl:translate-y-36 group-hover:xl:translate-y-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10 text-maven-orange"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
                    />
                  </svg>

                  <div className="space-y-2">
                    <h1 className="text-xl font-extrabold tracking-wide text-maven-orange">
                      MavenDX
                    </h1>
                    <p className="text-maven-white">
                      Platform that bridges the gap across heterogeneous
                      functions by seamlessly integrating, migrating and
                      synchronizing data between the applications
                    </p>{" "}
                  </div>
                  <div className="flex flex-row gap-2">
                    <div className="lg:block hidden p-2 rounded-md border border-maven-white text-maven-white w-1/2 lg:w-4/12">
                      <h1 className="font-bold mb-1 text-sm text-maven-orange">
                        Configurable
                      </h1>
                      <p className="text-xs">
                        Enhances adaptability by decreasing need for expertise
                      </p>
                    </div>
                    <div className="p-2 rounded-md border border-maven-white text-maven-white w-1/2 lg:w-4/12">
                      <h1 className="font-bold mb-1 text-sm text-maven-orange">
                        Versatile
                      </h1>
                      <p className="text-xs ">
                        Address plethora of data extraction and integration
                        scenarios{" "}
                      </p>
                    </div>
                    <div className="p-2 rounded-md border border-maven-white text-maven-white w-1/2 lg:w-4/12">
                      <h1 className="font-bold mb-1 text-sm text-maven-orange">
                        Flexible
                      </h1>
                      <p className="text-xs ">
                        Cater to your unique requirements
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="xl:h-80 xl:block flex flex-col xl:overflow-hidden">
          <Link href="/products/verticalized-configurator">
            <div className="group relative mx-auto h-full w-full overflow-hidden rounded-[16px] p-[1px] transition-all duration-300 ease-in-out bg-maven-blue/40 hover:bg-gradient-to-r hover:from-maven-blue via-maven-bg to-maven-blue">
              <div className="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-maven-white/90 to-transparent group-hover:visible"></div>
              <div className="relative rounded-[15px] bg-maven-bg h-full shadow-inner p-6">
                <div className="absolute h-4/6 inset-0 bg-no-repeat opacity-40 bg-[url(/panelconfig.svg)] bg-cover [mask-image:linear-gradient(180deg,black,rgba(0,0,0,0))]"></div>

                <div className="space-y-4 transition-all duration-300 xl:translate-y-36 group-hover:xl:translate-y-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="text-maven-blue w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                    />
                  </svg>

                  <div className="space-y-2">
                    <h1 className="text-xl font-extrabold tracking-wide text-maven-blue">
                      Verticalized Configurator
                    </h1>
                    <p className="text-maven-white">
                      Amalgamation of lean PLM & ERP application to empower
                      Small and Medium Business Units{" "}
                    </p>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div className="p-2 rounded-md border border-maven-white text-maven-white w-1/2">
                      <h1 className="font-bold mb-1 text-sm text-maven-blue">
                        Configure
                      </h1>
                      <p className="text-xs ">
                        Customize product to your tailored requirements{" "}
                      </p>
                    </div>
                    <div className="p-2 rounded-md border border-maven-white text-maven-white w-1/2">
                      <h1 className="font-bold mb-1 text-sm text-maven-blue">
                        Sell
                      </h1>
                      <p className="text-xs ">
                        Drive sales by fulfilling unique competitive demands{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="xl:h-80 xl:block flex flex-col xl:overflow-hidden">
          <Link href="/products/license-insights">
            <div className="group relative mx-auto h-full w-full overflow-hidden rounded-[16px] p-[1px] transition-all duration-300 ease-in-out bg-maven-blue/40 hover:bg-gradient-to-r hover:from-maven-blue via-maven-bg to-maven-blue">
              <div className="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-maven-white/90 to-transparent group-hover:visible"></div>
              <div className="relative rounded-[15px] bg-maven-bg h-full shadow-inner p-6">
                <div className="absolute h-4/6 inset-0 bg-no-repeat opacity-40 bg-[url(/licenseinsight.svg)] bg-cover [mask-image:linear-gradient(180deg,black,rgba(0,0,0,0))]"></div>

                <div className="space-y-4   transition-all duration-300 xl:translate-y-36 group-hover:xl:translate-y-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="text-maven-blue w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                    />
                  </svg>
                  <div className="space-y-2">
                    <h1 className="text-xl font-extrabold tracking-wide text-maven-blue">
                      License Insights
                    </h1>
                    <p className="text-maven-white">
                      Visualize all software usages to optimize and maximize
                      your ROI
                    </p>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div className="p-2 rounded-md border border-maven-white text-maven-white w-1/2">
                      <h1 className="font-bold mb-1 text-sm text-maven-blue">
                        Tracking
                      </h1>
                      <p className="text-xs ">
                        Analyze usage for any desired period
                      </p>
                    </div>
                    <div className="p-2 rounded-md border border-maven-white text-maven-white w-1/2">
                      <h1 className="font-bold mb-1 text-sm text-maven-blue">
                        Reports
                      </h1>
                      <p className="text-xs ">
                        Deep dive into usage trends and metrics
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="xl:h-80 xl:block flex flex-col xl:overflow-hidden">
          <Link href="/products/tc&alias-integration">
            <div className="group relative mx-auto h-full w-full overflow-hidden rounded-[16px] p-[1px] transition-all duration-300 ease-in-out bg-maven-blue/40 hover:bg-gradient-to-r hover:from-maven-blue via-maven-bg to-maven-blue">
              <div className="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-maven-white/90 to-transparent group-hover:visible"></div>
              <div className="relative rounded-[15px] bg-maven-bg h-full shadow-inner p-6">
                <div className="absolute h-4/6 inset-0 opacity-40 bg-no-repeat  bg-[url(/tc&aliasintegration.svg)] bg-cover [mask-image:linear-gradient(180deg,black,rgba(0,0,0,0))]"></div>

                <div className="space-y-4   transition-all duration-300 xl:translate-y-36 group-hover:xl:translate-y-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10 text-maven-blue"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                    />
                  </svg>

                  <div className="space-y-2">
                    <h1 className="text-xl font-extrabold tracking-wide text-maven-blue">
                      TC & Alias Integration
                    </h1>
                    <p className="text-maven-white">
                      Seamlessly manage concept created using Autodesk Alias,
                      within Teamcenter
                    </p>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div className="p-2 rounded-md border border-maven-white text-maven-white w-1/2">
                      <h1 className="font-bold mb-1 text-sm text-maven-blue">
                        Traceability
                      </h1>
                      <p className="text-xs ">
                        Provides tracebility from requirements to downstream
                        artifcats
                      </p>
                    </div>
                    <div className="p-2 rounded-md border border-maven-white text-maven-white w-1/2">
                      <h1 className="font-bold mb-1 text-sm text-maven-blue">
                        Facilitate MBSE
                      </h1>
                      <p className="text-xs ">
                        Augments MBSE by linking logical and physical structures
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="xl:h-80 xl:block flex flex-col xl:overflow-hidden">
          <Link href="/products/3d-visualiser">
            <div className="group relative mx-auto h-full w-full overflow-hidden rounded-[16px] p-[1px] transition-all duration-300 ease-in-out bg-maven-blue/40 hover:bg-gradient-to-r hover:from-maven-blue via-maven-bg to-maven-blue">
              <div className="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-maven-white/90 to-transparent group-hover:visible"></div>
              <div className="relative rounded-[15px] bg-maven-bg h-full shadow-inner p-6">
                <div className="absolute h-4/6 inset-0 bg-bl opacity-40 bg-no-repeat bg-[url(/3dvisualiser.svg)] bg-cover [mask-image:linear-gradient(180deg,black,rgba(0,0,0,0))]"></div>

                <div className="space-y-4   transition-all duration-300 xl:translate-y-36 group-hover:xl:translate-y-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10 text-maven-blue"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                    />
                  </svg>

                  <div className="space-y-2">
                    <h1 className="text-xl font-extrabold tracking-wide text-maven-blue">
                      3D Visualiser
                    </h1>
                    <p className="text-maven-white">
                      Visualize a digital twin augmented with real-time
                      information
                    </p>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div className="p-2 rounded-md border border-maven-white text-maven-white w-1/2">
                      <h1 className="font-bold mb-1 text-sm text-maven-blue">
                        Monitoring
                      </h1>
                      <p className="text-xs ">
                        Visualize an object in real-time across a live feed
                      </p>
                    </div>
                    <div className="p-2 rounded-md border border-maven-white text-maven-white w-1/2">
                      <h1 className="font-bold mb-1 text-sm text-maven-blue">
                        Simulation
                      </h1>
                      <p className="text-xs ">
                        Monitor behaviour in different condition
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
