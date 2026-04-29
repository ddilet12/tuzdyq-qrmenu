import type { Lang } from './translations';

export interface MenuItem {
  id: string;
  name: Record<Lang, string>;
  description?: Record<Lang, string>;
  price: number;
  category: string;
  image?: string;
}

export const menuItems: MenuItem[] = [
  // === SALADS (САЛАТЫ) ===
  { 
    id: 's1', 
    category: 'salads', 
    price: 3490, 
    name: { ru: 'Салат с хрустящими баклажанами (300г)', en: 'Crispy Eggplant Salad (300g)', pl: 'Sałatka z chrupiącym bakłażanem (300g)', ua: 'Салат з хрусткими баклажанами (300г)' },
    description: { ru: 'Нежные баклажаны в сладком соусе чили', en: 'Tender eggplants in sweet chili sauce', pl: 'Delikatne bakłażany w słodkim sosie chili', ua: 'Ніжні баклажани в солодкому соусі чилі' },
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80&fit=crop&crop=entropy'
  },
  { 
    id: 's2', 
    category: 'salads', 
    price: 4290, 
    name: { ru: 'Салат Цезарь с креветками (250г)', en: 'Caesar Salad with Shrimp (250g)', pl: 'Sałatka Cezar z krewetkami (250g)', ua: 'Салат Цезар з креветками (250г)' },
    description: { ru: 'Классический цезарь с тигровыми креветками', en: 'Classic Caesar with tiger prawns', pl: 'Klasyczny Cezar z krewetkami tygrysimi', ua: 'Класичний цезар з тигровими креветками' },
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=800&q=80&fit=crop&crop=entropy'
  },

  // === BAKERY (ВЫПЕЧКА) ===
  { 
    id: 'b1', 
    category: 'bakery', 
    price: 2890, 
    name: { ru: 'Хачапури по-аджарски (400г)', en: 'Adjarian Khachapuri (400g)', pl: 'Chaczapuri po adżarsku (400g)', ua: 'Хачапурі по-аджарськи (400г)' },
    description: { ru: 'Традиционная лодочка с сыром и яйцом', en: 'Traditional pastry boat with cheese and egg', pl: 'Tradycyjna łódeczka z serem i jajkiem', ua: 'Традиційний човник з сиром та яйцем' },
    image: 'https://images.unsplash.com/photo-1621235128091-fe6d1b3e1b10?w=800&q=80&fit=crop&crop=entropy'
  },
  { 
    id: 'b2', 
    category: 'bakery', 
    price: 3100, 
    name: { ru: 'Хачапури по-мегрельски (450г)', en: 'Megrelian Khachapuri (450g)', pl: 'Chaczapuri po megrelsku (450g)', ua: 'Хачапурі по-мегрельськи (450г)' },
    description: { ru: 'Сыр сулугуни внутри и снаружи', en: 'Suluguni cheese inside and out', pl: 'Ser suluguni wewnątrz i na zewnątrz', ua: 'Сир сулугуні всередині та зовні' },
    image: 'https://images.unsplash.com/photo-1579612089201-3829020bd9bd?w=800&q=80&fit=crop&crop=entropy'
  },

  // === ROLLS (РОЛЛЫ) ===
  { 
    id: 'r1', 
    category: 'rolls', 
    price: 3690, 
    name: { ru: 'Филадельфия классик (8 шт)', en: 'Philadelphia Classic (8 pcs)', pl: 'Filadelfia Klasyczna (8 szt)', ua: 'Філадельфія класик (8 шт)' },
    description: { ru: 'Много сёмги и сливочного сыра', en: 'Lots of salmon and cream cheese', pl: 'Dużo łososia i serka śmietankowego', ua: 'Багато лосося та вершкового сиру' },
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80&fit=crop&crop=entropy'
  },
  { 
    id: 'r2', 
    category: 'rolls', 
    price: 7990, 
    name: { ru: 'Сет Дракон (32 шт)', en: 'Dragon Set (32 pcs)', pl: 'Zestaw Smok (32 szt)', ua: 'Сет Дракон (32 шт)' },
    description: { ru: 'Идеальный выбор для компании', en: 'Perfect choice for a group', pl: 'Idealny wybór dla grupy', ua: 'Ідеальний вибір для компанії' },
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80&fit=crop&crop=entropy'
  },

  // === BREAD (ХЛЕБ) ===
  { 
    id: 'br1', 
    category: 'bread', 
    price: 850, 
    name: { ru: 'Баурсаки (200г)', en: 'Baursak (200g)', pl: 'Baursak (200g)', ua: 'Баурсаки (200г)' },
    description: { ru: 'Воздушные кусочки жареного теста', en: 'Fluffy fried dough pieces', pl: 'Puszyste kawałki smażonego ciasta', ua: 'Повітряні шматочки смаженого тіста' },
    image: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=800&q=80&fit=crop&crop=entropy'
  },
  { 
    id: 'br2', 
    category: 'bread', 
    price: 750, 
    name: { ru: 'Тандырная лепешка (1 шт)', en: 'Tandoor Flatbread (1 pc)', pl: 'Chleb z tandoor (1 szt)', ua: 'Тандирний коржик (1 шт)' },
    description: { ru: 'Горячий хлеб прямо из печи', en: 'Hot bread right from the oven', pl: 'Gorący chleb prosto z pieca', ua: 'Гарячий хліб прямо з печі' },
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80&fit=crop&crop=entropy'
  }
];
