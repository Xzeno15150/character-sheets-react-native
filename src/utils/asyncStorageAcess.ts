import AsyncStorage from "@react-native-async-storage/async-storage";

export function getItem(itemName: string) {
    return AsyncStorage.getItem(itemName)
        .then((value : string | null) => value ? JSON.parse(value) : "");
}

export function setItem(itemName : string, item :  {}) {
    return AsyncStorage.setItem(itemName, JSON.stringify(item));
}

export function removeItem(itemName : string) {
    return AsyncStorage.removeItem(itemName);
}

export function clearAllItems() {
    return AsyncStorage.clear();
}