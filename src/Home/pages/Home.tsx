import React, {useContext, useState} from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {DataContext} from '../../context/DataContext';

const VIEWS = {
  HOME: 'HOME',
  SEARCH: 'SEARCH',
};

export const Home = () => {
  const datacontext = useContext(DataContext);
  const [currentView, setCurrentView] = useState(VIEWS.HOME);

  const {data} = datacontext;
  console.log(data);

  const handleOpenSearchBar = () => {
    setCurrentView(VIEWS.SEARCH);
  };

  const handleOpenHome = () => {
    setCurrentView(VIEWS.HOME);
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require('../../../public/fondo.jpg')}
      blurRadius={60}>
      <SafeAreaView>
        <View>
          <View style={styles.header}>
            <Pressable
              onPress={handleOpenSearchBar}
              style={[
                styles.searchContainer,
                currentView === VIEWS.SEARCH ? {width: '100%'} : {width: 45},
                currentView === VIEWS.SEARCH ? {padding: 10} : {padding: 0},
              ]}>
              <Image
                style={styles.searchLogo}
                source={require('../../../public/search.png')}
              />
              {currentView === VIEWS.SEARCH && (
                <TextInput placeholder="Search" style={{flex: 1}} />
              )}
              {currentView === VIEWS.SEARCH && (
                <Pressable onPress={handleOpenHome}>
                  <Text>cancel</Text>
                </Pressable>
              )}
            </Pressable>
          </View>
          {currentView === VIEWS.HOME && (
            <View>
              <View style={styles.generalInfo}>
                <Text
                  style={
                    styles.cityName
                  }>{`${data?.location.name}, ${data?.location.country}`}</Text>
                <Image
                  source={require('../../../public/partly-cloudy.png')}
                  style={{width: 280, height: 280}}
                />
                <Text style={styles.temperatureText}>
                  {data?.current.temp_c}˚
                </Text>
                <Text style={styles.conditionText}>
                  {data?.current.condition.text}
                </Text>
              </View>
              <View style={styles.infoItemsContainer}>
                <View style={styles.infoItem}>
                  <Image
                    style={{width: 30, height: 30}}
                    source={require('../../../public/wind.png')}
                  />
                  <Text style={styles.infoText}>
                    {data?.current.wind_kph}km
                  </Text>
                </View>
                <View style={styles.infoItem}>
                  <Image
                    style={{width: 30, height: 30}}
                    source={require('../../../public/wind.png')}
                  />
                  <Text style={styles.infoText}>{data?.current.humidity}%</Text>
                </View>
                <View style={styles.infoItem}>
                  <Image
                    style={{width: 30, height: 30}}
                    source={require('../../../public/wind.png')}
                  />
                  <Text style={styles.infoText}>
                    {data?.current.last_updated.split(' ')[1]}
                  </Text>
                </View>
              </View>
              <View style={styles.dailyForecastContainer}>
                <Text>Daily Forecast</Text>
                <ScrollView horizontal>
                  <View style={styles.forecastItem}>
                    <Text>Monday</Text>
                    <Image
                      source={require('../../../public/partly-cloudy.png')}
                      style={{width: 50, height: 50}}
                    />
                    <Text>24˚</Text>
                  </View>
                  <View style={styles.forecastItem}>
                    <Text>Monday</Text>
                    <Image
                      source={require('../../../public/partly-cloudy.png')}
                      style={{width: 50, height: 50}}
                    />
                    <Text>24˚</Text>
                  </View>
                  <View style={styles.forecastItem}>
                    <Text>Monday</Text>
                    <Image
                      source={require('../../../public/partly-cloudy.png')}
                      style={{width: 50, height: 50}}
                    />
                    <Text>24˚</Text>
                  </View>
                  <View style={styles.forecastItem}>
                    <Text>Monday</Text>
                    <Image
                      source={require('../../../public/partly-cloudy.png')}
                      style={{width: 50, height: 50}}
                    />
                    <Text>24˚</Text>
                  </View>
                  <View style={styles.forecastItem}>
                    <Text>Monday</Text>
                    <Image
                      source={require('../../../public/partly-cloudy.png')}
                      style={{width: 50, height: 50}}
                    />
                    <Text>24˚</Text>
                  </View>
                  <View style={styles.forecastItem}>
                    <Text>Monday</Text>
                    <Image
                      source={require('../../../public/partly-cloudy.png')}
                      style={{width: 50, height: 50}}
                    />
                    <Text>24˚</Text>
                  </View>
                  <View style={styles.forecastItem}>
                    <Text>Monday</Text>
                    <Image
                      source={require('../../../public/partly-cloudy.png')}
                      style={{width: 50, height: 50}}
                    />
                    <Text>24˚</Text>
                  </View>
                </ScrollView>
              </View>
            </View>
          )}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  header: {
    display: 'flex',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  searchLogo: {
    width: 20,
    height: 20,
  },
  searchContainer: {
    backgroundColor: 'white',
    borderRadius: 50,
    display: 'flex',
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 10,
  },
  cityName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  temperatureText: {
    fontSize: 50,
    color: 'white',
    marginRight: -30,
  },
  conditionText: {
    fontSize: 20,
    color: 'white',
  },
  generalInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    gap: 10,
  },
  infoItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  infoText: {
    color: 'grey',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoItemsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 30,
    marginTop: 30,
  },
  dailyForecastContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  forecastItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
});
