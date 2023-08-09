import Image from "next/image";
import CloudInfra from "../../public/services/cloudinfra.svg"
import AppAdoptation from "../../public/services/appadoption.svg"

export default function PlmManagedServices1() {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="text-justify">
          <h1 className="mb-6 font-sans text-3xl font-bold text-maven-white sm:text-5xl sm:leading-none">
            PLM Managed{' '}<span className="text-maven-blue">Services</span>
          </h1>
        </div>
      </div>
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex flex-col gap-12 justify-between lg:flex-row">
          <div className="lg:w-[60%] space-y-6 text-maven-white text-justify">
            <h1 className="text-maven-blue text-xl font-bold">
              Cloud infrastructure management
            </h1>
            <p>
              Our cloud infrastructure management solutions facilitate the
              configuration, monitoring and optimization of complex
              environments, allowing your IT teams to maximize the advantages
              and minimize the challenges of cloud computing.
            </p>
            <p>
              We ensure that your CISM’s core components — including hardware,
              virtualization, storage and network resources — coherently work
              together to deploy and deliver applications and services and
              provide your IT teams responsible for managing applications and
              their supporting infrastructure end-to-end visibility across the
              application delivery chain.
            </p>
          </div>
          <div className="lg:w-[40%] hidden lg:flex items-center justify-center">
            <Image src={CloudInfra} alt="" width={300} height={450} />
          </div>
        </div>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="lg:w-[40%] hidden lg:flex items-center justify-center">
            <Image src={AppAdoptation} alt="" width={300} height={450} />
          </div>
          <div className="lg:w-[60%] space-y-6 text-maven-white text-justify">
            <h1 className="text-maven-orange text-xl font-bold">
              Application Adoption and Support
            </h1>
            <p>
              A clear strategy and timeline are linchpins to PLM success.
              Product Lifecycle Management implementation involves extensive
              changes to organizational practices. So, it’s important that you
              assess your organizational PLM maturity and plan deployment
              accordingly.
            </p>
            <p>
              We ensure that you are capable of benefiting every area of your
              organization. So, we ascertain that delivery is backed from the
              outset and open channels for constructive dialogue keep projects
              on course.
            </p>
            <p>
              A robust communication strategy is required for any business
              transformation. We push and encourage cultural change during our
              implementation of new processes and future-proof departmental
              development.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
