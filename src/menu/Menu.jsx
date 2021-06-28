import React, { useState, useEffect } from 'react';
import { Catalog, CatalogZoomStore } from '../catalog/catalog';
import { Header } from '../menu/header/header';
import { FooterNav } from './footer/footer.jsx';

import {
	Link,
	useHistory,
	useLocation
} from 'react-router-dom';


const lang = "ua";

export const Menu 	 = (data) => {
	const location   = useLocation();
	const history    = useHistory();
	const [ zoomCatalog,      setZoomCatalog ] = useState(2);
	CatalogZoomStore.subscribe(()=>{
		setZoomCatalog(CatalogZoomStore.getState().data)
	})

	const changeUrl = (urlPath) => {
		history.push(urlPath)
	}

	useEffect(() => {

		document.addEventListener('gesturestart', function(e) {
			e.preventDefault();
			// special hack to prevent zoom-to-tabs gesture in safari
			document.body.style.zoom = 0.99;
		});

		document.addEventListener('gesturechange', function(e) {
			e.preventDefault();
			// special hack to prevent zoom-to-tabs gesture in safari
			document.body.style.zoom = 0.99;
		});

		document.addEventListener('gestureend', function(e) {
			e.preventDefault();
			// special hack to prevent zoom-to-tabs gesture in safari
			document.body.style.zoom = 0.99;
		});
			document.body.addEventListener('touchmove', function(evt) {
				//evt.preventDefault();
				var tt = evt.targetTouches;
				if (tt.length > 1) {
					evt.preventDefault();
					document.body.style.zoom = 0.99;
				}

				}, false)
				document.getElementById("menu-footer").addEventListener('touchmove', function(evt) {
					evt.preventDefault();
					var tt = evt.targetTouches;
					if (tt.length > 1) {
						evt.preventDefault();
						document.body.style.zoom = 0.99;
					}

					}, false)

					document.getElementById("menu-footer").addEventListener('gesturechange', function(e) {
						e.preventDefault();
						document.body.style.zoom = 0.99;
					});

					document.getElementById("menu-footer").addEventListener('gestureend', function(e) {
						e.preventDefault();
						document.body.style.zoom = 0.99;
					});

	  });

	// сдесь идет перебор следовательно асинхрон // нужно перепиать под сет стейт
	const listOrCatalogCheck = (data, carentSubcatName) => {
		if (!data) return
		let findeObj = null;
		carentSubcatName = carentSubcatName.replace(/_/g, " ")
		data.forEach(function (item, i, arr) {
			if (carentSubcatName === Object.keys(item)[1]) {
				findeObj = item;
			}
		});
		return findeObj
	}

	const Subcategoryes = (location, subCatData) => {
		let activeCategoryDetek = location.split("/");
		activeCategoryDetek = activeCategoryDetek[activeCategoryDetek.length - 1];
		let carentSubcatName = decodeURI(window.location.pathname).split("/")[decodeURI(window.location.pathname).split("/").length - 1];

		const listOrCata = listOrCatalogCheck(subCatData[Object.keys(subCatData)[0]], carentSubcatName);

		return (subCatData[activeCategoryDetek] && (decodeURI(window.location.pathname).split("/").length <= 3)) ? (
			<ul>
				{subCatData[activeCategoryDetek].map((value, index) =>
					<li className="sub-item" onClick={() => { changeUrl(("/menu/" + carentSubcatName + "/" + Object.keys(value)[1]).replace(/[ ]/g, "_")) }} >
						<span>{Object.keys(value)[1]}</span>
					</li>

				)}
			</ul>
		) : ((listOrCata) ? <><Catalog data={listOrCata} zoomCatalog={zoomCatalog} /></> : null)

	}

	return (
		<>
			<Header />
			<ul className="navigation">
				{data.data.data.data[lang].map((value, index) =>
					((location.pathname === "/menu") ?
						<Link className="nav-item" key={Object.keys(value)[0] + index} to={"/menu/" + Object.keys(value)}>
							<span>{Object.keys(value)[0]}</span>

						</Link>
						: Subcategoryes(decodeURI(location.pathname), value))
				)}
			</ul>
			<FooterNav data={data.data.data.data[lang]} />
		</>
	)
};








