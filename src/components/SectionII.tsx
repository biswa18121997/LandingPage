import Image from "next/image";

type Item = {
  icon: string;
  title: string;
  description: string;
};

const items: Item[] = [
  {
    icon: "/d88a26e592d7f0ecbb34ed7da600a18154ec5d8a.png",
    title: "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
  },
  {
    icon: "/d88a26e592d7f0ecbb34ed7da600a18154ec5d8a.png",
    title: "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
  },
  {
    icon: "/d88a26e592d7f0ecbb34ed7da600a18154ec5d8a.png",
    title: "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
  },
];

export default function SectionII() {
  return (
    <section data-aos="slide-left" className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 gap-12 items-center px-8 py-20 bg-white text-black">
      <div>
        <h4 className="text-blue-600 font-semibold mb-2">Lorem ipsum dolor sit amet</h4>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR. EU ELIT.
        </h2>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend
          condimentum in vitae faucibus. Amet massa malesuada sit pretium. Donec
          pharetra erat lacus suspendisse ornare.
        </p>

        <div className="space-y-6">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 justify-center overflow-hidden">
              <Image
                src={item.icon}
                alt={`Icon ${idx}`}
                width={40}
                height={40}
                className=" object-none object-left-top scale-150 "
              />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative  w-full h-[500px]">
        <Image
          src="/46db0304b9e3cad81de5ae41e2d4f4d18303be29.png"
          alt="Two men talking"
          fill
          className="object-cover rounded"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    </section>
  );
}
