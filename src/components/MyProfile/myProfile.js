
import React from 'react'
import { StyleSheet, FlatList, View, Text } from 'react-native'
import ButtonBack from '/src/components/UI/buttonBack'
import Themes from '/src/themes'
import InformationContent from './SubComponent/informationContent'
import MyVicesContent from './SubComponent/myVicesContent'
import MyVirtuesContent from './SubComponent/myVirtuesContent'
import MyVitalsContent from './SubComponent/myVitalsContent'
import ImageItem from '/src/components/UI/imageItem'
import Utils from '/src/utils'
import Const from '/src/const'
import HeaderSave from '/src/components/UI/headerSave'
import AnimLottieView from '/src/components/UI/animLottieView'

const headerComponent = (props) => {
    const { onPressBack } = props
    return (
        <View>

            <HeaderSave
                onPressBack={onPressBack}
                title={"Edit Profile"}
            />
            <Text style={styles.headerText}>Photos Show</Text>
            <Text style={styles.detailHeader}>Your photos here will be displayed in your profile swipe.</Text>
        </View>
    )
}
const footerComponent = (props) => {
    const { onPressInterest, onPressGender, onPressReligious, onPressEthnicity,
        onPressKids, onPressFamilyPlans, onPressSmoking, onPressDrinking, data } = props
    let [name, dateOfBirth, location, religion, company, jobTitle, school, ethnicity,
        children, smoking, interests, drinking, bio, gender, phone, email] = []
    if (data !== null) {
        name = data.name
        dateOfBirth = Utils.Calculator.getOldYear(data.dateOfBirth).toString()
        location = data.location
        religion = data.religion
        company = data.company
        jobTitle = data.jobTitle
        school = data.school
        ethnicity = data.ethnicity
        children = data.children
        smoking = data.smoking
        bio = data.bio
        drinking = data.drinking
        gender = data.gender
        phone = data.phone
        email = data.email
    }
    return (
        <View>
            <Text style={styles.headerText}>Your Information</Text>
            <InformationContent
                onPressInterest={onPressInterest}
                onPressGender={onPressGender}
                name={name}
                bio={bio}
                dateOfBirth={dateOfBirth}
                gender={gender}
                phone={phone}
                email={email}
                location={location}
            />
            <Text style={styles.headerText}>Your Virtues</Text>
            <MyVirtuesContent
                onPressReligious={onPressReligious}
                religion={religion}
                job={jobTitle}
                work={company}
                education={school}
            />
            <Text style={styles.headerText}>Your Vitals</Text>
            <MyVitalsContent
                onPressEthnicity={onPressEthnicity}
                onPressKids={onPressKids}
                onPressFamilyPlans={onPressFamilyPlans}
                ethnicity={ethnicity}
                kids={children}
                familyPlans={null}
            />
            <Text style={styles.headerText}>Your Vices</Text>
            <MyVicesContent
                onPressDrinking={onPressDrinking}
                onPressSmoking={onPressSmoking}
                drinking={drinking}
                smoking={smoking}
            />
        </View>
    )
}

const imageList = (item) => {
    if (item !== undefined) {
        const { url } = item
        if (url === undefined) {
            return <ImageItem />
        }
        else {
            return <ImageItem uri={url} />
        }
    }
}

const emptyComponent = () => {
    return (
        <View style={{ height: 150 * 3 + 15, alignItems: 'center', justifyContent: 'center' }}>
            <AnimLottieView source={require('/src/assets/lotties/8863-waiting.json')} />
        </View>
    )
}

export default function myProfile(props) {
    const { data } = props

    // console.log(name)
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={data !== null ? data.photos : undefined}
            renderItem={({ item }) => imageList(item)}
            columnWrapperStyle={{ justifyContent: 'space-evenly' }}
            ListEmptyComponent={emptyComponent}
            keyExtractor={item => item.id.toString()}
            numColumns={3}
            ListFooterComponent={() => footerComponent(props)}
            ListHeaderComponent={() => headerComponent(props)}
        />
    )
}

const styles = StyleSheet.create({
    detailHeader: {
        fontSize: 15,
        marginLeft: 10,
        fontFamily: Themes.FontFamily.FontThinDefault,
        marginBottom: 10
    },
    containerListItemImage: {
    },

    containImage: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    headerText: {
        fontSize: 16,
        color: Themes.Colors.PINK,
        fontFamily: Themes.FontFamily.FontBoldDefault,
        // backgroundColor: 'white',
        paddingLeft: 10,
        marginTop: 10,
        marginBottom: 10
    },

})
