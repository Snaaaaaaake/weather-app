import apiKey from "../constants/apiKey";

export default class WeaterService {
    constructor() {
        this.url = "https://api.openweathermap.org/data/2.5/weather?";
        this.apiKey = apiKey;
        this.lang = "ru";
    }

    _getCity(id) {
        const adress = `${this.url}id=${id}&appid=${this.apiKey}&lang=${this.lang}`
        return fetch(adress)
            .then(res => !res.ok ? new Error (res.status) : res.json())
    }

    getData = (idArray) => {
        /* Приходится делать несколько запросов,
        т.к. у API при отправлении одним запросом не срабатывает русский язык */
        const resArray = idArray.map(id => this._getCity(id));
        return Promise.all(resArray)
    }
}