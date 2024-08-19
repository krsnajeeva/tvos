import React, { createContext, useContext, useRef } from 'react';
import { View } from 'react-native';
import { FocusGuideMethods } from 'react-native'; // Import if needed

interface FocusGuideContextType {
  focusGuideViewRef: React.RefObject<View & FocusGuideMethods>;
}

const FocusGuideContext = createContext<FocusGuideContextType | undefined>(undefined);

export const FocusGuideProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const focusGuideViewRef = useRef<View & FocusGuideMethods>(null);

  return (
    <FocusGuideContext.Provider value={{ focusGuideViewRef }}>
      {children}
    </FocusGuideContext.Provider>
  );
};

export const useFocusGuide = (): FocusGuideContextType => {
  const context = useContext(FocusGuideContext);
  if (!context) {
    throw new Error('useFocusGuide must be used within a FocusGuideProvider');
  }
  return context;
};
