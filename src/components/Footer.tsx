'use client'

export default function Footer() {
  return (
    <footer className="bg-[#0E1623] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20">
        <div>
          <div className="bg-gray-300 text-black font-bold px-4 py-2 w-fit">
            LOGO
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
          {Array.from({ length: 4 }).map((_, columnIdx) => (
            <div key={columnIdx}>
              <h3 className="font-semibold mb-3">Lorem Ipsum</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                {Array.from({ length: 4 - columnIdx }).map((_, itemIdx) => (
                  <li key={itemIdx}>Lorem Ipsum</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
