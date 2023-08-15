import Link from "next/link";
import { useState } from "react";

const tabs = [
  "Teamcenter",
  "Web Development",
  "Testing",
  "Mendix Developer",
];

const jd = [1, 2, 3, 4, 5, 6];
export default function CareerCards() {
  const [tabIndex, setTabIndex] = useState<number | null>(0);
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col text-center items-center mb-12 lg:mb-20">
          <h1 className="sm:text-4xl mb-6 text-3xl font-sans font-bold tracking-wide text-maven-white">
            Job{' '}
            <span className=" text-maven-blue ">Openings</span>
          </h1>
          {/* <h3 className="text-maven-white max-w-3xl">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam.
          </h3> */}
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20 flex justify-center items-center">
          <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-maven-blue to-maven-orange">COMING SOON</h1>
        </div>
        {/* <div className="flex justify-evenly mb-16">
          {tabs.map((tab, index) => {
            return (
              <div
                className={`${
                  tabIndex === index
                    ? "text-maven-blue border-b border-b-maven-blue font-semibold"
                    : "text-maven-white"
                } cursor-pointer p-1 mx-4 hidden md:flex`}
                onClick={() => setTabIndex(index)}
                key={index}
              >
                {tab}
              </div>
            );
          })}
        </div>
        <div className="mb-12 text-maven-white sm:hidden relative">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="pointer-events-none w-5 h-5 absolute right-2 inset-y-0 my-auto">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
                <select  className="p-3 w-full bg-transparent appearance-none outline-none border border-maven-white rounded-lg shadow-sm focus:border-maven-blue"
                   
                >
                    {
                        tabs.map((item, idx) => (
                            <option key={idx} className="bg-maven-bg">
                                {item}
                            </option>
                        ))
                    }
                </select>
            </div>
        <div className="flex justify-center flex-wrap gap-10 mb-16">
          {jd.map((j, index) => {
            return (
              <div
                key={index}
                className="border border-maven-white rounded w-72"
              >
                <div className="flex justify-between items-center px-6 py-4">
                  <div className="w-10 h-10 rounded-md p-2 bg-maven-orange flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="text-maven-white h-8 w-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                      />
                    </svg>
                  </div>
                  <Link href="mailto:careers@mavenberg.com" className="border border-maven-blue px-2 py-1 rounded-lg text-maven-blue ">
                    Apply
                  </Link>
                </div>
                <h1 className="text-xl text-maven-white font-bold px-6 py-2">
                  Lorem ipsum dolor
                </h1>
                <h3 className="px-6 mb-6 text-maven-white opacity-70">
                  Lorem ipsum dolor, sit omet
                </h3>
                <div className="py-2 border-t border-t-maven-white text-maven-white opacity-60 flex justify-end">
                  <div className="pr-4">1 month ago</div>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
    </>
  );
}
