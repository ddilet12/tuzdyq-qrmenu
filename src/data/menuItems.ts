import type { Lang } from './translations';

export interface MenuItem {
  id: string;
  name: Record<Lang, string>;
  description?: Record<Lang, string>;
  price: number;
  category: string;
}

export const menuItems: MenuItem[] = [
  // === COMBO SETS ===
  { id: 'c1', category: 'combo', price: 6990, name: { ru: '«5 элемент» — 40 роллов + 1 пицца', kz: '«5 элемент» — 40 ролл + 1 пицца', en: '"5 Element" — 40 rolls + 1 pizza' } },
  { id: 'c2', category: 'combo', price: 4900, name: { ru: '«Сет на двоих» — 20 роллов + пицца + Cola 1л', kz: '«Екеуге жиынтық» — 20 ролл + пицца + Cola 1л', en: '"Set for Two" — 20 rolls + pizza + Cola 1L' } },
  { id: 'c3', category: 'combo', price: 7490, name: { ru: '«Милан» — 30 роллов + пицца + крылышки', kz: '«Милан» — 30 ролл + пицца + қанаттар', en: '"Milan" — 30 rolls + pizza + wings' } },
  { id: 'c4', category: 'combo', price: 8990, name: { ru: '«Арсенал» — 30 роллов + 2 пиццы', kz: '«Арсенал» — 30 ролл + 2 пицца', en: '"Arsenal" — 30 rolls + 2 pizzas' } },
  { id: 'c5', category: 'combo', price: 5990, name: { ru: '«Итальяно» — 3 пиццы + Cola 1л', kz: '«Итальяно» — 3 пицца + Cola 1л', en: '"Italiano" — 3 pizzas + Cola 1L' } },
  { id: 'c6', category: 'combo', price: 25990, name: { ru: '«MEGA MIX» — 170 роллов + 5 пицц + 2L Cola', kz: '«MEGA MIX» — 170 ролл + 5 пицца + 2L Cola', en: '"MEGA MIX" — 170 rolls + 5 pizzas + 2L Cola' } },
  { id: 'c7', category: 'combo', price: 15990, name: { ru: '«Хочу всё» — роллы, крылышки, фри, пиццы, кола', kz: '«Бәрін қалаймын» — роллдар, қанаттар, фри, пицца, кола', en: '"I Want It All" — rolls, wings, fries, pizzas, cola' } },
  { id: 'c8', category: 'combo', price: 19990, name: { ru: '«Кинг Конг» — большой мясной сет', kz: '«Кинг Конг» — үлкен ет жиынтығы', en: '"King Kong" — big meat set' } },

  // === KAZAKH CUISINE ===
  { id: 'k1', category: 'kazakh', price: 4900, name: { ru: 'Мясо с лепешкой пита', kz: 'Пита нанымен ет', en: 'Meat with pita bread' } },
  { id: 'k2', category: 'kazakh', price: 4490, name: { ru: 'Бараньи ребра с картофельными шариками', kz: 'Картоп шарларымен қой қабырғасы', en: 'Lamb ribs with potato balls' } },
  { id: 'k3', category: 'kazakh', price: 2590, name: { ru: 'Нарын', kz: 'Нарын', en: 'Naryn' } },
  { id: 'k4', category: 'kazakh', price: 2590, name: { ru: 'Плов по-ташкентски', kz: 'Ташкент палауы', en: 'Tashkent-style pilaf' } },
  { id: 'k5', category: 'kazakh', price: 2690, name: { ru: 'Сорпа по-казахски', kz: 'Қазақша сорпа', en: 'Kazakh sorpa' } },
  { id: 'k6', category: 'kazakh', price: 2090, name: { ru: 'Тушпара', kz: 'Түшпара', en: 'Tushpara' } },
  { id: 'k7', category: 'kazakh', price: 2690, name: { ru: 'Чучвара', kz: 'Шұшпара', en: 'Chuchvara' } },
  { id: 'k8', category: 'kazakh', price: 2990, name: { ru: 'Лапша по-казахски', kz: 'Қазақша кеспе', en: 'Kazakh noodle soup' } },
  { id: 'k9', category: 'kazakh', price: 2990, name: { ru: 'Сорпа с тары', kz: 'Тары сорпасы', en: 'Sorpa with millet' } },
  { id: 'k10', category: 'kazakh', price: 43990, name: { ru: 'Қарын бүрме (5-6 персон)', kz: 'Қарын бүрме (5-6 адам)', en: 'Karyn burme (5-6 persons)' } },
  { id: 'k11', category: 'kazakh', price: 23990, name: { ru: 'Сірне (5-6 персон)', kz: 'Сірне (5-6 адам)', en: 'Sirne (5-6 persons)' } },
  { id: 'k12', category: 'kazakh', price: 23990, name: { ru: 'Бешбармак (на компанию)', kz: 'Бешбармақ (компанияға)', en: 'Beshbarmak (group)' } },
  { id: 'k13', category: 'kazakh', price: 23990, name: { ru: 'Куырдак (на компанию)', kz: 'Қуырдақ (компанияға)', en: 'Kuyrdak (group)' } },
  { id: 'k14', category: 'kazakh', price: 17990, name: { ru: 'Расколбас (ассорти колбасок)', kz: 'Расколбас (шұжық жиынтығы)', en: 'Raskolbas (sausage assortment)' } },

  // === EUROPEAN CUISINE ===
  { id: 'e1', category: 'european', price: 3590, name: { ru: 'Паста с лососем', kz: 'Лососьпен паста', en: 'Salmon pasta' } },
  { id: 'e2', category: 'european', price: 3890, name: { ru: 'Паста с морепродуктами', kz: 'Теңіз тағамдарымен паста', en: 'Seafood pasta' } },
  { id: 'e3', category: 'european', price: 3390, name: { ru: 'Паста Болоньезе', kz: 'Болоньезе паста', en: 'Pasta Bolognese' } },
  { id: 'e4', category: 'european', price: 2990, name: { ru: 'Паста Альфредо', kz: 'Альфредо паста', en: 'Pasta Alfredo' } },
  { id: 'e5', category: 'european', price: 2790, name: { ru: 'Пенне Арраббиата', kz: 'Пенне Аррабиата', en: 'Penne Arrabbiata' } },
  { id: 'e6', category: 'european', price: 7390, name: { ru: 'Рибай стейк', kz: 'Рибай стейк', en: 'Ribeye steak' } },
  { id: 'e7', category: 'european', price: 7290, name: { ru: 'Т-бон стейк', kz: 'Т-бон стейк', en: 'T-bone steak' } },
  { id: 'e8', category: 'european', price: 3290, name: { ru: 'Куриное филе в соусе терияки', kz: 'Терияки тауық филесі', en: 'Chicken fillet teriyaki' } },
  { id: 'e9', category: 'european', price: 3490, name: { ru: 'Удон с говядиной', kz: 'Сиыр етімен удон', en: 'Udon with beef' } },
  { id: 'e10', category: 'european', price: 2990, name: { ru: 'Удон с курицей', kz: 'Тауықпен удон', en: 'Udon with chicken' } },

  // === SALADS & APPETIZERS ===
  { id: 's1', category: 'salads', price: 2690, name: { ru: '«Женское счастье»', kz: '«Әйел бақыты»', en: '"Women\'s Happiness"' } },
  { id: 's2', category: 'salads', price: 1990, name: { ru: 'Ачучук', kz: 'Ашұшұқ', en: 'Achuchuk' } },
  { id: 's3', category: 'salads', price: 2690, name: { ru: 'Салат с морепродуктами', kz: 'Теңіз тағамдарымен салат', en: 'Seafood salad' } },
  { id: 's4', category: 'salads', price: 2890, name: { ru: 'Оливье', kz: 'Оливье', en: 'Olivier salad' } },
  { id: 's5', category: 'salads', price: 2990, name: { ru: 'Хрустящие баклажаны', kz: 'Қытырлақ баялдылар', en: 'Crispy eggplants' } },
  { id: 's6', category: 'salads', price: 2990, name: { ru: 'Цезарь классический', kz: 'Классикалық Цезарь', en: 'Classic Caesar' } },
  { id: 's7', category: 'salads', price: 3490, name: { ru: 'Цезарь с сёмгой', kz: 'Семгамен Цезарь', en: 'Caesar with salmon' } },
  { id: 's8', category: 'salads', price: 3490, name: { ru: 'Цезарь с креветками', kz: 'Асшаянмен Цезарь', en: 'Caesar with shrimp' } },
  { id: 's9', category: 'salads', price: 5190, name: { ru: 'Мясное ассорти (Казы, Жая, Қарта)', kz: 'Ет жиынтығы (Қазы, Жая, Қарта)', en: 'Meat platter (Kazy, Zhaya, Karta)' } },
  { id: 's10', category: 'salads', price: 2490, name: { ru: 'Баклажаны по-грузински', kz: 'Грузинше баялдылар', en: 'Georgian-style eggplants' } },

  // === BREAKFAST ===
  { id: 'b1', category: 'breakfast', price: 3690, name: { ru: 'TUZDYQ таңғы асы (фирменный)', kz: 'TUZDYQ таңғы асы (фирмалық)', en: 'TUZDYQ signature breakfast' } },
  { id: 'b2', category: 'breakfast', price: 2290, name: { ru: 'Турецкий завтрак', kz: 'Түрік таңғы асы', en: 'Turkish breakfast' } },
  { id: 'b3', category: 'breakfast', price: 2490, name: { ru: 'Шакшука', kz: 'Шакшука', en: 'Shakshuka' } },
  { id: 'b4', category: 'breakfast', price: 2990, name: { ru: 'Английский завтрак', kz: 'Ағылшын таңғы асы', en: 'English breakfast' } },
  { id: 'b5', category: 'breakfast', price: 1490, name: { ru: 'Рисовая каша', kz: 'Күріш ботқасы', en: 'Rice porridge' } },
  { id: 'b6', category: 'breakfast', price: 1490, name: { ru: 'Овсяная каша', kz: 'Сүлы ботқасы', en: 'Oatmeal' } },
  { id: 'b7', category: 'breakfast', price: 1690, name: { ru: 'Каша с тары (казахская)', kz: 'Тары ботқасы', en: 'Millet porridge (Kazakh)' } },

  // === DRINKS ===
  { id: 'd1', category: 'drinks', price: 990, name: { ru: 'Чай чёрный (чайник)', kz: 'Қара шай (шәйнек)', en: 'Black tea (pot)' } },
  { id: 'd2', category: 'drinks', price: 1490, name: { ru: 'Марокканский чай', kz: 'Мароккандық шай', en: 'Moroccan tea' } },
  { id: 'd3', category: 'drinks', price: 1490, name: { ru: 'Ташкентский чай', kz: 'Ташкент шайы', en: 'Tashkent tea' } },
  { id: 'd4', category: 'drinks', price: 1490, name: { ru: 'Облепиховый чай', kz: 'Шырғанақ шайы', en: 'Sea buckthorn tea' } },
  { id: 'd5', category: 'drinks', price: 1490, name: { ru: 'Гранатовый чай', kz: 'Анар шайы', en: 'Pomegranate tea' } },
  { id: 'd6', category: 'drinks', price: 1490, name: { ru: 'Имбирный чай', kz: 'Зімбір шайы', en: 'Ginger tea' } },
  { id: 'd7', category: 'drinks', price: 1290, name: { ru: 'Капучино', kz: 'Капучино', en: 'Cappuccino' } },
  { id: 'd8', category: 'drinks', price: 1290, name: { ru: 'Латте', kz: 'Латте', en: 'Latte' } },
  { id: 'd9', category: 'drinks', price: 1490, name: { ru: 'Раф', kz: 'Раф', en: 'Raf coffee' } },
  { id: 'd10', category: 'drinks', price: 1490, name: { ru: 'Айс-кофе', kz: 'Айс-кофе', en: 'Iced coffee' } },
  { id: 'd11', category: 'drinks', price: 990, name: { ru: 'Американо', kz: 'Американо', en: 'Americano' } },
];
