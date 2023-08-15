import Image from "next/image";

export default function EngineeringServices1() {
  return (
    <section className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20 text-justify">
      <div className="space-y-5 max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl text-maven-white font-extrabold mx-auto sm:text-4xl mb-12">
          Engineering{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-maven-blue to-maven-orange">
           Automation
          </span>
        </h1>
        <h1 className="mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-maven-white sm:text-4xl md:mx-auto">
          CAD Data Conversion:{' '}<span className="text-maven-blue">Seamlessly Transition into the Future</span> 
        </h1>
        <p className="text-maven-white">
          Experience a hassle-free transition from legacy systems to modern
          platforms with our CAD Data Conversion services. We unlock the
          potential of your existing designs by converting them into the latest
          formats, ensuring compatibility and future-proofing your engineering
          processes
        </p>
      </div>
      <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="duration-300 transform border-maven-blue border border-l-4  shadow-sm hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 border-maven-blue rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5 text-maven-blue">
            Precision Conversion
            </h6>
            <p className=" text-maven-white">
            Our advanced tools ensure precise conversion, retaining design integrity and minimizing data loss
            </p>
          </div>
        </div>
        <div className="duration-300 transform border-maven-blue border border-l-4  shadow-sm hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 border-maven-blue rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5 text-maven-blue">
            Format Flexibility
            </h6>
            <p className=" text-maven-white">
            Seamlessly convert between various CAD formats, enabling smooth collaboration across teams and systems
            </p>
          </div>
        </div>
        <div className="duration-300 transform border-maven-blue border border-l-4  shadow-sm hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 border-maven-blue rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5 text-maven-blue">
            Efficiency Boost
            </h6>
            <p className=" text-maven-white">
            Streamline workflows and reduce manual rework with automated conversion processes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
