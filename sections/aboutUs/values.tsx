import Image from "next/image";

export default function Values() {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
        <div className="mb-10">
          <h1 className="sm:text-4xl mb-6 text-3xl font-sans font-bold tracking-wide text-maven-white">
            Why We Do{' '}<span className=" text-maven-blue ">What We Do</span>
          </h1>
          {/* <h3 className="text-maven-white max-w-3xl">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam.
          </h3> */}
        </div>
        <div className="flex flex-col gap-12 justify-between lg:flex-row">
          <div className="lg:w-1/2 flex flex-col px-8">
            <div className="flex flex-col gap-8">
            <div className="flex flex-row gap-2">
                <div className=" flex w-12">
                  <div className="w-10 h-10 rounded-full p-2 bg-maven-orange flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="text-maven-bg h-8 w-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="pt-2 text-maven-white ">
                  <h3 className="text-xl font-bold text-maven-white">
                   Vision
                  </h3>
                  <p>
                  To be a reliable digitization partner to our customers by 2025
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <div className=" flex w-12">
                  <div className="w-10 h-10 rounded-full p-2 bg-maven-orange flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="text-maven-bg h-8 w-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="pt-2 text-maven-white">
                  <h3 className="text-xl font-bold text-maven-white">
                    Mission
                  </h3>
                  <p>
                  Partner with startups, established OEMs, systems integrators and enable our customers to achieve their digitalization targets
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <div className=" flex w-12">
                  <div className="w-10 h-10 rounded-full p-2 bg-maven-orange flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="text-maven-bg h-8 w-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="pt-2 text-maven-white ">
                  <h3 className="text-xl font-bold text-maven-white mb-4">
                  Our Values
                  </h3>
                  <ul className="grid md:grid-cols-2  md:grid-rows-2 text-justify">
                    <li className="flex flex-col gap-2 md:border-r md:border-maven-white p-4">
                    <h1 className="text-base font-semibold text-maven-blue">Trustworthy</h1>
                    <p className="text-sm">Open communication builds trust, which is our foundation for any relationship whether it’s with our employees or our clients. We are here to talk the walk</p>
                    </li>
                    <li className="flex flex-col gap-2 p-4 ">
                    <h1 className="text-base font-semibold text-maven-blue">Innovation</h1>
                    <p className="text-sm">We develop and apply innovation as an opportunity to listen, learn and seek out the best ideas and bolster curiosity without any constrains</p>
                    </li>
                    <li className="flex flex-col gap-2 md:border-r md:border-t md:border-maven-white  p-4">
                    <h1 className="text-base font-semibold text-maven-blue">Responsive</h1>
                    <p className="text-sm">To be proactive to all external/internal changes and deliver in the utmost of time.</p>
                    </li>
                    <li className="flex flex-col gap-2 md:border-t md:border-maven-white p-4">
                    <h1 className="text-base font-semibold text-maven-blue">Responsible</h1>
                    <p className="text-sm">We take ownership and are committed in action and words to what we do. The impact we make is always the result of the collective</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex items-center justify-center">
            <Image
              src="/whyusimage.svg"
              height={500}
              width={500}
              alt="Mission"
              className="hidden lg:block"
            />
          </div>
        </div>
      </div>
    </>
  );
}
