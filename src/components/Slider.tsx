'use client';
import Image from 'next/image';

const testimonials = [
  {
    icon: '⚡', 
    text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod.",
    name: "Jane Cooper",
    avatar: "/0cc01b19636d56320e77e0c30059f5904a28075c.jpg"
  },
  {
    icon: '⭐',
    text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque.",
    name: "Ralph Edwards",
    avatar: "/5cb0be39b2c74b3ecb21ab1072178c96b4d1002f.jpg"
  },
  {
    icon: '🏰',
    text: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Vivamus fermentum consequat aenean libero.",
    name: "Courtney Henry",
    avatar: "/8604eac3a133e5565bc0d4b1f4935a0c29d9b29d.jpg"
  },
  {
    icon: 'ℹ️',
    text: "Hendrerit augue ut nec quis integer netus. Sit rhoncus habitant tellus ornare. Hendrerit ut senectus.",
    name: "Cameron Williamson",
    avatar: "/3ecb1e9aa85b510d3d1428b1c489a04f38d17d22.jpg"
  },
];

export default function Slider() {
  return (
    <section className="bg-blue-600 text-white py-16 px-4 md:px-12 h-fit">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-lg font-medium">Join other Sun harvesters</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">LOREM IPSUM DOLOR SIT AMET</h2>
          <p className="mt-4 text-gray-200 max-w-3xl mx-auto">
            Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue.
          </p>
          <button className="mt-6 px-5 py-2 bg-white text-blue-600 font-semibold rounded shadow hover:bg-gray-100">
            Lorem Ipsum
          </button>
        </div>

        <div className="flex gap-6 overflow-x-scroll md:flex-nowrap pb-5">
          {testimonials.map((item, i) => (
            <div key={i} className="bg-white  text-black rounded-lg p-5 shadow-md flex flex-col justify-between min-h-64 min-w-96 max-w-full overflow-y-scroll">
              <div>
                <div className="text-3xl mb-4">{item.icon}</div>
                <p className="text-sm text-gray-700 mb-6">{item.text}</p>
              </div>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-8 h-8 rounded-full overflow-hidden relative">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm font-medium">{item.name}</p>
              </div>
            </div>
          ))}
          <br />
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-blue-600 transition">
            ←
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-blue-600 transition">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
