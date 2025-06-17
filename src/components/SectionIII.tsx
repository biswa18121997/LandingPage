'use client';
import Image from "next/image";

type Card = {
  id: number;
  title: string;
  description: string;
  img: string;
};

const cards: Card[] = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et.",
    img: "/196f973663cdf3ebd39788215780f7c0a0221327.png",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et.",
    img: "/559ee03cfb70e6f3f8ffb94e9404aaa274005ea6.png",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et.",
    img: "/a9b6c33db5adfd0f031f8d8e38d2ee6ee50b92a9.png",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et.",
    img: "/c788443fb5012c58242d830b2585155f4ff15967.png",
  },
];

export default function SectionIII() {
  return (
    <section className="py-12 px-4 md:px-10 bg-white relative">
      <div className="absolute left-0 top-0 h-full w-1/2 bg-[url('/background-pattern.svg')] bg-no-repeat bg-left bg-contain pointer-events-none" />

      <div className="relative z-10 text-center max-w-3xl mx-auto mb-12">
        <p className="text-blue-600 font-semibold mb-2">Lorem ipsum dolor sit amet</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">LOREM IPSUM DOLOR SIT</h2>
        <p className="text-gray-600 text-base md:text-lg ">
          Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi
          porttitor ut aliquam mattis maecenas eget integer in nam.
        </p>
      </div>

      <div data-aos='fade-right' className="relative z-10 grid grid-cols-1 sm:grid-cols-2  gap-5 gap-x-3 justify-items-center">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm w-full border"
          >
            <div className="relative w-full h-48">
              <Image
                src={card.img}
                alt={card.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">{card.title}</h3>
              <p className="text-sm text-gray-700 mb-4">{card.description}</p>
              <a href="#" className="text-blue-600 text-sm font-semibold underline">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
