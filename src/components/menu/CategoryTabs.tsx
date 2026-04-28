import { useLang } from '@/context/LangContext';
import { categories } from '@/data/translations';

interface Props {
  active: string;
  onSelect: (cat: string) => void;
}

const categoryOrder = ['combo', 'kazakh', 'european', 'salads', 'breakfast', 'drinks'];

const CategoryTabs = ({ active, onSelect }: Props) => {
  const { lang } = useLang();

  return (
    <div className="sticky top-0 z-30 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="flex gap-2 px-4 py-3 overflow-x-auto hide-scrollbar">
        {categoryOrder.map(cat => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
              active === cat
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-secondary text-secondary-foreground hover:bg-primary/20'
            }`}
          >
            {categories[cat][lang]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
