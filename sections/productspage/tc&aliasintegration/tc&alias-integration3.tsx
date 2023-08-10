import Image from "next/image";

export default function TCAliasIntegration3() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col lg:mb-20 mb-12">
        <h1 className=" mb-12 font-sans text-3xl font-bold text-maven-white sm:text-5xl sm:leading-none">
          Benefits
        </h1>
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
            <h3 className="text-maven-blue text-xl font-bold ">
              Centralized Data Management
            </h3>
            <p className="text-maven-white/80 text-justify">
              All design-related information, including sketches, 3D models, and
              associated documents, can be stored and managed in a central
              repository.{" "}
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
            <h3 className="text-maven-blue text-xl font-bold">
              Version Control
            </h3>
            <p className="text-maven-white/80 text-justify">
              Manage different design iterations and versions within Alias. This
              ensures that the most up-to-date design is readily available and
              reduces confusion caused by outdated or conflicting versions.{" "}
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
            <h3 className="text-maven-blue text-xl font-bold">
              Time Efficient
            </h3>
            <p className="text-maven-white/80 text-justify">
              Maximize collaboration and save time finding the correct revisions
              of Alias data.
            </p>
          </div>
          <div className="lg:col-start-1 lg:row-span-3 p-4 lg:p-8 space-y-2 rounded-lg border border-maven-white">
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
              Simplified Workflows
            </h3>
            <p className="text-maven-white/80 text-justify">
              Create automated workflows that trigger certain actions based on
              design milestones or approvals. This simplifies and accelerates
              design processes.{" "}
            </p>
          </div>

          <div className="lg:row-span-3 lg:col-start-3 space-y-2 p-4 lg:p-8 rounded-lg border border-maven-white">
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
            <h3 className="text-maven-orange text-xl font-bold">Scalability</h3>
            <p className="text-maven-white/80 text-justify">
              As your design projects and team grow, scalability is ensured by
              providing a structured environment for managing and expanding your
              design data and processes.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
