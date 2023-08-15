export default function OurTeam() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
         <div className="mb-20 flex justify-center">
          <h1 className="sm:text-4xl mb-6 text-3xl font-sans font-bold tracking-wide text-maven-white">
            Meet{" "}<span className=" text-maven-blue">Our Leaders</span>
          </h1></div>
      <div className="grid gap-10 mx-auto mb-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-20 h-20 mb-2 rounded-full shadow"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold text-maven-blue">Anand Prasad Raja</p>
            <p className="text-sm text-maven-white">Product Manager</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-20 h-20 mb-2 rounded-full shadow"
            src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold text-maven-blue">Satish Kumar</p>
            <p className="text-sm text-maven-white">Product Manager</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-20 h-20 mb-2 rounded-full shadow"
            src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold text-maven-blue">Shephali Mulay</p>
            <p className="text-sm text-maven-white">Product Manager</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-20 h-20 mb-2 rounded-full shadow"
            src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold text-maven-blue">Harihara Sudhan</p>
            <p className="text-sm text-maven-white">Product Manager</p>
          </div>
        </div>
      </div>
      <div className="lg:flex justify-center">
      <div className="grid sm:grid-cols-2 gap-10">
      <div className="flex flex-col items-center">
          <img
            className="object-cover w-20 h-20 mb-2 rounded-full shadow"
            src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold text-maven-blue">Arunprakash</p>
            <p className="text-sm text-maven-white">Product Manager</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-20 h-20 mb-2 rounded-full shadow"
            src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold text-maven-blue">Guru Siddeshkumar</p>
            <p className="text-sm text-maven-white">Product Manager</p>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
}
