'use client';

import Image from 'next/image';
import React from 'react';

interface HeroWithCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  cardTitle?: string;
  cardText?: string;
  buttonLabel?: string;
}

const HeroWithCard: React.FC<HeroWithCardProps> = ({
  title = 'LOREM IPSUM DOLOR SIT AMET',
  description = `Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus quis velit 
    fringilla aliquam ultricies. Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Sed ut 
    vestibulum eget purus ornare. Risus elit et fringilla habitant ut facilisi.`,
  
  cardTitle = 'Artist & Investor',
  cardText = `Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique 
    libero, id netus tincidunt. Egestas ac arcu amet nisl quis est ...`,
  buttonLabel = 'Read Full Story',
}) => {
  return (
    <section data-aos="fade-right" className="py-16 bg-white px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          {title}
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">{description}</p>
      </div>

      <div className="relative flex justify-center items-center">
        <div className="relative w-full max-w-4xl h-[400px] rounded-lg overflow-hidden shadow">
          <Image
            src={'/d108f9f38292a096997a937a1679f0603cf67d2a.png'}
            alt="Hero"
            fill
            className="object-cover"
          />
        </div>

        {/* Floating Card */}
        <div className=" absolute bottom-50 right-15 transform translate-x-6 translate-y-6 bg-white rounded-lg shadow-lg max-w-md p-6 text-left">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{cardTitle}</h3>
          <p className="text-gray-600 mb-4 text-sm">{cardText}</p>
          <a href="#" className="text-blue-600 font-semibold hover:underline text-sm flex items-center gap-1">
            {buttonLabel}
            <span>→</span>
          </a>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="mt-8 flex justify-center items-center gap-2">
        <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
        <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
        <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
      </div>
    </section>
  );
};

export default HeroWithCard;
