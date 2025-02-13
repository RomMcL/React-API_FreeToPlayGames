import { store } from "../redux-state/store";


const BASE_URL = 'https://free-to-play-games-database.p.rapidapi.com/api';
const OPTIONS = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f858958a6amshc313acb38be0fd6p12e43ejsn128ec01297e2',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    },
};


const fetchData = async (request, changeableState) => {
 
    try {            
        const response = await fetch(`${BASE_URL}${request}`, OPTIONS);
        if (!response.ok) throw new Error(response.status);                                                 
        const data = await response.json();
        store.dispatch(changeableState(data));
    } catch (err) {

        console.log(err.message);
         
    } finally {
        console.log(`Запрос обработан`);
    }
};


export default fetchData;