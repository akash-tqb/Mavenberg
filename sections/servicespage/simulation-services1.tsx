export default function SimulationServices1() {
  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="space-y-5 max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-maven-blue to-maven-orange font-extrabold mx-auto md:text-5xl mb-12">
          Simulation{" "}
          <span className="text-maven-white">
            Services
          </span>
        </h1>
        <h1 className="mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-maven-white sm:text-4xl md:mx-auto">
          Elevate Your{" "}
          <span className="text-maven-blue">Manufacturing Processes</span>
        </h1>
        <p className="text-maven-white">
          Experience the power of virtualization, accuracy, and optimization to
          drive your manufacturing processes to new heights. We understand that
          precision is paramount in manufacturing. Our Simulation Services
          strengthen your decision making, enhance operations, and elevate your
          manufacturing excellence
        </p>
      </div>
      <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="duration-300 transform border-maven-blue border border-l-4  shadow-sm hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 border-maven-blue rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5 text-maven-blue">
              Simulation Modelling
            </h6>
            <p className=" text-maven-white">
              We create accurate digital models of your manufacturing processes,
              allowing us to replicate and analyse real-world scenarios
            </p>
          </div>
        </div>
        <div className="duration-300 transform border-maven-blue border border-l-4  shadow-sm hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 border-maven-blue rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5 text-maven-blue">
              Performance Analysis
            </h6>
            <p className=" text-maven-white">
              Through detailed simulation runs, we assess the performance of
              your processes, identifying areas for optimization
            </p>
          </div>
        </div>
        <div className="duration-300 transform border-maven-blue border border-l-4  shadow-sm hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 border-maven-blue rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5 text-maven-blue">
              Process Enhancement
            </h6>
            <p className=" text-maven-white">
              Provide actionable recommendations to enhance efficiency, reduce
              costs, and improve overall production quality
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
