import { useCart } from '@/context/CartContext';
import { useLang } from '@/context/LangContext';
import { ui } from '@/data/translations';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from '@/components/ui/sheet';
import { ShoppingCart, Plus, Minus, Trash2, Send, AlertTriangle } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const CartDrawer = () => {
  const { items, totalItems, totalPrice, updateQuantity, removeItem, clearCart } = useCart();
  const { lang } = useLang();

  const formatPrice = (p: number) => p.toLocaleString('ru-RU') + ' ' + ui.currency[lang];

  const sendToWhatsApp = () => {
    let msg = ui.orderMessage[lang] + '\n\n';
    items.forEach(ci => {
      msg += `• ${ci.item.name[lang]} × ${ci.quantity} = ${formatPrice(ci.item.price * ci.quantity)}\n`;
    });
    msg += `\n${ui.total[lang]}: ${formatPrice(totalPrice)}`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/77475762020?text=${encoded}`, '_blank');
  };

  if (totalItems === 0) return null;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground rounded-full px-5 py-3.5 shadow-lg flex items-center gap-2.5 hover:bg-primary/90 transition-all active:scale-95">
          <ShoppingCart className="w-5 h-5" />
          <span className="font-semibold text-sm">{totalItems}</span>
          <span className="text-xs opacity-80">|</span>
          <span className="font-semibold text-sm">{formatPrice(totalPrice)}</span>
        </button>
      </SheetTrigger>
      <SheetContent side="bottom" className="bg-background border-border rounded-t-2xl max-h-[80vh] flex flex-col">
        <SheetHeader className="pb-3 border-b border-border">
          <SheetDescription className="sr-only">Your cart details</SheetDescription>
          <div className="flex items-center justify-between">
            <SheetTitle className="text-foreground">{ui.cart[lang]}</SheetTitle>
            <button onClick={clearCart} className="text-xs text-muted-foreground hover:text-destructive transition-colors">
              {ui.clear[lang]}
            </button>
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-3 space-y-3">
          {items.map(ci => (
            <div key={ci.item.id} className="flex items-center gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground truncate">{ci.item.name[lang]}</p>
                <p className="text-xs text-primary font-semibold">{formatPrice(ci.item.price * ci.quantity)}</p>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <button onClick={() => updateQuantity(ci.item.id, ci.quantity - 1)}
                  className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center">
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-5 text-center text-xs font-semibold">{ci.quantity}</span>
                <button onClick={() => updateQuantity(ci.item.id, ci.quantity + 1)}
                  className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center">
                  <Plus className="w-3 h-3" />
                </button>
                <button onClick={() => removeItem(ci.item.id)}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-muted-foreground hover:text-destructive">
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-3 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-foreground">{ui.total[lang]}</span>
            <span className="text-lg font-bold text-primary">{formatPrice(totalPrice)}</span>
          </div>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button
                className="w-full bg-[hsl(142,70%,35%)] text-white rounded-xl py-3 flex items-center justify-center gap-2 font-semibold hover:opacity-90 transition-opacity active:scale-[0.98]">
                <Send className="w-4 h-4" />
                {ui.sendWhatsApp[lang]}
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent className="w-[90vw] max-w-md rounded-2xl">
              <AlertDialogHeader>
                <AlertDialogTitle>{ui.confirmOrder[lang]}</AlertDialogTitle>
                <AlertDialogDescription asChild>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <span className="block">{ui.reviewDetails[lang]}</span>
                    
                    <div className="bg-secondary/50 rounded-lg p-3 text-xs space-y-1.5 max-h-[30vh] overflow-y-auto">
                      {items.map(ci => (
                        <div key={ci.item.id} className="flex justify-between gap-2">
                          <span className="text-muted-foreground truncate">{ci.item.name[lang]} × {ci.quantity}</span>
                          <span className="font-medium whitespace-nowrap">{formatPrice(ci.item.price * ci.quantity)}</span>
                        </div>
                      ))}
                      <div className="border-t border-border pt-1.5 mt-1.5 flex justify-between font-bold text-foreground overflow-hidden">
                        <span>{ui.total[lang]}</span>
                        <span>{formatPrice(totalPrice)}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 p-3 bg-destructive/10 text-destructive rounded-lg border border-destructive/20 text-xs">
                      <AlertTriangle className="w-4 h-4 shrink-0" />
                      <p>{ui.orderImmutableWarning[lang]}</p>
                    </div>
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="flex-row gap-3 sm:gap-0">
                <AlertDialogCancel className="flex-1 mt-0 rounded-xl border-border">
                  {ui.cancel[lang]}
                </AlertDialogCancel>
                <AlertDialogAction 
                  onClick={sendToWhatsApp}
                  className="flex-1 rounded-xl bg-[hsl(142,70%,35%)] hover:bg-[hsl(142,70%,30%)]">
                  {ui.confirm[lang]}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
