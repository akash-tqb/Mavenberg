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
              className="text-maven-blue w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
              />
            </svg>

            <h3 className="text-maven-blue text-xl font-bold ">
              Centralized Data Management
            </h3>
            <p className="text-maven-white/80 text-justify">
              All design-related information, including sketches, 3D models, and
              associated documents, can be stored and managed in a central
              repository{" "}
            </p>
          </div>
          <div className=" lg:row-end-[8] lg:row-start-1 lg:col-start-2 gap-2 flex flex-col justify-center  border p-4 lg:p-8 rounded-lg border-maven-white">
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
                d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
              />
            </svg>

            <h3 className="text-maven-orange text-xl font-bold">
              Version Control
            </h3>
            <p className="text-maven-white/80 text-justify">
              Manage different design iterations and versions within Alias. This
              ensures that the most up-to-date design is readily available and
              reduces confusion caused by outdated or conflicting versions{" "}
            </p>
          </div>
          <div className="lg:row-span-4 lg:col-start-3 gap-2 flex flex-col justify-end border p-4 lg:p-8 rounded-lg border-maven-white">
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
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <h3 className="text-maven-orange text-xl font-bold">
              Time Efficient
            </h3>
            <p className="text-maven-white/80 text-justify">
              Maximize collaboration and save time finding the correct revisions
              of Alias data
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>

            <h3 className="text-maven-orange text-xl font-bold">
              Simplified Workflows
            </h3>
            <p className="text-maven-white/80 text-justify">
              Create automated workflows that trigger certain actions based on
              design milestones or approvals. This simplifies and accelerates
              design processes{" "}
            </p>
          </div>

          <div className="lg:row-span-3 lg:col-start-3 flex flex-col justify-end space-y-2 p-4 lg:p-8 rounded-lg border border-maven-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className=" text-maven-blue w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
              />
            </svg>

            <h3 className="text-maven-blue text-xl font-bold">Scalability</h3>
            <p className="text-maven-white/80 text-justify">
              As your design projects and team grow, scalability is ensured by
              providing a structured environment for managing and expanding your
              design data and processes{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
