/**
* @date 2017-10-29
* @author LuoWen
**/
import {
    getStore,
    updateStore,
    responseWrapper
} from './utils'

chrome.runtime.onMessage.addListener(({
	from,
	subject
}, sender, response) => {
	const resp = responseWrapper(response)
	const subj = JSON.parse(subject)

	switch (from) {
		case 'getWebStore':
			handleGetWebStore(subj, resp);
			break;
	}
});

// ======================= // Handle

function handleGetWebStore({checked}, response) {
	// console.log('got message, handleGetWebStore', msg)
	response(getStore());
}

// ======================= //
