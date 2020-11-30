import React, { useState, useCallback } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import Themes from '/src/themes'
import PropTypes from 'prop-types';
import FlagsModel from '/src/components/Model/flagsModel'

//TODO: modal phone areas
export default function textInputPhone(props) {
    const { style, t, onChangeValue } = props;
    const [isVisible, setIsVisible] = useState(false);
    const [codeArea, setCodeArea] = useState('+84')
    const [textPhone, setTextPhone] = useState('')
    function setVisibleModel(isVisible) {
        setIsVisible(isVisible);
    }

    const onPressFlagItem = (item) => {
        const { dialCode } = item
        setCodeArea(dialCode)
        setVisibleModel(false)
    }

    const onChangeText = (value) => {
        setTextPhone(value)
        onChangeValue(codeArea + value)
    }

    return (
        <View style={{ ...styles.inpEnterPhone, ...style }}  >
            <TouchableOpacity style={styles.imgFlags}
                onPress={() => setVisibleModel(true)}
            >
                <Text style={styles.txtPhoneArea}>{codeArea}</Text>
            </TouchableOpacity>
            <TextInput
                placeholder={t('Phone Number')}
                keyboardType={'phone-pad'}
                style={styles.inpPhone}
                onChangeText={(value) => onChangeText(value)}
            />
            <FlagsModel isVisible={isVisible} setVisibleModel={setVisibleModel}
                onPressFlagItem={onPressFlagItem}
            />
        </View>
    )
}

textInputPhone.propTypes = {
    style: PropTypes.object,
    // onChangeText: PropTypes.func.isRequired,
    onChangeText: PropTypes.func,
}

textInputPhone.defaultProps = {
    style: null,
    onChangeText: null
}


const styles = StyleSheet.create({
    txtPhoneArea: {
        alignSelf: 'center',
        fontSize: Themes.Const.FONT_SIZE,
    },
    inpPhone: {
        flex: 7,
        fontSize: Themes.Const.FONT_SIZE,
        borderTopRightRadius: Themes.Const.BORDER_RADIUS,
        borderBottomRightRadius: Themes.Const.BORDER_RADIUS,
    },
    inpEnterPhone: {
        ...Themes.Styles.TextInput,
        marginTop: Themes.Const.MARGIN_TOP,
        paddingLeft: 0,
        flexDirection: 'row'
    },
    btnFlags: {
        // paddingVertical: 5,
        // backgroundColor: 'red'
    },
    imgFlags: {
        width: 30,
        height: Themes.Const.HEIGHT - 10,
        margin: 3,
        borderTopLeftRadius: Themes.Const.BORDER_RADIUS,
        borderBottomLeftRadius: Themes.Const.BORDER_RADIUS,
        flex: 1,
        justifyContent: 'center'
        // alignSelf: 'center'
    },

})
