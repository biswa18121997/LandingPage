// components/HeroSection.tsx
import Image from "next/image";

export default function Banner() {
  return (
    <section data-aos="slide-up" className="relative h-[100vh] flex flex-col text-white overflow-hidden ">
        <Image
        src="/ea79ae114d7fd15769db79e9877aef227ad7fabe.png"
        alt="desc"
        fill
        sizes="100vw"
        className="object-cover z-10"
        // width={300}
        // height={300}
        // style={{ height: "auto" }}
        />

      <div className="absolute inset-0 bg-black bg-opacity-60 " />

        <div className="bg-white text-black px-4 py-1 w-max font-bold mb-6 z-10 relative m-10">
          LOGO
        </div>
         <div className="relative z-10 flex flex-col justify-center items-center max-w-full w-2/3 mx-auto h-full  m-10  rounded-2xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-wrap text-center text-white">
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA.
        </h1>
        <p className="text-base md:text-lg mb-4 text-center">
          Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisi porta massa diam condimentum nulla quam.
        </p>
        <p className="text-base md:text-lg text-center">
          Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Ornare semper in tincidunt pellentesque cras mauris in vitae. At viverra quis eu malesuada vel et porttitor. Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.
        </p>
      </div>
    </section>
  );
}
