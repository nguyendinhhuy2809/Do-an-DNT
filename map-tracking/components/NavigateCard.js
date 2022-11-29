import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import GOOGLE_MAP_KEY from '../src/constants/googleMapKey'
import { useDispatch } from 'react-redux'
import { setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import RideOptions from './RideOptions'
import NavFavourites from './NavFavourites'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'


const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Hello</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder='Where to ?'
            styles={inputBoxStyles}
            fetchDetails={true}
            returnKeyType={"search"}
            minLength={2}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptions")
            }}
            enablePoweredByContainer={false}
            query={{
              key: GOOGLE_MAP_KEY,
              language: "en",
            }}
            nearbyPlacesAPI='GooglePlaceSearch'
            debounce={200}
          />
        </View>
        <NavFavourites />
      </View>
      <View style={tw`flex-row bg-white py-2 mt-auto border-t border-gray-100`}>
        <TouchableOpacity 
        onPress={() => navigation.navigate("RideOptions")}
        style={tw`flex-collumn bg-black w-24 px-4 py-3 rounded-full`}>
        <Icon name="xe" type="font-awesome" color="white" size={16} />
            <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity> 
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const inputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 10,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  }
})