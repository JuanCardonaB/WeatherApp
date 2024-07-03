import React, {useContext, useState} from 'react';
import {ImageBackground, SafeAreaView, StyleSheet, View} from 'react-native';
import {DataContext} from '../../context/DataContext';
import {SearchBar} from '../components/SearchBar';
import {WeatherDisplayInfo} from '../components/WeatherDisplayInfo';

export const Home = () => {
  const datacontext = useContext(DataContext);
  const {VIEWS} = datacontext;
  const [currentView, setCurrentView] = useState(VIEWS.HOME);

  return (
    <ImageBackground
      style={styles.background}
      source={require('../../../public/fondo.jpg')}
      blurRadius={60}>
      <SafeAreaView>
        <View>
          <SearchBar
            currentView={currentView}
            setCurrentView={setCurrentView}
          />
          {currentView === VIEWS.HOME && <WeatherDisplayInfo />}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
});
