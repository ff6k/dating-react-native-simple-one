import React, { useRef, useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import Themes from '/src/themes'
import PropTypes from 'prop-types';

export default function confirmInputPhone(props) {
    const { style, onChangeCode } = props;

    const [code, setCode] = useState('')
    const [pin1, setPin1] = useState("");
    const [pin2, setPin2] = useState("");
    const [pin3, setPin3] = useState("");
    const [pin4, setPin4] = useState("");
    const [pin5, setPin5] = useState("");
    const [pin6, setPin6] = useState("");

    const refPin1 = useRef();
    const refPin2 = useRef();
    const refPin3 = useRef();
    const refPin4 = useRef();
    const refPin5 = useRef();
    const refPin6 = useRef();

    useEffect(() => {
        if (refPin1.current) {
            refPin1.current.focus();
        }
    }, []);

    useEffect(() => {
        pin1 !== "" && refPin2.current.focus();
    }, [pin1])

    useEffect(() => {
        pin2 !== "" && refPin3.current.focus();
    }, [pin2])

    useEffect(() => {
        pin3 !== "" && refPin4.current.focus();
    }, [pin3])

    useEffect(() => {
        pin4 !== "" && refPin5.current.focus();
    }, [pin4])

    useEffect(() => {
        pin5 !== "" && refPin6.current.focus();
    }, [pin5])

    if (pin1 != '' && pin2 != '' && pin3 != '' && pin4 != '' && pin5 != '' && pin6 != '') {
        onChangeCode && onChangeCode(pin1 + pin2 + pin3 + pin4 + pin5 + pin6)
    }

    function onChangText(value, type) {

        switch (type) {
            case 1:
                setPin1(value);
                break;
            case 2:
                setPin2(value);
                break;
            case 3:
                setPin3(value);
                break;
            case 4:
                setPin4(value);
                break;
            case 5:
                setPin5(value);
                break;
            case 6:
                setPin6(value);
                break;
        }
    }

    return (
        <View style={styles.container}>
            <TextInput maxLength={1}
                keyboardType={'numeric'}
                onChangeText={(value) => onChangText(value, 1)}
                value={pin1}
                style={{ ...styles.inpPhoneHeader, ...style }}
                ref={refPin1} />
            <TextInput maxLength={1}
                keyboardType={'numeric'}
                value={pin2}
                onChangeText={(value) => onChangText(value, 2)}
                style={{ ...styles.inpPhoneContent, ...style }}
                ref={refPin2}
            />
            <TextInput maxLength={1}
                keyboardType={'numeric'}
                value={pin3}
                onChangeText={(value) => onChangText(value, 3)}
                style={{ ...styles.inpPhoneContent, ...style }}
                ref={refPin3}
            />
            <TextInput maxLength={1}
                keyboardType={'numeric'}
                value={pin4}
                onChangeText={(value) => onChangText(value, 4)}
                style={{ ...styles.inpPhoneContent, ...style }}
                ref={refPin4}
            />
            <TextInput maxLength={1}
                keyboardType={'numeric'}
                value={pin5}
                onChangeText={(value) => onChangText(value, 5)}
                style={{ ...styles.inpPhoneContent, ...style }}
                ref={refPin5}
            />
            <TextInput maxLength={1}
                keyboardType={'numeric'}
                value={pin6}
                onChangeText={(value) => onChangText(value, 6)}
                style={{ ...styles.inpPhoneFooter, ...style }}
                ref={refPin6}
            />

        </View>
    )
}

confirmInputPhone.propTypes = {
    style: PropTypes.object,
    onChangeCode: PropTypes.func.isRequired,
}

confirmInputPhone.defaultProps = {
    style: null,
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: Themes.Const.MARGIN_HORIZONTAL
    },
    inpPhoneHeader: {
        borderWidth: 1,
        height: Themes.Const.HEIGHT,
        borderTopLeftRadius: Themes.Const.BORDER_RADIUS,
        borderBottomLeftRadius: Themes.Const.BORDER_RADIUS,
        alignContent: 'center',
        textAlign: 'center',
        fontSize: Themes.Const.FONT_SIZE_V2,
        borderColor: 'gray',
        flex: 1,
        fontWeight: 'bold'
    },
    inpPhoneContent: {
        height: Themes.Const.HEIGHT,
        borderWidth: 1,
        flex: 1,
        borderLeftWidth: 0,
        alignContent: 'center',
        textAlign: 'center',
        borderColor: 'gray',
        fontSize: Themes.Const.FONT_SIZE_V2,
        fontWeight: 'bold'

    },
    inpPhoneFooter: {
        height: Themes.Const.HEIGHT,
        borderWidth: 1,
        flex: 1,
        borderTopRightRadius: Themes.Const.BORDER_RADIUS,
        borderBottomRightRadius: Themes.Const.BORDER_RADIUS,
        alignContent: 'center',
        textAlign: 'center',
        borderColor: 'gray',
        borderLeftWidth: 0,
        fontSize: Themes.Const.FONT_SIZE_V2,
        fontWeight: 'bold'

    }
})
