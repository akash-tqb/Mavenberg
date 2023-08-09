import Image from "next/image";

export default function PlmAlliedServices1() {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-12 justify-between lg:flex-row">
          <div className="lg:w-[60%] text-maven-white flex flex-col items-center justify-center">
            <div className="text-justify">
              <h1 className="mb-6 font-sans text-xl font-bold text-maven-white sm:text-5xl sm:leading-none">
                PLM & Allied{' '}<span className="text-maven-blue">Services</span>
              </h1>
              <p className="mb-5">
                We combine new approaches to business strategy and technology
                that helps you discover opportunities to improve operational
                efficiency and drive innovation.
              </p>
              <p>
                The experience that we bring to every engagement helps you adapt
                the idiosyncrasies of specific enterprise software to the
                uniqueness of your product planning and development environment.
              </p>
            </div>
          </div>
          <div className="lg:w-[40%] text-maven-white flex flex-col items-center justify-center">
            <div className="space-y-8">
              <h1 className="text-xl font-bold text-maven-orange">
                Key Consulting Engagements
              </h1>
              <ul className="space-y-6">
                <li className="flex flex-row gap-2 text-maven-blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>

                  <p className="text-maven-white">
                    Program & Project Management
                  </p>
                </li>
                <li className="flex flex-row gap-2 text-maven-blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>

                  <p className="text-maven-white">CAPA, FMEA, Control plan</p>
                </li>
                <li className="flex flex-row gap-2 text-maven-blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>

                  <p className="text-maven-white">Engineering To Order</p>
                </li>
                <li className="flex flex-row gap-2 text-maven-blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>

                  <p className="text-maven-white">Change Management</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
        <div className="flex flex-col gap-12 justify-between lg:flex-row">
          <div className="lg:w-[60%] space-y-6 text-maven-white text-justify">
            <h1 className="text-maven-blue text-xl font-bold">
              Enterprise Integration
            </h1>
            <p>
              Our PLM enterprise integration services facilitate seamless
              connectivity and data synchronization between diverse systems
              within an organization as our consultants have been defining,
              developing, configuring, and deploying enterprise system
              integrations for years, connecting enterprise systems throughout
              the product lifecycle. The team understands the critical
              characteristics of system-to-system integration and
              conflict/failure resolution.
            </p>
            <p>
              Whether you need to integrate with ERP, PLM, CRM, or another
              enterprise system, Mavenberg Innovations has multiple ways to get
              the job done. We have created, configured, and developed numerous
              integrations across CAD, PDM, PLM, MRP, ERP, CRM, legacy systems
              and custom applications.
            </p>
          </div>
          <div className="lg:w-[40%] hidden lg:flex items-center justify-center">
            <Image src="/services/enterpriseintegration.svg" alt="" width={300} height={450} />
          </div>
        </div>
      </div>
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="lg:w-[40%] hidden lg:flex items-center justify-center">
            <Image src="/services/plmimplementation.svg" alt="" width={300} height={450} />
          </div>
          <div className="lg:w-[60%] space-y-6 text-maven-white text-justify">
            <h1 className="text-maven-orange text-xl font-bold">
              PLM Implementation
            </h1>
            <p>
              A structured consulting process provides consistency and
              repeatability that reduces risk and increases service quality .
            </p>
            <p>
              You retain visibility into consulting engagements through a
              roadmap compiled at the beginning of each project and project
              summaries as engagements conclude.
            </p>
            <p>Our mantra for successful implementation are:</p>
            <ul className="space-y-6 text-maven-orange">
              <li className="flex flex-row gap-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>

                <p className="text-maven-white">
                  Understand and establish how PLM affects your business needs
                  and draw a road map.
                </p>
              </li>
              <li className="flex flex-row gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>

                <p className="text-maven-white">
                  Prepare a good quantified cost-benefits study showing ROI.
                </p>
              </li>
              <li className="flex flex-row gap-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>

                <p className="text-maven-white">
                  Establish measurable goals in your project plan that shows the
                  difference.
                </p>
              </li>
              <li className="flex flex-row gap-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>

                <p className="text-maven-white">
                  Strike a good balance between IT and Engineering. Establish
                  clear ownership.
                </p>
              </li>
              <li className="flex flex-row gap-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>

                <p className="text-maven-white">
                  Prepare the business for change.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex flex-col gap-12 justify-between lg:flex-row">
          <div className="lg:w-[60%] space-y-6  text-maven-white text-justify">
            <h1 className="text-maven-blue text-xl font-bold">
              ALM Implementation
            </h1>
            <p>
              Our Application Lifecycle Management service implementations will
              do wonders to improve your application’s efficiency and quality at
              every step of its lifecycle. Our ALM process includes but it not
              limited to requirement tracking, task tracking, source control,
              automated build, automated deployment, automation testing, release
              management, test management, test case repository, test run and
              defect tracking.
            </p>
            <p>
              We ensure everyone is aligned around what is being built with
              emphasis on coherence while protecting integrity and compliance.
            </p>
          </div>
          <div className="lg:w-[40%] hidden lg:flex items-center justify-center">
            <Image src="/services/almimplementation.svg" alt="" width={300} height={450} />
          </div>
        </div>
      </div>
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="lg:w-[40%] hidden lg:flex items-center justify-center">
            <Image src="/services/datamigration.svg" alt="" width={300} height={450} />
          </div>
          <div className="lg:w-[60%] space-y-6 text-maven-white text-justify">
            <h1 className="text-maven-orange text-xl font-bold">
              Data Migration
            </h1>
            <p>
              Data migration is one of the most challenging and under-estimated
              components of enterprise system deployment and we understand that
              every migration issue is unique and different. We also understand
              that you may need assistance in a single step or a part of the
              process.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-2 text-maven-blue">
              <p className="text-maven-white font-bold text-lg">Evaluate</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 md:rotate-[270deg]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
              </svg>
              <p className="text-maven-white font-bold text-lg">Strategize</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 md:rotate-[270deg]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
              </svg>
              <p className="text-maven-white font-bold text-lg">Propose</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 md:rotate-[270deg]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
              </svg>
              <p className="text-maven-white font-bold text-lg">Execute</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 md:rotate-[270deg]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
              </svg>
              <p className="text-maven-white font-bold text-lg">Review</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
        <div className="flex flex-col gap-12 justify-between lg:flex-row">
          <div className="lg:w-[60%] space-y-6 text-maven-white text-justify">
            <h1 className="text-maven-blue text-xl font-bold">
              Teamcenter upgrades
            </h1>
            <p>
              We understand that there are specific challenges arise with new
              version of teamcenter upgrades .It may pose certain misfits.
              Existing data may not behave accordingly and specific
              customizations may not behave as required and the desired
              performance may not perticulary improve.
            </p>
            <p>
              With our extensive experience and expertise we ensure that your
              upgrade is a super success. we make sure you get the full benefit
              of your investment in upgraded projects. We take it upon us to
              deliver gain in functionality and performance. We also see it as
              an opportunity to revisit solutions and architecture and possible
              customizations as per your bespoke needs.
            </p>
          </div>
          <div className="lg:w-[40%] hidden lg:flex items-center justify-center">
            <Image src="/services/teamcenterupgrade.svg" alt="" width={300} height={450} />
          </div>
        </div>
      </div>
    </>
  );
}
