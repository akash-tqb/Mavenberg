import Image from "next/image";
import Link from "next/link";

export default function Dvisualiser2() {
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
      <div className="flex flex-col-reverse gap-8 lg:flex-row w-full p-8  lg:p-12 ">
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
                <p className="text-maven-white">Four Blocker graph</p>
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
                <p className="text-maven-white">Trend graph</p>
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
                <p className="text-maven-white">License denied count graph</p>
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
                <p className="text-maven-white">
                  Time/Application count based graph
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:w-1/2  flex-col items-center hidden sm:mt-20 sm:mb-24 lg:my-0 sm:flex">
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
                    d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                  />
                </svg>
              </div>
            </div>

            <div className="h-20 w-20 rounded-full border border-maven-blue absolute top-[-60%] left-[25%]"></div>
            <div className="h-20 w-20 rounded-full border border-maven-blue absolute bottom-[-60%] right-[30%]"></div>
            <div className="h-20 w-20 rounded-full border border-maven-blue absolute top-[-35%] left-[-35%]"></div>
            <div className="h-20 w-20 rounded-full border border-maven-blue absolute top-[-35%] right-[-30%]"></div>
            <div className="h-20 w-20 rounded-full border border-maven-blue absolute bottom-[-35%] left-[-35%]"></div>
            <div className="h-20 w-20 rounded-full border border-maven-blue absolute bottom-[-35%] right-[-30%]"></div>
            <div className="h-20 w-20 rounded-full border border-maven-blue absolute top-[30%] left-[-60%]"></div>
            <div className="h-20 w-20 rounded-full border border-maven-blue absolute top-[30%] right-[-60%] "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
