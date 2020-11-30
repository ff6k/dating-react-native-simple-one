import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import EmptyPerform from '/src/components/UI/emptyPerform'
import PropTypes from 'prop-types'
export default function mySuperLiked(props) {
    const { t } = props
    return (
        <View style={styles.container}>
            <EmptyPerform title={t("My SuperLiked")}
                source={require('/src/assets/images/my_heart.png')}
                description={t("Description my super like")}
            />
        </View>
    )
}

mySuperLiked.propTypes = {
    t: PropTypes.func.isRequired,
}

mySuperLiked.defaultProps = {

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})



