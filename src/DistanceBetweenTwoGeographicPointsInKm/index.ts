function distanceInKM(lat1, lon1, lat2, lon2) {
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		const radlat1 = Math.PI * lat1 / 180;
		const radlat2 = Math.PI * lat2 / 180;
		const theta = lon1 - lon2;
		const radtheta = Math.PI * theta / 180;
		let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180 / Math.PI;
		dist = dist * 60 * 1.1515;
		dist = dist * 1.609344;
		return dist;
	}
}


// distance between the Abadia de Goias and Abadia dos Dourados, both cities ate in Goias, Brasil
const latitude1  = -16.7573;
const longitude1  = -49.4412;
const latitude2  = -18.4831;
const longitude2  = -47.3916;
console.log(distanceInKM(latitude1, longitude1, latitude1, latitude2))
