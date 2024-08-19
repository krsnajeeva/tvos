import React, { useState, useRef, useCallback } from 'react';
import {
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  Animated,
  ListRenderItem,
} from 'react-native';
import { useFocusGuide } from './FocusGuideContext';

const SCREEN_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = 200;
const ITEM_HEIGHT = 300;
const ITEM_SPACING = 10;

interface RailItem {
  description: string;
  sources: string;
  subtitle: string;
  thumb: string;
  title: string;
  image: string;
}

interface RailComponentProps {
  data: RailItem[];
}

const RailComponent: React.FC<RailComponentProps> = ({ data }) => {
  const flatListRef = useRef<FlatList<RailItem>>(null);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const { focusGuideViewRef } = useFocusGuide(); // Get the ref from context

  const onItemFocus = useCallback((index: number) => {
    const scrollTo =
      index * (ITEM_WIDTH + ITEM_SPACING) - (SCREEN_WIDTH - ITEM_WIDTH) / 2;
    flatListRef.current?.scrollToOffset({ offset: scrollTo, animated: true });
    setFocusedIndex(index);
  }, []);

  const renderItem: ListRenderItem<RailItem> = useCallback(({ item, index }) => {
    const isFocused = focusedIndex === index;

    return (
      <TouchableOpacity
        onFocus={() => onItemFocus(index)}
        onBlur={() => setFocusedIndex(null)}
        onPress={() => console.log('onPress')}
        style={[styles.item, isFocused && styles.focusedItem]}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </TouchableOpacity>
    );
  }, [focusedIndex, onItemFocus]);

  return (
    <Animated.FlatList
      ref={flatListRef}
      horizontal
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.title.toString()}
      showsHorizontalScrollIndicator={false}
      snapToAlignment="center"
      snapToInterval={ITEM_WIDTH + ITEM_SPACING}
      decelerationRate="fast"
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: true }
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    marginHorizontal: ITEM_SPACING / 2,
  },
  focusedItem: {
    transform: [{ scale: 1.1 }],
    zIndex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
});

export default RailComponent;


// import React, {useState, useRef, useCallback} from 'react';
// import {
//   FlatList,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   Dimensions,
//   FocusGuideMethods,
//   HWEvent,
//   useTVEventHandler,
//   View,
//   TVFocusGuideView,
//   ViewStyle,
//   Animated,
// } from 'react-native';
// import { useFocusGuide } from './FocusGuideContext';

// const SCREEN_WIDTH = Dimensions.get('window').width;
// const ITEM_WIDTH = 200;
// const ITEM_HEIGHT = 300;
// const ITEM_SPACING = 10;

// interface RailItem {
//   description: string;
//   sources: string;
//   subtitle: string;
//   thumb: string;
//   title: string;
//   image: string;
// }

// interface RailComponentProps {
//   data: RailItem[];
// }

// const RailComponent: React.FC<RailComponentProps> = ({data}) => {
//   const flatListRef = useRef<FlatList<RailItem>>(null);
//   const [focusedIndex, setFocusedIndex] = useState<number | null>(0);
//   const scrollX = useRef(new Animated.Value(0)).current;
//   const { focusGuideViewRef } = useFocusGuide(); // Get the ref from context

//   const onItemFocus = useCallback((index: number) => {
//     const scrollTo =
//       index * (ITEM_WIDTH + ITEM_SPACING) - (SCREEN_WIDTH - ITEM_WIDTH) / 2;
//     flatListRef.current?.scrollToOffset({offset: scrollTo, animated: true});
//     setFocusedIndex(index);
//   }, []);

//   console.log('focusGuideViewRef', focusGuideViewRef);
  

//   // const handleKeyPress = (direction) => {
//   //   let newIndex = focusedIndex;
//   //   if (direction === 'right' && focusedIndex < data.length - 1) {
//   //     newIndex++;
//   //   } else if (direction === 'left' && focusedIndex > 0) {
//   //     newIndex--;
//   //   }

//   //   setFocusedIndex(newIndex);
//   //   Animated.spring(scrollX, {
//   //     toValue: newIndex * ITEM_WIDTH, // Adjust ITEM_WIDTH to match your card width
//   //     useNativeDriver: true,
//   //   }).start();
//   // };

//   const renderItem = useCallback(
//     ({item, index}: {item: RailItem; index: number}) => {
//       const isFocused = focusedIndex === index;

//       return (
//         <TouchableOpacity
//           onFocus={() => onItemFocus(index)}
//           onBlur={() => setFocusedIndex(null)}
//           onPress={() => console.log('onPress')}
//           style={[styles.item, isFocused && styles.focusedItem]}>
//           <Image source={{uri: item.image}} style={styles.image} />
//         </TouchableOpacity>
//       );
//     },
//     [focusedIndex, onItemFocus],
//   );

//   return (
//       <FlatList
//         ref={flatListRef}
//         horizontal
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={item => item.title.toString()}
//         showsHorizontalScrollIndicator={false}
//         snapToAlignment="center"
//         snapToInterval={ITEM_WIDTH + ITEM_SPACING}
//         decelerationRate="fast"
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//           { useNativeDriver: true }
//         )}
//       />
//   );
// };

// const styles = StyleSheet.create({
//   item: {
//     width: ITEM_WIDTH,
//     height: ITEM_HEIGHT,
//     marginHorizontal: ITEM_SPACING / 2,
//   },
//   focusedItem: {
//     transform: [{scale: 1.1}],
//     zIndex: 1,
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 8,
//   },
// });

// export default RailComponent;

