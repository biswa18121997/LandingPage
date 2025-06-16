import type { NextPage } from "next";
import Head from "next/head";

const NoLimits: NextPage = () => {
  // Placeholder image URLs (you can replace these with actual URLs or local assets)
  const images = [
    "/ea1863fd23286fa487de453717250a6046d8720d.png",
    "/bf5c44feb37e287d7a7637f82ed230496a608b9d.png",
    "/94ff389f358746686a56be0b0edab4ac6d930aab.png",
    "/63e55435903bc7a7e32437f507bf13206bef4ac8.png",
    "/63cf60a3e6ca843a925082154071064c58e4ea33.png",
    "/20bb68428da0911dc3730323e49cb3517ae897ac.png",
    "/6e078e954b4e27ee6afe4eefb19ce5ab2124faa0.png",
    "/3f330e7e2503a18db023ca88d2372ec66ab52634.png",
  ];

  return (
    <div>
      <Head>
        <title>Motorcycle Page</title>
        <meta name="description" content="Motorcycle showcase page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="max-w-5xl w-full bg-white rounded-lg shadow-lg p-6">
          {/* Header Section */}
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-gray-800 uppercase">
              No Limits Lorem Ipsum Dolor Sit Amet
            </h1>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae
              porttitor pharetra tempor quis arcu. Ipsum nullam.
            </p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded flex items-center hover:bg-blue-700 transition">
              Lorem Ipsum
             
            </button>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Left Column (Text and Button) */}
            <div className="md:col-span-1">
              {/* This space is already occupied by the header above */}
            </div>

            {/* Right Column (Image Grid) */}
            <div className="md:col-span-2">
              <div className="grid grid-cols-2 auto-rows-min gap-4">
                {images.map((src, index) => (
                  <div key={index} className="w-full">
                    <img
                      src={src}
                      alt={`Motorcycle ${index + 1}`}
                      className="w-auto h-auto object-cover rounded"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NoLimits;