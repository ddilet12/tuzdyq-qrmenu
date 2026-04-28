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
    <div className="flex items-center justify-between gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors">
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium text-foreground leading-tight">{item.name[lang]}</h3>
        <p className="text-primary font-semibold text-sm mt-1">{formatPrice(item.price)}</p>
      </div>
      <div className="flex items-center gap-1.5 shrink-0">
        {qty > 0 ? (
          <>
            <button onClick={() => updateQuantity(item.id, qty - 1)}
              className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors">
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-6 text-center text-sm font-semibold text-foreground">{qty}</span>
            <button onClick={() => addItem(item)}
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/80 transition-colors">
              <Plus className="w-3.5 h-3.5" />
            </button>
          </>
        ) : (
          <button onClick={() => addItem(item)}
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/80 transition-colors">
            <Plus className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default MenuCard;
