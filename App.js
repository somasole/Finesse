import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'

const MARGIN = 8
const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_WIDTH_MARGINS = SCREEN_WIDTH - (MARGIN * 2)

class HomeScreen extends React.Component {
  ARTICLE_IMAGE_DIMENSIONS = 1300 / 808
  ARTICLE_IMAGE_HEIGHT = SCREEN_WIDTH / this.ARTICLE_IMAGE_DIMENSIONS
  WORKOUT_IMAGE_DIMENSIONS = 1300 / 670
  WORKOUT_IMAGE_HEIGHT = SCREEN_WIDTH_MARGINS / this.WORKOUT_IMAGE_DIMENSIONS

  static navigationOptions = {
    title: <Image style={{ width: 50, height: 50 }} source={require('./images/logo.png')} />
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./images/article-text.jpg')} style={{width: SCREEN_WIDTH,
                                                                     height: this.ARTICLE_IMAGE_HEIGHT}} />

        <View style={{flex: 1, flexDirection: 'row', padding: MARGIN}}>
          <View style={{flex: 1, marginRight: MARGIN / 2}}>
            <Image source={require('./images/video1.jpg')} style={{width: '100%', height: '100%'}} />
          </View>
          <View style={{flex: 1, marginLeft: MARGIN / 2}}>
            <Image source={require('./images/video2.jpg')} style={{width: '100%', height: '100%'}} />
          </View>
        </View>

        <Image source={require('./images/workout.jpg')} style={{width: SCREEN_WIDTH_MARGINS,
                                                                height: this.WORKOUT_IMAGE_HEIGHT,
                                                                paddingLeft: MARGIN,
                                                                paddingRight: MARGIN,
                                                                marginBottom: MARGIN}} />
      </View>
    )
  }
}

const FeaturedNavigator = StackNavigator({
  Home: { screen: HomeScreen }
})

const AppNavigator = TabNavigator({
  Featured: {
    screen: FeaturedNavigator,
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./images/featured.png')} style={{height: 26, width: 26, tintColor: tintColor}} />
      )
    }),
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
})

export default class App extends React.Component {
  render() {
    return <AppNavigator style={{backgroundColor: 'white'}} />
  }
}
