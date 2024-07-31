// SeamfixProvider.tsx (измените расширение на .tsx для использования TypeScript)
'use client';

import React, {ReactNode, useContext, useState, useEffect} from 'react';
import Script from "next/script";

interface SeamfixContextType {
  Seamfix: any;
  setSeamfix: (value: any) => void;
}

const SeamfixContext = React.createContext<SeamfixContextType | null>(null);

export const useSeamfix = () => {
  const context = useContext(SeamfixContext);
  if (!context) {
    throw new Error('useSeamfix must be used within a SeamfixProvider');
  }
  return context;
};

export const SeamfixProvider = ({children}: {children: ReactNode}) => {
  const [Seamfix, setSeamfix] = useState<any>(null);

  useEffect(() => {
    if (window.SeamfixVerify) {
      setSeamfix(window.SeamfixVerify);
    }
  }, []);

  return (
    <SeamfixContext.Provider value={{Seamfix, setSeamfix}}>
      {children}
      <Script
        src="https://sdk-verifylink.seamfix.com/index.js"
        onLoad={() => {
          if (window.SeamfixVerify) {
            setSeamfix(window.SeamfixVerify);
          }
        }}
      />
    </SeamfixContext.Provider>
  );
};
