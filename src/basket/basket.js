import { Store } from '../patterns/store.js';

class FirstCheck extends Store{};
export const FirstCheckBascet  = new FirstCheck({data:[]}); 

class SecondCheck extends Store{};
export const SecondCheckBascet = new SecondCheck({data: []}); 

class SecondCheckActivate extends Store{};
export const SecondCheckActivateBusket = new SecondCheckActivate({data: false}); 

class SwitchСheck extends Store{};
export const SwitchСheckStore = new SwitchСheck({data: "first"}); 

export	function deleteToFirstCheack(deleteElement){
			let arr = FirstCheckBascet.getState().data.filter(n => n.data.id !== deleteElement.data.id);
			FirstCheckBascet.set( { data : arr } );
	  	}

export function addToFirstCheack(data){
			delete data.data["description"]
			delete data.data["img"]
			delete data.data["pricefrom"]
			delete data.data["urlimg"]
			Object.assign(data.data, { amount : 1 });
			  const compareData =  FirstCheckBascet.getState().data.concat([data]);
	  		FirstCheckBascet.set( { data : compareData } );
	  	}

export	function deleteToSecondCheck(deleteElement){
			let arr = SecondCheckBascet.getState().data.filter(n => n.data.id !== deleteElement.data.id);
			SecondCheckBascet.set( { data : arr } );
}

export function addToSecondCheck(data){
			delete data.data["description"]
			delete data.data["img"]
			delete data.data["pricefrom"]
			delete data.data["urlimg"]
			Object.assign(data.data, { amount : 1 });
	  		const compareData =  SecondCheckBascet.getState().data.concat([data]);
	  		SecondCheckBascet.set( { data : compareData } );
}