import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import EmptyPerform from '/src/components/UI/emptyPerform'
import PropTypes from 'prop-types'
export default function Online(props) {
    const { t } = props
    return (
        <View style={styles.container}>
            <EmptyPerform
                title={t("Online")}
                source={require('/src/assets/images/my_heart.png')}
                description={t("Description online")}
            />
        </View>
    )
}

Online.propTypes = {
    t: PropTypes.func.isRequired,
}

Online.defaultProps = {

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
