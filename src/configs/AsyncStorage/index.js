import AsyncStorage from '@react-native-community/async-storage'

export const saveStorage = async (STORAGE_KEY, value) => {
    try {
        await AsyncStorage.setItem(STORAGE_KEY, value)
        return true
    } catch (e) {
        console.log('SaveData storage fail', e)
        return false
    }

}

export const readStorage = async (STORAGE_KEY) => {
    try {
        const data = await AsyncStorage.getItem(STORAGE_KEY)
        if (data !== null) {
            return data
        }
    } catch (e) {
        console.log('Read data storage fail', e)
        return e
    }
}

export const removeKeyStorage = async (STORAGE_KEY) => {
    try {
        await AsyncStorage.removeItem(STORAGE_KEY)
        return true
    } catch (e) {
        console.log('remove key storage fail', e)
        return false
    }
}

export const saveDataUserStorage = (STORAGE_KEY, arrData) => {
    saveStorage(STORAGE_KEY, JSON.stringify(arrData))
}

export const getDataUserStorage = (STORAGE_KEY) => {
    const data = readStorage(STORAGE_KEY)
    data.then(res => console.log(res))
    // return JSON.parse(readStorage(STORAGE_KEY))
}

export const clearStorage = async () => {
    try {
        await AsyncStorage.clear()
    } catch (e) {
    }
}



