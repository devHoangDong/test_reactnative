import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import FlipCard from 'react-native-flip-card';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styleAccount from '../assets/styles/styleAccount';


function Card(props) {
    const { userData } = props;
    return (<>
        {userData && <View key={userData.username}>
            <FlipCard
                flip={false}
                friction={6}
                perspective={1000}
                flipHorizontal={true}
                flipVertical={false}
                clickable={true}
                style={styleAccount.card}
                alignHeight={true}
                // alignWidth={true}
                onFlipEnd={(isFlipEnd) => { console.log('isFlipEnd', isFlipEnd) }}
            >
                {/* Face Side */}
                <View style={styleAccount.avatarBlock}>
                    <View style={styleAccount.tview}>
                        <Image
                            style={styleAccount.tinyLogo}
                            source={{ uri: userData.avatar }}
                        />
                    </View>
                    <Text
                        style={
                            styleAccount.userName
                        }>{userData.username}</Text>
                    <Text style={styleAccount.changePassText}>{userData.employment.title}</Text>
                </View>
                {/* Back Side */}
                <View style={styles.back}>
                    <View style={styleAccount.changePass}>
                        <Ionicons
                            name="person-circle-outline"
                            size={20}
                            color={theme.COLORS.black}
                            style={styleAccount.menuicon}
                        />
                        <Text style={styleAccount.changePassText}>{userData.first_name}{" "}{userData.last_name}</Text>
                    </View>
                    <View style={styleAccount.changePass}>
                        <Ionicons
                            name="mail-outline"
                            size={20}
                            color={theme.COLORS.black}
                            style={styleAccount.menuicon}
                        />
                        <Text style={styleAccount.changePassText}>{userData.email}</Text>
                    </View>
                    <View style={styleAccount.changePass}>
                        <Ionicons
                            name="call-outline"
                            size={20}
                            color={theme.COLORS.black}
                            style={styleAccount.menuicon}
                        />
                        <Text style={styleAccount.changePassText}>{userData.phone_number}</Text>
                    </View>
                    <View style={styleAccount.changePass}>
                        <Ionicons
                            name="happy-outline"
                            size={20}
                            color={theme.COLORS.black}
                            style={styleAccount.menuicon}
                        />
                        <Text style={styleAccount.changePassText}>{userData.gender}</Text>
                    </View>
                    <View style={styleAccount.changePass}>
                        <Ionicons
                            name="location-outline"
                            size={20}
                            color={theme.COLORS.black}
                            style={styleAccount.menuicon}
                        />
                        <Text style={styleAccount.changePassText}>{userData.address.country}{" - "}{userData.address.state}</Text>
                    </View>
                </View>
            </FlipCard>
        </View>}
    </>
    )
}
export default Card

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        marginTop: 20,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    card: {
        width: 200,
    },
    face: {
        flex: 1,
        backgroundColor: '#2ecc71',
        justifyContent: 'center',
        alignItems: 'center',
    },
    back: {
        flex: 1,
        backgroundColor: '#f1c40f',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 100,
        height: 30,
        marginTop: 30,
        paddingTop: 6,
        paddingBottom: 6,
        borderRadius: 3,
        borderWidth: 1,
        backgroundColor: '#007AFF',
        borderColor: 'transparent',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
    img: {
        flex: 1,
        height: 64
    }
});
