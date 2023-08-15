import Image from "next/image";
import Link from "next/link";

export default function PanelConfigurator1() {
  return (
    <section className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
      <div className="space-y-5 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl text-maven-white font-extrabold mx-auto md:text-5xl">
          Meticulous Visualization of Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-maven-blue to-maven-orange">
            Custom Verticalized Product in 3D
          </span>
        </h2>
      </div>
    </section>
  );
}
