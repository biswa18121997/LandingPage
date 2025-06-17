import Image from 'next/image';

export default function SectionNine() {
  return (
    <section data-aos="slide-left" className="flex flex-col h-screen md:flex-row items-center justify-center p-6 bg-white rounded-md shadow-sm gap-6">
      <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
        <Image
          src="/c788443fb5012c58242d830b2585155f4ff15967.png" 
          alt="Two bikers"
          fill
          className="object-cover rounded-md"
        />
      </div>

      <div className="w-full md:w-1/2 space-y-4">
        <p className="text-sm text-blue-500 font-medium">Lorem ipsum</p>
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          <span className="text-blue-700">LOREM</span> IPSUM DOLOR SIT AMET CONSECTETUR. ENIM DONEC.
        </h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non.
        </p>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 font-bold text-sm  text-gray-700">
          {Array.from({ length: 6 }, (_, i) => (
            <p key={i}>Lorem Ipsum</p>
          ))}
        </div>

        <button className="px-4 py-2 mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-sm flex items-center gap-2">
          Lorem Ipsum <span>→</span>
        </button>
      </div>
    </section>
  );
}
