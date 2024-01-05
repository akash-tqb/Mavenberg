import Image from "next/image";

export default function Dvisualiser3() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col lg:mb-20 mb-12">
        <h1 className=" mb-12 text-3xl font-bold text-maven-white sm:text-4xl sm:leading-none">
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
              className=" text-maven-blue w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
              />
            </svg>

            <h3 className="text-maven-blue text-xl font-bold ">
              Simulation and Testing
            </h3>
            <p className="text-maven-white/80 text-justify">
              Enables virtual simulation and testing of designs, helping
              identify potential issues and optimize performance before physical
              implementation{" "}
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
                d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <h3 className="text-maven-orange text-xl font-bold">
              Reduced Costs
            </h3>
            <p className="text-maven-white/80 text-justify">
              Early identification of design flaws and issues through 3D
              visualization helps avoid costly modifications during later stages
              of a project{" "}
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
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <h3 className="text-maven-orange text-xl font-bold">
              Time Savings
            </h3>
            <p className="text-maven-white/80 text-justify">
              By visualizing designs before physical implementation, time is
              saved by minimizing errors, revisions, and rework
            </p>
          </div>
          <div className="lg:col-start-1 lg:row-span-3 p-4 flex flex-col justify-end lg:p-8 space-y-2 rounded-lg border border-maven-white">
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
                d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
              />
            </svg>

            <h3 className="text-maven-orange text-xl font-bold">
              Design Iteration
            </h3>
            <p className="text-maven-white/80 text-justify">
              Reliably explore multiple design variations, speeding up the
              iterative design process{" "}
            </p>
          </div>

          <div className="lg:row-span-3 lg:col-start-3 space-y-2 flex flex-col justify-end p-4 lg:p-8 rounded-lg border border-maven-white">
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
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>

            <h3 className="text-maven-blue text-xl font-bold">
              Cross-Disciplinary Collaboration
            </h3>
            <p className="text-maven-white/80 text-justify">
              Promote collaboration between various disciplines, such as design,
              engineering, and marketing, leading to more well-rounded
              solutions{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
