import { useState } from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native'
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components'


const Home = () =>{
    return (
        <View>
            <Text>
                Hello
            </Text>
        </View>
    )
}

export default Home;