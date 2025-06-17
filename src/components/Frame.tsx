import Image from "next/image";

export default function Frame() {
  return (
    <section data-aos="fade-left" className="relative h-[100vh] flex flex-col text-white overflow-hidden ">
        <Image
        src="/883e008d2648b6ba1b6808bc95d6eb3d8925e080.png"
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
        <h1 className="text-4xl md:text-4xl font-bold mb-6 leading-tight text-wrap text-center text-white w-full">
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA.
        </h1>
      </div>
    </section>
  );
}
