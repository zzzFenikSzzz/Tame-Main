import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView, TouchableOpacityBase } from 'react-native';
import {AnimalCard} from '../components/AnimalCard';
import { HomeCard } from '../components/HomeCard';
import {ProfileCard} from '../components/ProfileCard'
import Demo from '../data/demo';

 const ProfileScreen = () => {
    const {
        image,
        name,
        time,
        description
    } = Demo[2];



    return (
        <ScrollView style={styles.container}>
            <View style={styles.main}>
                <ProfileCard 
                    style={styles.card}
                    image={image}
                    name={name}
                    time={time}
                />
            </View>   

            <View style={styles.profileInfo}>
                        <View style={styles.info}>
                            <View style={styles.addres}>
                                <Text style={styles.street}>Mira, 32</Text>
                                <Text style={styles.distance}>6 km ot vas</Text>
                            </View>
                            <TouchableOpacity>
                                <Image style={styles.location} source={require('../images/location.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={styles.call} source={require('../images/call.png')}/>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.description}>
                            ipsum dolor sit amet, consectetur adipiscing elit. Proin ac arcu in velit mattis euismod. Aenean leo dui, tempus ac tempus sit amet, egestas non dolor. In bibendum vehicula lorem, nec rhoncus lorem ornare ut.
                        </Text>
                        <View style={styles.status}>
                            <View style={styles.statusOne}>
                                <Image style={styles.case} source={require('../images/case.png')}/>
                                <Text style={styles.statusOneText}>
                                    Analitik
                                </Text>
                            </View>
                            <View style={styles.statusTwo}>
                                <Image style={styles.hand} source={require('../images/hand.png')}/>
                                <Text style={styles.statusTwoText}>
                                    Nikogda ne imel zhivotnix
                                </Text>
                            </View>
                        </View>
                        <View style={styles.socialNet}> 
                            <TouchableOpacity>
                                <Image style={styles.mail} source={require('../images/mail.png')}/>
                            </TouchableOpacity>    
                            <TouchableOpacity>
                                <Image style={styles.inst} source={require('../images/inst.png')}/>
                            </TouchableOpacity>    
                            <TouchableOpacity>
                                <Image style={styles.vk} source={require('../images/vk.png')}/>
                            </TouchableOpacity>
                        </View>
            </View>

            <View>
                <Text style={styles.find}>Polina Ishet Dom Etim Zhivotnim</Text>
            </View>
            <TouchableOpacity>
                <AnimalCard 
                    name = {name}
                    description = {description}
                    image = {image}
                    time = {time}
                />
            </TouchableOpacity>

            <View>
                <Text style={styles.home}>
                    Predstavitel priyouta    
                </Text> 
            </View>

            <TouchableOpacity style={styles.homeCard}>
                <HomeCard 
                    image = {image}
                    name = {name}
                    description = {description}
                    time = {time}
                />
            </TouchableOpacity>
        </ScrollView>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        color: '#fff',
        paddingHorizontal: 20,
       
    },
    main: {
        paddingTop: 30,
    },
    card: {
        
    }, 
    profileInfo: {
        justifyContent: 'space-between'
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 30,
        alignItems: 'center'
    },
    description: {
        paddingVertical: 20,
        fontWeight: '500',
        fontSize: 14,
        color: '#B8B8B8'
    },
    socialNet: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20
    },
    statusOne: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    statusTwo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    statusOneText: {
        paddingHorizontal: 15,
        fontWeight: 'bold',
        fontSize: 14
    },
    statusTwoText: {
        paddingHorizontal: 15,
        fontWeight: 'bold',
        fontSize: 14
    },
    street: {
        fontWeight: 'bold',
        fontSize: 14
    },
    distance: {
        fontSize: 12,
        fontWeight: '500',
        paddingTop: 5
    },
    find: {
        fontWeight: '500',
        fontSize: 18
    },
    home:{
        fontWeight: '500',
        fontSize: 18
    },
    homeCard: {
        paddingVertical: 20
    }
})