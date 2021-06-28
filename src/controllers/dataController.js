import { Store }    from '../patterns/store.js';

class Data extends Store{};
export const DataStore = new Data({data:[]}); 

export async function dataLoader(){

        new Promise((resolve, reject) => {
            fetch('https://rest.kvinto.com.ua:8580/dataLoad/dataloder/result.json')
            .then((response) => {
              return response.json();
            })
            .then((data) => {
                  DataStore.set({data})
                  resolve(data)
            });
        });

}