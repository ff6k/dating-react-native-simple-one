import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import ButtonBack from '/src/components/UI/buttonBack'
import Themes from '/src/themes'
import Icon from '/src/components/UI/icon'
const data = [
    { id: 1, label: 'Male' },
    { id: 2, label: 'Female' },
    { id: 3, label: 'Other' },
]


export default function editGender(props) {
    const { onPressBack } = props

    const [idSelected, setIdSelected] = useState(data[0].id)

    const onPressItem = (id) => {
        setIdSelected(id)
    }

    const ItemGender = ({ item }) => {
        const { label, id } = item
        let isCheck = false
        if (id === idSelected) {
            isCheck = true
        }

        return (
            <TouchableOpacity style={styles.containContent}
                onPress={() => onPressItem(id)}>
                <Text style={styles.txtContent}>{label}</Text>
                {
                    isCheck && <Icon
                        name={'checkmark'}
                        size={25}
                        color={Themes.Colors.PINK_DARK}
                    />
                }
            </TouchableOpacity>
        )
    }
    return (
        <View>
            <ButtonBack
                title={'I Am'}
                onPress={onPressBack}
            />
            <FlatList
                keyExtractor={item => item.id.toString()}
                data={data}
                style={styles.flatList}
                renderItem={ItemGender}
            />
            {/* <TouchableOpacity style={[styles.containContent, { marginTop: 20 }]}>
                <Text style={styles.txtContent}>Man</Text>
                <Icon
                    name={'checkmark'}
                    size={25}
                    color={Themes.Colors.PINK_DARK}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.containContent}>
                <Text style={styles.txtContent}>Women</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.containContent, styles.btnBottom]}>
                <Text style={styles.txtContent}>Other</Text>
            </TouchableOpacity> */}
            {/* </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    flatList: {
        marginTop: 20
    },
    btnBottom: {
        // ...Themes.Styles.shadowButton
    },
    containFooter: {
    },
    containContent: {
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        marginTop: 1.3
    },
    txtContent: {
        fontSize: 15,
        color: Themes.Colors.GRAY_BRIGHT_I,
        fontFamily: Themes.FontFamily.FontMediumDefault
    }
})
