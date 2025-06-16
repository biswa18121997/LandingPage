// components/BrandLogos.tsx
import Image from "next/image";

const brands = [
  { name: "Hero", src: "/f30a20c793164c02e92df15ac3e046102e4de474.png" },
  { name: "Honda", src: "/36e2135d88c8ac0d9f239bc8f2954062c5a5bec9.png" },
  { name: "Bajaj", src: "/79fb86c90de20949b3fa95afaa8ea29a33eadab4.png" },
  { name: "TVS", src: "/443ef5606a76d7c3a2ec14bd8d4cde62cffd948c.png" },
  { name: "Royal Enfield", src: "/a64d4abe48c7f7575f6d19c1f64726c9a74b457b.png" },
  { name: "Yamaha", src: "/18b9444bf639dd200e47b671704e6f19ce6469bf.png" },
  { name: "KTM", src: "/c7ca94558456caec47a2a67e338006c83a46a508.png" },
  { name: "Ather", src: "/1da253e01265b06f410642297ee0f0566d8b7255.jpg" },
  { name: "Ola Electric", src: "/05d3385ddcf9342fdef29246d130fb753924364f.png" },
  { name: "Revolt", src: "/93908dc9e8c754b2cdc66cb7332bf1379ee24b51.png" },
  { name: "Ultraviolette", src: "/faedee766bf1d25b03e555c1d683b5615c2e7fa8.jpg" },
  { name: "Tork Motors", src: "/e45242971467d105171431ea55f913ba5f4c17dd.jpg" },
];

export default function Brands() {
  return (
    <section className="py-10 px-6 text-center bg-white">
      <h2 className="text-2xl md:text-4xl font-extrabold mb-10 text-black ">
        LOREM IPSUM DOLOR SIT AMET <br /> CONSECTETUR. COMMODO LEO AMET.
      </h2><br /><br />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
        {brands.map((brand) => (
          <div key={brand.name} className="relative w-[100px] h-[100px]">
            <Image
              src={brand.src}
              alt={brand.name}
              fill
            //   sizes="(max-width: 768px) 100px, 120px"
              className="object-contain scale-150"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
