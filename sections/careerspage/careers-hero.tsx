import Image from "next/image";
export default function CarrersHero() {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
      <div className="flex flex-col space-y-12 justify-between lg:flex-row lg:space-y-0">
        <div className="lg:w-1/2 flex flex-col justify-center">
          <div className="flex flex-col justify-center">
            <h1 className="sm:text-4xl mb-6 text-3xl font-sans font-bold tracking-wide text-maven-white">
            We believe every effort counts,{' '}
              <span className=" text-maven-blue ">Join us!</span>
            </h1>
            <h3 className="text-maven-white max-w-2xl">
            Join us and be at the forefront of digital transformation while being part of team that values personal growth and collaboration. We are an ambitious bunch building one of a kind products for clients from varied industries and backgrounds
            </h3>
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col items-center">
          <Image
            alt="jigSaw"
            src="/forming team.svg"
            height={500}
            width={400}
          />
        </div>
      </div>
    </div>
  );
}
