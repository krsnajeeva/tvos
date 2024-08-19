import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Rail from './Rails';

const data = [
  {
    id: 1,
    image: 'https://cdn.shopify.com/static/sample-images/garnished.jpeg?',
  },
  {id: 2, image: 'https://cdn.shopify.com/static/sample-images/bath.jpeg?'},
  {
    id: 3,
    image: 'https://cdn.shopify.com/static/sample-images/garnished.jpeg?',
  },
  {id: 4, image: 'https://cdn.shopify.com/static/sample-images/bath.jpeg?'},
  {
    id: 5,
    image: 'https://cdn.shopify.com/static/sample-images/garnished.jpeg?',
  },
  {id: 6, image: 'https://cdn.shopify.com/static/sample-images/bath.jpeg?'},
  {
    id: 7,
    image: 'https://cdn.shopify.com/static/sample-images/garnished.jpeg?',
  },
  {id: 8, image: 'https://cdn.shopify.com/static/sample-images/bath.jpeg?'},
  {
    id: 9,
    image: 'https://cdn.shopify.com/static/sample-images/garnished.jpeg?',
  },
  {id: 10, image: 'https://cdn.shopify.com/static/sample-images/bath.jpeg?'},
  {
    id: 11,
    image: 'https://cdn.shopify.com/static/sample-images/garnished.jpeg?',
  },
  {id: 12, image: 'https://cdn.shopify.com/static/sample-images/bath.jpeg?'},
  {
    id: 13,
    image: 'https://cdn.shopify.com/static/sample-images/garnished.jpeg?',
  },
  {id: 14, image: 'https://cdn.shopify.com/static/sample-images/bath.jpeg?'},
  {
    id: 15,
    image: 'https://cdn.shopify.com/static/sample-images/garnished.jpeg?',
  },
  // Add more items as needed
];

