
import React from 'react'
import { StyleSheet, FlatList, View, Text } from 'react-native'
import Themes from '/src/themes'
import InformationContent from './SubComponent/informationContent'
import MyVicesContent from './SubComponent/myVicesContent'
import MyVirtuesContent from './SubComponent/myVirtuesContent'
import MyVitalsContent from './SubComponent/myVitalsContent'
import ImageItem from '/src/components/UI/imageItem'
import CoupleButtonImage from '/src/components/UI/coupleButtonImage'
import ButtonBack from '/src/components/UI/buttonBack'
import AnimLottieView from '/src/components/UI/animLottieView'
import BottomModalSlide from '/src/components/UI/bottomModalSlide'

const headerComponent = (props) => {
    const { t, onPressBack } = props
    return (
        <View>

            <ButtonBack
                onPress={onPressBack}
                title={"Edit Profile"}
            />
            <Text style={styles.headerText}>{t("Photos Show")}</Text>
            <Text style={styles.detailHeader}>{t("Your photos here will be displayed in your profile swipe")}</Text>
        </View>
    )
}
const footerComponent = (props) => {
    const { t, onPressInterest, onPressGender, onPressReligious, onPressEthnicity,
        onPressKids, onPressFamilyPlans, onPressSmoking, onPressDrinking, data, onBlurTextExpand,
        onBlurTextInputName, pickDate, gender, onBlurTextInputPhone, dataInterest, religion,
        onBlurTextInputJob, jobBegin, onBlurTextInputWorkAt, onBlurTextInputEducation, ethnicity, kids, drinking,
        smoking, onPressLocation, location
    } = props
    let [name, dateOfBirth, company, school,
        bio, phone, email] = []
    if (data !== null) {
        name = data.name
        dateOfBirth = data.dateOfBirth
        company = data.company
        school = data.school
        bio = data.bio
        phone = data.phone
        email = data.email
    }
    return (
        <View>
            <Text style={styles.headerText}>{t("Your Information")}</Text>
            <InformationContent
                t={t}
                onPressInterest={onPressInterest}
                onPressGender={onPressGender}
                onPressLocation={onPressLocation}
                name={name}
                bio={bio}
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
            <Text style={styles.headerText}>{t("Your Virtues")}</Text>
            <MyVirtuesContent
                t={t}
                onPressReligious={onPressReligious}
                religion={religion}
                job={jobBegin}
                work={company}
                education={school}
                onBlurTextInputJob={onBlurTextInputJob}
                onBlurTextInputWorkAt={onBlurTextInputWorkAt}
                onBlurTextInputEducation={onBlurTextInputEducation}
            />
            <Text style={styles.headerText}>{t("Your Vitals")}</Text>
            <MyVitalsContent
                t={t}
                onPressEthnicity={onPressEthnicity}
                onPressKids={onPressKids}
                onPressFamilyPlans={onPressFamilyPlans}
                ethnicity={ethnicity}
                kids={kids}
            // familyPlans={familyPlan}
            />
            <Text style={styles.headerText}>{t("Your Vices")}</Text>
            <MyVicesContent
                t={t}
                onPressDrinking={onPressDrinking}
                onPressSmoking={onPressSmoking}
                drinking={drinking}
                smoking={smoking}
            />
        </View>
    )
}

const imageList = (item, index, props) => {
    const { onPressAddImage, indexLoading, onPressRemoveImage, idRemoving } = props
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
            let isRemoving = false
            if (index === idRemoving) {
                isRemoving = true
            }
            return <ImageItem uri={url}
                index={index}
                isRemoving={isRemoving}
                onPressRemoveImage={onPressRemoveImage}
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
    const { dataPhotos, onUploadPhoto, onTakePhoto, t
    } = props
    return (
        <View>
            {/* <SpinnerLoading isLoading={isRemoving} source={require('/src/assets/lotties/9844-loading-40-paperplane.json')} /> */}
            <FlatList
                showsVerticalScrollIndicator={false}
                data={dataPhotos !== null ? dataPhotos : undefined}
                renderItem={({ item, index }) => imageList(item, index, props)}
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
