'use client'

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
