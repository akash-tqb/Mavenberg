import Image from "next/image";
import Link from "next/link";

export default function DVisualiser1() {
  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="space-y-5 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:mb-12 text-maven-white font-extrabold mx-auto md:text-5xl">
        View a Digital Twin Augmented in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-maven-blue to-maven-orange">
          Real Time With Insights
          </span>
        </h2>
        {/* <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
          <a
            href="/"
            className="block py-2 px-4 text-white font-medium bg-maven-orange duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
          >
            Contact Us
          </a>
        </div> */}
      </div>
    </section>
  );
}
