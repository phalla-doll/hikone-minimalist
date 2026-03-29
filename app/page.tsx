import Image from 'next/image';
import { ShoppingBag, ChevronDown } from 'lucide-react';

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="10" x2="21" y2="10"></line>
    <line x1="3" y1="14" x2="21" y2="14"></line>
  </svg>
);

const products = [
  {
    id: 1,
    name: 'BLACK MAX TABLET',
    originalPrice: 450.0,
    price: 345.0,
    image: 'https://picsum.photos/seed/tablet/600/600',
  },
  {
    id: 2,
    name: 'DESK PEN HOLDER',
    originalPrice: 87.0,
    price: 65.0,
    image: 'https://picsum.photos/seed/penholder/600/600',
  },
  {
    id: 3,
    name: 'BLACK MARKERS SET',
    originalPrice: 92.0,
    price: 81.0,
    image: 'https://picsum.photos/seed/markers/600/600',
  },
  {
    id: 4,
    name: 'CERAMIC PLANT POT',
    price: 34.0,
    image: 'https://picsum.photos/seed/pot/600/600',
  },
  {
    id: 5,
    name: 'BLACK PAPER CLIP',
    originalPrice: 23.0,
    price: 10.0,
    image: 'https://picsum.photos/seed/clip/600/600',
  },
  {
    id: 6,
    name: 'COLORED DESIGN BOX',
    price: 126.0,
    image: 'https://picsum.photos/seed/box/600/600',
  },
  {
    id: 7,
    name: 'TUBE PAPER BOX',
    price: 67.0,
    image: 'https://picsum.photos/seed/tube/600/600',
  },
  {
    id: 8,
    name: 'BLUE POT PLANT',
    originalPrice: 103.0,
    price: 78.0,
    image: 'https://picsum.photos/seed/bluepot/600/600',
  },
  {
    id: 9,
    name: 'GOLD METAL BOX',
    price: 89.0,
    image: 'https://picsum.photos/seed/goldbox/600/600',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="px-8 py-10 flex items-center justify-between sticky top-0 bg-[#f5f4f0]/90 backdrop-blur-sm z-50">
        <div className="flex items-center gap-12">
          <h1 className="text-2xl font-bold tracking-[0.1em] uppercase">Hikone</h1>
          <button className="p-2 -ml-2 hover:bg-black/5 rounded-full transition-colors">
            <MenuIcon />
          </button>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-[11px] font-bold tracking-[0.15em] uppercase">
          <a href="#" className="hover:text-black/60 transition-colors">Home</a>
          <a href="#" className="hover:text-black/60 transition-colors">Pages</a>
          <a href="#" className="hover:text-black/60 transition-colors">Work</a>
          <a href="#" className="hover:text-black/60 transition-colors">Blog</a>
          <a href="#" className="hover:text-black/60 transition-colors">Shop</a>
          <a href="#" className="hover:text-black/60 transition-colors">Features</a>
        </nav>

        <div className="flex items-center">
          <button className="relative p-2 -mr-2 hover:bg-black/5 rounded-full transition-colors flex items-center gap-1">
            <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
            <span className="text-[11px] font-bold">0</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow px-8 pb-24">
        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between py-6 text-[11px] font-bold tracking-[0.15em] uppercase border-b border-black/10 mb-12">
          <div className="flex items-center gap-8 mb-4 md:mb-0">
            <a href="#" className="text-black">All Products</a>
            <a href="#" className="text-black/50 hover:text-black transition-colors">Devices</a>
            <a href="#" className="text-black/50 hover:text-black transition-colors">Stationery</a>
            <a href="#" className="text-black/50 hover:text-black transition-colors">Plants</a>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity">
            <span>Default sorting</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-square bg-[#e8e6e1] mb-6 relative overflow-hidden flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-[11px] font-bold tracking-[0.15em] uppercase">{product.name}</h3>
                <div className="text-[11px] font-bold flex gap-3">
                  {product.originalPrice && (
                    <span className="line-through text-black/50">${product.originalPrice.toFixed(2)}</span>
                  )}
                  <span>${product.price.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#ebe9e4] px-8 pt-24 pb-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-[40px] font-medium leading-[1.2] mb-24 max-w-md tracking-tight">
            DON'T BE SHY,<br />JUST SAY HI!
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
            <div>
              <h4 className="font-bold uppercase mb-6 text-[11px] tracking-[0.15em]">San Diego</h4>
              <p className="text-black/70 leading-relaxed text-[13px]">
                935 Ashcraft Court,<br />
                San Diego CA, 92104
              </p>
            </div>
            
            <div>
              <h4 className="font-bold uppercase mb-6 text-[11px] tracking-[0.15em]">Start a conversation</h4>
              <div className="flex flex-col gap-2 text-black/70 text-[13px]">
                <a href="mailto:hi@neuronthemes.com" className="hover:text-black transition-colors">hi@neuronthemes.com</a>
                <a href="tel:+18587556922" className="hover:text-black transition-colors">+1.858.755.6922</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold uppercase mb-6 text-[11px] tracking-[0.15em]">Career</h4>
              <div className="flex flex-col gap-2 text-black/70 text-[13px]">
                <p>Work somewhere you can be proud of!</p>
                <a href="#" className="hover:text-black transition-colors underline underline-offset-4 decoration-black/30 w-fit">View Current Opportunities</a>
              </div>
            </div>

            <div className="flex flex-col gap-4 font-bold uppercase text-[11px] tracking-[0.15em]">
              <a href="#" className="hover:text-black/60 transition-colors">Facebook</a>
              <a href="#" className="hover:text-black/60 transition-colors">Twitter</a>
              <a href="#" className="hover:text-black/60 transition-colors">Instagram</a>
              <a href="#" className="hover:text-black/60 transition-colors">Behance</a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-black/10 text-[10px] uppercase tracking-[0.15em] text-black/50">
            <div className="flex gap-6 mb-4 md:mb-0">
              <a href="#" className="hover:text-black transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            </div>
            <div className="text-black font-bold">
              www.DownloadNewThemes.com
            </div>
            <div>
              ©2022NeuronThemes. All rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
