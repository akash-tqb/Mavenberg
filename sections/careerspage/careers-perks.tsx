export default function CareersPerks() {
  return (
    <div
      id="products"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20"
    >
      <div className="flex flex-col mb-6 lg:mb-12">
        <h1 className="sm:text-5xl mb-6 text-3xl font-sans font-bold tracking-wide text-maven-white">
        Perks of a{' '}<span className=" text-maven-blue">Mavenberger</span>
        </h1>
      </div>
      <div className="flex items-center justify-center w-full">
      <div className="grid text-lg font-semibold sm:grid-cols-2 lg:grid-cols-11 gap-8">
        <div className="border  lg:col-span-3 rounded-full inline-flex items-center justify-center border-maven-white px-8 py-2 text-maven-blue">
        Paid vacation
        </div>
        <div className="border  lg:col-span-3 rounded-full inline-flex items-center justify-center border-maven-white px-8 py-2 text-maven-orange">
        Flexible work hours
        </div>
        <div className="border  lg:col-span-3 rounded-full inline-flex items-center justify-center border-maven-white px-8 py-2 text-maven-blue">
        Various Employee allowances 
        </div>
        <div className="border   lg:col-span-3 lg:col-start-2 rounded-full inline-flex items-center justify-center border-maven-white px-8 py-2 text-maven-blue">
        Training & Development
        </div>
        <div className="border  lg:col-span-3  rounded-full inline-flex items-center justify-center border-maven-white px-8 py-2 text-maven-orange">
        On-site opportunities
        </div>
        <div className="border  lg:col-span-3 rounded-full inline-flex items-center justify-center border-maven-white px-8 py-2 text-maven-blue">
        Tuition Reimbursement 
        </div>
      </div>
      </div>
    </div>
  );
}
