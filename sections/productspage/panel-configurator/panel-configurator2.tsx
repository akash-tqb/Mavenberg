import Image from "next/image";
import Link from "next/link";

export default function PanelConfigurator2() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="lg:mb-20 mb-12">
        <h1 className="sm:text-5xl mb-6 text-3xl font-sans font-bold tracking-wide text-maven-white">
          Maximize Your{" "}
          <span className=" text-maven-blue">Panel Configurability </span>
        </h1>
        <h3 className="text-maven-white">
          Intuitive combination of lean PLM and ERP that enables you to
          customize your panel layout and its extensive features. Stage your
          components from frames to sheets according to your bespoke needs.
        </h3>
      </div>
      <div className="flex flex-col-reverse gap-8 lg:flex-row w-full p-8  lg:p-12 ">
        <div className="flex flex-col space-y-12 lg:w-1/2">
          <div className="flex flex-col gap-8">
            <h1 className="text-maven-blue text-xl font-bold tracking-wide">
            Features
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
                <p className="text-maven-white">Descriptively visualize your electrical panel in 3D</p>
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
                <p className="text-maven-white">Generate the bill of material based on your specific customization</p>
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
                <p className="text-maven-white">Manage your storage, tracking and distribution of inventory</p>
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
                Generate detailed specific report for each component
                </p>
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
                Colaborate and manage vendors for part procurement through communication channel                </p>
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
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="text-maven-orange w-16 h-16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
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
