import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Introduction from '/src/components/Introduction/introduction';
import SingInOrUp from '/src/components/SingInOrUp/signInOrUp.Controller'
import Login from '/src/components/Login/login.controller'
import CodePhone from '/src/components/CodePhone/codePhone.controller'
import MyProfile from '/src/components/MyProfile/myProfile.controller'
import BottomNavigation from './bottomNavigation'
import SignUpPhone from '/src/components/SignUpPhone/signUpPhone'
import Religious from '/src/components/Religious/religious.controller'
import MultiLanguages from '/src/components/MultiLanguages/multiLanguages.controller'
import Splash from '/src/components/Splash/splash.controller'
import MyPreferences from '/src/components/MyPreferences/myPreferences.controller'
import MyAlbums from '/src/components/MyAlbums/myAlbums.controller'
import Picture from '/src/components/Picture/picture.controller'
import Messages from '../../components/MainMessages/messages.controller'
import SignUpEmail from '/src/components/SignUpEmail/signUpEmail.Controller'
import EmailAddress from '/src/components/EmailAddress/emailAddress.controller'
import Birthday from '/src/components/Birthday/birthday.controller'
import Gender from '/src/components/Gender/gender.controller'
import Work from '/src/components/Work/work.controller'
import Job from '/src/components/Job/job.controller'
import Education from '/src/components/Education/education.controller'
import Politics from '/src/components/Politics/politics.controller'
import MyVicesContent from '/src/components/MyProfile/SubComponent/myVicesContent'
import Drinking from '/src/components/Drinking/drinking.controller'
import EditGender from '/src/components/EditGender/editGender.controller'
import Ethnicity from '/src/components/Ethnicity/ethnicity.controller'
import EditKids from '/src/components/EditKids/editKids.controller'
import InterestInfomation from '/src/components/InterestInformation/interestInfomation.controller'
import EditFamilyPlan from '/src/components/EditFamilyPlan/editFamilyPlan.controller'
import EditDrinking from '/src/components/EditDrinking/editDrinking.controller'
import EditSmoking from '/src/components/EditSmoking/editSmoking.controller'
import Const from '/src/const'

const Stack = createStackNavigator();

// locale language
import { setI18nConfig, translate } from '/src/translations';
import '/src/translations/i18n';
import * as RNLocalize from 'react-native-localize';
const useForceUpdate = () => useState()[1];

export default function screensNavigation() {
    const forceUpdate = useForceUpdate();

    useEffect(() => {
        setI18nConfig()
    }, [])

    useEffect(() => {
        RNLocalize.addEventListener('change', () => handleLocalizationChange());
        return () => {
            RNLocalize.removeEventListener(
                'change',
                () => handleLocalizationChange(),
            );
        }
    })

    const handleLocalizationChange = () => {
        setI18nConfig();
        forceUpdate();
    };

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name={Const.NameScreens.Splash}
                    component={Splash}
                />
                <Stack.Screen
                    name={Const.NameScreens.SingInOrUp}
                    component={SingInOrUp}
                />
                <Stack.Screen
                    name={Const.NameScreens.SignUpEmail}
                    component={SignUpEmail}
                />
                <Stack.Screen
                    name={Const.NameScreens.Login}
                    component={Login}
                />
                <Stack.Screen
                    name={Const.NameScreens.EmailAddress}
                    component={EmailAddress}
                />
                <Stack.Screen
                    name={Const.NameScreens.Birthday}
                    component={Birthday}
                />
                <Stack.Screen
                    name={Const.NameScreens.Gender}
                    component={Gender}
                />
                <Stack.Screen
                    name={Const.NameScreens.Picture}
                    component={Picture}
                />
                <Stack.Screen
                    name={Const.NameScreens.Religious}
                    component={Religious}
                />
                <Stack.Screen
                    name={Const.NameScreens.Job}
                    component={Job}
                />
                <Stack.Screen
                    name={Const.NameScreens.Education}
                    component={Education}
                />
                <Stack.Screen
                    name={Const.NameScreens.Politics}
                    component={Politics}
                />
                <Stack.Screen
                    name={Const.NameScreens.BottomNavigation}
                    component={BottomNavigation}
                />
                <Stack.Screen
                    name={Const.NameScreens.MyPreferences}
                    component={MyPreferences}
                />
                <Stack.Screen
                    name={Const.NameScreens.Introduction}
                    component={Introduction}
                />

                <Stack.Screen
                    name={Const.NameScreens.SignUpPhone}
                    component={SignUpPhone}
                />
                <Stack.Screen
                    name={Const.NameScreens.CodePhone}
                    component={CodePhone}
                />
                <Stack.Screen
                    name={Const.NameScreens.MyProfile}
                    component={MyProfile}
                />
                <Stack.Screen
                    name={Const.NameScreens.InterestInfomation}
                    component={InterestInfomation}
                />
                <Stack.Screen
                    name={Const.NameScreens.EditGender}
                    component={EditGender}
                />
                <Stack.Screen
                    name={Const.NameScreens.Ethnicity}
                    component={Ethnicity}
                />
                <Stack.Screen
                    name={Const.NameScreens.EditKids}
                    component={EditKids}
                />
                <Stack.Screen
                    name={Const.NameScreens.EditFamilyPlan}
                    component={EditFamilyPlan}
                />
                <Stack.Screen
                    name={Const.NameScreens.EditSmoking}
                    component={EditSmoking}
                />
                <Stack.Screen
                    name={Const.NameScreens.EditDrinking}
                    component={EditDrinking}
                />
                <Stack.Screen
                    name={Const.NameScreens.Drinking}
                    component={Drinking}
                />
                <Stack.Screen
                    name={Const.NameScreens.MyVicesContent}
                    component={MyVicesContent}
                />
                <Stack.Screen
                    name={Const.NameScreens.Work}
                    component={Work}
                />
                <Stack.Screen
                    name={Const.NameScreens.MultiLanguages}
                    component={MultiLanguages}
                />
                <Stack.Screen
                    name={Const.NameScreens.MyAlbums}
                    component={MyAlbums}
                />
                <Stack.Screen
                    name={Const.NameScreens.Messages}
                    component={Messages}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
