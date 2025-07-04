import { store } from "../redux-state/store";
import { changeLoadingStatus, changeError, changeMessage } from "../redux-state/redusers/data";
import { getControllerSignal, getSleepSignal, reinitSleep, abortSleep } from './abortController';


const BASE_URL = 'https://free-to-play-games-database.p.rapidapi.com/api';
const OPTIONS = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f858958a6amshc313acb38be0fd6p12e43ejsn128ec01297e2',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    },
};

const myAPI_link = `https://SosiBibuSanction.pythonanywhere.com/parametrs?`;
const keyMyAPI = 'mneRomaRazreshil';

const sleep = (ms, signal) => {
    return new Promise((resolve, reject) => {

        const timeoutId = setTimeout(resolve, ms);

        signal.addEventListener('abort', () => {
            clearTimeout(timeoutId);
            reject(store.dispatch(changeMessage('AbortError: ожидание автозапроса прервано.')));
        });
       
    });
}

const fetchData = async (request, changeableState, isSanctions, attempt=1 ) => {
    
    store.dispatch(changeLoadingStatus(true));
    store.dispatch(changeError({}));
    store.dispatch(changeMessage(''));
    
    try {
        let response;

        if (!isSanctions) {
            response = await fetch(`${BASE_URL}${request}`, {...OPTIONS, signal: getControllerSignal()});
        } else {
            
            const requestSplit = request.split('&');
            response = await fetch(`${myAPI_link}key=${keyMyAPI}&req=${requestSplit}`,
                { 
                    method: 'get', 
                    mode: 'cors' 
                });

                store.dispatch(changeError({}));
            
        }

        if (!response.ok) throw new Error(response.status);

        const data = await response.json();

        if (data['romaSay'] != undefined) {
            store.dispatch(changeError({text: `${data.romaSay} ${data.error}.`, type: 'any'}));
        } else store.dispatch(changeableState(data));

    } catch (err) {
        if (err.name === 'AbortError') {
            store.dispatch(changeMessage('AbortError: запрос был прерван.'));
          } else if (err.name === 'Error' || err.message === 'Failed to fetch') {

            store.dispatch(changeError({text: `Ошибка HTTP: ${err.message}`, type: 'http', attempt: attempt}));        

            if (attempt <= 3) {
              reinitSleep();
              try {
                await sleep(attempt*5000, getSleepSignal());
                await fetchData(request, changeableState, isSanctions, attempt+1);
              } catch (e) {
                console.warn('Аборт промиса автозапроса');
                store.dispatch(changeError({text: `Попытки были прерваны. Ошибка ${err.message}.`, type: 'any'}));
              }                           
            } else {
                store.dispatch(changeError({text: `Попытки кончились. Ошибка ${err.message}.`, type: 'any'}));
                abortSleep();
            }

          } else  store.dispatch(changeError({text: `Ошибка в запросе: ${err.message}`, type: 'any'}));        
    } finally {
        store.dispatch(changeLoadingStatus(false));
    }
};

export default fetchData;