const App: React.FC = () => {
  const [focusedRailIndex, setFocusedRailIndex] = useState(0);

  const handleUp = () => {
    if (focusedRailIndex > 0) {
      setFocusedRailIndex(focusedRailIndex - 1);
    }
  };

  const handleDown = () => {
    if (focusedRailIndex < 2) {
      // Assuming there are 3 rails
      setFocusedRailIndex(focusedRailIndex + 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Rail
        data={data}
        onUp={handleUp}
        onDown={handleDown}
        isFocused={focusedRailIndex === 0}
      />
      <Rail
        data={data}
        onUp={handleUp}
        onDown={handleDown}
        isFocused={focusedRailIndex === 1}
      />
      <Rail
        data={data}
        onUp={handleUp}
        onDown={handleDown}
        isFocused={focusedRailIndex === 2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default App;

// import React, {useRef} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   FocusGuideMethods,
//   HWEvent,
//   useTVEventHandler,
//   TVFocusGuideView,
//   ViewStyle,
//   Animated,
// } from 'react-native';
// import RailComponent from '../CustomComponent/RailComponent';

// const HomeScreen = () => {
//   const railData1 = [
//     {
//       description:
//         "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
//       sources:
//         'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
//       subtitle: 'By Blender Foundation',
//       thumb: 'images/BigBuckBunny.jpg',
//       title: 'Big Buck Bunny',
//       image: 'https://cdn.shopify.com/static/sample-images/garnished.jpeg?',
//     },
//     {
//       description: 'The first Blender Open Movie from 2006',
//       sources:
//         'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
//       subtitle: 'By Blender Foundation',
//       thumb: 'images/ElephantsDream.jpg',
//       title: 'Elephant Dream',
//       image: 'https://cdn.shopify.com/static/sample-images/bath.jpeg?',
//     },
//     {
//       description:
//         'HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.',
//       sources:
//         'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
//       subtitle: 'By Google',
//       thumb: 'images/ForBiggerBlazes.jpg',
//       title: 'For Bigger Blazes',
//       image: 'https://cdn.shopify.com/static/sample-images/teapot.jpg?',
//     },
//     {
//       description:
//         "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
//       sources:
//         'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
//       subtitle: 'By Google',
//       thumb: 'images/ForBiggerEscapes.jpg',
//       title: 'For Bigger Escape',
//       image: 'https://cdn.shopify.com/static/sample-images/shoes.jpeg?',
//     },
//     {
//       description:
//         'Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.',
//       sources:
//         'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
//       subtitle: 'By Google',
//       thumb: 'images/ForBiggerFun.jpg',
//       title: 'For Bigger Fun',
//       image: 'https://cdn.shopify.com/static/sample-images/garnished.jpeg?',
//     },
//     {
//       description:
//         'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
//       sources:
//         'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
//       subtitle: 'By Google',
//       thumb: 'images/ForBiggerJoyrides.jpg',
//       title: 'For Bigger Joyrides',
//       image: 'https://cdn.shopify.com/static/sample-images/bath.jpeg?',
//     },
//     {
//       description:
//         "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when you want to make Buster's big meltdowns even bigger. For $35. Learn how to use Chromecast with Netflix and more at google.com/chromecast.",
//       sources:
//         'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
//       subtitle: 'By Google',
//       thumb: 'images/ForBiggerMeltdowns.jpg',
//       title: 'For Bigger Meltdowns',
//       image: 'https://cdn.shopify.com/static/sample-images/teapot.jpg?',
//     },
//     {
//       description:
//         'Sintel is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film.\nThis 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. In addition to that, several crucial technical and creative targets have been realized online, by developers and artists and teams all over the world.\nwww.sintel.org',
//       sources:
//         'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
//       subtitle: 'By Blender Foundation',
//       thumb: 'images/Sintel.jpg',
//       title: 'Sintel',
//       image: 'https://cdn.shopify.com/static/sample-images/shoes.jpeg?',
//     },
//     {
//       description:
//         'Smoking Tire takes the all-new Subaru Outback to the highest point we can find in hopes our customer-appreciation Balloon Launch will get some free T-shirts into the hands of our viewers.',
//       sources:
//         'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
//       subtitle: 'By Garage419',
//       thumb: 'images/SubaruOutbackOnStreetAndDirt.jpg',
//       title: 'Subaru Outback On Street And Dirt',
//       image: 'https://cdn.shopify.com/static/sample-images/garnished.jpeg?',
//     },
//     {
//       description:
//         'Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender. Target was to improve and test a complete open and free pipeline for visual effects in film - and to make a compelling sci-fi film in Amsterdam, the Netherlands.  The film itself, and all raw material used for making it, have been released under the Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org website to find out more about this, or to purchase the 4-DVD box with a lot of extras.  (CC) Blender Foundation - http://www.tearsofsteel.org',
//       sources:
//         'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
//       subtitle: 'By Blender Foundation',
//       thumb: 'images/TearsOfSteel.jpg',
//       title: 'Tears of Steel',
//       image: 'https://cdn.shopify.com/static/sample-images/bath.jpeg?',
//     },
//     {
//       description:
//         "The Smoking Tire heads out to Adams Motorsports Park in Riverside, CA to test the most requested car of 2010, the Volkswagen GTI. Will it beat the Mazdaspeed3's standard-setting lap time? Watch and see...",
//       sources:
//         'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
//       subtitle: 'By Garage419',
//       thumb: 'images/VolkswagenGTIReview.jpg',
//       title: 'Volkswagen GTI Review',
//       image: 'https://cdn.shopify.com/static/sample-images/teapot.jpg?',
//     },
//     {
//       description:
//         'The Smoking Tire is going on the 2010 Bullrun Live Rally in a 2011 Shelby GT500, and posting a video from the road every single day! The only place to watch them is by subscribing to The Smoking Tire or watching at BlackMagicShine.com',
//       sources:
//         'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
//       subtitle: 'By Garage419',
//       thumb: 'images/WeAreGoingOnBullrun.jpg',
//       title: 'We Are Going On Bullrun',
//       image: 'https://cdn.shopify.com/static/sample-images/shoes.jpeg?',
//     },
//     {
//       description:
//         'The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.',
//       sources:
//         'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
//       subtitle: 'By Garage419',
//       thumb: 'images/WhatCarCanYouGetForAGrand.jpg',
//       title: 'What care can you get for a grand?',
//       image: 'https://cdn.shopify.com/static/sample-images/garnished.jpeg?',
//     },
//   ];

//   const railData2 = [
//     {
//       description:
//         "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
//       sources:
//         'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
//       subtitle: 'By Blender Foundation',
//       thumb: 'images/BigBuckBunny.jpg',
//       title: 'Big Buck Bunny',
//       image: 'https://cdn.shopify.com/static/sample-images/garnished.jpeg?',
//     },
//     {
//       description: 'The first Blender Open Movie from 2006',
//       sources:
//         'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
//       subtitle: 'By Blender Foundation',
//       thumb: 'images/ElephantsDream.jpg',
//       title: 'Elephant Dream',
//       image: 'https://cdn.shopify.com/static/sample-images/bath.jpeg?',
//     },
//     {
//       description:
//         'HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.',
//       sources:
//         'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
//       subtitle: 'By Google',
//       thumb: 'images/ForBiggerBlazes.jpg',
//       title: 'For Bigger Blazes',
//       image: 'https://cdn.shopify.com/static/sample-images/teapot.jpg?',
//     },
//     {
//       description:
//         "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
//       sources:
//         'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
//       subtitle: 'By Google',
//       thumb: 'images/ForBiggerEscapes.jpg',
//       title: 'For Bigger Escape',
//       image: 'https://cdn.shopify.com/static/sample-images/shoes.jpeg?',
//     },
//     {
//       description:
//         'Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.',
//       sources:
//         'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
//       subtitle: 'By Google',
//       thumb: 'images/ForBiggerFun.jpg',
//       title: 'For Bigger Fun',
//       image: 'https://cdn.shopify.com/static/sample-images/garnished.jpeg?',
//     },
//     {
//       description:
//         'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
//       sources:
//         'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
//       subtitle: 'By Google',
//       thumb: 'images/ForBiggerJoyrides.jpg',
//       title: 'For Bigger Joyrides',
//       image: 'https://cdn.shopify.com/static/sample-images/bath.jpeg?',
//     },
//     {
//       description:
//         "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when you want to make Buster's big meltdowns even bigger. For $35. Learn how to use Chromecast with Netflix and more at google.com/chromecast.",
//       sources:
//         'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
//       subtitle: 'By Google',
//       thumb: 'images/ForBiggerMeltdowns.jpg',
//       title: 'For Bigger Meltdowns',
//       image: 'https://cdn.shopify.com/static/sample-images/teapot.jpg?',
//     },
//     {
//       description:
//         'Sintel is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film.\nThis 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. In addition to that, several crucial technical and creative targets have been realized online, by developers and artists and teams all over the world.\nwww.sintel.org',
//       sources:
//         'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
//       subtitle: 'By Blender Foundation',
//       thumb: 'images/Sintel.jpg',
//       title: 'Sintel',
//       image: 'https://cdn.shopify.com/static/sample-images/shoes.jpeg?',
//     },
//     {
//       description:
//         'Smoking Tire takes the all-new Subaru Outback to the highest point we can find in hopes our customer-appreciation Balloon Launch will get some free T-shirts into the hands of our viewers.',
//       sources:
//         'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
//       subtitle: 'By Garage419',
//       thumb: 'images/SubaruOutbackOnStreetAndDirt.jpg',
//       title: 'Subaru Outback On Street And Dirt',
//       image: 'https://cdn.shopify.com/static/sample-images/garnished.jpeg?',
//     },
//     {
//       description:
//         'Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender. Target was to improve and test a complete open and free pipeline for visual effects in film - and to make a compelling sci-fi film in Amsterdam, the Netherlands.  The film itself, and all raw material used for making it, have been released under the Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org website to find out more about this, or to purchase the 4-DVD box with a lot of extras.  (CC) Blender Foundation - http://www.tearsofsteel.org',
//       sources:
//         'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
//       subtitle: 'By Blender Foundation',
//       thumb: 'images/TearsOfSteel.jpg',
//       title: 'Tears of Steel',
//       image: 'https://cdn.shopify.com/static/sample-images/bath.jpeg?',
//     },
//     {
//       description:
//         "The Smoking Tire heads out to Adams Motorsports Park in Riverside, CA to test the most requested car of 2010, the Volkswagen GTI. Will it beat the Mazdaspeed3's standard-setting lap time? Watch and see...",
//       sources:
//         'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
//       subtitle: 'By Garage419',
//       thumb: 'images/VolkswagenGTIReview.jpg',
//       title: 'Volkswagen GTI Review',
//       image: 'https://cdn.shopify.com/static/sample-images/teapot.jpg?',
//     },
//     {
//       description:
//         'The Smoking Tire is going on the 2010 Bullrun Live Rally in a 2011 Shelby GT500, and posting a video from the road every single day! The only place to watch them is by subscribing to The Smoking Tire or watching at BlackMagicShine.com',
//       sources:
//         'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
//       subtitle: 'By Garage419',
//       thumb: 'images/WeAreGoingOnBullrun.jpg',
//       title: 'We Are Going On Bullrun',
//       image: 'https://cdn.shopify.com/static/sample-images/shoes.jpeg?',
//     },
//     {
//       description:
//         'The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.',
//       sources:
//         'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
//       subtitle: 'By Garage419',
//       thumb: 'images/WhatCarCanYouGetForAGrand.jpg',
//       title: 'What care can you get for a grand?',
//       image: 'https://cdn.shopify.com/static/sample-images/garnished.jpeg?',
//     },
//   ];
//   const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

//   return (
//     <AnimatedScrollView style={styles.container}>
//       <View style={styles.railContainer}>
//         <Text style={styles.railTitle}>Category 1</Text>
//         <RailComponent data={railData1} />
//       </View>
//       <View style={styles.railContainer}>
//         <Text style={styles.railTitle}>Category 2</Text>
//         <RailComponent data={railData2} />
//       </View>
//     </AnimatedScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//   },
//   railContainer: {
//     marginVertical: 20,
//   },
//   railTitle: {
//     fontSize: 20,
//     color: '#FFF',
//     marginLeft: 20,
//     marginBottom: 10,
//   },
// });

// export default HomeScreen;
