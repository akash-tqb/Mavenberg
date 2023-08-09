import Image from "next/image";

export default function EngineeringServices1() {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="text-justify">
          <h1 className="mb-6 font-sans text-3xl font-bold text-maven-white sm:text-5xl sm:leading-none">
            Engineering <span className="text-maven-blue">Services</span>
          </h1>
        </div>
      </div>
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex flex-col gap-12 justify-between lg:flex-row">
          <div className="lg:w-[60%] flex flex-col justify-center space-y-6 text-maven-white text-justify">
            <h1 className="text-maven-blue text-xl font-bold">
              CAD Data Conversion
            </h1>
            <p>
              We can provide support during this process of converting CAD data
              and migrating metadata and documents between systems.
            </p>
          </div>
          <div className="lg:w-[40%] hidden lg:flex items-center justify-center">
            <Image src="/services/caddataconversion.svg" alt="" width={300} height={450} />
          </div>
        </div>
      </div>
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="lg:w-[40%] hidden lg:flex items-center justify-center">
            <Image src="/services/cadautomation.svg" alt="" width={400} height={550} />
          </div>
          <div className="lg:w-[60%] space-y-6 text-maven-white text-justify">
            <h1 className="text-maven-orange text-xl font-bold">
              CAD data automation
            </h1>
            <p>
              We understand that tThe biggest problem with a system changeover
              is accurate and verified data migration and conversion, which can,
              in the worst case, lead to the loss of vital information.
            </p>
            <p>
              What makes our service special is the migration that runs parallel
              to productive operation and integrated and automated verification,
              so that no operational downtime is required – unlike with other
              migration approaches. As a result, we can migrate data from
              thousands of CAD documents from project start to full production
              operation, quickly, and with zero downtime and risks.
            </p>
          </div>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
          <div className="flex flex-col gap-12 justify-between lg:flex-row">
            <div className="lg:w-[60%] space-y-6 text-maven-white text-justify">
              <h1 className="text-maven-blue text-xl font-bold">
                Manufacturing simulation services
              </h1>
              <p>
                We understand that your facility needs to run without
                inefficiencies. We ensure that our services Optimize Your
                Manufacturing Systems by providing invaluable insight into how
                your manufacturing operations can be made more efficient. We
                will lend our years of expertise alongside powerful simulation
                tools to find the most profitable scenario for you.
              </p>
            </div>
            <div className="lg:w-[40%] hidden lg:flex items-center justify-center">
              <Image src="/services/manufacturingsim.svg" alt="" width={300} height={450} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
