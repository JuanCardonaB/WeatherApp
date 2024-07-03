import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {WeatherData} from '../../Types/WeatherTypes';
// import {ForecastDays} from './ForecastDays';

export const WeatherDisplayInfo = ({data}: {data: WeatherData | null}) => {
  return (
    <View>
      <View style={styles.generalInfo}>
        <Text
          style={
            styles.cityName
          }>{`${data?.location.name}, ${data?.location.country}`}</Text>
        <Image
          source={{uri: `https:${data?.current?.condition?.icon}`}}
          style={{width: 280, height: 280}}
        />
        <Text style={styles.temperatureText}>{data?.current.temp_c}˚</Text>
        <Text style={styles.conditionText}>{data?.current.condition.text}</Text>
      </View>
      <View style={styles.infoItemsContainer}>
        <View style={styles.infoItem}>
          <Image
            style={{width: 30, height: 30}}
            source={require('../../../public/wind.png')}
          />
          <Text style={styles.infoText}>{data?.current.wind_kph}km</Text>
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
        <Text style={styles.dailyForecastTitle}>Daily Forecast</Text>
        <ScrollView horizontal>{/* <ForecastDays /> */}</ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cityName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
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
  dailyForecastTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
