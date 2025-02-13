import { store } from "../redux-state/store";
import { changeLoadingStatus, changeError } from "../redux-state/redusers/data"; 

const BASE_URL = 'https://free-to-play-games-database.p.rapidapi.com/api';
const OPTIONS = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f858958a6amshc313acb38be0fd6p12e43ejsn128ec01297e2',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    },
};

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const fetchData = async (request, changeableState) => {
    
    store.dispatch(changeLoadingStatus(true));
    store.dispatch(changeError({}));
 
    try {
        await sleep(2000);
        const response = await fetch(`${BASE_URL}${request}`, OPTIONS);
        if (!response.ok) throw new Error(response.status);                                                 
        const data = await response.json();
        store.dispatch(changeableState(data));
    } catch (err) {

        if (err.name === 'Error' || err.message === 'Failed to fetch') {
            store.dispatch(changeError({text: `Ошибка HTTP: ${err.message}`, type: 'http'}));
        } else  store.dispatch(changeError({text: `Ошибка в запросе: ${err.message}`, type: 'any'}));
         
    } finally {
        store.dispatch(changeLoadingStatus(false));
        console.log(`Запрос обработан`);
    }
};


export default fetchData;