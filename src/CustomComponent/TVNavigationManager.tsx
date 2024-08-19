import React, {useEffect, useRef} from 'react';
import {
  useTVEventHandler,
  TVFocusGuideView,
  View,
  ViewStyle,
} from 'react-native';
import {FocusGuideMethods} from 'react-native'; // Import FocusGuideMethods if needed

interface TVNavigationManagerProps {
  children: React.ReactNode;
}

// HWEvent corresponds to the event type expected by useTVEventHandler
interface HWEvent {
  eventType: string;
}

const TVNavigationManager: React.FC<TVNavigationManagerProps> = ({
  children,
}) => {
  // Correctly typing the ref to match the expected component
  const focusGuideViewRef = useRef<View & FocusGuideMethods>(null);

  const myTVEventHandler = (event: HWEvent) => {
    if (event.eventType === 'right') {
      // Handle the right button press globally
      console.log('right');
    } else if (event.eventType === 'left') {
      console.log('left');
      // Handle the left button press globally
    } else if (event.eventType === 'up') {
      console.log('up');
      // Handle the up button press globally
    } else if (event.eventType === 'down') {
      console.log('down');
      // Handle the down button press globally
    }
    else{
      console.log('event.eventType', event.eventType);
      // Handle the down button press globally
    }
  };

  useTVEventHandler(myTVEventHandler);

  return (
    <TVFocusGuideView ref={focusGuideViewRef} style={{flex: 1} as ViewStyle}>
      {children}
    </TVFocusGuideView>
  );
};

export default TVNavigationManager;
