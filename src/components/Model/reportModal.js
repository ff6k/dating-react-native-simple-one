import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal, TouchableOpacity, TextInput, FlatList } from 'react-native'
import Themes from '/src/themes'
import Icon from '/src/components/UI/icon'
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import { withTranslation } from 'react-i18next'

const dataReportTempEn = [
    { id: 1, value: 'Nudity' },
    { id: 2, value: 'Violence' },
    { id: 3, value: 'Harassment' },
    { id: 4, value: 'Suicide or Self-Injury' },
    { id: 5, value: 'Fake Account' },
    { id: 6, value: 'Spam' },
    { id: 7, value: 'Unauthorized Sales' },
    { id: 8, value: 'Hate Speech' },
    { id: 9, value: 'Terrorism' },
    { id: 10, value: 'Fraud or Scam' },
    { id: 11, value: 'Bullying' },
    { id: 12, value: 'Child Abuse' },
    { id: 13, value: 'Animal Abuse' },
    { id: 14, value: 'Sexual Activity' },
    { id: 19, value: 'Promoting Drug Use' },
    { id: 16, value: 'Sexual Exploitation' },
]

const dataReportTempVi = [
    { id: 1, value: 'Ảnh khoả thân' },
    { id: 2, value: 'Bạo lực' },
    { id: 3, value: 'Quấy rối' },
    { id: 4, value: 'Tự tử hoặc tự gây thương tích' },
    { id: 5, value: 'Tài khoản giả mạo' },
    { id: 6, value: 'Thư rác' },
    { id: 7, value: 'Bán hàng trái phép' },
    { id: 8, value: 'Lời nói căm thù' },
    { id: 9, value: 'Khủng bố' },
    { id: 10, value: 'Gian lận hoặc lừa đảo' },
    { id: 11, value: 'Bắt nạt' },
    { id: 12, value: 'Lạm dụng trẻ em' },
    { id: 13, value: 'Ngược đãi động vật' },
    { id: 14, value: 'Hoạt động tình dục' },
    { id: 19, value: 'Khuyến khích sử dụng ma túy' },
    { id: 16, value: 'Bóc lột tình dục' },
]

let dataReportTemp
function ReportModal(props) {
    const { visible, onPressCloseModal, onPressPostData, i18n, t } = props
    const [idSelect, setIdSelect] = useState(null)
    const [dataReport, setDataReport] = useState(() => {
        const { language } = i18n
        switch (language) {
            case "vi":
                dataReportTemp = dataReportTempVi
                return dataReportTempVi
            default:
                dataReportTemp = dataReportTempEn
                return dataReportTempEn
        }
    })
    const [isDetail, setIsDetail] = useState(false)
    const [valueReport, setValueReport] = useState('')
    const [valueSearch, setValueSearch] = useState('')

    const renderItemReport = ({ item, index }) => {
        const { id } = item
        let isSelect = false
        if (id === idSelect) {
            isSelect = true
        }
        return <View style={[styles.containItem]}>
            <Text style={styles.txtItemReport}>{item.value}</Text>
            <TouchableOpacity style={[styles.itemCheck, isSelect && { borderColor: Themes.Colors.BLUE_BRIGHT }]}
                onPress={() => onPressItem(item, index)}>
                {isSelect && <View style={styles.viewCheck} />}
            </TouchableOpacity>
        </View>
    }

    const onPressItem = (item, index) => {
        const { id } = item
        setIdSelect(id)
    }

    const onChangeTextSearch = (text) => {
        setValueSearch(text)
        if (text === "") {
            setDataReport(dataReportTemp)
        }
        else {
            const lowerText = text.toLowerCase()
            const dataFilter = dataReportTemp.filter(item => {
                if (item.value.toLowerCase().includes(lowerText)) {
                    return true
                }
                return false
            })
            setDataReport(dataFilter)
        }
    }

    const onPressNext = () => {
        setIsDetail(true)

    }

    const onPressPost = () => {
        const data = {
            title: dataReportTemp[idSelect].value,
            content: valueReport
        }
        onPressPostData && onPressPostData(data)
        setValueReport('')
        setIsDetail(false)
    }

    const onPressPrevious = () => {
        setIsDetail(false)
    }

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
        >
            <View style={[styles.container]}>
                <View style={styles.header}>
                    {isDetail && <TouchableOpacity style={styles.btnPrevious}
                        onPress={() => onPressPrevious()}
                    >
                        <Icon
                            color={Themes.Colors.GRAY_BRIGHT_I}
                            size={35}
                            name={'arrow-ios-back-outline'}
                        />
                    </TouchableOpacity>}
                    <Text style={styles.txtHeader}>{t("Report")}</Text>
                    <TouchableOpacity style={styles.btnClose}
                        onPress={() => onPressCloseModal && onPressCloseModal()}>
                        <Icon
                            color={Themes.Colors.GRAY_BRIGHT_I}
                            size={35}
                            name={'close-outline'}
                        />
                    </TouchableOpacity>
                </View>
                {!isDetail ? <>
                    <View style={styles.containSearch}>
                        <View style={styles.search}>
                            <Icon
                                color={Themes.Colors.GRAY_BRIGHT_I}
                                size={25}
                                name={'search-outline'}
                            />
                            <TextInput
                                value={valueSearch}
                                style={styles.inpSearch}
                                onChangeText={onChangeTextSearch}
                            />
                        </View>
                    </View>
                    <FlatList
                        style={styles.containList}
                        data={dataReport}
                        renderItem={renderItemReport}
                        keyExtractor={item => item.id.toString()}
                    />
                </> :
                    <View style={styles.containDetail}>
                        <View style={styles.containTitle}>
                            <Icon
                                color={Themes.Colors.GRAY_BRIGHT_I}
                                size={25}
                                name={'alert-triangle-outline'}
                            />
                            <Text style={styles.txtDetailTitle}>{dataReportTemp.find(e => e.id === idSelect).value}</Text>
                        </View>
                        <AutoGrowingTextInput
                            placeholder={t("Write Something About This Report")}
                            style={styles.inpReport}
                            onChangeText={(value) => setValueReport(value)}
                            maxLength={500}
                            value={valueReport}
                        // onContentSizeChange={(e) => updateSize(e.nativeEvent.contentSize.height)}
                        />
                    </View>}
                <View style={styles.containBottom}>
                    <TouchableOpacity
                        disabled={(idSelect === null || idSelect < 0 || (isDetail && valueReport === '')) ? true : false}
                        style={[styles.btnNext, (idSelect === null || idSelect < 0 || (isDetail && valueReport === '')) && { backgroundColor: 'gray' }]}
                        onPress={() => !isDetail ? onPressNext() : onPressPost()}>
                        <Text style={styles.txtNext}>{!isDetail ? t('Next') : t('Post')}</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </Modal>
    )
}

