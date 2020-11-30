import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import EmptyPerform from '/src/components/UI/emptyPerform'
import PropTypes from 'prop-types'
export default function LikesMe(props) {
    const { t } = props
    return (
        <View style={styles.container}>
            <EmptyPerform title={t("Liked Me")}
                source={require('/src/assets/images/my_heart.png')}
                description={t("Description like me")}
            />
        </View>
    )
}

LikesMe.propTypes = {
    t: PropTypes.func.isRequired,
}

LikesMe.defaultProps = {

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


