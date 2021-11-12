import React from "react";
import { Text, TouchableOpacity, View, StyleSheet, TextInput } from 'react-native'
import { BarCodeScanner } from "expo-barcode-scanner";
import * as Permissions from "expo-permissions"
import firebase from 'firebase'
import db from "../config";


export default class Transaction extends React.Component {
    constructor() {
        super()
        this.state = {
            hasCameraPermission: null,
            scanned: false,
            scannedData: '',
            domState: 'normal',
            studentID: '',
            bookID: ''
        }
    }
    render() {
        if (this.state.domState != 'normal') {
            return (<BarCodeScanner onBarCodeScanned={this.handleBarcodeScanner} style={styles.a}  />)
        }
        return (<View style={styles.container}>
            <View style={styles.inputcontainer} >
                <TouchableOpacity style={styles.ScanButton} onPress={() => this.getPermission('studentID')} >
                    <Text>Scan</Text>
                </TouchableOpacity>
                <TextInput style={styles.Inputbox} placeholder='Student ID' value={this.state.studentID} />

            </View>
            <View style={styles.inputcontainer} >
                <TouchableOpacity style={styles.ScanButton} onPress={() => this.getPermission('bookID')} >
                    <Text>Scan</Text>
                </TouchableOpacity>
                <TextInput style={styles.Inputbox} placeholder='Book ID' value={this.state.bookID} />

            </View>
            <TouchableOpacity>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>)
        // if (this.state.hasCameraPermission) {
        //     return 

        // }
        // return (
        //     <View>
        //         <Text> {this.state.hasCameraPermission ? this.state.scannedData : 'Please give me camera permission'}</Text>
        //         <TouchableOpacity onPress={() => this.getPermission()}>
        //             <Text>Scan QR Code</Text>

        //         </TouchableOpacity>
        //     </View>
        // )

    }
    
    getPermission = async (a) => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA)
        this.setState({
            hasCameraPermission: status === 'granted',
            domState: a
        })
    }
    handleBarcodeScanner = async ({ type, data }) => {
        const { domState } = this.state
        console.log(this.state.studentID)
        if (domState === 'studentID') {
            console.log('hi')
            this.setState({
                domstate: 'normal',
                studentID: data
            })
        } 
        if (domState === 'bookID'){
            this.setState({
                domState: 'normal',
                bookID: data
            })
        }


    }

}
const styles = StyleSheet.create({
    a: {
        width: '100%',
        height: '100%'
    },
    ScanButton: {
        backgroundColor: '#00AEAE',
        width: "10%",
        height: 50,
        textAlign: "center",
        justifyContent: "center",
        fontSize: 100,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    }, ScanButton: {
        backgroundColor: '#00AEAE',
        
        height: 50,
        textAlign: "center",
        justifyContent: "center",
        fontSize: 100,
    
    },
    Inputbox: {
        width: "50%",
        height: 50,
        borderWidth: 3,
        paddingLeft: "22.5%"

    },
    container: {
        flex: 1
    },
    inputcontainer: {
        flexDirection: "row",
        marginTop: '2%',
        justifyContent: "center"

    }
})