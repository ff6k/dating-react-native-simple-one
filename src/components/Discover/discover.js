import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import ImageSwipe from '/src/components/UI/imageSwipe'
import Themes from '/src/themes'
import ButtonStatus from '/src/components/UI/buttonStatus'
// import SwitchGrid from '/src/components/UI/switchGrid'
import Utils from '/src/utils'
import SpinnerLoading from '/src/components/UI/spinnerLoading'
import ImageDetail from '/src/components/UI/imageDetail'
import Const from '/src/const'
import { withTranslation } from 'react-i18next'

function Discover(props) {
    const { t, isLoading, isModeDetail, onPressInfo, onPressBack, dataImage, updateData, onLike,
        onPressLike, getUserCurrent, isSwipeRight, isSwipeLeft, onPressUnlike,
        dataDetailUser, arrImage
    } = props
    let name, work, location, religiousBelief, job, education, ethnicity, kids, height, drinking, smoking, familyPlans, gender, oldYear, dateOfBirth, bio
    if (dataDetailUser !== null) {
        name = dataDetailUser['name'] ? dataDetailUser['name'] : 'NA'
        work = dataDetailUser['company'] ? dataDetailUser['company'] : 'NA'
        location = dataDetailUser['location'] ? dataDetailUser['location'] : 'NA'
        religiousBelief = dataDetailUser['religion'] ? dataDetailUser['religion'] : 'NA'
        job = dataDetailUser['jobTitle'] ? dataDetailUser['jobTitle'] : 'NA'
        education = dataDetailUser['school'] ? dataDetailUser['school'] : 'NA'
        // politics=dataDetailUser['dataDetailUser']
        ethnicity = dataDetailUser['ethnicity'] ? dataDetailUser['ethnicity'] : 'NA'
        kids = dataDetailUser['children'] ? dataDetailUser['children'] : 'NA'
        height = dataDetailUser['height'] ? dataDetailUser['height'] : 'NA'
        drinking = dataDetailUser['drinking'] ? dataDetailUser['drinking'] : 'NA'
        smoking = dataDetailUser['smoking'] ? dataDetailUser['smoking'] : 'NA'
        familyPlans = dataDetailUser['sexualOrientation'] ? dataDetailUser['sexualOrientation'] : 'NA'
        gender = dataDetailUser['gender'] ? dataDetailUser['gender'] : 'NA'
        oldYear = dataDetailUser['dateOfBirth'] ? Utils.Calculator.getOldYear(dataDetailUser['dateOfBirth']).toString() : 'NA'
        dateOfBirth = dataDetailUser['dateOfBirth'] ? Utils.Format.formatDateUTC(dataDetailUser['dateOfBirth'], Const.DateFormat.DATE_LONG) : 'NA'
        bio = dataDetailUser['bio'] ? dataDetailUser['bio'] : ''
    }

    return (
        <View style={styles.container}>
            <SpinnerLoading isLoading={isLoading}
                source={require('/src/assets/lotties/9844-loading-40-paperplane.json')}
            />
            <View style={styles.containSwipe} >
                {!isModeDetail ?
                    <ImageSwipe t={t} onPressInfo={onPressInfo}
                        data={dataImage}
                        updateData={() => updateData && updateData()}
                        onLike={onLike}
                        getUserCurrent={getUserCurrent}
                        isSwipeRight={isSwipeRight}
                        isSwipeLeft={isSwipeLeft}
                    />
                    :
                    <ImageDetail onPressInfo={onPressInfo}
                        name={name}
                        work={work}
                        location={location}
                        religiousBelief={religiousBelief}
                        job={job}
                        education={education}
                        dateOfBirth={dateOfBirth}
                        oldYear={oldYear}
                        ethnicity={ethnicity}
                        familyPlans={familyPlans}
                        kids={kids}
                        height={height}
                        drinking={drinking}
                        smoking={smoking}
                        arrImage={arrImage}
                        gender={gender}
                        bio={bio}
                    />}
            </View>
            {!isModeDetail && <View style={styles.containFooter}>
                {/* <ButtonStatus
                    onPress={() => onPressBack()}
                    color={Themes.Colors.YELLOW} size={25} nameFontAwesome5={"undo-alt"} /> */}
                <ButtonStatus
                    onPress={onPressUnlike}
                    style={styles.icoBigger}
                    color={Themes.Colors.BROWN_DARK} size={55} name={"close"} />
                {/* <ButtonStatus
                    onPress={() => onPressBack()}
                    color={Themes.Colors.PURPLE} size={30} name={"flash"} /> */}
                <ButtonStatus style={styles.icoBigger}
                    onPress={onPressLike}
                    color={Themes.Colors.GREEN_DARK} size={45} name={"heart"} />
                {/* <ButtonStatus
                    color={Themes.Colors.BLUE_DARK} size={30} name={"star"} /> */}
            </View>}
        </View>
    )
}

const SIZE = 60

const styles = StyleSheet.create({
    icoBigger: {
        width: SIZE, height: SIZE,
        borderRadius: SIZE / 2
    },
    imgSwipe: {
        paddingHorizontal: Themes.Const.PADDING_IMAGE_SMALL,
        paddingVertical: Themes.Const.PADDING_IMAGE_SMALL,
    },
    container: {
        flex: 1
    },
    containSwipe: {
        flex: 10
    },
    containHeader: {
        flex: 1,
        justifyContent: 'center',
    },
    containFooter: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 10
    }
})

export default withTranslation()(Discover)
