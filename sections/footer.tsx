import Image from "next/image";
import LogoOld from "../public/logoold.png"
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-maven-bg nav-shadow" id="footer">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid grid-cols-1 gap-5 lg:gap-8 mb-8 lg:grid-cols-7">
          <div className="md:max-w-md lg:col-span-3">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <div>
                <Image
                  src={LogoOld}
                  alt="Mavenberg"
                  width={200}
                  height={100}
                />
              </div>
            </a>
            <div className="mt-4 lg:max-w-md">
              <p className="text-maven-white text-justify">
                Mavenberg Innovations is a digital transformation company that
                takes end to end responsibility of your digital investment
                outcomes and transforms your business by offering products and
                services focused on managing the digital thread across your
                product's life cycle.
              </p>
              {/* <p className="mt-4 text-sm text-maven-white">
                  Eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo.
                </p> */}
            </div>
          </div>
          <Link
            href="https://goo.gl/maps/wVDifbMbenai2cBP6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col lg:justify-center gap-4 lg:col-span-2 text-maven-orange transition-colors duration-300 hover:text-teal-accent-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <div className="flex flex-col gap-2 w-11/12">
              <h1 className="text-maven-orange font-semibold">India Office</h1>
              <p className="text-maven-white transition-colors duration-300">
                7th Floor, Ncc Urban - Windsor, No: 17/1, Bellary Rd, Yashoda
                Nagar, Yelahanka, Bengaluru, Karnataka, India-560064
              </p>
            </div>
          </Link>
          <Link
            href="https://goo.gl/maps/wVDifbMbenai2cBP6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-4 lg:justify-center lg:col-span-2 text-maven-orange transition-colors duration-300 hover:text-teal-accent-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <div className="flex flex-col gap-2 w-11/12">
              <h1 className="text-maven-orange font-semibold">
                Germany Office
              </h1>
              <p className="text-maven-white transition-colors duration-300">
                Mavenberg Innovations GmbH,<br/>Fürtherstraße 27,<br />
                90429 Nürnberg, Germany.
              </p>
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-8 lg:grid-cols-4 mb-8">
          <div className="lg:flex justify-center">
            <div>
              <p className="font-medium tracking-wide text-maven-blue">
                Products
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-maven-white transition-colors duration-300 "
                  >
                    MavenDx
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/panel-configurator"
                    className="text-maven-white transition-colors duration-300 "
                  >
                    Panel Configurator
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/license-insights"
                    className="text-maven-white transition-colors duration-300 "
                  >
                    License Insights
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/tc&alias-integration"
                    className="text-maven-white transition-colors duration-300 "
                  >
                    TC & Alias Integration
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/3d-visualiser"
                    className="text-maven-white transition-colors duration-300 "
                  >
                    3D Visualizer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:flex justify-center">
            <div>
              <p className="font-medium tracking-wide text-maven-blue">
                Services
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="/services/plm&allied-services"
                    className="text-maven-white transition-colors duration-300 "
                  >
                    PLM & Allied Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/plm-managed-services"
                    className="text-maven-white transition-colors duration-300 "
                  >
                    PLM Managed Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/engineering-services"
                    className="text-maven-white transition-colors duration-300 "
                  >
                    Engineering Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:flex justify-center">
            <div>
              <p className="font-medium tracking-wide text-maven-blue">
                Quick Links
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="/aboutus"
                    className="text-maven-white transition-colors duration-300 "
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-maven-white transition-colors duration-300 "
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p className="text-base font-medium tracking-wide text-maven-blue mb-2">
              Contacts
            </p>
            <div className="flex flex-col gap-4">
              <Link
                href="mailto:info@mavenberg.com"
                className="flex flex-row space-x-4 text-maven-blue transition-colors duration-300 hover:text-teal-accent-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <p className="text-maven-white transition-colors duration-300 ">
                  info@mavenberg.com
                </p>
              </Link>
              <Link
                href="tel:+918951996331"
                className="flex flex-row space-x-4 text-maven-blue transition-colors duration-300 hover:text-teal-accent-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>

                <p className="text-maven-white transition-colors duration-300 ">
                  +91-89519 96331
                </p>
              </Link>
              <div>
                <Link
                  href="https://www.linkedin.com/company/mavenberg-innovations-india-private-limited"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 items-center"
                >
                  <p className="text-maven-white">Get Connected with Us</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    version="1.1"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 510 510"
                  >
                    <g>
                      <path
                        fill="#03E5E5"
                        d="M459 0H51C22.95 0 0 22.95 0 51v408c0 28.05 22.95 51 51 51h408c28.05 0 51-22.95 51-51V51c0-28.05-22.95-51-51-51zM153 433.5H76.5V204H153v229.5zm-38.25-272.85c-25.5 0-45.9-20.4-45.9-45.9s20.4-45.9 45.9-45.9 45.9 20.4 45.9 45.9-20.4 45.9-45.9 45.9zM433.5 433.5H357V298.35c0-20.399-17.85-38.25-38.25-38.25s-38.25 17.851-38.25 38.25V433.5H204V204h76.5v30.6c12.75-20.4 40.8-35.7 63.75-35.7 48.45 0 89.25 40.8 89.25 89.25V433.5z"
                      ></path>
                    </g>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-maven-blue lg:flex-row">
          <p className="text-sm text-maven-white">
            © Copyright 2023 Mavenberg Innovation India Pvt Ltd. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
