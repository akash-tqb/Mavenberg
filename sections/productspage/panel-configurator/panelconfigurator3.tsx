import Image from "next/image";

export default function PanelConfigurator3() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col lg:mb-20 mb-12">
        <h1 className="mb-6 font-sans text-3xl font-bold text-maven-white sm:text-5xl sm:leading-none">
          Benefits
        </h1>
        <p className="text-maven-white mb-12">
          Streamline the entire design and development process.
        </p>
        <div className="grid lg:grid-cols-3 lg:grid-rows-7 gap-8">
          <div className="lg:col-start-1 lg:row-end-5 lg:row-start-1 flex flex-col gap-2 justify-end border p-4 lg:p-8 rounded-lg border-maven-white">
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
            <h3 className="text-maven-blue text-xl font-bold ">Accuracy</h3>
            <p className="text-maven-white/80 text-justify">
              Minimizes the risk of human errors in panel design and layout,
              ensuring precise and error-free configurations.
            </p>
          </div>
          <div className=" lg:row-end-[8] lg:row-start-1 lg:col-start-2 gap-2 flex flex-col justify-center  border p-4 lg:p-8 rounded-lg border-maven-white">
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
            <h3 className="text-maven-blue text-xl font-bold">Flexibility</h3>
            <p className="text-maven-white/80 text-justify">
              Allows users to experiment with different configurations and
              arrangements before finalizing the design, enabling optimal
              utilization of space and resources.
            </p>
          </div>
          <div className="lg:row-span-4 lg:col-start-3 gap-2 flex flex-col justify-end border p-4 lg:p-8 rounded-lg border-maven-white">
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
            <h3 className="text-maven-blue text-xl font-bold">Cost Savings</h3>
            <p className="text-maven-white/80 text-justify">
              Reduces the potential for costly mistakes and rework by catching
              errors early in the design process.
            </p>
          </div>
          <div className="lg:col-start-1 lg:row-span-3 p-4 flex flex-col justify-end lg:p-8 space-y-2 rounded-lg border border-maven-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-maven-orange"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            <h3 className="text-maven-orange text-xl font-bold">
              User-Friendly
            </h3>
            <p className="text-maven-white/80 text-justify">
              Provides an intuitive interface that requires minimal technical
              expertise, making it accessible to a wider range of users.
            </p>
          </div>

          <div className="lg:row-span-3 lg:col-start-3 space-y-2 flex flex-col justify-end p-4 lg:p-8 rounded-lg border border-maven-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-maven-orange"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            <h3 className="text-maven-orange text-xl font-bold">
              Adaptability
            </h3>
            <p className="text-maven-white/80 text-justify">
              Easily accommodates changes or updates in design requirements,
              making it simpler to adjust configurations as needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
