import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <div
      id="services"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="mb-12">
        <h1 className="sm:text-4xl mb-6 text-3xl font-sans font-bold tracking-wide text-maven-white text-justify">
          Our <span className=" text-maven-blue">Services</span>
        </h1>
        <h3 className="text-maven-white text-justify">
          Our services streamline the end-to-end management of your product's
          lifecycle, from concept to retirement. We ensure enhanced
          collaboration, data management, and process efficiency, resulting in
          optimized product development and faster time-to-market
        </h3>
      </div>
      <div className="flex flex-col space-y-8 justify-between lg:flex-row lg:space-y-0 lg:space-x-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          <Link href="/services/plm&allied-services">
            <div className="relative h-full p-px overflow-hidden transition duration-300 transform border border-maven-white/20 rounded hover:scale-105 group">
              <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-maven-blue group-hover:scale-x-100" />
              <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-maven-blue group-hover:scale-y-100" />
              <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-maven-blue group-hover:scale-x-100" />
              <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-maven-blue group-hover:scale-y-100" />
              <div className="relative flex items-end bg-maven-bg h-full  p-5">
                <div className="absolute h-1/2 inset-0 opacity-30 bg-gradient-to-r from-maven-blue via-maven-bg to-transparent  bg-top [mask-image:linear-gradient(180deg,black,rgba(0,0,0,0))]"></div>
                <div className="flex justify-end h-full flex-col gap-4 text-maven-blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
                    />
                  </svg>

                  <div className="flex gap-2 items-center ">
                    <h1 className=" text-lg items-center flex font-bold">
                      PLM & Allied Services
                    </h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  <p className="text-maven-white text-justify">
                    We elevate PLM's effectiveness through tailored tools and
                    processes, catering to all product lifecycle aspects
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/services/plm-managed-services">
            <div className="relative h-full p-px overflow-hidden transition duration-300 transform border border-maven-white/20 rounded hover:scale-105 group">
              <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-maven-orange group-hover:scale-x-100" />
              <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-maven-orange group-hover:scale-y-100" />
              <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-maven-orange group-hover:scale-x-100" />
              <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-maven-orange group-hover:scale-y-100" />
              <div className="relative flex items-end bg-maven-bg h-full  p-5">
                <div className="absolute h-1/2 inset-0 opacity-30 bg-gradient-to-r from-maven-orange via-maven-bg to-transparent  bg-top [mask-image:linear-gradient(180deg,black,rgba(0,0,0,0))]"></div>
                <div className="flex justify-end h-full flex-col gap-4 text-maven-orange">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                    />
                  </svg>

                  <div className="flex gap-2 items-center ">
                    <h1 className=" text-lg items-center flex font-bold">
                      PLM Managed Services
                    </h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  <p className="text-maven-white text-justify">
                    We oversee the full product lifecycle, from design to
                    end-of-life, offering operational efficiency and expertise
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/services/engineering-services">
            <div className="relative h-full p-px overflow-hidden transition duration-300 transform border border-maven-white/20 rounded hover:scale-105 group">
              <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-maven-blue group-hover:scale-x-100" />
              <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-maven-blue group-hover:scale-y-100" />
              <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-maven-blue group-hover:scale-x-100" />
              <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-maven-blue group-hover:scale-y-100" />
              <div className="relative flex items-end h-full bg-maven-bg p-5 text-maven-blue">
                <div className="absolute h-1/2 inset-0 opacity-30 bg-gradient-to-r from-maven-blue via-maven-bg to-transparent  bg-top [mask-image:linear-gradient(180deg,black,rgba(0,0,0,0))]"></div>

                <div className="flex justify-end h-full flex-col gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div className="flex gap-2 items-center text-maven-blue">
                    <h1 className=" text-lg flex font-bold">
                      Engineering Automation
                    </h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  <p className="text-maven-white text-justify">
                    We implement automation in your engineering to optimize
                    workflows, reduce manual tasks, and boost productivity
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/services/simulation-services">
            <div className="relative h-full p-px overflow-hidden transition duration-300 transform border border-maven-white/20 rounded hover:scale-105 group">
              <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-maven-orange group-hover:scale-x-100" />
              <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-maven-orange group-hover:scale-y-100" />
              <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-maven-orange group-hover:scale-x-100" />
              <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-maven-orange group-hover:scale-y-100" />
              <div className="relative flex items-end bg-maven-bg h-full  p-5">
                <div className="absolute h-1/2 inset-0 opacity-30 bg-gradient-to-r from-maven-orange via-maven-bg to-transparent  bg-top [mask-image:linear-gradient(180deg,black,rgba(0,0,0,0))]"></div>
                <div className="flex justify-end h-full flex-col gap-4 text-maven-orange">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                    />
                  </svg>

                  <div className="flex gap-2 items-center ">
                    <h1 className=" text-lg items-center flex font-bold">
                      Simulation Services
                    </h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  <p className="text-maven-white text-justify">
                    We provide advanced simulation solutions that helps to
                    analyze complex scenarios to facilitate informed
                    decision-making
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
