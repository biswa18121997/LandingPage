
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const NoLimits: NextPage = () => {
  const images = [
    { src: "/ea1863fd23286fa487de453717250a6046d8720d.png", span: "row-span-2 col-span-2" },
    { src: "/bf5c44feb37e287d7a7637f82ed230496a608b9d.png", span: "row-span-1 col-span-1" },
    { src: "/94ff389f358746686a56be0b0edab4ac6d930aab.png", span: "row-span-2 col-span-1" },
    { src: "/63e55435903bc7a7e32437f507bf13206bef4ac8.png", span: "row-span-2 col-span-1" },
    { src: "/63cf60a3e6ca843a925082154071064c58e4ea33.png", span: "row-span-1 col-span-1" },
    { src: "/20bb68428da0911dc3730323e49cb3517ae897ac.png", span: "row-span-1 col-span-2" },
    { src: "/6e078e954b4e27ee6afe4eefb19ce5ab2124faa0.png", span: "row-span-2 col-span-1" },
    { src: "/3f330e7e2503a18db023ca88d2372ec66ab52634.png", span: "row-span-1 col-span-1" },
  ];

  return (
    <div>
      <Head>
        <title>Motorcycle Page</title>
        <meta name="description" content="Motorcycle showcase page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="max-w-7xl w-full bg-white rounded-lg shadow-lg p-6 md:p-10 grid md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <p className="text-sm uppercase tracking-wide text-gray-500">No Limits</p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              Lorem Ipsum Dolor Sit Amet
            </h1>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
            </p>
            <button className="mt-6 w-max bg-blue-600 text-white px-6 py-2 rounded flex items-center hover:bg-blue-700 transition">
              Loerum Ipsum &rarr;
            </button>
          </div>

          <div className="grid grid-cols-2 md:auto-col-[200px]  gap-4 auto-rows-[150px] sm:auto-rows-[180px] md:auto-rows-[200px]">
            {images.map((img, index) => (
              <div key={index} className={`relative w-full h-full ${img.span}`}>
                <Image
                  src={img.src}
                  alt={`Motorcycle ${index + 1}`}
                  fill
                  className="object-cover rounded"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default NoLimits;
