import apiKey from "../constants/apiKey";

export default class WeaterService {
    constructor() {
        this.url = "https://api.openweathermap.org/data/2.5/";
        this.apiKey = apiKey;
        this.lang = "ru";
    }
    _getData = (id) => {
        const callType = "weather";
        const adress = `${this.url}${callType}?id=${id}&appid=${this.apiKey}&lang=${this.lang}`;
        return fetch(adress)
            .then(res => !res.ok ? new Error (res.status) : res.json())
    }
    getCurrentWeather = (idArray) => {
        /* При получении списка городов риходится делать несколько одиночных запросов,
        т.к. у API при отправлении одним запросом не срабатывает русский язык */
        const resArray = idArray.map(id => this._getData(id));
        return Promise.all(resArray)
    }
    getWeeklyWeather = (lat, lon) => {
        // На неделю бесплатно данные можно получать только по координатам
        const callType = "onecall";
        const exclude = "current,minutely,hourly";
        const adress = `${this.url}${callType}?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${this.apiKey}&lang=${this.lang}`;
        return fetch(adress)
            .then(res => !res.ok ? new Error (res.status) : res.json())
    }
}