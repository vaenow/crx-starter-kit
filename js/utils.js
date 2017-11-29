/**
 * Created by luowen on 2017/11/28.
 */

// ======================= // Utils
const STORE = 'crx-store-key';
const STORE_DEFAULT = {
    layout: {
        checked: false
    },
    translate: {
        checked: true
    },
};

export function responseWrapper(response) {
    return function (msg) {
        return response(JSON.stringify(msg))
    }
}

export function getStore(storeName = STORE) {
    try {
        const store = JSON.parse(localStorage.getItem(storeName));
        if (!store) {
            updateStore(STORE_DEFAULT);
            return STORE_DEFAULT;
        }
        return store;
    } catch (e) {
        return STORE_DEFAULT;
    }
}

export function updateStore(store) {
    localStorage.setItem(STORE, JSON.stringify(store))
}