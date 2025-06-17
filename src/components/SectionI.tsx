"use client";
import Image from "next/image";

type FeatureItem = {
  imgSrc: string;
  description: string;
};

const features: FeatureItem[] = [
  {
    imgSrc: "/d3372177734f2dcf637f191448eb3e51a251d39c.png",
    description: "Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.",
  },
  {
    imgSrc: "/63cf60a3e6ca843a925082154071064c58e4ea33.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis.",
  },
  {
    imgSrc: "/4c9aafdb9b19baf38f45b8f8aea652c167545432.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vestibulum nisi morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt.",
  },
];

export default function SectionI() {
  return (
    <section data-aos="slide-right" className=" grid md:grid-cols-2 min-h-screen items-center gap-5 px-6 py-12 bg-white">
      <div className="space-y-6">
        <p className="text-blue-600 font-medium">Lorem ipsum dolor sit</p>
        <h2 className="text-4xl font-bold leading-tight text-neutral-600">
          LOREM IPSUM <br /> DOLOR SIT AMET
        </h2>
        <p className="text-gray-700 max-w-xl">
          Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi
          porttitor ut aliquam mattis maecenas eget integer in nam. Non nisi iaculis at felis
          aliquet. Hendrerit tellus at purus lectus.
        </p>

        <div className="space-y-4">
          {features.map((feature, idx) => (
            <div className="flex gap-4 items-start" key={idx}>
              <div className="w-20 h-20 relative shrink-0">
                <Image
                  src={feature.imgSrc}
                  alt={`Feature ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded object-cover"
                />
              </div>
              <p className="text-gray-700 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-6 pt-6 mt-7">
          <button className="bg-blue-600 text-white px-5 py-2 rounded shadow hover:bg-blue-700 text-sm">
            Loremum Ipsum →
          </button>
          <p className="text-blue-600 font-medium ">123456789</p>
          <br />
        </div>
      </div>

      <div className="relative  w-full h-[500px]">
        <Image
          src="/3f330e7e2503a18db023ca88d2372ec66ab52634.png"
          alt="Bikes"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover rounded"
          priority
        />
      </div>
    </section>
  );
}
