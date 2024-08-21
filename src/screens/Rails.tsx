// import React, {useCallback, useRef, useState} from 'react';
// import {
//   View,
//   Image,
//   Dimensions,
//   StyleSheet,
//   Animated,
//   FlatList,
//   NativeSyntheticEvent,
//   NativeScrollEvent, // Import FlatList normally
// } from 'react-native';
// import {useTVEventHandler} from 'react-native';

// const {width, height} = Dimensions.get('window');

// interface DataItem {
//   id: number;
//   image: string;
// }

// interface RailProps {
//   data: Array<DataItem>;
//   onUp: () => void;
//   onDown: () => void;
//   isFocused: boolean;
// }

// const AnimatedFlatList = Animated.createAnimatedComponent(FlatList<DataItem>);

// const Rail: React.FC<RailProps> = ({data, onUp, onDown, isFocused}) => {
//   const listRef = useRef<FlatList<DataItem>>(null);
//   const [focusedIndex, setFocusedIndex] = useState(0);
//   const [isScrolling, setIsScrolling] = useState(false);
//   const scrollX = useRef(new Animated.Value(0)).current;

//   const calculateOffset = useCallback((index: number) => {
//     // Adjust calculation based on item width and margin
//     return (width * 0.3 + 20) * index;
//   }, []);

//   const scrollToIndex = (index: number) => {
//     if (listRef.current) {
//       const offset = calculateOffset(index);
//       listRef.current.scrollToOffset({offset, animated: true});
//       setFocusedIndex(index);
//     }
//   };
  
//   const handleScrollEnd = () => {
//     setIsScrolling(false);
//     // Ensure focus update happens after scrolling ends
//     scrollToIndex(focusedIndex);
//   };

//   const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
//     if (!isScrolling) {
//       setIsScrolling(true);
//       // Do something if needed when scrolling starts
//     }
//     scrollX.setValue(event.nativeEvent.contentOffset.x);
//   };

//   // const handleScrollEnd = () => {
//   //   if (isScrolling) {
//   //     setIsScrolling(false);
//   //     // Do something if needed when scrolling ends
//   //   }
//   // };

//   // function debounce<T extends (...args: any[]) => void>(func: T, wait: number) {
//   //   let timeout: NodeJS.Timeout;
  
//   //   return (...args: Parameters<T>) => {
//   //     clearTimeout(timeout);
//   //     timeout = setTimeout(() => func(...args), wait);
//   //   };
//   // }
//   // const handleTVEvent = useCallback(
//   //   debounce((evt: { eventType: string }) => {
//   //     if (!isFocused) return;
  
//   //     switch (evt.eventType) {
//   //       case 'right':
//   //         const nextIndex = Math.min(focusedIndex + 1, data.length - 1);
//   //         scrollToIndex(nextIndex);
//   //         break;
//   //       case 'left':
//   //         const prevIndex = Math.max(focusedIndex - 1, 0);
//   //         scrollToIndex(prevIndex);
//   //         break;
//   //       case 'down':
//   //         onDown();
//   //         break;
//   //       case 'up':
//   //         onUp();
//   //         break;
//   //       default:
//   //         break;
//   //     }
//   //   }, 300),
//   //   [focusedIndex, isFocused]
//   // );
  
//   const handleTVEvent = (evt: {eventType: string}) => {
//     if (!isFocused) return;

//     switch (evt.eventType) {
//       case 'right':
//         const nextIndex = Math.min(focusedIndex + 1, data.length - 1);
//         scrollToIndex(nextIndex);
//         break;
//       case 'left':
//         const prevIndex = Math.max(focusedIndex - 1, 0);
//         scrollToIndex(prevIndex);
//         break;
//       case 'down':
//         onDown(); // Notify parent to focus the next rail
//         break;
//       case 'up':
//         onUp(); // Notify parent to focus the previous rail
//         break;
//       default:
//         break;
//     }
//   };

