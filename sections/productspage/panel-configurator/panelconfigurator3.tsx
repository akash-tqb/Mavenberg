import Image from "next/image";

export default function PanelConfigurator3() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col lg:mb-20 mb-12">
        <h1 className="mb-6 font-sans text-3xl font-bold text-maven-white sm:text-4xl sm:leading-none">
          Benefits
        </h1>
        <p className="text-maven-white mb-12">
          Streamline the entire design and development process
        </p>
        <div className="grid lg:grid-cols-3 lg:grid-rows-7 gap-8">
          <div className="lg:col-start-1 lg:row-end-5 lg:row-start-1 flex flex-col gap-2 justify-end border p-4 lg:p-8 rounded-lg border-maven-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-maven-blue"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <h3 className="text-maven-blue text-xl font-bold ">Accuracy</h3>
            <p className="text-maven-white/80 text-justify">
              Minimizes the risk of human errors in product design and layout,
              ensuring precise and error-free configurations
            </p>
          </div>
          <div className=" lg:row-end-[8] lg:row-start-1 lg:col-start-2 gap-2 flex flex-col justify-center  border p-4 lg:p-8 rounded-lg border-maven-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className=" text-maven-orange w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
              />
            </svg>

            <h3 className="text-maven-orange text-xl font-bold">Flexibility</h3>
            <p className="text-maven-white/80 text-justify">
              Allows users to experiment with different configurations and
              arrangements before finalizing the design, enabling optimal
              utilization of space and resources
            </p>
          </div>
          <div className="lg:row-span-4 lg:col-start-3 gap-2 flex flex-col justify-end border p-4 lg:p-8 rounded-lg border-maven-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className=" text-maven-orange w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <h3 className="text-maven-orange text-xl font-bold">
              Cost Savings
            </h3>
            <p className="text-maven-white/80 text-justify">
              Reduces the potential for costly mistakes and rework by catching
              errors early in the design process
            </p>
          </div>
          <div className="lg:col-start-1 lg:row-span-3 p-4 flex flex-col justify-end lg:p-8 space-y-2 rounded-lg border border-maven-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-maven-orange w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
              />
            </svg>

            <h3 className="text-maven-orange text-xl font-bold">
              User-Friendly
            </h3>
            <p className="text-maven-white/80 text-justify">
              Provides an intuitive interface that requires minimal technical
              expertise, making it accessible to a wider range of users
            </p>
          </div>

          <div className="lg:row-span-3 lg:col-start-3 space-y-2 flex flex-col justify-end p-4 lg:p-8 rounded-lg border border-maven-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-maven-blue w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
              />
            </svg>

            <h3 className="text-maven-blue text-xl font-bold">Adaptability</h3>
            <p className="text-maven-white/80 text-justify">
              Easily accommodates changes or updates in design requirements,
              making it simpler to adjust configurations as needed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
