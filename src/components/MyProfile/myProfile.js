
import React from 'react'
import { StyleSheet, FlatList, View, Text, TouchableOpacity } from 'react-native'
import Themes from '/src/themes'
import InformationContent from './SubComponent/informationContent'
import MyVicesContent from './SubComponent/myVicesContent'
import MyVirtuesContent from './SubComponent/myVirtuesContent'
import MyVitalsContent from './SubComponent/myVitalsContent'
import ImageItem from '/src/components/UI/imageItem'
import Utils from '/src/utils'
import Const from '/src/const'
import CoupleButtonImage from '/src/components/UI/coupleButtonImage'
import HeaderSave from '/src/components/UI/headerSave'
import ButtonBack from '/src/components/UI/buttonBack'
import AnimLottieView from '/src/components/UI/animLottieView'
import BottomModalSlide from '/src/components/UI/bottomModalSlide'
// import UploadImageModal from '/src/components/UI/uploadImageModal'
import Modal from 'react-native-modal';

const headerComponent = (props) => {
    const { onPressBack } = props
    return (
        <View>

            <ButtonBack
                onPress={onPressBack}
                title={"Edit Profile"}
            />
            <Text style={styles.headerText}>Photos Show</Text>
            <Text style={styles.detailHeader}>Your photos here will be displayed in your profile swipe.</Text>
        </View>
    )
}
const footerComponent = (props) => {
    const { onPressInterest, onPressGender, onPressReligious, onPressEthnicity,
        onPressKids, onPressFamilyPlans, onPressSmoking, onPressDrinking, data, onBlurTextExpand,
        onBlurTextInputName, pickDate, gender, onBlurTextInputPhone, dataInterest, religion,
        onBlurTextInputJob, jobBegin, onBlurTextInputWorkAt, onBlurTextInputEducation, ethnicity, kids, drinking,
        smoking
    } = props
    let [name, dateOfBirth, location, company, school,
        bio, phone, email] = []
    if (data !== null) {
        name = data.name
        dateOfBirth = data.dateOfBirth
        location = data.location
        company = data.company
        school = data.school
        bio = data.bio
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
                // dateOfBirth={dateOfBirth}
                gender={gender}
                phone={phone}
                email={email}
                location={location}
                onBlurTextExpand={onBlurTextExpand}
                onBlurTextInputName={onBlurTextInputName}
                onBlurTextInputPhone={onBlurTextInputPhone}
                dateBegin={dateOfBirth && new Date(dateOfBirth)}
                pickDate={pickDate}
                dataInterest={dataInterest}
            />
            <Text style={styles.headerText}>Your Virtues</Text>
            <MyVirtuesContent
                onPressReligious={onPressReligious}
                religion={religion}
                job={jobBegin}
                work={company}
                education={school}
                onBlurTextInputJob={onBlurTextInputJob}
                onBlurTextInputWorkAt={onBlurTextInputWorkAt}
                onBlurTextInputEducation={onBlurTextInputEducation}
            />
            <Text style={styles.headerText}>Your Vitals</Text>
            <MyVitalsContent
                onPressEthnicity={onPressEthnicity}
                onPressKids={onPressKids}
                onPressFamilyPlans={onPressFamilyPlans}
                ethnicity={ethnicity}
                kids={kids}
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

const imageList = (item, index, onPressAddImage, indexLoading) => {
    if (item !== undefined) {
        const { url } = item
        if (url === undefined) {
            let isLoading = false
            if (index === indexLoading) {
                isLoading = true
            }
            return <ImageItem
                onPressAddImage={onPressAddImage}
                index={index}
                isLoading={isLoading}
            />
        }
        else {
            return <ImageItem uri={url}
                index={index}
            />
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

const MyProfile = React.forwardRef((props, ref) => {
    const { data, onPressAddImage, dataPhotos, indexLoading,
        // isVisible, setVisibleModel,
        onUploadPhoto, onTakePhoto
    } = props
    return (
        <View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={dataPhotos !== null ? dataPhotos : undefined}
                renderItem={({ item, index }) => imageList(item, index, onPressAddImage, indexLoading)}
                columnWrapperStyle={{ justifyContent: 'space-evenly' }}
                ListEmptyComponent={emptyComponent}
                keyExtractor={item => item.id.toString()}
                numColumns={3}
                ListFooterComponent={() => footerComponent(props)}
                ListHeaderComponent={() => headerComponent(props)}
            />
            <BottomModalSlide
                ref={ref}
                height={150}
            >
                <CoupleButtonImage
                    onTakePhoto={onTakePhoto}
                    onUploadPhoto={onUploadPhoto}
                />
            </BottomModalSlide>
        </View>
    )
})
export default MyProfile

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
