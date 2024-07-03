import React, {useContext} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {DataContext} from '../../context/DataContext';

interface SearchBarProps {
  currentView: string;
  setCurrentView: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar = ({currentView, setCurrentView}: SearchBarProps) => {
  const datacontext = useContext(DataContext);
  const {
    searchedCities,
    setSearchedCities,
    setCity,
    setSearchValue,
    VIEWS,
    searchValue,
  } = datacontext;
  const handleOpenSearchBar = () => {
    setCurrentView(VIEWS.SEARCH);
  };

  const handleOpenHome = () => {
    setCurrentView(VIEWS.HOME);
    setSearchedCities([]);
  };

  const changeCity = (city: string) => {
    setCity(city);
    setCurrentView(VIEWS.HOME);
    setSearchedCities([]);
  };
  return (
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
          <TextInput
            onChange={e => {
              setSearchValue(e.nativeEvent.text);
            }}
            placeholder="Search"
            style={{flex: 1}}
          />
        )}
        {currentView === VIEWS.SEARCH && (
          <Pressable onPress={handleOpenHome}>
            <Text>cancel</Text>
          </Pressable>
        )}
      </Pressable>
      {currentView === VIEWS.SEARCH && (
        <View>
          {searchValue.length < 2 ? (
            <Text style={styles.searchCity}>Search a city</Text>
          ) : searchedCities.length > 0 ? (
            searchedCities.map(city => (
              <Pressable
                onPress={() => changeCity(city.name)}
                style={styles.searchItem}
                key={city.id}>
                <Text>{`${city.name}, ${city.region}, ${city.country}`}</Text>
              </Pressable>
            ))
          ) : (
            <Text style={styles.searchCity}>No results</Text>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
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
  searchItem: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  searchCity: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 100,
  },
});