//   useTVEventHandler(evt => handleTVEvent(evt));

//   const renderItem = useCallback(
//     ({item, index}: {item: DataItem; index: number}) => (
//       <View
//         style={[
//           styles.itemContainer,
//           focusedIndex === index && styles.focusedItem,
//         ]}>
//         <Image
//           source={{uri: item.image}}
//           style={styles.itemImage}
//           resizeMode="cover"
//         />
//       </View>
//     ),
//     [focusedIndex], // Memoize renderItem to avoid re-rendering
//   );

//   // Provide efficient layout calculations
//   const getItemLayout = useCallback(
//     (data: ArrayLike<DataItem> | null | undefined, index: number) => {
//       if (!data) {
//         // Handle cases where data might be null or undefined
//         return { length: width * 0.3 + 20, offset: 0, index };
//       }
  
//       // Ensure `data` is treated as `ArrayLike<DataItem>`
//       return {
//         length: width * 0.3 + 20, // Item width + margin
//         offset: (width * 0.3 + 20) * index,
//         index,
//       };
//     },
//     []
//   );

//   return (
//     <AnimatedFlatList
//       ref={listRef}
//       data={data}
//       renderItem={renderItem}
//       horizontal
//       showsHorizontalScrollIndicator={false}
//       keyExtractor={item => item.id.toString()}
//       extraData={focusedIndex} // Re-render on focus change
//       onScroll={handleScroll}
//       onScrollEndDrag={handleScrollEnd}
//       onMomentumScrollEnd={handleScrollEnd}
//       scrollEventThrottle={16} // Smooth scrolling
//       getItemLayout={getItemLayout} // Optimize item layout calculations
//       initialNumToRender={10} // Optimize initial render
//       maxToRenderPerBatch={10} // Optimize batch rendering
//       windowSize={5} // Optimize window size
//     />
//   );
// };

// const styles = StyleSheet.create({
//   itemContainer: {
//     margin: 10,
//     borderRadius: 8,
//     overflow: 'hidden',
//     borderWidth: 2,
//     borderColor: 'transparent',
//   },
//   focusedItem: {
//     borderColor: 'yellow', // Indicate focus with a border
//   },
//   itemImage: {
//     width: width * 0.3,
//     height: height * 0.2,
//   },
// });

// export default Rail;

// --------------

// import React, {useRef, useState, useCallback} from 'react';
// import {View, Image, Dimensions, StyleSheet, FlatList, Animated} from 'react-native';
// import {useTVEventHandler} from 'react-native';

// const {width, height} = Dimensions.get('window');

// const ITEM_WIDTH = width * 0.3;  // Adjust this based on your item width
// const ITEM_MARGIN = 10;

// interface DataItem {
//   id: number;
//   image: string;
// }

// interface RailProps {
//   data: Array<DataItem>;
//   onUp: () => void;
//   onDown: () => void;
//   isFocused: boolean;
// }

// const AnimatedFlatList = Animated.createAnimatedComponent(FlatList<DataItem>);

// const Rail: React.FC<RailProps> = ({data, onUp, onDown, isFocused}) => {
//   const listRef = useRef<FlatList<DataItem>>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const scrollToIndex = (index: number) => {
//     if (listRef.current) {
//       const offset = (ITEM_WIDTH + ITEM_MARGIN) * index;
//       listRef.current.scrollToOffset({offset, animated: true});
//       setCurrentIndex(index);
//     }
//   };

//   const handleTVEvent = (evt: {eventType: string}) => {
//     if (!isFocused) return;

//     switch (evt.eventType) {
//       case 'right':
//         if (currentIndex < data.length - 1) {
//           scrollToIndex(currentIndex + 1);
//         }
//         break;
//       case 'left':
//         if (currentIndex > 0) {
//           scrollToIndex(currentIndex - 1);
//         }
//         break;
//       case 'down':
//         onDown();
//         break;
//       case 'up':
//         onUp();
//         break;
//       default:
//         break;
//     }
//   };

