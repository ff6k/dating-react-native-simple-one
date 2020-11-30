import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import EmptyPerform from '/src/components/UI/emptyPerform'
import PropTypes from 'prop-types'
function UpComing(props) {
    const { t } = props
    return (
        <View style={styles.container}>
            <EmptyPerform
                title={t("You have no upcoming dates")}
                source={require('/src/assets/images/broke.png')}
                description={t("Description up coming")}
            />
        </View>
    )
}

UpComing.propTypes = {
    t: PropTypes.func.isRequired,
}

export default UpComing



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


