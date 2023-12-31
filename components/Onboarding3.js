import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Onboarding3 = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, }}>
            <View style={{ alignSelf: 'flex-start' }}>
                <TouchableOpacity style={styles.skiptxt} onPress={() => { navigation.navigate('SignIn1') }}>
                    <Text style={{ fontSize: 15, color: "#54408C", lineHeight: 20, fontFamily: 'Roboto' }}>
                        Skip
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <Image source={require("../assets/Onboarding/onboarding3.png")} style={{ alignSelf: "center" }} />
            </View>
            <Text style={{ fontSize: 24, fontWeight: "bold", color: "black", textAlign: "center", marginTop: 16 }}>Start Your Adventure</Text>
            {/* <Text style={{ fontSize: 24, fontWeight: "bold", color: "black", textAlign: "center" }}>Awaits</Text> */}


            <Text style={{ fontSize: 15, color: "#A6A6A6", textAlign: "center", marginTop: 15, marginLeft: 42, marginRight: 41, paddingLeft: 25, paddingRight: 24, lineHeight: 25 }}>
                Ready to embark on a quest for inspiration and knowledge? Your adventure begins now. Let's go!
            </Text>


            <View style={{ marginTop: 35, flexDirection: 'row', alignSelf: 'center', alignItems: 'center' }}>
                <View style={{ height: 6, width: 6, color: '#54408C', borderRadius: 3, backgroundColor: 'silver' }}></View>
                <View style={{ height: 6, width: 6, color: '#54408C', borderRadius: 3, backgroundColor: 'silver', marginLeft: 2 }}></View>
                <View style={{ height: 9, width: 9, color: '#54408C', borderRadius: 4, backgroundColor: '#54408C', marginLeft: 2 }}></View>
            </View>

            <View style={{ marginTop: 37 }}>
                <TouchableOpacity onPress={() => navigation.navigate("SignIn1")}><Text style={styles.btncontinue}>Get Started</Text></TouchableOpacity>
            </View>


            <View style={{ marginTop: 8 }}>
                <TouchableOpacity onPress={() => navigation.navigate("SignIn1")}><Text style={{
                    textAlign: 'center', marginLeft: 24, marginRight: 24, color: '#54408C', fontSize: 18, paddingVertical: 16, fontWeight: 'bold'
                }}>Sign in</Text></TouchableOpacity>
            </View>


            {/* <View style={{marginTop:22}}>
    <TouchableOpacity style={{}}><Text style={{color:'#54408C', fontWeight:'bold', fontSize:17, textAlign:'center'}}>Sign in</Text></TouchableOpacity>
</View> */}
        </View>
    )
}

export default Onboarding3

const styles = StyleSheet.create({
    skiptxt: {
        margin: 20,
        padding: 10,
    },
    btncontinue: {
        backgroundColor: '#54408C',
        textAlign: 'center',
        marginLeft: 24,
        marginRight: 24,
        color: 'white',
        borderRadius: 12,
        fontSize: 17,
        paddingVertical: 16
    }
})