"use client";
import Image from "next/image";

export default function Mockup() {
  return (
    <section data-aos="fade-right" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 bg-gray-200 p-20">
        <div className="md:w-1/2 space-y-5">
          <p className="text-blue-600 text-lg font-bold">Lorem Ipsum</p>
          <h2 className="text-4xl font-bold leading-tight text-neutral-600">
            Lorem Ipsum Dolor <br /> Sit Amet
          </h2>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi
            suspendisse convallis. Urna a urna lectus donec felis risus duis
            pellentesque. Pellentesque ultricies ipsum.
          </p>

          <div className="flex gap-4 mt-6">
            <a href="#">
              <Image
                src="/a718bb876cd83cdd0ae8eaa2ae11c4bf4fd0eb4a.png"
                alt="Get it on Google Play"
                width={160}
                height={50}
              />
            </a>
            <a href="#">
              <Image
                src="/81c204b43e567df45105fdea7355b0daa905ac87.png"
                alt="Download on the App Store"
                width={160}
                height={50}
              />
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/4785f5f48409722dcd0eec7c2ca7ba20cbe7823d.png"
            alt="Phone Preview"
            width={300}
            height={600}
            className="object-contain scale-250"
          />
        </div>
      </div>
    </section>
  );
}
