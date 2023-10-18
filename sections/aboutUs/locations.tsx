import Image from "next/image";

export default function Location() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20 lg:block hidden">
      <div className="mb-20 flex justify-center">
        <h1 className="sm:text-4xl mb-6 text-3xl font-sans font-bold tracking-wide text-maven-white">
          Our <span className=" text-maven-blue">Locations</span>
        </h1>
      </div>
      <div className="w-full">
        <div className="relative">
          <Image
            src="/mapworldfull-usa.png"
            width={1280}
            height={640}
            alt="world map image"
            className="w-full  h-full"
          />
          <div className="rounded-lg p-2 w-60  bg-maven-white absolute z-20 top-[25%]  left-[51%]">
            <p className=" text-xs xl:text-sm xl:leading-5">
              <span className="font-bold">Mavenberg Innovations GmbH,</span>
              <br />
              Fürtherstraße 27,
              <br />
              90429 Nürnberg, Germany.
            </p>
          </div>
          <div className="rounded-lg p-2 w-72 bg-maven-white absolute z-20 top-[45%]  right-[6%]">
            <p className="text-xs xl:text-sm xl:leading-5">
              <span className="font-bold">
                Mavenberg Innovations India Pvt. Ltd.,
              </span>
              <br />
              7th Floor, Ncc Urban - Windsor,
              <br />
              No: 17/1, Bellary Rd, Yashoda Nagar, <br />
              Yelahanka, Bengaluru, Karnataka,
              <br />
              India-560064
            </p>
          </div>
          <div className="rounded-lg p-2 w-72 bg-maven-white absolute z-20 top-[25%]  -left-[1%]">
            <p className="text-xs xl:text-sm xl:leading-5">
              <span className="font-bold">
                Mavenberg Innovations Inc.,
              </span>
              <br />
              455 E Eisenhower PKWY STE 300 Ann Arbor,
              <br />
              MI 48108.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
