export type Lang = 'ru' | 'en' | 'pl' | 'ua';

export const ui: Record<string, Record<Lang, string>> = {
  workingHours: { ru: 'Ежедневно 09:00–02:00', en: 'Daily 09:00–02:00', pl: 'Codziennie 09:00–02:00', ua: 'Щодня 09:00–02:00' },
  address: { ru: 'Алматы, Ғажайып 5/5', en: 'Almaty, Gazhayip 5/5', pl: 'Ałmaty, Gazhayip 5/5', ua: 'Алмати, Ґажайип 5/5' },
  cart: { ru: 'Корзина', en: 'Cart', pl: 'Koszyk', ua: 'Кошик' },
  total: { ru: 'Итого', en: 'Total', pl: 'Razem', ua: 'Разом' },
  sendWhatsApp: { ru: 'Отправить в WhatsApp', en: 'Send via WhatsApp', pl: 'Wyślij przez WhatsApp', ua: 'Надіслати у WhatsApp' },
  emptyCart: { ru: 'Корзина пуста', en: 'Cart is empty', pl: 'Koszyk jest pusty', ua: 'Кошик порожній' },
  currency: { ru: '₸', en: '₸', pl: '₸', ua: '₸' },
  addToCart: { ru: 'Добавить', en: 'Add', pl: 'Dodaj', ua: 'Додати' },
  orderMessage: { ru: 'Здравствуйте! Хочу сделать заказ:', en: 'Hello! I would like to order:', pl: 'Dzień dobry! Chciałbym zamówić:', ua: 'Доброго дня! Хочу зробити замовлення:' },
  persons: { ru: 'персон', en: 'persons', pl: 'osób', ua: 'осіб' },
  breakfast: { ru: 'Подача 09:00–12:00', en: 'Served 09:00–12:00', pl: 'Serwowane 09:00–12:00', ua: 'Подається 09:00–12:00' },
  scanMenu: { ru: 'Отсканируйте QR-код для просмотра меню', en: 'Scan QR code to view menu', pl: 'Zeskanuj kod QR, aby zobaczyć menu', ua: 'Відскануйте QR-код, щоб переглянути меню' },
  clear: { ru: 'Очистить', en: 'Clear', pl: 'Wyczyść', ua: 'Очистити' },
  confirmOrder: { ru: 'Подтверждение заказа', en: 'Order Confirmation', pl: 'Potwierdzenie zamówienia', ua: 'Підтвердження замовлення' },
  reviewDetails: { ru: 'Пожалуйста, проверьте ваш заказ перед отправкой.', en: 'Please review your order before sending.', pl: 'Proszę sprawdzić zamówienie przed wysłaniem.', ua: 'Будь ласка, перевірте ваше замовлення перед відправкою.' },
  orderImmutableWarning: { ru: 'После подтверждения заказ нельзя будет изменить.', en: 'After confirmation, the order cannot be changed.', pl: 'Po potwierdzeniu zamówienia nie można go zmienić.', ua: 'Після підтвердження замовлення не можна змінити.' },
  confirm: { ru: 'Подтвердить', en: 'Confirm', pl: 'Potwierdź', ua: 'Підтвердити' },
  cancel: { ru: 'Отмена', en: 'Cancel', pl: 'Anuluj', ua: 'Скасувати' },
};

export const categories: Record<string, Record<Lang, string>> = {
  salads: { ru: 'Салаты', en: 'Salads', pl: 'Sałatki', ua: 'Салати' },
  bakery: { ru: 'Выпечка', en: 'Bakery', pl: 'Wypieki', ua: 'Випічка' },
  rolls: { ru: 'Роллы', en: 'Rolls', pl: 'Rolki', ua: 'Роли' },
  bread: { ru: 'Хлеб', en: 'Bread', pl: 'Pieczywo', ua: 'Хліб' },
};
