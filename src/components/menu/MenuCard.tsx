import { useLang } from '@/context/LangContext';
import { useCart } from '@/context/CartContext';
import { ui } from '@/data/translations';
import type { MenuItem } from '@/data/menuItems';
import { Plus, Minus } from 'lucide-react';

const MenuCard = ({ item }: { item: MenuItem }) => {
  const { lang } = useLang();
  const { items, addItem, updateQuantity } = useCart();
  const cartItem = items.find(ci => ci.item.id === item.id);
  const qty = cartItem?.quantity || 0;

  const formatPrice = (p: number) => p.toLocaleString('ru-RU') + ' ' + ui.currency[lang];

  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-card border border-border hover:border-primary/40 transition-colors group">
      {/* Top: Image with subtle zoom */}
      <div className="relative w-full aspect-square overflow-hidden bg-muted">
        {item.image ? (
          <img 
            src={item.image} 
            alt={item.name[lang]} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            No image
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-3 md:p-4">
        {/* Middle: Bold Title and Price */}
        <h3 className="text-sm md:text-base font-bold text-foreground leading-tight mb-1">{item.name[lang]}</h3>
        <p className="text-primary font-bold text-sm md:text-base mb-2">{formatPrice(item.price)}</p>

        {/* Bottom: Short description in muted text */}
        {item.description && (
          <p className="text-xs text-muted-foreground line-clamp-2 mb-3 md:mb-4 flex-1">
            {item.description[lang]}
          </p>
        )}

        {/* Action: Add to Cart */}
        <div className="mt-auto">
          {qty > 0 ? (
            <div className="flex items-center justify-between w-full bg-secondary rounded-full p-1 border border-border">
              <button onClick={() => updateQuantity(item.id, qty - 1)}
                className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors shadow-sm">
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-sm font-bold text-foreground">{qty}</span>
              <button onClick={() => addItem(item)}
                className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/80 transition-colors shadow-sm">
                <Plus className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button onClick={() => addItem(item)}
              className="w-full py-2 px-4 rounded-full bg-primary text-primary-foreground text-sm font-bold flex justify-center items-center gap-2 hover:bg-primary/90 transition-colors">
              <Plus className="w-4 h-4" />
              {ui.addToCart[lang]}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
