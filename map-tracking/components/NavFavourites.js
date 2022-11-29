import { StyleSheet, View,Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

const data = [
    {
        id:"000",
        icon: "home",
        location: "Home",
        destination: "Hai Ba Trung, Ha Noi, Viet Nam",
    },
    {
        id:"001",
        icon: "school",
        location:"School",
        destination: "Giai Phong, Dong Tam, Ha Noi, Viet Nam"
    }
]

const NavFavourites = () => {
    return (
        <FlatList data={data} keyExtractor={(item) => item.id}
            ItemSeparatorComponent={()=>(
             <View style={[tw`bg-gray-200`,{height: 0.5}]}/>
            )}
            renderItem={({item: {location, destination, icon} }) => (
                <TouchableOpacity style={tw`flex-row items-center p-5`}>
                    <Icon
                    style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                    name={icon}
                    type="ionicon"
                    color="white"
                    size={18}
                    />
                    <View>
                        <Text style={tw`font-semibold text-lg`}>{location}</Text>
                        <Text style={tw`text-gray-500`}>{destination}</Text>
                    </View>
                </TouchableOpacity> 
            )}
        />
    );
};

export default NavFavourites

const styles = StyleSheet.create({})