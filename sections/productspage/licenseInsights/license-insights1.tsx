import Image from "next/image";
import Link from "next/link";

export default function ProductsPageSection1() {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
      <div className="flex flex-col space-y-36 justify-between lg:flex-row lg:space-y-0 ">
        <div className="lg:w-1/2 flex flex-col text-center items-center justify-center">
          <h1 className="sm:text-4xl text-3xl font-bold tracking-wide text-maven-white">
          Get Visibility Into Your{' '}
            <span className=" text-maven-blue">Software Licensing Landscape</span>
          </h1>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8 lg:w-1/2">
        <div className="flex flex-col items-end px-3">
            <Image
            width={500}
            height={500}
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src="/licenserealtime3.png"
              alt=""
            />
            <Image
            width={500}
            height={500}
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="/licenserealtime2.png"
              alt=""
            />
          </div>
          <div className="px-3">
            <Image
            width={500}
            height={500}
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src="/licenserealtime1.png"
              alt=""
            />
          </div>
        {/* <Image src="/licenseinsight.svg" width={400} height={400} alt="license insights"/> */}
        </div>
      </div>
    </div>
  );
}
