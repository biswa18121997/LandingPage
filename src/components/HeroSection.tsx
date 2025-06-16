// app/components/HeroSection.tsx
import Image from "next/image";
import '../app/globals.css'
export default function HeroSection() {
  return (
    <section data-aos="fade-up" className="grid md:grid-cols-2 items-center min-h-screen relative">
      {/* Left Text Section */}
      <div className="space-y-4 px-6 py-12 z-10 relative">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Lorem ipsum dolor sit amet
        </h1>
        <p className="text-gray-700 max-w-xl">
          Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit sociis. Sed mi
          rhoncus id habitant. In urna tellus nisi platea morbi libero imperdiet neque...
        </p>
        <div className="flex space-x-2 mt-4">
          <input
            type="text"
            placeholder="Your email"
            className="border px-3 py-2 rounded w-64"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
            Submit →
          </button>
        </div>
        <div className="flex items-center gap-2 text-sm mt-2 text-gray-600">
          <span className="text-blue-600">✔</span> No credit card required!
        </div>
      </div>

      {/* Right Image Section */}
      <div className=" block h-screen clip-polygon z-30 static">
        <Image
          src="/20bb68428da0911dc3730323e49cb3517ae897ac.png"
          alt="bikers"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
    </section>
  );
}
