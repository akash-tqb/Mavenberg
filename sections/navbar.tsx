import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import navImage from "../public/independenceday.svg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);

  return (
    <div className="bg-maven-bg lg:sticky lg-nav-shadow lg:z-50 lg:top-0">
      <div className="px-4 py-6 mx-auto lg:py-2 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between lg:justify-center lg:space-x-16 lg:py-4 ">
          <div className="absolute left-0 hidden lg:flex">
            <div className="relative">
            <p className="text-lg tracking-wider text-maven-orange">
              Happy <span className="text-maven-white">Independence</span>{" "}
              <span className="text-[#22c55e]">Day</span>
            </p>
            <Image
              src="/independenceday.svg"
              width={200}
              height={100}
              className="absolute top-[-80%] opacity-50"
              alt="navimage"
            />
            <Image
            src="/flag.gif"
            width={128}
            height={88}
            className="absolute h-10 w-14 right-[-25%] -rotate-6 top-[-60%] opacity-60"
            alt="nav-flag"/>
            </div>
                      </div>
          <ul className="items-center hidden space-x-12 lg:flex">
            <li>
              <Link
                href="/#products"
                className="font-medium tracking-wide text-maven-white transition-colors duration-200 hover:text-maven-blue"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/#services"
                className="font-medium tracking-wide text-maven-white transition-colors duration-200 hover:text-maven-blue"
              >
                Services
              </Link>
            </li>
            {/* <li>
              <Link
                href="/"
                className="font-medium tracking-wide text-maven-white transition-colors duration-200 hover:text-maven-blue"
              >
                Pricing
              </Link>
            </li> */}
          </ul>
          <Link
            href="/"
            aria-label="Mavenberg"
            title="Mavenberg"
            className="inline-flex items-center justify-center"
          >
            <div>
              <Image
                src="/logoHex.png"
                alt="Mavenberg"
                width={50}
                height={50}
              />
            </div>
          </Link>
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                href="/aboutus"
                className="font-medium tracking-wide text-maven-white transition-colors duration-200 hover:text-maven-blue"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                aria-label="Careers"
                title="Careers"
                className="font-medium tracking-wide text-maven-white transition-colors duration-200 hover:text-maven-blue"
              >
                Careers
              </Link>
            </li>
            {/* <li>
              <Link
                href="/"
                aria-label="Contact Us"
                title="Contact Us"
                className="font-medium tracking-wide text-maven-white transition-colors duration-200 hover:text-maven-blue"
              >
                Contact Us
              </Link>
            </li> */}
          </ul>
          <div className="lg:flex absolute right-0 hidden">
            <Link
              href="/#footer"
              className="inline-flex  items-center justify-center h-10 px-6 font-medium tracking-wide text-maven-bg transition duration-200 rounded-lg shadow-md bg-maven-blue focus:shadow-outline focus:outline-none"
            >
              Contact Us
            </Link>{" "}
          </div>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-maven-white" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-maven-bg shadow-md shadow-maven-blue border rounded">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <div>
                          <Image
                            src="/logoHex.png"
                            alt="Mavenberg"
                            width={50}
                            height={50}
                          />
                        </div>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded  focus:bg-maven-white focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg
                          className="w-5 text-maven-white"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          href="/#products"
                          className="font-medium tracking-wide text-maven-white transition-colors duration-200 "
                        >
                          Product
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/#services"
                          className="font-medium tracking-wide text-maven-white transition-colors duration-200 "
                        >
                          Services
                        </Link>
                      </li>
                      {/* <li>
                        <a
                          href="/"
                          className="font-medium tracking-wide text-maven-white transition-colors duration-200"
                        >
                          Pricing
                        </a>
                      </li> */}
                      <li>
                        <Link
                          href="/aboutus"
                          className="font-medium tracking-wide text-maven-white transition-colors duration-200"
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/careers"
                          className="font-medium tracking-wide text-maven-white transition-colors duration-200"
                        >
                          Careers
                        </Link>
                      </li>
                      {/* <li>
                        <Link
                          href="/"
                          className="font-medium tracking-wide text-maven-white transition-colors duration-200"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Sign up
                        </Link>
                      </li> */}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
