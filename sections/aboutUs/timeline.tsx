import Image from "next/image";

export default function TimeLine() {
  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
      <div className="justify-center max-w-6xl lg:max-w-full px-4 py-4 mx-auto">
        <div className="flex flex-col max-w-xl text-center mb-20 lg:mb-0 mx-auto">
          <h1 className="sm:text-4xl mb-6 text-3xl  font-bold tracking-wide text-maven-white">
            Company <span className=" text-maven-blue ">Timeline</span>
          </h1>
        </div>
        <div className="w-full hidden lg:block relative">
          <Image
            src="/roadmap-timeline-1.svg"
            height={1080}
            width={1920}
            alt="/"
          />
        </div>
        <div className="w-full mx-auto lg:max-w-3xl lg:hidden">
          <div className="relative flex">
            <div className="flex flex-col items-center w-10 mr-4 md:w-24">
              <div>
                <div className="flex items-center justify-center w-8 h-8 bg-maven-orange rounded-full ">
                  <div className="w-4 h-4 bg-maven-bg rounded-full "></div>
                </div>
              </div>
              <div className="w-px h-full bg-maven-white"></div>
            </div>
            <div className="w-full">
              <h2 className="inline-block px-4 py-2 mb-4 text-base font-medium text-maven-white border-l border-maven-orange rounded-3xl ">
                2019
              </h2>
              <div className="relative flex-1 mb-10 bg-white border border-b-4 border-maven-blue   rounded-3xl ">
                <div className="relative z-20 p-6">
                  <p className="mb-2 text-xl font-bold text-maven-blue">
                    Company Incorporated
                  </p>
                  <p className="text-maven-white">
                    Mavenberg Innovations India Pvt. Ltd., was established in
                    the month of March in Bangalore. As our first phase we
                    developed a 3D visualizer as an IOT platform plug - in.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex">
            <div className="flex flex-col items-center w-10 mr-4 md:w-24">
              <div>
                <div className="flex items-center justify-center w-8 h-8 bg-maven-orange rounded-full ">
                  <div className="w-4 h-4 bg-maven-bg rounded-full "></div>
                </div>
              </div>
              <div className="w-px h-full bg-maven-white"></div>
            </div>
            <div className="w-full">
              <h2 className="inline-block px-4 py-2 mb-4 text-base font-medium text-maven-white border-l border-maven-orange rounded-3xl ">
                2020
              </h2>
              <div className="relative flex-1 mb-10 border border-b-4 border-maven-blue shadow w-full rounded-3xl ">
                <div className="relative z-20 p-6">
                  <p className="mb-2 text-xl font-bold text-maven-blue">
                    Fostering Alliances
                  </p>
                  <p className="text-maven-white">
                    Started working with startups and Indian OEMs, and we were
                    able to effectively launch partnerships with 5 clients. With
                    our team, 10 exceptional individuals began their adventure.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex justify-between">
            <div className="flex flex-col items-center w-10 mr-4 md:w-24">
              <div>
                <div className="flex items-center justify-center w-8 h-8 bg-maven-orange rounded-full ">
                  <div className="w-4 h-4 bg-maven-bg rounded-full "></div>
                </div>
              </div>
              <div className="w-px h-full bg-maven-white"></div>
            </div>
            <div className="w-full">
              <h2 className="inline-block px-4 py-2 mb-4 text-base font-medium text-maven-white border-l border-maven-orange rounded-3xl ">
                2021
              </h2>
              <div className="relative flex-1 mb-10 border border-b-4 border-maven-blue shadow w-full  rounded-3xl ">
                <div className="relative z-20 p-6">
                  <p className="mb-2 text-xl font-bold text-maven-blue">
                    Strengthening Team
                  </p>
                  <p className="text-maven-white">
                    Enrollment of 20 New Talents as Mavenberg Advances, Broadens
                    Partnerships with 8 More Clients.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex justify-between">
            <div className="flex flex-col items-center w-10 mr-4 md:w-24">
              <div>
                <div className="flex items-center justify-center w-8 h-8 bg-maven-orange rounded-full ">
                  <div className="w-4 h-4 bg-maven-bg rounded-full"></div>
                </div>
              </div>
              <div className="w-px h-full bg-maven-white"></div>
            </div>
            <div className="w-full">
              <h2 className="inline-block px-4 py-2 mb-4 text-base font-medium text-maven-white border-l border-maven-orange rounded-3xl ">
                2022
              </h2>
              <div className="relative flex-1 mb-10 bg-white border border-b-4 border-maven-blue shadow w-full rounded-3xl ">
                <div className="relative z-20 p-6">
                  <p className="mb-2 text-xl font-bold text-maven-blue">
                    Global Expansion
                  </p>
                  <p className="text-maven-white">
                    Globally Rooted: Mavenberg's Base in Nuremberg, Germany.
                    Fortified Team with 30 New Members, Extended Partnerships to
                    15 Clients.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex justify-between">
            <div className="flex flex-col items-center w-10 mr-4 md:w-24">
              <div>
                <div className="flex items-center justify-center w-8 h-8 bg-maven-orange rounded-full ">
                  <div className="w-4 h-4 bg-maven-bg rounded-full"></div>
                </div>
              </div>
              <div className="w-px h-full bg-maven-white"></div>
            </div>
            <div className="w-full">
              <h2 className="inline-block px-4 py-2 mb-4 text-base font-medium text-maven-white border-l border-maven-orange rounded-3xl ">
                2023
              </h2>
              <div className="relative flex-1 mb-10 bg-white border border-b-4 border-maven-blue shadow w-full rounded-3xl ">
                <div className="relative z-20 p-6">
                  <p className="mb-2 text-xl font-bold text-maven-blue">
                    Venturing into Mendix
                  </p>
                  <p className="text-maven-white">
                    As our next phase we are expanding to mendix services.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
