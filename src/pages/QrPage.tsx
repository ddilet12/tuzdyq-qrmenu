import { QRCodeSVG } from 'qrcode.react';
import { useLang } from '@/context/LangContext';
import { ui } from '@/data/translations';
import logo from '@/assets/tuzdyq-logo.jpeg';

const QrPage = () => {
  const { lang } = useLang();
  const menuUrl = window.location.origin;

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <img src={logo} alt="TUZDYQ" className="w-20 h-20 rounded-full border-2 border-primary object-cover mb-6" />
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <QRCodeSVG value={menuUrl} size={220} fgColor="#2B4F4F" bgColor="#FFFFFF" />
      </div>
      <p className="text-muted-foreground text-sm mt-4 text-center max-w-xs">{ui.scanMenu[lang]}</p>
      <h2 className="text-primary font-bold text-xl mt-2">TUZDYQ</h2>
    </div>
  );
};

export default QrPage;
