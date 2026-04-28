export type Lang = 'ru' | 'kz' | 'en';

export const ui: Record<string, Record<Lang, string>> = {
  workingHours: { ru: 'Ежедневно 09:00–02:00', kz: 'Күнделікті 09:00–02:00', en: 'Daily 09:00–02:00' },
  address: { ru: 'Алматы, Ғажайып 5/5', kz: 'Алматы, Ғажайып 5/5', en: 'Almaty, Gazhayip 5/5' },
  cart: { ru: 'Корзина', kz: 'Себет', en: 'Cart' },
  total: { ru: 'Итого', kz: 'Барлығы', en: 'Total' },
  sendWhatsApp: { ru: 'Отправить в WhatsApp', kz: 'WhatsApp-қа жіберу', en: 'Send via WhatsApp' },
  emptyCart: { ru: 'Корзина пуста', kz: 'Себет бос', en: 'Cart is empty' },
  currency: { ru: '₸', kz: '₸', en: '₸' },
  addToCart: { ru: 'Добавить', kz: 'Қосу', en: 'Add' },
  orderMessage: { ru: 'Здравствуйте! Хочу сделать заказ:', kz: 'Сәлеметсіз бе! Тапсырыс бергім келеді:', en: 'Hello! I would like to order:' },
  persons: { ru: 'персон', kz: 'адам', en: 'persons' },
  breakfast: { ru: 'Подача 09:00–12:00', kz: 'Берілуі 09:00–12:00', en: 'Served 09:00–12:00' },
  scanMenu: { ru: 'Отсканируйте QR-код для просмотра меню', kz: 'Мәзірді көру үшін QR-кодты сканерлеңіз', en: 'Scan QR code to view menu' },
  clear: { ru: 'Очистить', kz: 'Тазалау', en: 'Clear' },
  confirmOrder: { ru: 'Подтверждение заказа', kz: 'Тапсырысты растау', en: 'Order Confirmation' },
  reviewDetails: { ru: 'Пожалуйста, проверьте ваш заказ перед отправкой.', kz: 'Жібермес бұрын тапсырысыңызды тексеріңіз.', en: 'Please review your order before sending.' },
  orderImmutableWarning: { ru: 'После подтверждения заказ нельзя будет изменить.', kz: 'Расталғаннан кейін тапсырысты өзгерту мүмкін емес.', en: 'After confirmation, the order cannot be changed.' },
  confirm: { ru: 'Подтвердить', kz: 'Растау', en: 'Confirm' },
  cancel: { ru: 'Отмена', kz: 'Болдырмау', en: 'Cancel' },
};

export const categories: Record<string, Record<Lang, string>> = {
  combo: { ru: 'Комбо-сеты', kz: 'Комбо-жиынтықтар', en: 'Combo Sets' },
  kazakh: { ru: 'Казахская кухня', kz: 'Қазақ асханасы', en: 'Kazakh Cuisine' },
  european: { ru: 'Европейская кухня', kz: 'Еуропа асханасы', en: 'European Cuisine' },
  salads: { ru: 'Салаты и закуски', kz: 'Салаттар мен тағамдар', en: 'Salads & Appetizers' },
  breakfast: { ru: 'Завтраки', kz: 'Таңғы ас', en: 'Breakfast' },
  drinks: { ru: 'Напитки', kz: 'Сусындар', en: 'Drinks' },
};
