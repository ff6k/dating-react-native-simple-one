import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import EmptyPerform from '/src/components/UI/emptyPerform'
import PropTypes from 'prop-types'

function pastDated(props) {
    const { t } = props
    return (
        <View style={styles.container}>
            <EmptyPerform
                title={t("You have no past dates")}
                source={require('/src/assets/images/broke.png')}
                description={t("Description past dated")}
            />
        </View>
    )
}

pastDated.propTypes = {
    t: PropTypes.func.isRequired,
}

export default pastDated


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


