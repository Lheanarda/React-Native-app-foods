import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen'
import ResultDetailScreen from './src/screens/ResultDetailScreen';

const navigator = createStackNavigator(
  {
   Search:SearchScreen,
   ResultDetail: ResultDetailScreen
  }, 
  {
  initialRouteName: 'Search',
  defaultNavigationOptions:{
    title:'Business Search'
  }
});

export default createAppContainer(navigator);

//YELP 
//-ClientID = tSHm8iYJeeDFpNKwqPPQhw
//-API Key = bDI25uWW2dv55-Q_8vd6jYySvP_BCAqo-k4bT2z_cUrO9FiEFzPcvydlr-AbsBayb_igFitHzbPJPqnWDsN13lrlyHLeSt97SJjYim5hYVYGyrZiK26yOzYroDUIX3Yx
