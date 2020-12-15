import React, { useEffect, useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types';
// import { Icon } from 'react-native-eva-icons';
import Icon from '/src/components/UI/icon'
import Themes from '/src/themes'
import Const from '/src/const'
import Utils from '/src/utils'
export default function dateTimePicker(props) {
    const { modeShow, style, styleText, onGetDate, sizeIcon, dateBegin, pickDate } = props;
    const [date, setDate] = useState(() => { return dateBegin ? dateBegin : new Date() });
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        pickDate(currentDate)
    };

    useEffect(() => {
        onGetDate && onGetDate(date)
    }, [date])

    const formatDate = (date) => {
        return Utils.Format.formatDate(date, Const.DateFormat.DATE_DEFAULT)
        // return Utils.Format.formatDate(date)
    }

    const formatTime = (date) => {
        return Utils.Format.formatTime(date)
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimePicker = () => {
        showMode('time');
    };
    return (
        <View>
            <TouchableOpacity
                style={{ ...styles.btnDateTime, ...style }}
                onPress={modeShow === 'date' ? showDatepicker : showTimePicker}
            >
                <Text style={styleText}>{
                    modeShow === 'date' ?
                        formatDate(date)
                        :
                        formatTime(date)}
                </Text>
                {
                    modeShow === 'date' ?
                        <Icon
                            color={Themes.Colors.GRAY_BRIGHT_I}
                            size={[sizeIcon ? sizeIcon : Themes.Const.SIZE_ICON_II]}
                            name="calendar-outline"
                        />
                        :
                        <Icon
                            color={Themes.Colors.GRAY_BRIGHT_I}
                            size={[sizeIcon ? sizeIcon : Themes.Const.SIZE_ICON_II]}
                            name="clock-outline"
                        />
                }
            </TouchableOpacity>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    )
}
dateTimePicker.propTypes = {
    modeShow: PropTypes.oneOf(['time', 'date']).isRequired,
    style: PropTypes.object,
    styleText: PropTypes.object,
}

dateTimePicker.defaultProps = {
    style: null
}

const styles = StyleSheet.create({
    icoShow: {
        fontSize: 20,
        color: Themes.Colors.GRAY_BRIGHT_I
    },
    btnDateTime: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