//   useTVEventHandler(evt => handleTVEvent(evt));

//   const renderItem = useCallback(
//     ({item, index}: {item: DataItem; index: number}) => (
//       <View
//         style={[
//           styles.itemContainer,
//           index === currentIndex ? styles.focusedItem : {},
//         ]}>
//         <Image source={{uri: item.image}} style={styles.itemImage} resizeMode="cover" />
//       </View>
//     ),
//     [currentIndex],
//   );

//   return (
//     <View style={styles.container}>
//       <AnimatedFlatList
//         ref={listRef}
//         data={data}
//         renderItem={renderItem}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         keyExtractor={item => item.id.toString()}
//         scrollEnabled={false}  // Disable manual scrolling
//         contentContainerStyle={{paddingHorizontal: (width - ITEM_WIDTH) / 2}}  // Center items
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   itemContainer: {
//     width: ITEM_WIDTH,
//     height: height * 0.2,
//     marginHorizontal: ITEM_MARGIN / 2,
//     borderWidth: 2,
//     borderColor: 'transparent',
//     borderRadius: 8,
//     overflow: 'hidden',
//   },
//   focusedItem: {
//     borderColor: 'yellow',  // Highlight focused item
//   },
//   itemImage: {
//     width: '100%',
//     height: '100%',
//   },
// });

// export default Rail;
// --------------
import React, {useRef, useState, useCallback} from 'react';
import {View, Image, Dimensions, StyleSheet, FlatList, Animated} from 'react-native';
import {useTVEventHandler} from 'react-native';

const {width, height} = Dimensions.get('window');

const ITEM_WIDTH = width * 0.3;  // Adjust this based on your item width
const ITEM_MARGIN = 10;

interface DataItem {
  id: number;
  image: string;
}

interface RailProps {
  data: Array<DataItem>;
  onUp: () => void;
  onDown: () => void;
  isFocused: boolean;
}

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList<DataItem>);

const Rail: React.FC<RailProps> = ({data, onUp, onDown, isFocused}) => {
  const listRef = useRef<FlatList<DataItem>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (listRef.current) {
      const offset = (ITEM_WIDTH + ITEM_MARGIN) * index;
      listRef.current.scrollToOffset({offset, animated: true});
      setCurrentIndex(index);
    }
  };

  const handleTVEvent = (evt: {eventType: string}) => {
    if (!isFocused) return;

    switch (evt.eventType) {
      case 'right':
        if (currentIndex < data.length - 1) {
          scrollToIndex(currentIndex + 1);
        }
        break;
      case 'left':
        if (currentIndex > 0) {
          scrollToIndex(currentIndex - 1);
        }
        break;
      case 'down':
        onDown();
        break;
      case 'up':
        onUp();
        break;
      default:
        break;
    }
  };

  useTVEventHandler(evt => handleTVEvent(evt));

  const renderItem = useCallback(
    ({item, index}: {item: DataItem; index: number}) => (
      <View
        style={[
          styles.itemContainer,
          index === currentIndex ? styles.focusedItem : {},
        ]}>
        <Image source={{uri: item.image}} style={styles.itemImage} resizeMode="cover" />
      </View>
    ),
    [currentIndex],
  );

  return (
    <View style={styles.container}>
      <AnimatedFlatList
        ref={listRef}
        data={data}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        scrollEnabled={false}  // Disable manual scrolling
        contentContainerStyle={styles.contentContainer}  // Align items to the left
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingLeft: 20,  // Adjust the left padding as needed
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: height * 0.2,
    marginHorizontal: ITEM_MARGIN / 2,
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 8,
    overflow: 'hidden',
  },
  focusedItem: {
    borderColor: 'yellow',  // Highlight focused item
  },
  itemImage: {
    width: '100%',
    height: '100%',
  },
});

export default Rail;
