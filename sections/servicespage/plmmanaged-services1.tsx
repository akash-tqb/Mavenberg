export default function PlmManagedServices1() {
  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="space-y-5 max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl text-maven-white font-extrabold mx-auto md:text-5xl mb-12">
          PLM Managed{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-maven-blue to-maven-orange">
            Services
          </span>
        </h1>
        <h1 className="mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-maven-white sm:text-4xl md:mx-auto">
          Cloud Infrastructure{' '}<span className="text-maven-blue">Management</span>
        </h1>
        <p className="text-maven-white">
          Our cloud infrastructure management solutions facilitate the
          configuration, monitoring and optimization of complex environments,
          allowing your IT teams to maximize the advantages and minimize the
          challenges of cloud computing
        </p>
      </div>
      <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
      <div className="duration-300 transform border-maven-blue border border-l-4  shadow-sm hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 border-maven-blue rounded-r shadow-sm">
          <h6 className="mb-2 font-semibold leading-5 text-maven-blue">
            Resource Provisioning
          </h6>
          <p className=" text-maven-white">
            Efficiently allocate and manage computing, storage, and network
            resources and their configuration
          </p>
          </div>
        </div>
        <div className="duration-300 transform border-maven-blue border border-l-4  shadow-sm hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 border-maven-blue rounded-r shadow-sm">
          <h6 className="mb-2 font-semibold leading-5 text-maven-blue">
            Auto-Scaling
          </h6>
          <p className=" text-maven-white">
            Dynamically adjust resources based on traffic and demand
            fluctuations with real-time alerts
          </p>
          </div>
        </div>
        <div className="duration-300 transform border-maven-blue border border-l-4  shadow-sm hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 border-maven-blue rounded-r shadow-sm">
          <h6 className="mb-2 font-semibold leading-5 text-maven-blue">
            Security
          </h6>
          <p className=" text-maven-white">
            Implement security measures, access controls, and encryption
            protocols
          </p>
          </div>
        </div>
        <div className="duration-300 transform border-maven-blue border border-l-4  shadow-sm hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 border-maven-blue rounded-r shadow-sm">
          <h6 className="mb-2 font-semibold leading-5 text-maven-blue">
            Cost Optimization
          </h6>
          <p className=" text-maven-white">
            Analyze usage patterns and optimize resource allocation to minimize
            costs
          </p>
          </div>
        </div>
        <div className="duration-300 transform border-maven-blue border border-l-4  shadow-sm hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 border-maven-blue rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5 text-maven-blue">
              Application Deployment
            </h6>
            <p className=" text-maven-white">
              Deploy and manage applications, containers, and microservices
            </p>
          </div>
        </div>
        <div className="duration-300 transform border-maven-blue border border-l-4  shadow-sm hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 border-maven-blue rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5 text-maven-blue">
              Migration Assistance
            </h6>
            <p className=" text-maven-white">
              Plan and execute the migration of applications and data to the
              cloud
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
