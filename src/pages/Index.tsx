import { useState, useEffect } from 'react';
import Header from '@/components/menu/Header';
import CategoryTabs from '@/components/menu/CategoryTabs';
import MenuCard from '@/components/menu/MenuCard';
import CartDrawer from '@/components/menu/CartDrawer';
import { menuItems } from '@/data/menuItems';
import { categories } from '@/data/translations';
import { useLang } from '@/context/LangContext';

const categoryOrder = ['salads', 'bakery', 'rolls', 'bread'];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('salads');
  const { lang } = useLang();

  // Scrollspy logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      for (const cat of [...categoryOrder].reverse()) {
        const el = document.getElementById(`category-${cat}`);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveCategory(cat);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background max-w-2xl mx-auto">
      <Header />
      <CategoryTabs active={activeCategory} onSelect={setActiveCategory} />

      <main className="px-4 py-6 pb-24 space-y-10">
        {categoryOrder.map(cat => {
          const items = menuItems.filter(i => i.category === cat);
          if (items.length === 0) return null;

          return (
            <section key={cat} id={`category-${cat}`} className="scroll-mt-24">
              <h2 className="text-xl font-bold text-foreground mb-4">
                {categories[cat]?.[lang] || cat}
              </h2>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {items.map(item => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          );
        })}
      </main>

      <CartDrawer />
    </div>
  );
};

export default Index;
