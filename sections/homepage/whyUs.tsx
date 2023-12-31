import Image from "next/image";
import "aos/dist/aos.css";
import AOS from 'aos'
import { useEffect } from "react";
export default function WhyUs() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mb-6" data-aos='fade-down' data-aos-easing='ease-in'>
        <h1 className="sm:text-4xl mb-6 text-3xl font-bold tracking-wide text-maven-white">
          Why <span className=" text-maven-blue">Us?</span>
        </h1>
        {/* <h3 className="text-maven-white">
          Experience and Expertise: Our team is brimming with experience and
          expertise in various industries and it’s verticals.
        </h3> */}
      </div>
      <div className="flex justify-between flex-row space-y-0">
        <div className="flex flex-col space-y-8 p-4 lg:p-8 lg:w-3/4">
          <div className="flex flex-col gap-4" data-aos='fade-up' data-aos-easing='ease-in'>
            <h1 className="text-lg font-medium text-maven-orange capitalize">
              Your needs take precedence over ours
            </h1>
            <div className="flex flex-col gap-4 md:ml-12">
            <div className="flex flex-row gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-maven-blue"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <p className="text-maven-white w-11/12">
                {" "}
                We aim to elevate beyond the role of a mere vendor and transform
                into valued partners.
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-maven-blue"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <p className="text-maven-white w-11/12">
                We strive for active engagement rather than passive contribution.
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-maven-blue"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <p className="text-maven-white w-11/12">
                We emphasize collaborative participation as partners.
              </p>
            </div>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row gap-4"  data-aos='fade-up' data-aos-easing='ease-in'>
            <div className="w-10 h-10 rounded-md p-2 bg-maven-blue flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="text-maven-bg h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </div>
            <div className="flex flex-col md:gap-4">
              <h1 className="text-lg text-maven-blue font-medium">
                Experience
              </h1>
              <p className="text-maven-white">
                Mavenbergers are a youthful team fueled by strong enthusiasm and
                work ethics with a collective experience of a century!{" "}
              </p>
              <p className=" text-maven-white">
                We surpass expectations with our exceptional efforts!{" "}
              </p>
              <p className=" text-maven-white">
                Individually, we excel in a diverse range of skills, and as a
                collective, we thrive in mastering a wide array of disciplines.
              </p>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row gap-4"  data-aos='fade-up' data-aos-easing='ease-in'>
            <div className="w-10 h-10 rounded-md p-2 bg-maven-blue flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="text-maven-bg h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </div>
            <div className=" flex flex-col gap-4">
              <h1 className="text-lg text-maven-blue font-medium">
                Engagement Model
              </h1>
              <p className="text-maven-white">
              Keeping flexibility in mind and understanding that each requirement from you needs the highest form of effective communication. We follow a hybrid engagement model that enables us to be:{" "}
              </p>

              <div className="flex flex-row gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-maven-blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <p className="text-maven-white w-11/12">
                Providing the best practices in resource management.
               </p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-maven-blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <p className="text-maven-white w-11/12">Cost effective</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-maven-blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <p className="text-maven-white w-11/12">Flexibile</p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row gap-4"  data-aos='fade-up' data-aos-easing='ease-in'>
            <div className="w-10 h-10 rounded-md p-2 bg-maven-blue flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="text-maven-bg h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </div>
            <div className=" flex flex-col md:gap-4">
              <h1 className="text-lg text-maven-blue font-medium">
                Delivery Methodology
              </h1>
              <p className="text-maven-white">
                We understand that every problem statement is unique and there
                is no one-size-fits-all approach. Hence, the crux of our
                delivery methodology consists of:
              </p>
              <div className="flex flex-col md:flex-row items-center gap-2 text-maven-blue">
                <p className="text-maven-white font-bold text-lg">Discover</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 md:rotate-[270deg]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                  />
                </svg>
                <p className="text-maven-white font-bold text-lg">Align</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 md:rotate-[270deg]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                  />
                </svg>
                <p className="text-maven-white font-bold text-lg">Develop</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 md:rotate-[270deg]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                  />
                </svg>
                <p className="text-maven-white font-bold text-lg">Validate</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 md:rotate-[270deg]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                  />
                </svg>
                <p className="text-maven-white font-bold text-lg">Deliver</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 md:rotate-[270deg]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                  />
                </svg>

                <p className="text-maven-white font-bold text-lg">Monitor</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex items-center hidden">
          <Image
            src="/mission.svg"
            width={400}
            height={400}
            alt="design circle"
            data-aos='fade-down' data-aos-easing='ease-in'
          />
        </div>
      </div>
    </div>
  );
}
