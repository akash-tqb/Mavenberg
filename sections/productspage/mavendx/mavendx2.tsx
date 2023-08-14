import Image from "next/image";
import Link from "next/link";

export default function MavenDX2() {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <Image src="/left portion.svg" className="w-full h-full" width={350} height={350} alt="" />
          </div>
          <div className="flex items-center justify-center">
          <Image src="/MDX.gif" className="w-full" width={350} height={350} alt="" />
          </div>
          <div>
            <Image src="/right portion.svg" className="w-full h-full"  width={350} height={350} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
