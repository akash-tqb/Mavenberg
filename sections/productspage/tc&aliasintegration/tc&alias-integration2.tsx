import Image from "next/image";
import Link from "next/link";

export default function TCAliasIntegration2() {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
      <div className="mb-6 lg:max-w-8xl mx-auto text-center flex flex-col items-center justify-center">
        <h1 className="sm:text-4xl mb-6 text-3xl font-bold tracking-wide text-maven-white">
        Work with single source of truth by effortlessly overseeing your{" "}<br/>
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-maven-blue to-maven-orange">Autodesk Alias designs from within Teamcenter</span>
        </h1>
        <h3 className="text-maven-white">
        Incorporate Inventor files with your entire technical dataset, creating a unified repository of product information that fosters your end-to-end design-to-manufacturing workflow
        </h3>
      </div>
      <div className="flex flex-col-reverse gap-8 lg:flex-row w-full p-8  lg:p-12 ">
        <div className="flex flex-col space-y-12 lg:w-1/2">
          <div className="flex flex-col gap-8">
            <h1 className="text-maven-blue text-xl font-bold tracking-wide">
              Featured
            </h1>
            <ul className="flex flex-col gap-4 text-lg">
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
                <p className="text-maven-white w-[90%]">Automatically save the entire AutoDesk Alias Wireframe into Teamcenter</p>
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
                <p className="text-maven-white w-[90%]">Open concept design from Teamcenter for viewing, modifying and cloning in AutoDesk Alias</p>
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
                <p className="text-maven-white w-[90%]">Simplify search, create and edit AutoDesk Alias objects, including drawings, parts and assemblies</p>
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
                Readily create and vault Direct Model files for easy digital mockup
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:w-1/2  flex-col items-center justify-center hidden sm:mt-20 sm:mb-24 lg:my-0 sm:flex">
        <Image src='/tc&aliasintegration.svg' width={400} height={400} alt=""/>

          {/* <div className="relative ">
            <div className="flex items-center justify-center rounded-full h-48 w-48 bg-gradient-radial from-maven-blue to-maven-bg">
              <div className="inline-flex items-center justify-center h-36 w-36 rounded-full bg-maven-bg border-2 border-maven-blue">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.2"
                  stroke="currentColor"
                  className="w-16 h-16 text-maven-orange"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
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
          </div> */}
        </div>
      </div>
    </div>
  );
}
