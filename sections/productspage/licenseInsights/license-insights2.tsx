import Image from "next/image";
import Link from "next/link";

export default function ProductsPageSection2() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="lg:mb-20 mb-12">
        <h1 className="sm:text-5xl mb-6 text-3xl font-sans font-bold tracking-wide text-maven-white">
          Unleash Your{" "}
          <span className=" text-maven-blue">License Insights</span>
        </h1>
        <h3 className="text-maven-white">
          One-stop-shop to check the usage of various licenses through an
          intuitive visual representation and therefore helps draw valuable
          insight to better benefit the business and stretch the usage of those
          expensive licenses to their maximum limit.
        </h3>
      </div>
      <div className="flex flex-col-reverse gap-8 lg:flex-row-reverse w-full p-8  lg:p-12 ">
        <div className="flex flex-col space-y-12 lg:w-1/2">
          <div className="flex flex-col gap-8">
            <h1 className="text-maven-blue text-lg font-bold tracking-wide">
              Featured Visualisation
            </h1>
            <p className="text-maven-white">
              We have a list of specific visualisations that help you draw
              insights on your PLM application license usage for customizable
              inputs.
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex flex-row gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-maven-blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <p className="text-maven-white w-[90%]">Four Blocker graph</p>
              </li>
              <li className="flex flex-row gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-maven-blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <p className="text-maven-white w-[90%]">Trend graph</p>
              </li>
              <li className="flex flex-row gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-maven-blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <p className="text-maven-white w-[90%]">License denied count graph</p>
              </li>
              <li className="flex flex-row gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-maven-blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <p className="text-maven-white w-[90%]">
                  Time/Application count based graph
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:w-1/2  flex-col items-center justify-center hidden sm:mt-20 sm:mb-24 lg:my-0 sm:flex">
          <div className="relative ">
            <div className="flex items-center justify-center rounded-full h-48 w-48 bg-gradient-radial from-maven-blue to-maven-bg">
              <div className="inline-flex items-center justify-center h-36 w-36 rounded-full bg-maven-bg border-2 border-maven-blue">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.2"
                  stroke="currentColor"
                  className="w-16 h-16 text-maven-blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                  />
                </svg>
              </div>
            </div>

            {/* <div className="h-20 w-20 rounded-full border border-maven-blue absolute top-[-60%] left-[25%]"></div>
            <div className="h-20 w-20 rounded-full border border-maven-blue absolute bottom-[-60%] right-[30%]"></div>
            <div className="h-20 w-20 rounded-full border border-maven-blue absolute top-[-35%] left-[-35%]"></div>
            <div className="h-20 w-20 rounded-full border border-maven-blue absolute top-[-35%] right-[-30%]"></div>
            <div className="h-20 w-20 rounded-full border border-maven-blue absolute bottom-[-35%] left-[-35%]"></div>
            <div className="h-20 w-20 rounded-full border border-maven-blue absolute bottom-[-35%] right-[-30%]"></div>
            <div className="h-20 w-20 rounded-full border border-maven-blue absolute top-[30%] left-[-60%]"></div>
            <div className="h-20 w-20 rounded-full border border-maven-blue absolute top-[30%] right-[-60%] "></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
