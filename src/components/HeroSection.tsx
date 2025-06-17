
'use client';
import Image from "next/image";
import '../app/globals.css';

export default function HeroSection() {
  return (
    <section
      data-aos="fade-up"
      className=" md:relative md:top-0 top-20 grid grid-cols-1 md:grid-cols-2 min-h-screen items-start md:items-center relative mb-0 pb-0"
    >
      <div className=" px-6 z-30 md:px-12 flex flex-col justify-end pt-20 items-center mb-5 ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          Lorem ipsum dolor sit amet
        </h1>
        <p className="text-gray-700 max-w-xl">
          Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit sociis. Sed mi
          rhoncus id habitant. In urna tellus nisi platea morbi libero imperdiet neque...
        </p>
        <div className="flex flex-col sm:flex-row gap-2 mt-4">
          <input
            type="text"
            placeholder="Your email"
            className="border px-3 py-2 rounded w-full sm:w-64"
          />
          <button className="bg-blue-800 text-white px-4 py-2 rounded shadow duration-300 hover:bg-blue-600 active:bg-blue-950 w-full sm:w-auto">
            Submit →
          </button>
        </div>
        <div className="flex items-center gap-2 text-sm mt-2 text-gray-600">
          <span className="text-blue-600">✔</span> No credit card required!
        </div>
      </div>

      <div className="relative h-64 sm:h-96 md:h-full w-full z-10 clip-polygon overflow-hidden">
        <Image
          src="/20bb68428da0911dc3730323e49cb3517ae897ac.png"
          alt="bikers"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: 'cover' }}
          className=""
          priority
        />
      </div>
    </section>
  );
}
