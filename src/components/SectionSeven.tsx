'use client'

export default function SectionSeven() {
  return (
    <section className="flex flex-col items-center justify-center py-20 text-center px-4 bg-white h-screen">
      <div className="bg-gray-200 px-4 py-1 rounded-md text-black font-bold text-lg mb-4">
        LOGO
      </div>

      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
        LOREM IPSUM DOLOR SIT AMET <br className="hidden md:block" /> CONSECTETUR. DUI.
      </h1>

      <p className="text-gray-600 max-w-xl mb-6">
        Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
      </p>

      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow transition-all">
        Loerum Ipsum →
      </button>
    </section>
  )
}
