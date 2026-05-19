import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Instagram, 
  Mail, 
  MapPin, 
  ShoppingBag, 
  ShieldCheck, 
  Truck, 
  RotateCcw,
  Star,
  ChevronRight,
  ChevronLeft,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

const HERO_IMAGE = "/src/assets/images/hero_lookbook_1779182312775.png";
const PRODUCT_IMAGE = "/src/assets/images/product_earrings_1779182331257.png";
const DETAIL_IMAGE = "/src/assets/images/opal_detail_1779182399662.png";
const EDITORIAL_MODEL_1 = "/src/assets/images/model_earring_profile_v2_1779182740697.png";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const galleryImages = [
    PRODUCT_IMAGE,
    EDITORIAL_MODEL_1,
    DETAIL_IMAGE,
    HERO_IMAGE
  ];

  return (
    <div className="min-h-screen">
      {/* Promotion Bar */}
      <div className="bg-brand-dark text-brand-cream text-[10px] uppercase tracking-[0.3em] py-2 text-center font-medium">
        Complimentary expression shipping on orders over $250
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 bg-brand-cream/80 backdrop-blur-md border-b border-brand-dark/5">
        <div className="flex-1 hidden md:flex gap-8 text-[10px] uppercase tracking-widest font-semibold">
          <a href="#" className="hover:text-brand-gold transition-colors">Shop</a>
          <a href="#" className="hover:text-brand-gold transition-colors">The Edit</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Journal</a>
        </div>
        
        <div className="text-2xl font-serif tracking-[0.3em] uppercase flex-shrink-0">
          Opal <span className="italic text-brand-gold">Studio</span>
        </div>

        <div className="flex-1 flex justify-end items-center gap-6">
          <div className="hidden md:flex items-center gap-6 text-[10px] uppercase tracking-widest font-semibold">
            <a href="#" className="hover:text-brand-gold transition-colors">Account</a>
            <button className="relative hover:text-brand-gold transition-colors">
              <ShoppingBag size={18} />
              <span className="absolute -top-2 -right-2 bg-brand-gold text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center">1</span>
            </button>
          </div>
          <button onClick={() => setIsMenuOpen(true)} className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Hero Section - Split Layout */}
      <section className="min-h-[90vh] grid md:grid-cols-2">
        <div className="flex flex-col justify-center section-padding bg-brand-cream">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-xl"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-brand-gold mb-6 block font-bold">Limited Edition</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 leading-[0.9] italic">
              Sea Turtle <br /><span className="not-italic">Opal Drops</span>
            </h1>
            <p className="text-lg text-brand-dark/70 font-light mb-12 leading-relaxed">
              Symbolizing longevity and grace, our handcrafted turtle earrings feature rare cerulean opals set in reclaimed sterling silver. A masterpiece of ethical luxury.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center gap-3">
                $189 — Add to Bag <ShoppingBag size={16} />
              </button>
              <button className="px-8 py-4 text-xs uppercase tracking-[0.2em] font-bold border border-brand-dark/20 hover:border-brand-dark transition-colors flex items-center justify-center">
                The Collection
              </button>
            </div>
            
            <div className="mt-16 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-cream bg-brand-beige" />
                ))}
              </div>
              <div className="text-[10px] uppercase tracking-widest text-brand-dark/50">
                <span className="text-brand-dark font-bold">4.9/5</span> from 1.2k collectors
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="relative overflow-hidden bg-brand-beige">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            src={EDITORIAL_MODEL_1} 
            alt="Product on Model" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-dark/5" />
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-y border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <ShieldCheck size={20} />, title: "Lifetime Warranty", desc: "Crafted to last generations" },
            { icon: <Truck size={20} />, title: "Global Shipping", desc: "Insured door-to-door delivery" },
            { icon: <RotateCcw size={20} />, title: "30-Day Returns", desc: "No-questions-asked policy" },
            { icon: <ShoppingBag size={20} />, title: "Gift Wrapping", desc: "Complimentary signature box" }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-3">
              <div className="text-brand-gold">{item.icon}</div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold mb-1">{item.title}</p>
                <p className="text-[10px] text-brand-dark/40">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Details Section */}
      <section className="section-padding bg-brand-cream">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <div className="order-2 md:order-1">
            <div className="relative aspect-[4/5] bg-brand-beige overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeGalleryIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={galleryImages[activeGalleryIndex]} 
                  alt="Product Gallery" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
                {galleryImages.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setActiveGalleryIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${activeGalleryIndex === i ? "bg-brand-dark w-8" : "bg-brand-dark/20"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <span className="text-[10px] uppercase tracking-[0.5em] text-brand-gold mb-6 block font-bold">Uncompromising Quality</span>
            <h2 className="text-4xl md:text-6xl mb-12 italic">The Art of <span className="not-italic">Opal</span></h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-xs uppercase tracking-widest font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-brand-gold" /> Iridescent Opals
                </h3>
                <p className="text-brand-dark/60 font-light leading-relaxed">
                  Ethically sourced from the Coober Pedy mines, each lab-grown opal mirrors the hypnotic shifts of oceanic light, ensuring no two pairs are identical.
                </p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-brand-gold" /> Reclaimed Silver
                </h3>
                <p className="text-brand-dark/60 font-light leading-relaxed">
                  Our .925 sterling silver is 100% recycled, refined to artisan standards to provide a mirror-like finish that resists tarnishing.
                </p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-brand-gold" /> Heritage Craft
                </h3>
                <p className="text-brand-dark/60 font-light leading-relaxed">
                  Lost-wax casted and hand-finished in our Milan studio, preserving techniques passed down through three generations of silversmiths.
                </p>
              </div>
            </div>

            <div className="mt-16 pt-16 border-t border-brand-dark/10 grid grid-cols-2 gap-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-brand-dark/40 mb-2">Dimensions</p>
                <p className="text-sm font-medium">1.2" x 0.8" Drop</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-brand-dark/40 mb-2">Weight</p>
                <p className="text-sm font-medium">4.2g per piece</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-brand-dark text-brand-cream overflow-hidden">
        <div className="max-w-4xl mx-auto text-center border border-brand-cream/10 p-12 md:p-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-dark px-4 flex gap-1">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="fill-brand-gold text-brand-gold" />)}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl md:text-4xl font-serif italic mb-12 leading-relaxed">
              "The depth of the opals is unlike anything I've seen. They catch the light with such fluidity, truly feeling like a fragment of the ocean captured in silver."
            </p>
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold">Elena Moretti</p>
            <p className="text-[10px] uppercase tracking-widest text-brand-cream/40 mt-2 italic">Milan, Italy</p>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 bg-brand-gold text-white text-center px-6">
        <h2 className="text-5xl md:text-7xl font-serif italic mb-10">Own the Elegance</h2>
        <p className="text-[10px] uppercase tracking-[0.5em] mb-12 opacity-80">Final batch of the season — Ships tomorrow</p>
        <button className="bg-white text-brand-dark px-20 py-6 text-xs uppercase tracking-[0.3em] font-black hover:bg-brand-dark hover:text-white transition-all duration-500 shadow-2xl">
          Order Yours Now
        </button>
      </section>

      {/* Standard Footer */}
      <footer className="section-padding bg-brand-cream text-brand-dark border-t border-brand-dark/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-serif tracking-widest uppercase mb-8">Opal Studio</div>
            <p className="text-brand-dark/60 font-light leading-relaxed max-w-sm mb-12">
              We create timeless jewelry for the modern romantic, merging ancient craftsmanship with conscious sourcing and cinematic design.
            </p>
            <div className="flex gap-6">
              <Instagram size={20} className="hover:text-brand-gold cursor-pointer" />
              <Mail size={20} className="hover:text-brand-gold cursor-pointer" />
              <MapPin size={20} className="hover:text-brand-gold cursor-pointer" />
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-widest font-bold">Exploration</p>
            <ul className="space-y-4 text-[10px] uppercase tracking-widest text-brand-dark/60">
              <li className="hover:text-brand-gold cursor-pointer">Collections</li>
              <li className="hover:text-brand-gold cursor-pointer">Journal</li>
              <li className="hover:text-brand-gold cursor-pointer">Bespoke</li>
              <li className="hover:text-brand-gold cursor-pointer">Stockists</li>
            </ul>
          </div>

          <div className="space-y-6">
            <p className="text-xs uppercase tracking-widest font-bold">Assistance</p>
            <ul className="space-y-4 text-[10px] uppercase tracking-widest text-brand-dark/60">
              <li className="hover:text-brand-gold cursor-pointer">Shipping</li>
              <li className="hover:text-brand-gold cursor-pointer">Returns</li>
              <li className="hover:text-brand-gold cursor-pointer">Ethical Sourcing</li>
              <li className="hover:text-brand-gold cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-brand-dark/10 flex justify-between items-center text-[8px] uppercase tracking-widest text-brand-dark/30">
          <p>© 2026 Opal Studio. Crafted with integrity.</p>
          <div className="flex gap-4">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </footer>

      {/* Mobile Drawer Placeholder */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed inset-0 z-[100] bg-brand-cream p-12 flex flex-col justify-center items-center text-center"
          >
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8"><X size={32} /></button>
            <div className="space-y-12">
              {['Shop', 'The Edit', 'Journal', 'Account', 'Cart'].map((item, i) => (
                <motion.a 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href="#" 
                  className="block text-4xl font-serif italic"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


