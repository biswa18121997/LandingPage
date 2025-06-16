'use client';

import Image from 'next/image';
import React from 'react';

// interface ScooterShowcaseProps {
//   imageUrl?: string;
// }

export default function SectionSix() {
  return (
    <section data-aos="fade-left" className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around gap-10 px-6">
        {/* Left section */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4 leading-tight">
            LOREM IPSUM DOLOR SIT <br />
            AMET CONSECTETUR. <br />
            DIGNISSIM TELLUS.
          </h2>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi
            blandit laoreet urna sapien quam pulvinar. Dolor aliquet est tortor
            tincidunt ultricies feugiat mauris...
          </p>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium shadow-md hover:bg-blue-700 transition">
            Lorem Ipsum →
          </button>

          {/* Descriptive Card */}
          <div className="bg-white p-6  shadow-md rounded-md relative top-30">
            <h3 className="font-semibold text-gray-900 mb-3">
              Lorem ipsum dolor sit
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              Lorem ipsum dolor sit amet consectetur. Habitants vestibulum vitae amet habitasse semper.
            </p>
            <p className="text-sm text-gray-700 mb-3">
              Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut placerat vitae amet suspendisse fermentum velit. Nibh dolor nunc id tristique sit.
            </p>
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet quisque scelerisque facilisis. Ultrices lectus viverra pharetra commodo.
            </p>
          </div>
        </div>

        {/* Right image section */}
            <Image
              src={'/b516b95a7c5e758d7b71c4a5b876a7ed582abb38.png'}
              alt="Scooter Showcase"
              width={600}
              height={400}
              className="object-cover relative bottom-30"
            />
          
      </div>
      
    </section>
  );
};


