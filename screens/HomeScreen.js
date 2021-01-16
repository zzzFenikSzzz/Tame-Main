import React from 'react';
import { 
    StyleSheet,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    Image,
    TextInput,
    SafeAreaView,
    SearchBar
} from 'react-native';
import {AnimalCard} from '../components/AnimalCard';
import Demo from '../data/demo';

const HomeScreen = () => {
    return (
        <ScrollView style ={styles.container}>
                <View style={styles.menu}>
                    <Text style={styles.mainName}>
                        taME
                    </Text>
                    <TouchableOpacity>
                        <Image 
                            source={require('../images/01.jpg')}
                            style={styles.ProfilePhoto}    
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.menu2}>
                    <Text style={styles.subName}>
                        <Text>Животные {"\n"}ищут 
                            <Text style={{fontWeight: "bold"}}> дом</Text>
                        </Text>
                    </Text>
                    <TouchableOpacity style={styles.mainFilter}>
                        <Text style={styles.filter}>фильтры </Text>
                    </TouchableOpacity>
                </View>

                

                <SafeAreaView style={styles.area}>
                    <FlatList 
                        data={ Demo }
                        keyExtractor={(item, index) => item.id}
                        columnWrapperStyle={{justifyContent: 'space-between'}}
                        contentContainerStyle = {styles.card}
                        numColumns={2}
                        renderItem={
                            ({ item }) => (
                                <TouchableOpacity>
                                    <View style={styles.listItem}>
                                        <AnimalCard 
                                            style={styles.card1}
                                            image={item.image}
                                            name={item.name}
                                            description={item.description}
                                            time={item.time}
                                        />
                                    </View>
                                </TouchableOpacity>
                            )    
                        }
                    />
                </SafeAreaView>
            
        </ScrollView>
    
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    menu: {
        paddingTop: 50,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    placeholder:{
      marginHorizontal: 15,
    },
    mainName: {
        fontSize: 24,
        color: '#FF8577',
        fontWeight: 'bold'
    },
    menu2: {
        paddingTop: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    subName: {
        flex: 1,
        flexWrap:'wrap',
        fontStyle: 'normal',
        fontSize: 24
    },
    filter: {
        fontWeight: '500',
        fontSize: 12,
        color: '#B8B8B8'
    },
    input:{
        backgroundColor: '#F2F2F2',
        borderRadius: 15,
        borderColor: '#F2F2F2',
        borderWidth: 3,
        marginVertical: 20
    },  
    placeholder:{
        marginHorizontal: 15,
    },
    card: {
        marginBottom: 20
    },
    container: {
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    },
    area: {
        
    },
    ProfilePhoto: {
        borderRadius: 50,
        width:45,
        height:45
    },
    listItem: {
        flex:1,
        alignItems: 'center',
        
        
    },
    card1:{
        
    }
  });