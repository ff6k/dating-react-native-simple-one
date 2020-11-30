import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import EmptyPerform from '/src/components/UI/emptyPerform'
import PropTypes from 'prop-types'
import ItemPending from '/src/components/UI/itemPending'

function Pending(props) {
    const { t } = props
    const [isData, setIsData] = useState(true)
    return (
        <View style={[styles.container, !isData && {
            justifyContent: 'center',
            alignItems: 'center'
        }]}>
            {!isData ? <EmptyPerform
                title={t("You have no pending dates")}
                source={require('/src/assets/images/broke.png')}
                description={t("Description Pending")}
            /> : <ItemPending />}
        </View>
    )
}

Pending.propTypes = {
    t: PropTypes.func.isRequired,
}

export default Pending

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
})


