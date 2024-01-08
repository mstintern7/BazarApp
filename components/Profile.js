import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import BottomTab from './BottomTab';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  const [logout, setLogout] = useState(false);

  return (
    <View style={{ flex: 1 }}>

      <View style={{ marginTop: 40 }}>
        <Text style={{ fontSize: 21, textAlign: 'center', fontWeight: '700', color: 'black' }}>
          Profile
        </Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 25, marginTop: 25, borderTopWidth: 1, borderBottomWidth: 1, paddingVertical: 16, borderColor: 'silver', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View>
            <Image style={{ width: 68, height: 68, borderRadius: 34 }} source={require('../assets/Images/Author7.png')} />
          </View>
          <View style={{ marginLeft: 16 }}>
            <Text style={{ fontSize: 18, color: 'black', fontWeight: '700' }}>Anna Doe</Text>
            <Text style={{ fontSize: 16, color: 'grey' }}>+92 333 4246144</Text>
          </View>
        </View>
        <View style={{}}>
          <TouchableOpacity onPress={() => { setLogout(!logout) }}>
            <Text style={{ color: '#EF5A56', fontSize: 16, fontWeight: '700' }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>





      <TouchableOpacity onPress={()=>navigation.navigate("MyAccount")}>

        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 25, marginTop: 0, width: '100%', paddingVertical: 20, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ backgroundColor: 'lightgrey', padding: 10, borderRadius: 50 }}>
              <Image style={{ width: 25, height: 25, borderRadius: 30, resizeMode: 'contain', tintColor: '#54408C' }} source={require('../assets/Icons/profileicon.png')} />
            </View>
            <View style={{ marginLeft: 16 }}>
              <Text style={{ fontSize: 18, color: 'black', fontWeight: '700' }}>My Account</Text>
            </View>
          </View>

          <View style={{}}>
            <View>
              <Image source={require('../assets/Icons/nextarrow.png')} />
            </View>
          </View>
        </View>
      </TouchableOpacity>




      <TouchableOpacity onPress={()=>navigation.navigate("HomeSetMap")}>

        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 25, marginTop: 0, width: '100%', paddingVertical: 20, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ backgroundColor: 'lightgrey', padding: 10, borderRadius: 50 }}>
              <Image style={{ width: 25, height: 25, borderRadius: 30, resizeMode: 'contain', tintColor: '#54408C' }} source={require('../assets/Icons/Location.png')} />
            </View>
            <View style={{ marginLeft: 16 }}>
              <Text style={{ fontSize: 18, color: 'black', fontWeight: '700' }}>Address</Text>
            </View>
          </View>

          <View style={{}}>
            <View>
              <Image source={require('../assets/Icons/nextarrow.png')} />
            </View>
          </View>
        </View>
      </TouchableOpacity>




      <TouchableOpacity onPress={()=>navigation.navigate("Offers")}>

        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 25, marginTop: 0, width: '100%', paddingVertical: 20, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ backgroundColor: 'lightgrey', padding: 10, borderRadius: 50 }}>
              <Image style={{ width: 25, height: 25, borderRadius: 30, resizeMode: 'contain', tintColor: '#54408C' }} source={require('../assets/Icons/offerspromos.png')} />
            </View>
            <View style={{ marginLeft: 16 }}>
              <Text style={{ fontSize: 18, color: 'black', fontWeight: '700' }}>Offers & Promos</Text>
            </View>
          </View>

          <View style={{}}>
            <View>
              <Image source={require('../assets/Icons/nextarrow.png')} />
            </View>
          </View>
        </View>
      </TouchableOpacity>




      <TouchableOpacity onPress={()=>navigation.navigate("YourFavorites")}>

        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 25, marginTop: 0, width: '100%', paddingVertical: 20, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ backgroundColor: 'lightgrey', padding: 10, borderRadius: 50 }}>
              <Image style={{ width: 25, height: 25, borderRadius: 30, resizeMode: 'contain', tintColor: '#54408C' }} source={require('../assets/Icons/heart.png')} />
            </View>
            <View style={{ marginLeft: 16 }}>
              <Text style={{ fontSize: 18, color: 'black', fontWeight: '700' }}>Your Favourites</Text>
            </View>
          </View>

          <View style={{}}>
            <View>
              <Image source={require('../assets/Icons/nextarrow.png')} />
            </View>
          </View>
        </View>
      </TouchableOpacity>




      <TouchableOpacity onPress={()=>navigation.navigate("OrderHistory")}>

        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 25, marginTop: 0, width: '100%', paddingVertical: 20, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ backgroundColor: 'lightgrey', padding: 10, borderRadius: 50 }}>
              <Image style={{ width: 25, height: 25, borderRadius: 30, resizeMode: 'contain', tintColor: '#54408C' }} source={require('../assets/Icons/orderhistory.png')} />
            </View>
            <View style={{ marginLeft: 16 }}>
              <Text style={{ fontSize: 18, color: 'black', fontWeight: '700' }}>Order History</Text>
            </View>
          </View>

          <View style={{}}>
            <View>
              <Image source={require('../assets/Icons/nextarrow.png')} />
            </View>
          </View>
        </View>
      </TouchableOpacity>




      <TouchableOpacity onPress={()=>navigation.navigate("HelpCenter")}>

        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 25, marginTop: 0, width: '100%', paddingVertical: 20, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ backgroundColor: 'lightgrey', padding: 10, borderRadius: 50 }}>
              <Image style={{ width: 25, height: 25, borderRadius: 30, resizeMode: 'contain', tintColor: '#54408C' }} source={require('../assets/Icons/helpcenter.png')} />
            </View>
            <View style={{ marginLeft: 16 }}>
              <Text style={{ fontSize: 18, color: 'black', fontWeight: '700' }}>Help Center</Text>
            </View>
          </View>

          <View style={{}}>
            <View>
              <Image source={require('../assets/Icons/nextarrow.png')} />
            </View>
          </View>
        </View>
      </TouchableOpacity>


      <Modal
        animationType="slide"
        transparent={true}
        visible={logout}>
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ flex: 1, backgroundColor: 'white', marginTop: 480, elevation: 10, borderTopLeftRadius: 50, borderTopRightRadius: 50, }}>
            <View style={{ marginTop: 16, marginHorizontal: 24 }}>
              <View>
                <TouchableOpacity onPress={() => setLogout(false)}>
                  <View style={{ height: 5, width: 56, backgroundColor: 'gray', alignSelf: 'center' }}></View>
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: 16 }}>
                <Text style={{ fontSize: 19, color: 'black', fontWeight: '700' }}>
                  Logout
                </Text>
              </View>

              <View style={{ marginTop: 16 }}>
                <View>
                  <Text style={{ color: 'black', fontSize: 18 }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </Text>
                </View>
                <View style={{ marginTop: 24 }}>
                  <TouchableOpacity onPress={()=>navigation.navigate("SignIn1")}>
                    <Text style={styles.btnlogout}>
                      Logout
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={{ marginTop: 16 }}>
                  <TouchableOpacity onPress={()=>setLogout(false)}>
                    <Text style={styles.btncancel}>
                      Cancel
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

            </View>
          </View>
        </View>
      </Modal>



      <View style={{ position: 'absolute', width: '100%', backgroundColor: 'white', bottom: 0, paddingVertical: 6 }}>
        <BottomTab />
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  btnlogout: {
    backgroundColor: '#54408C',
    textAlign: 'center',
    // marginLeft: 24,
    // marginRight: 24,
    color: 'white',
    borderRadius: 35,
    fontSize: 19,
    paddingVertical: 12,
    fontWeight: '600'
  },
  btncancel: {
    backgroundColor: 'white',
    textAlign: 'center',
    // marginLeft: 24,
    // marginRight: 24,
    color: '#54408C',
    borderRadius: 35,
    fontSize: 19,
    paddingVertical: 12,
    fontWeight: '600'
  }
})