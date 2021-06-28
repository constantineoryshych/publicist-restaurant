import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker     from './registerServiceWorker';
import './index.css';
import { dataLoader, DataStore } from './controllers/dataController';
import { zoomController }        from  './controllers/scaleControoller';

//---------------------Стор который хранит номер стола подумать как его нормально сделать
            import { Store } from './patterns/store';
            class TableNamber extends Store{};
            export const TableNamberStore = new TableNamber({data: null}); 
            let table = window.location.search.split("?")[1] // получаем номер столика
            if(table){
                table = table.replace("=", "-");
            }     
            TableNamberStore.set({ tableNumber: table });
            zoomController(); // активизируем
            document.addEventListener('touchmove', function (event) {
                if (event.scale !== 1) { event.preventDefault(); }
              }, false);
//---------------------Стор который хранит номер стола подумать как его нормально сделать


dataLoader().then( () => {

    DataStore.subscribe(() => {

        ReactDOM.render(
                <App table={table} data={DataStore.getState().data} />,
                 document.getElementById('root')
            );
            registerServiceWorker();

    })

})