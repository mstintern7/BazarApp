import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Modal, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import DatePicker from 'react-native-date-picker'



const CartConfirmOrder = (props) => {

    const [click,setClick]=useState()

    const totalPrice = props.route.params;
    console.log(totalPrice);

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const total = () => {
        // const shipping = 2;
        const totalPayment = 2 + Number(totalPrice);
        return totalPayment
    }

    // const [selectedDate, setSelectedDate] = useState('');
    // const handleDateChange = (date) => {
    //     setSelectedDate(date);
    // };
    let today = new Date();
    const navigation = useNavigation();
    const [paymentModalVisible, setPaymentModalVisible] = useState(false);
    const [selectPModalVisible, setSelectPModalVisible] = useState(false);
    const [dateModalVisible, setDateModalVisible] = useState(false);

    return (
        <View style={{ flex: 1, marginHorizontal: 24 }}>

            {/* Appbar */}
            <View style={{ marginBottom: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, }}>
                <TouchableOpacity onPress={() => { navigation.navigate("Cart") }}>
                    <Image source={require("../assets/Icons/Arrow_Left.png")} style={{ tintColor: 'black' }} />
                </TouchableOpacity>


                <Text style={{ fontSize: 20, color: 'black', fontWeight: '700' }}>Confirm Order</Text>
                <TouchableOpacity
                onPress={()=>{
                    Alert.alert("There is no Notification")
                }}>
                    <Image source={require("../assets/Icons/Notification.png")} />
                </TouchableOpacity>

            </View>


            <ScrollView showsVerticalScrollIndicator={false}>


                {/* Address  */}
                <View style={{ borderWidth: 1, padding: 16, marginTop: 8, borderRadius: 12, borderColor: 'silver' }}>
                    <View>
                        <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>
                            Address
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 16, }}>
                        <View style={{ backgroundColor: '#fff', width: 36, height: 36, alignItems: 'center', justifyContent: 'center', borderRadius: 16 }}>
                            <Image style={{ width: 26, height: 26 }} source={require('../assets/Icons/Location.png')} />
                        </View>
                        <View style={{ marginHorizontal: 16, flex: 1 }}>
                            <Text style={{ fontWeight: '700', color: 'black', fontSize: 16 }}>
                                Pakistan
                            </Text>
                            <Text style={{ fontSize: 15, fontWeight: '400', color: 'grey' }}>
                                Select your Delivery Location by clicking Change button
                            </Text>
                            <View style={{ marginTop: 16 }}>
                                <TouchableOpacity onPress={() => navigation.navigate("HomeSetMap")}>
                                    <Text style={styles.changebtn}>
                                        Change
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Image style={{ tintColor: 'black' }} source={require('../assets/Icons/nextarrow.png')} />
                        </View>
                    </View>

                </View>

                {/* summary */}
                <View style={{ marginTop: 16, borderWidth: 1, padding: 16, borderRadius: 12, borderColor: 'silver' }}>
                    <View>
                        <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>
                            Summary
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 }}>
                        <Text style={{ fontSize: 15, color: 'black' }}>
                            Price
                        </Text>
                        <Text style={{ fontSize: 15, color: 'black' }}>
                            ${totalPrice}
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
                        <Text style={{ fontSize: 15, color: 'black' }}>
                            Shipping
                        </Text>
                        <Text style={{ fontSize: 15, color: 'black' }}>
                            $2
                        </Text>
                    </View>

                    <View style={{ height: 1, width: 295, backgroundColor: 'silver', marginVertical: 16 }}></View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 15, color: 'black', fontWeight: '800' }}>
                            Total Payment
                        </Text>
                        <Text style={{ fontSize: 15, color: 'black', fontWeight: '800' }}>
                            {/* $89.10 */}
                            {total()}
                        </Text>
                    </View>

                    <View style={{ height: 1, width: 295, backgroundColor: 'silver', marginVertical: 16 }}></View>

                    <TouchableOpacity onPress={() => setPaymentModalVisible(!paymentModalVisible)}>
                        <View style={{ flexDirection: 'row' }}>

                            <Text style={{ fontSize: 15, color: '#54408C', fontWeight: '700' }}>
                                See details
                            </Text>
                            <Image style={{ tintColor: '#54408C' }} source={require('../assets/Icons/nextarrow.png')} />

                        </View>
                    </TouchableOpacity>
                </View>

                {/* date and time */}

                <View style={{ borderWidth: 1, padding: 16, marginTop: 16, borderRadius: 12, borderColor: 'silver' }}>
                    <View>
                        <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>
                            Date and Time
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => setDateModalVisible(!dateModalVisible)}>
                        <View style={{ flexDirection: 'row', marginTop: 16, }}>

                            <View style={{ backgroundColor: '#D0D3D4', width: 36, height: 36, alignItems: 'center', justifyContent: 'center', borderRadius: 16 }}>
                                <Image style={{ width: 24, height: 24 }} source={require('../assets/Icons/Calendar.png')} />
                            </View>
                            <View style={{ marginHorizontal: 16, flex: 1 }}>
                                <Text style={{ fontWeight: '700', color: 'black', fontSize: 16 }}>
                                    Date & time
                                </Text>
                                <Text style={{ fontSize: 15, fontWeight: '400', color: 'grey' }}>
                                    Choose date and time
                                </Text>

                            </View>
                            <View>
                                <Image style={{ tintColor: 'black' }} source={require('../assets/Icons/nextarrow.png')} />
                            </View>

                        </View>
                    </TouchableOpacity>
                </View>


                {/* Payment */}

                <View style={{ borderWidth: 1, padding: 16, marginTop: 16, borderRadius: 12, borderColor: 'silver' }}>
                    <View>
                        <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>
                            Payment
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => setSelectPModalVisible(!selectPModalVisible)}>
                        <View style={{ flexDirection: 'row', marginTop: 16, }}>
                            <View style={{ backgroundColor: '#D0D3D4', width: 36, height: 36, alignItems: 'center', justifyContent: 'center', borderRadius: 16 }}>
                                <Image style={{ width: 24, height: 24 }} source={require('../assets/Icons/payment.png')} />
                            </View>
                            <View style={{ marginHorizontal: 16, flex: 1 }}>
                                <Text style={{ fontWeight: '700', color: 'black', fontSize: 16 }}>
                                    Payment
                                </Text>
                                <Text style={{ fontSize: 15, fontWeight: '400', color: 'grey' }}>
                                    Choose your payment
                                </Text>

                            </View>
                            <View>
                                <Image style={{ tintColor: 'black' }} source={require('../assets/Icons/nextarrow.png')} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Button */}
                <View style={{ marginVertical: 22 }}>
                    <TouchableOpacity onPress={() => { navigation.navigate("OrderStatus") }}>
                        <Text style={styles.order}>
                            Order
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* Payment Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={paymentModalVisible}
                onRequestClose={() => {
                    setPaymentModalVisible(!paymentModalVisible)
                }}>
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View style={{ flex: 1, backgroundColor: 'white', marginTop: 340, elevation: 10, borderTopLeftRadius: 50, borderTopRightRadius: 50, }}>
                        <View style={{ marginTop: 16, marginHorizontal: 24 }}>
                            <View>
                                <TouchableOpacity onPress={() => setPaymentModalVisible(false)}>
                                    <View style={{ height: 5, width: 56, backgroundColor: 'gray', alignSelf: 'center' }}></View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: 16 }}>
                                <Text style={{ fontSize: 19, color: 'black', fontWeight: '700' }}>
                                    Payment Details
                                </Text>
                            </View>
                            <View style={{ borderWidth: 1, padding: 16, borderRadius: 12, borderColor: 'silver', marginTop: 16 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 }}>
                                    <Text style={{ fontSize: 15, color: 'black', fontWeight: '700' }}>
                                        Price
                                    </Text>
                                    <Text style={{ fontSize: 15, color: 'black', fontWeight: '700' }}>
                                        $87.10
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
                                    <Text style={{ fontSize: 15, color: 'grey' }}>
                                        Squid Sweet and Sour Salad
                                    </Text>
                                    <Text style={{ fontSize: 15, color: 'grey' }}>
                                        $19.99
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
                                    <Text style={{ fontSize: 15, color: 'grey' }}>
                                        Japan Hainanese Sashimi
                                    </Text>
                                    <Text style={{ fontSize: 15, color: 'grey' }}>
                                        $39.99
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
                                    <Text style={{ fontSize: 15, color: 'grey' }}>
                                        Black pepper Beef Lumpia
                                    </Text>
                                    <Text style={{ fontSize: 15, color: 'grey' }}>
                                        $27.12
                                    </Text>
                                </View>
                                <View style={{ height: 1, width: 295, backgroundColor: 'silver', marginVertical: 16 }}></View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 15, color: 'black', fontWeight: '800' }}>
                                        Shipping
                                    </Text>
                                    <Text style={{ fontSize: 15, color: 'black', fontWeight: '800' }}>
                                        $2
                                    </Text>
                                </View>
                                <View style={{ height: 1, width: 295, backgroundColor: 'silver', marginVertical: 16 }}></View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 15, color: 'black', fontWeight: '800' }}>
                                        Total Payment
                                    </Text>
                                    <Text style={{ fontSize: 15, color: 'black', fontWeight: '800' }}>
                                        $89.10
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>

            {/* Select Payment Modal */}
            <Modal
                animationType='slide'
                transparent={true}
                visible={selectPModalVisible}
                onRequestClose={() => {
                    setSelectPModalVisible(!selectPModalVisible)
                }}
            >
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View style={{ flex: 1, backgroundColor: 'white', marginTop: 400, elevation: 10, borderTopLeftRadius: 50, borderTopRightRadius: 50, }}>
                        <View style={{ marginTop: 16, marginHorizontal: 24 }}>
                            <View>
                                <TouchableOpacity onPress={() => setSelectPModalVisible(false)}>
                                    <View style={{ height: 5, width: 56, backgroundColor: 'gray', alignSelf: 'center' }}></View>
                                </TouchableOpacity>
                            </View>

                            <View style={{ marginTop: 16 }}>
                                <Text style={{ fontSize: 19, color: 'black', fontWeight: '700' }}>
                                    Your Payments
                                </Text>
                            </View>

                            <TouchableOpacity style={{ borderWidth: 2, marginTop: 16, borderRadius: 20, borderColor: '#54408C' }}>

                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 25, marginTop: 0, width: '100%', paddingVertical: 20, justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ padding: 1, borderRadius: 50 }}>
                                            <Image style={{ width: 36, height: 36, borderRadius: 30, resizeMode: 'contain', }} source={require('../assets/Icons/K.png')} />
                                        </View>
                                        <View style={{ marginLeft: 16 }}>
                                            <Text style={{ fontSize: 18, color: 'black', fontWeight: '700' }}>Cash</Text>
                                        </View>
                                    </View>

                                    <View style={{}}>
                                        <View>
                                            <Image source={require('../assets/Icons/nextarrow.png')} />
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>


                            <TouchableOpacity style={{ borderWidth: 2, marginTop: 17, borderRadius: 20, borderColor: 'silver' }}>

                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 25, marginTop: 0, width: '100%', paddingVertical: 20, justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ backgroundColor: '#F5BE00', padding: 10, borderRadius: 50 }}>
                                            <Image style={{ width: 26, height: 26, borderRadius: 30, tintColor: 'white' }} source={require('../assets/Icons/payment.png')} />
                                        </View>
                                        <View style={{ marginLeft: 16 }}>
                                            <Text style={{ fontSize: 18, color: 'black', fontWeight: '700' }}>Credit Card</Text>
                                        </View>
                                    </View>

                                    <View style={{}}>
                                        <View>
                                            <Image source={require('../assets/Icons/nextarrow.png')} />
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>


                        </View>
                    </View>
                </View>
            </Modal>

            {/* Date Modal */}
            <Modal
                animationType='slide'
                transparent={true}
                visible={dateModalVisible}
                onRequestClose={() => {
                    setDateModalVisible(!dateModalVisible)
                }}
            >

                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View style={{ flex: 1, backgroundColor: 'white', marginTop: 300, elevation: 10, borderTopLeftRadius: 50, borderTopRightRadius: 50, }}>
                        <View style={{ marginTop: 16, }}>
                            <View style={{ marginHorizontal: 24 }}>
                                <TouchableOpacity onPress={() => setDateModalVisible(false)}>
                                    <View style={{ height: 5, width: 56, backgroundColor: 'gray', alignSelf: 'center' }}></View>
                                </TouchableOpacity>
                            </View>

                            <View style={{ marginTop: 16, marginHorizontal: 24 }}>
                                <Text style={{ fontSize: 19, color: 'black', fontWeight: '700' }}>
                                    Delivery date
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 16, justifyContent: 'space-between', marginHorizontal: 24, alignSelf: 'center' }}>
                                {/* <View style={{ borderWidth: 1, borderColor: '#54408C', paddingVertical: 25, paddingHorizontal: 21, borderRadius: 8 }}>
                                    <Text style={{ fontSize: 16, fontWeight: '700', color: 'black', textAlign: 'center' }}>
                                        Today
                                    </Text>
                                    <Text style={{ fontSize: 16, fontWeight: '700', color: 'black', textAlign: 'center' }}>
                                        12 Jan
                                    </Text>

                                </View> */}

                                <View style={{ borderWidth: 1, borderColor: 'silver', marginLeft: 7, paddingHorizontal: 21, borderRadius: 8, alignSelf: 'center', paddingVertical: 50 }}>
                                    <Text style={{ fontSize: 16, fontWeight: '700', color: 'black', textAlign: 'center' }}>
                                        {/* 12 Jan */}
                                        {date.toDateString()}
                                    </Text>
                                </View>

                                <View style={{ borderWidth: 1, borderColor: 'silver', marginLeft: 20, paddingVertical: 25, paddingHorizontal: 21, borderRadius: 8 }}>
                                    <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold' }}>Select Date</Text>
                                    <TouchableOpacity
                                        onPress={() => setOpen(true)}
                                        style={{ marginTop: 6 }}>
                                        <Text style={{ backgroundColor: '#54408C', color: 'white', fontSize: 15, fontWeight: '800', padding: 10, borderRadius: 20 }}>Pick a Date</Text>
                                    </TouchableOpacity>
                                    <DatePicker
                                        modal
                                        open={open}
                                        date={date}
                                        onConfirm={(date) => {
                                            setOpen(false)
                                            setDate(date)
                                        }}
                                        onCancel={() => {
                                            setOpen(false)
                                        }}
                                    />
                                </View>

                            </View>

                            <View style={{ marginTop: 19, marginHorizontal: 24 }}>
                                <Text style={{ fontSize: 19, color: 'black', fontWeight: '700' }}>
                                    Delivery time
                                </Text>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 16, justifyContent: 'space-between', marginHorizontal: 24, alignSelf: 'center' }}>


                                <TouchableOpacity>
                                    <View style={{ borderWidth: 1, borderColor: '#54408C', paddingVertical: 25, paddingHorizontal: 28, borderRadius: 8 }}>
                                        <Text style={{ fontSize: 16, fontWeight: '700', color: 'black', textAlign: 'center' }}>
                                            Between
                                        </Text>
                                        <Text style={{ fontSize: 16, fontWeight: '700', color: 'black' }}>
                                            6:00PM : 11:00PM
                                        </Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <View style={{ borderWidth: 1, borderColor: 'silver', marginLeft: 7, paddingVertical: 25, paddingHorizontal: 28, borderRadius: 8 }}>
                                        <Text style={{ fontSize: 16, fontWeight: '700', color: 'black', textAlign: 'center' }}>
                                            Between
                                        </Text>
                                        <Text style={{ fontSize: 16, fontWeight: '700', color: 'black' }}>
                                            6:00AM : 12:00AM
                                        </Text>
                                    </View>
                                </TouchableOpacity>

                            </View>

                            <View style={{ marginTop: 25 }}>
                                <TouchableOpacity onPress={() => setDateModalVisible(!dateModalVisible)} >
                                    <Text style={styles.order}>
                                        Confirm
                                    </Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </View>
            </Modal>


        </View>
    )
}

export default CartConfirmOrder

const styles = StyleSheet.create({
    changebtn: {
        fontSize: 15,
        color: '#54408C',
        backgroundColor: '#fff',
        paddingVertical: 9,
        width: 98,
        textAlign: 'center',
        borderRadius: 50,
        fontWeight: '800'
    },

    order: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
        backgroundColor: '#54408C',
        paddingVertical: 12,
        borderRadius: 30,
        fontWeight: '600',
        marginHorizontal: 3,

    },
    datePicker: {
        width: 200,
        marginBottom: 20,
    },
    selectedDate: {
        fontSize: 16,
        marginTop: 10,
    },
})