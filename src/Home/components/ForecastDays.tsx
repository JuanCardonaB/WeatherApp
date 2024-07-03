import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export const ForecastDays = ({data}) => {
  return data.forecast.forecastday.map(day => {
    const date = new Date(day.date);
    let dayName = date.toLocaleDateString('en-US', {weekday: 'long'});
    return (
      <View style={styles.forecastItem}>
        <Image
          source={{uri: `https:${day?.day?.condition?.icon}`}}
          style={{width: 50, height: 50}}
        />
        <Text>{dayName}</Text>
        <Text>{`${day?.day?.avgtemp_c}˚`}</Text>
      </View>
    );
  });
};

const styles = StyleSheet.create({
  forecastItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    width: 100,
  },
});
