import React from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import Video from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

interface BackgroundVideoProps {
  videoUri: string;
  posterUri: string;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ videoUri , posterUri}) => {
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: videoUri }}
        style={styles.backgroundVideo}
        resizeMode="cover"
        repeat
        muted
        playInBackground={false}
        playWhenInactive={false}
        poster={posterUri}
      />
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.7)', 'transparent']}
        style={styles.gradient}
      />
      <View style={styles.videoDetailsContainer}>
        <Text style={styles.title}>Life Hill Gayi</Text>
        <Text style={styles.details}>2024 • 1 Season • 7 Languages • U/A 16+</Text>
        <Text style={styles.description}>
          Siblings turn rivals when they are put on an inheritance race by reviving a down-in-the-dumps hotel in the hills. Who will emerge victorious?
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  backgroundVideo: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: height * 0.5,
  },
  videoDetailsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#FFF',
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    color: '#FFF',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#FFF',
  },
});

// export default BackgroundVideo;
export default React.memo(BackgroundVideo);
