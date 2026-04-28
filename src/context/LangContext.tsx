import React, { createContext, useContext, useState } from 'react';
import type { Lang } from '@/data/translations';

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LangContext = createContext<LangContextType>({ lang: 'ru', setLang: () => {} });

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>('ru');
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
};

export const useLang = () => useContext(LangContext);
