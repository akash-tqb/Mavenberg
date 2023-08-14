import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col gap-12 justify-between lg:flex-row">
        <div className="lg:w-1/2 flex flex-col gap-12 items-center">
          <h1 className="mb-10 font-sans text-3xl text-center font-bold text-maven-white sm:text-5xl sm:leading-none">
            Digitize Your Business With
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-maven-blue to-maven-orange">
              Our Disruptive Solutions
            </span>
          </h1>
          <div className="h-96 w-96 hidden lg:block">
            <Image
              src="/heroImage.svg"
              alt="heroImage"
              width={400}
              height={200}
            />
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          <div className=" grid grid-cols-3 text-base leading-5 font-bold text-center  gap-4">
            <h1 className="p-4 bg-maven-blue/10 rounded-xl text-maven-blue flex items-center justify-center">
              PLM Process Consulting
            </h1>
            <h1 className="p-4 bg-maven-blue/10 rounded-xl text-maven-orange flex items-center justify-center">
              PLM Implementation
            </h1>
            <h1 className="p-4 bg-maven-blue/10 rounded-xl text-maven-blue flex items-center justify-center">
              Engineering Automation Services
            </h1>
          </div>
          <div>
            <h1 className="text-maven-white text-3xl font-bold pt-2">
              Weaving Your{" "}
              <span className="text-maven-blue text-transparent bg-clip-text bg-gradient-to-r from-maven-blue to-maven-orange">
                Digital DNA
              </span>
            </h1>{" "}
          </div>
          <div className=" grid grid-cols-4 text-base leading-5 font-bold text-center  gap-4">
            <h1 className="p-4 bg-maven-blue/10 rounded-xl text-maven-orange flex items-center justify-center">
              Data Migration
            </h1>
            <h1 className="p-4 bg-maven-blue/10 rounded-xl text-maven-blue flex items-center justify-center">
              Enterprise Integrations
            </h1>
            <h1 className="p-4 bg-maven-blue/10 rounded-xl text-maven-orange flex items-center justify-center">
              PLM Managed Services
            </h1>
            <h1 className="p-4 bg-maven-blue/10 rounded-xl text-maven-blue flex items-center justify-center">
              Simulation Services
            </h1>
          </div>
          <Link
            href="/#products"
            className="inline-flex lg:mb-10 items-center justify-center h-10 px-6 font-medium tracking-wide text-maven-bg transition duration-200 rounded-lg shadow-md bg-maven-orange focus:shadow-outline focus:outline-none"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
}
