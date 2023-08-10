import Image from "next/image";
import CEO from "../../public/RajaramSellamuthu.jpg";

export default function AboutUsHero() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
      <div className="flex flex-col gap-12 justify-between lg:flex-row mb-20">
        <div className="flex flex-col max-w-xl">
          <h1 className="sm:text-5xl mb-6 text-3xl font-sans font-bold tracking-wide text-maven-white">
            About <span className=" text-maven-blue ">Us</span>
          </h1>
          <h3 className="text-maven-white text-justify">
            We are a team of seasoned professional and curious youngsters
            striving to connect voluminous data stored in various systems used
            by the customers. Having worked with global customers who
            manufacture wide variety of products, we excel in PLM consulting,
            implementation, migration, integrating enterprise applications, and
            providing application support. In the last 4 years, we have
            partnered with more than 20 customers in their digitalization
            journey.
          </h3>
        </div>
        <div className="flex flex-col items-center p-4 justify-center">
          {/* <img
            className="object-cover w-24 h-24 rounded-full shadow"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt="Person"
          /> */}
          <div className="flex flex-col justify-center border border-maven-blue border-b-4 rounded-lg p-8">
            <Image
              width={300}
              height={300}
              className="object-cover w-28 h-28 mb-2 rounded-full shadow"
              src={CEO}
              alt="Person"
            />
            <p className="text-lg font-bold text-maven-blue mb-4">
              From CEO's Desk
            </p>
            <p className="mb-4 tracking-wide italic text-maven-white">
              "When you view customers goals as your own, your efforts become
              effortless. The idea of Mavenberg is to nurture such a culture"
            </p>
            <p className="text-maven-orange flex justify-end">
              -Rajaram Sellamuthu
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className=" relative border md:m-0 border-maven-white rounded p-8 z-40 bg-maven-bg">
          <h1 className="sm:text-5xl mb-6 text-3xl font-sans justify-center flex font-bold tracking-wide text-maven-orange">
            70+
          </h1>
          <h3 className="sm:text-3xl mb-3 mt-6 text-xl justify-center flex font-sans font-bold tracking-wide text-maven-white">
            Employees
          </h3>
          <div className="absolute h-20 w-20 hidden md:block bg-maven-blue rounded-full top-[-20%] left-[-10%]"></div>
        </div>
        <div className="relative border  md:m-0 border-maven-white rounded p-8 z-20 bg-maven-bg">
          <h1 className="sm:text-5xl mb-6 text-3xl font-sans justify-center flex font-bold tracking-wide text-maven-blue">
            20+
          </h1>
          <h3 className="sm:text-3xl mb-3 mt-6 text-xl justify-center flex font-sans font-bold tracking-wide text-maven-white">
            Customers
          </h3>
          <div className="absolute h-20 w-20 hidden lg:block bg-maven-orange rounded-sm top-[80%] left-[-15%]"></div>
        </div>
        <div className="relative border md:m-0 md:col-span-2 lg:col-span-1 border-maven-white rounded p-8">
          <h1 className="sm:text-5xl mb-6 text-3xl font-sans justify-center flex font-bold tracking-wide text-maven-orange">
            30+
          </h1>
          <h3 className="sm:text-3xl mb-3 mt-6 text-xl justify-center flex font-sans font-bold tracking-wide text-maven-white">
            Projects
          </h3>
          <div className="absolute h-20 w-20 hidden lg:block bg-maven-orange rounded-sm top-[-20%] left-[-15%]"></div>
          <div className="absolute hidden lg:block top-[-1%] right-[-13%] w-0 h-0 border-t-[75px] border-l-[50px] border-r-[50px] border-r-transparent border-l-transparent border-t-maven-blue"></div>
        </div>
      </div>
    </div>
  );
}
