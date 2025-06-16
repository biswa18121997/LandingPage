'use client'

// import Image from 'next/image'

// interface AccordionItemData {
//   title: string
//   content: string
// }

// const accordionData: AccordionItemData[] = [
//   {
//     title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. laudantium nostrum nam earum, ! Bio',
//     content:
//       'Enim sagittis,Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque sed, obcaecati nisi explicabo harum architecto, labore quas, voluptate quidem qui! Ab voluptate iusto fugit exercitationem aliquid, quis nulla dolores! adipisicing elit. Ullam recusandae alias, illum doloribus molestiae velit magnam corrupti laboriosam quos nulla illo delectus ipsum accusantium dolorum aliquam optio placeat provident nobis. sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est ...',
//   },
//   {
//     title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. laudantium nostrum nam earum, ! Bio',
//     content:
//       'Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, fugit perspiciatis, temporibus est explicabo tempore culpa dolores quam architecto nesciunt distinctio quod necessitatibus at voluptate ipsum ipsa odio illo dicta! Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est ...',
//   },
  

//   {
//     title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. laudantium nostrum nam earum, ! Bio',
//     content:
//       'Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus atque placeat inventore, facere, quod magni minima corrupti neque autem asperiores id, maxime magnam et aliquid repellat! Impedit reiciendis nam aperiam. libero, id netus tincidunt. Egestas ac arcu amet nisl quis est ...',
//   },
//   // Add more items as needed
// ]

// export default function FAQAccordion() {
//   return (
//     <section className="py-10 text-center px-4 min-h-screen max-h-fit">
//       <h1 className="text-3xl font-bold text-gray-900 mb-2">
//         LOREM IPSUM DOLOR SIT AMET
//       </h1>
//       <p className="text-gray-600 max-w-4xl mx-auto mb-8">
//         Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum eget purus ornare. Risus elit et fringilla habitant ut facilisi.
//       </p>

//       <div className="flex flex-col md:flex-row items-center justify-center gap-6">
       

//         <div className="bg-white shadow-xl rounded-lg p-6 w-full text-left">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4">Artist & Investor</h2>

//           {/* Accordion replacement */}
//           <div className="space-y-6">
//             {accordionData.map((item, index) => (
//               <details
//                 key={index}
//                 className=" rounded-lg border-b-2 overflow-hidden  group"
//               >
//                 <summary className="cursor-pointer h-20 flex items-center justify-between text-base font-medium gap-7 text-gray-900 duration-500 hover:bg-gray-200 px-6">
//                   {item.title}
//                   <span className="ml-4 text-2xl select-none group-open:hidden">+</span>
//                   <span className="ml-4 text-2xl select-none hidden group-open:block">-</span>                
//                 </summary>
//                 <div className="px-6 py-4 text-sm text-gray-700 h-0 group-open:h-fit duration-500">
//                   {item.content}
//                 </div>
//               </details>
//             ))}
//           </div>

//           <a
//             href="#"
//             className="inline-block mt-4 text-blue-600 font-semibold text-sm hover:underline"
//           >
//             Read Full Story →
//           </a>
//         </div>
//       </div>

     
//     </section>
//   )
// }

import { useRef, useEffect, useState } from "react";

interface AccordionItemProps {
  title: string;
  content: string;
  open: boolean;
  onClick: () => void;
}

function AccordionItem({ title, content, open, onClick }: AccordionItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      if (open) {
        ref.current.style.maxHeight = ref.current.scrollHeight + "px";
      } else {
        ref.current.style.maxHeight = "0px";
      }
    }
  }, [open]);

  return (
    <div className="border-b w-full">
      <button
        className="flex justify-between items-center w-full py-4 px-6 text-left font-medium text-gray-900 bg-gray-100 hover:bg-gray-200 transition"
        onClick={onClick}
        aria-expanded={open}
      >
        {title}
        <span className="ml-4 text-2xl select-none">{open ? "-" : "+"}</span>
      </button>
      <div
        ref={ref}
        className="overflow-hidden transition-all duration-500 ease-in-out px-6"
        style={{ maxHeight: open ? ref.current?.scrollHeight : 0 }}
      >
        <div className="py-4">{content}</div>
      </div>
    </div>
  );
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const data = [
   {
    title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. laudantium nostrum nam earum, ! Bio',
    content:
      'Enim sagittis,Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque sed, obcaecati nisi explicabo harum architecto, labore quas, voluptate quidem qui! Ab voluptate iusto fugit exercitationem aliquid, quis nulla dolores! adipisicing elit. Ullam recusandae alias, illum doloribus molestiae velit magnam corrupti laboriosam quos nulla illo delectus ipsum accusantium dolorum aliquam optio placeat provident nobis. sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est ...',
  },
  {
    title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. laudantium nostrum nam earum, ! Bio',
    content:
      'Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, fugit perspiciatis, temporibus est explicabo tempore culpa dolores quam architecto nesciunt distinctio quod necessitatibus at voluptate ipsum ipsa odio illo dicta! Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est ...',
  },
  

  {
    title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. laudantium nostrum nam earum, ! Bio',
    content:
      'Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus atque placeat inventore, facere, quod magni minima corrupti neque autem asperiores id, maxime magnam et aliquid repellat! Impedit reiciendis nam aperiam. libero, id netus tincidunt. Egestas ac arcu amet nisl quis est ...',
  },
  ];

  return (
    <div className="w-full mx-auto mt-10 bg-white rounded-lg shadow">
      {data.map((item, idx) => (
        <AccordionItem
          key={idx}
          title={item.title}
          content={item.content}
          open={openIndex === idx}
          onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
        />
      ))}
    </div>
  );
}
