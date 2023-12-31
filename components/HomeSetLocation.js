import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Modal, TextInput } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const HomeSetLocation = () => {
    const navigation = useNavigation();

    return (
        <ScrollView style={{ flex: 1, marginHorizontal: 24, }} showsVerticalScrollIndicator={false}>

            {/* home app bar */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16, }}>
                <TouchableOpacity onPress={() => { navigation.navigate("HomeSetMap") }}>
                    <Image source={require("../assets/Icons/Arrow_Left.png")} style={{ tintColor: 'black' }} />
                </TouchableOpacity>


                <Text style={{ fontSize: 20, color: 'black', fontWeight: '700' }}>Location</Text>
                <TouchableOpacity onPress={() => { }}>
                    <Image source={require("../assets/Icons/GPS-Fill.png")} />
                </TouchableOpacity>
            </View>


            <View style={{ marginTop: 16 }}>
                <View>
                    <Text style={{ color: '#121212', fontSize: 15, fontWeight: 'bold' }}>
                        Phone
                    </Text>
                </View>
                <View style={{ marginTop: 6 }}>
                    <TextInput
                    inputMode='numeric'
                        placeholder='Phone'
                        placeholderTextColor={"grey"}
                        style={{ color: 'black', borderRadius: 10, backgroundColor: '#FAFAFA', paddingVertical: 12, paddingHorizontal: 16 }}
                    />
                </View>
            </View>

            <View style={{ marginTop: 16 }}>
                <View>
                    <Text style={{ color: '#121212', fontSize: 15, fontWeight: 'bold', }}>
                        Name
                    </Text>
                </View>
                <View style={{ marginTop: 6 }}>
                    <TextInput
                        placeholderTextColor={"grey"}
                        placeholder='Name'
                        style={{ color: 'black', borderRadius: 10, backgroundColor: '#FAFAFA', paddingVertical: 12, paddingHorizontal: 16 }}
                    />
                </View>
            </View>

            <View style={{ marginTop: 16 }}>
                <View>
                    <Text style={{ color: '#121212', fontSize: 15, fontWeight: 'bold' }}>
                        Governorate
                    </Text>
                </View>
                <View style={{ marginTop: 6 }}>
                    <TextInput
                        placeholderTextColor={"grey"}
                        placeholder='Governorate'
                        style={{ color: 'black', borderRadius: 10, backgroundColor: '#FAFAFA', paddingVertical: 12, paddingHorizontal: 16 }}
                    />
                </View>
            </View>

            <View style={{ marginTop: 16 }}>
                <View>
                    <Text style={{ color: '#121212', fontSize: 15, fontWeight: 'bold' }}>
                        City
                    </Text>
                </View>
                <View style={{ marginTop: 6 }}>
                    <TextInput
                        placeholderTextColor={"grey"}
                        placeholder='City'
                        style={{ color: 'black', borderRadius: 10, backgroundColor: '#FAFAFA', paddingVertical: 12, paddingHorizontal: 16 }}
                    />
                </View>
            </View>

            <View style={{ marginTop: 16 }}>
                <View>
                    <Text style={{ color: '#121212', fontSize: 15, fontWeight: 'bold', }}>
                        Block
                    </Text>
                </View>
                <View style={{ marginTop: 6 }}>
                    <TextInput
                        placeholderTextColor={"grey"}
                        placeholder='Block'
                        style={{ color: 'black', borderRadius: 10, backgroundColor: '#FAFAFA', paddingVertical: 12, paddingHorizontal: 16 }}
                    />
                </View>
            </View>

            <View style={{ marginTop: 16 }}>
                <View>
                    <Text style={{ color: '#121212', fontSize: 15, fontWeight: 'bold' }}>
                        Street name /number
                    </Text>
                </View>
                <View style={{ marginTop: 6 }}>
                    <TextInput
                        placeholderTextColor={"grey"}
                        placeholder='Street name /number'
                        style={{ color: 'black', borderRadius: 10, backgroundColor: '#FAFAFA', paddingVertical: 12, paddingHorizontal: 16 }}
                    />
                </View>
            </View>

            <View style={{ marginTop: 16 }}>
                <View>
                    <Text style={{ color: '#121212', fontSize: 15, fontWeight: 'bold', }}>
                        Building name /number
                    </Text>
                </View>
                <View style={{ marginTop: 6 }}>
                    <TextInput
                        placeholderTextColor={"grey"}
                        placeholder='Building name /number'
                        style={{ color: 'black', borderRadius: 10, backgroundColor: '#FAFAFA', paddingVertical: 12, paddingHorizontal: 16 }}
                    />
                </View>
            </View>

            <View style={{ marginTop: 16 }}>
                <View>
                    <Text style={{ color: '#121212', fontSize: 15, fontWeight: 'bold', }}>
                        Floor (option)
                    </Text>
                </View>
                <View style={{ marginTop: 6 }}>
                    <TextInput
                    inputMode='numeric'
                        placeholderTextColor={"grey"}
                        placeholder='Floor (option)'
                        style={{ color: 'black', borderRadius: 10, backgroundColor: '#FAFAFA', paddingVertical: 12, paddingHorizontal: 16 }}
                    />
                </View>
            </View>

            <View style={{ marginTop: 16 }}>
                <View>
                    <Text style={{ color: '#121212', fontSize: 15, fontWeight: 'bold', }}>
                        Flat (option)
                    </Text>
                </View>
                <View style={{ marginTop: 6 }}>
                    <TextInput
                        placeholderTextColor={"grey"}
                        placeholder='Flat (option)'
                        style={{ color: 'black', borderRadius: 10, backgroundColor: '#FAFAFA', paddingVertical: 12, paddingHorizontal: 16 }}
                    />
                </View>
            </View>

            <View style={{ marginTop: 16 }}>
                <View>
                    <Text style={{ color: '#121212', fontSize: 15, fontWeight: 'bold', }}>
                        Avenue (option)
                    </Text>
                </View>
                <View style={{ marginTop: 6 }}>
                    <TextInput
                        placeholderTextColor={"grey"}
                        placeholder='Avenue (option)'
                        style={{ color: 'black', borderRadius: 10, backgroundColor: '#FAFAFA', paddingVertical: 12, paddingHorizontal: 16 }}
                    />
                </View>
            </View>


            <View style={{ marginVertical: 22 }}>
                <TouchableOpacity onPress={() => { }}>
                    <Text style={styles.confirmation}>
                        Confirmation
                    </Text>
                </TouchableOpacity>
            </View>


        </ScrollView>
    )
}

export default HomeSetLocation

const styles = StyleSheet.create({
    confirmation: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
        backgroundColor: '#54408C',
        paddingVertical: 12,
        borderRadius: 30,
        fontWeight: '600'
    }
})