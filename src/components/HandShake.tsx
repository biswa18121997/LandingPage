'use client'; 

import { useState } from 'react';
import Image from 'next/image';

const tabs : string[] = ['Research', 'Plan', 'Design'];

export default function HandShake() {
  const [activeTab , setActiveTab]  = useState('Research');

//   type content = {
//     Research: string;
//     Plan: string;
//     Design: string;
//   }

  const content : Record<string, string>  = {
    Research:
      'Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.',
    Plan:
      'Purus malesuada placerat arcu at enim elit in accumsan. Aliquet lorem tortor, consequat etiam. lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.',
    Design:
      'Nulla felis ac turpis at amet. Bibendum nisl pulvinar id ac lectus gravida tincidunt eget lorem. ispsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.',
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 p-8 h-screen bg-white">
      <div className="max-w-xl w-full  hover:shadow-black shadow-sm p-5 m-5 rounded-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          LOREM IPSUM DOLOR SIT AMET
        </h2>

        <div className="inline-flex rounded-md border border-gray-300 overflow-hidden mb-4">
          {tabs.map((tab,index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 text-sm font-medium transition ${
                activeTab === tab
                  ? 'bg-white text-blue-600'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <p className="text-gray-600 text-sm mb-4">{content[activeTab]}</p>

        <a
          href="#"
          className="text-blue-600 font-medium inline-flex items-center gap-1 hover:underline"
        >
          Check tools <span>→</span>
        </a>
      </div>

      <div className="relative w-full max-w-md h-[250px] md:h-[300px] rounded-md overflow-hidden">
        <Image
          src="/58a292f9cc88b8d1b68a74ca24a02fb0524db98b.png" 
          alt="Handshake"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