export default withTranslation()(ReportModal)

const SIZE_BUTTON = 40
const SIZE_CHECK = 30
const styles = StyleSheet.create({
    btnPrevious: {
        backgroundColor: Themes.Colors.GRAY_BRIGHT_V,
        alignItems: 'center',
        justifyContent: 'center',
        width: SIZE_BUTTON,
        height: SIZE_BUTTON,
        borderRadius: SIZE_BUTTON / 2,
        position: 'absolute',
        left: 10,
        top: 15
    },
    inpReport: {
        fontSize: 15, margin: 10,
        fontFamily: Themes.FontFamily.FontThinDefault
    },
    txtDetailTitle: {
        fontSize: 15,
        fontFamily: Themes.FontFamily.FontBoldSemi,
        marginLeft: 10
    },
    containTitle: {
        borderBottomWidth: 0.5,
        borderBottomColor: Themes.Colors.GRAY_BRIGHT_I,
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    containDetail: {
        flex: 1,
    },
    viewCheck: {
        width: SIZE_CHECK - 13, height: SIZE_CHECK - 13, backgroundColor: Themes.Colors.BLUE_BRIGHT,
        borderRadius: (SIZE_CHECK - 13) / 2
    },
    txtNext: {
        fontSize: 17,
        fontFamily: Themes.FontFamily.FontBoldSemi,
        color: 'white'
    },
    btnNext: {
        backgroundColor: Themes.Colors.BLUE_BRIGHT,
        paddingVertical: 10,
        paddingHorizontal: 15,
        position: 'absolute',
        right: 20,
        borderRadius: 10
    },
    containBottom: {
        height: 50,
        justifyContent: 'center'
    },
    containItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    itemCheck: {
        width: SIZE_CHECK,
        height: SIZE_CHECK,
        borderRadius: 30 / 2,
        borderWidth: 1,
        borderColor: Themes.Colors.GRAY_BRIGHT,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtItemReport: {
        fontSize: 17,
        fontFamily: Themes.FontFamily.FontMediumDefault
    },
    containList: {
        flex: 1,
        borderBottomWidth: 0.5,
        borderBottomColor: Themes.Colors.GRAY_BRIGHT_I,
    },
    inpSearch: {
        fontSize: 15,
        width: '90%',
        height: '100%',
        fontFamily: Themes.FontFamily.FontMediumDefault
    },
    search: {
        flexDirection: 'row',
        borderWidth: 0.5,
        borderRadius: 8,
        width: '90%', height: 40,
        alignItems: 'center',
        paddingHorizontal: 10,
        borderColor: 'gray'
    },
    containSearch: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: Themes.Colors.GRAY_BRIGHT_I,
    },
    btnClose: {
        backgroundColor: Themes.Colors.GRAY_BRIGHT_V,
        alignItems: 'center',
        justifyContent: 'center',
        width: SIZE_BUTTON,
        height: SIZE_BUTTON,
        borderRadius: SIZE_BUTTON / 2,
        position: 'absolute',
        right: 10,
        top: 15
    },
    txtHeader: {
        fontSize: 20,
        fontFamily: Themes.FontFamily.FontBoldSemi
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 20,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        ...Themes.Styles.shadowButton
    },
    container: {
        backgroundColor: 'white', width: '90%', height: '85%',
        alignSelf: 'center',
        marginTop: 80,
        borderRadius: 10,
        ...Themes.Styles.shadowButton
    }
})
