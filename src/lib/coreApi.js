import AsyncStorage from '@react-native-community/async-storage';
import {Constants} from './constant';
let domainUrl = Constants.BASE_URL;

export default {
  GET: (link) =>
    new Promise(async (resolve, reject) => {
      const token = await AsyncStorage.getItem('token');
      const url = domainUrl + link;

      fetch(url, {
        method: 'GET',
        headers: {
          Authorization: token ? `JWT ${token}` : '',
          type: qs ? type : '',
          'Cache-Control': 'no-cache',
        },
      })
        .then((response) => response.json())
        .then((responseText) => {
          resolve(responseText);
        })
        .catch((error) => {
          reject(error);
        });
    }),

  POST: (link, data) =>
    new Promise(async (resolve, reject) => {
      const token = await AsyncStorage.getItem('token');
      const url = domainUrl + link;

      fetch(url, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: {
          Authorization: token ? `JWT ${token}` : '',
          type: qs ? type : '',
          'Content-type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((responseText) => {
          resolve(responseText);
        })
        .catch((error) => {
          reject(error);
        });
    }),
};
