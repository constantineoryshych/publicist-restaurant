import React 		  from 'react';
import { AddToCheck } from './addToСheck/addToCheck';
import { Store }      from '../patterns/store';

class CatalogZoom extends Store{};
export const CatalogZoomStore = new CatalogZoom({ data: 2 });

export function zoomOute(){
	CatalogZoomStore.set({data: ( (CatalogZoomStore.getState().data < 2 ) ? 1 : CatalogZoomStore.getState().data -1 )})
}

export function zoomIn(){
	CatalogZoomStore.set({data: ( (CatalogZoomStore.getState().data > 3 ) ? 4 : CatalogZoomStore.getState().data +1 )})
}

export function zoomTo(countEl){
	CatalogZoomStore.set({data: ( (CatalogZoomStore.getState().data > ( countEl - 1) ) ? countEl : countEl )})
}

const defaultImage  = "/style/img/default.svg";

export  const Catalog = (data) => {
	const catalogData = data[Object.keys(data)[0]][Object.keys(data[Object.keys(data)[0]])[1]]["catalog"];
	return (
		<ul>
			{catalogData.map((value, index) =>
			    <li>
						{(value.type === "list") ? ( (catalogData.length > 1 ) ? fewCatalogList(value) : fewCatalogList(value) ) : catalogFood(value , data.zoomCatalog) }
			    </li>
			)}
	    </ul>
	);
}

const fewCatalogList = (data) => (
	<ul className="product-list-wine">
		<li>
			<div className="title"><h2>{data.name}</h2></div>
			<ul>
					{data.content.map((value, index) =>
					    <li className="list-item">
							  <p>{value.name}</p>
							  <AddToCheck data={value} />
					    </li>
					)}
			</ul>
		</li>
	</ul>
)

const catalogFood = (data) => {
	let widthItem = CatalogZoomStore.getState().data;

	if(widthItem === 5 ) widthItem =  { width: "20%" }
	if(widthItem === 4 ) widthItem =  { width: "25%" }
	if(widthItem === 3 ) widthItem =  { width: "33%" }
	if(widthItem === 2 ) widthItem =  { width: "50%" }
	if(widthItem === 1 ) widthItem =  { width: "100%" }

	return(
		<>
				<ul id="product-list" className="product-list">
					{data.content.map((value, index) =>
						<li style={{ width :  widthItem.width }} className="list-item">
							<div className="icon-dish"> <img alt="" src={( (  (value.img[0]) ? ("https://rest.kvinto.com.ua:8580/dataLoad/dataloder/" + value.img[0]) : defaultImage ) )}/></div>
							<p className="decription">{value.name}</p>
							<AddToCheck data={value} />
						</li>
					)}
				</ul>
		</>
	)
}