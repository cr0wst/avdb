import axios from 'axios';
import { parse } from 'json2csv';
import fs from 'fs';

const URL = 'https://www4.icao.int/doc8643/External/AircraftTypes';

async function main() {
	const response = await axios.post(URL);
	const apiData = response.data;

	// Remap to remove keys we don't care about and to normalize the database columns a bit
	const data = apiData.map((aircraft) => {
		const result = {
			TYPE_CODE: aircraft.Designator,
			MANUFACTURER: aircraft.ManufacturerCode,
			MODEL: aircraft.ModelFullName,
			ENGINE_TYPE: aircraft.EngineType
		};

		return result;
	});
	try {
		const csv = parse(data);
		fs.writeFile('./scripts/output/AIRCRAFT_TYPES.csv', csv, (err) => {
			if (err) {
				console.error(err);
			}

			console.log('CSV Created');
		});
	} catch (err) {
		console.error(err);
	}
}

main().catch((e) => console.error(e));

/**
 * AircraftDescription
 * :
 * "LandPlane"
 * Description
 * :
 * "L2J"
 * Designator
 * :
 * "J328"
 * EngineCount
 * :
 * "2"
 * EngineType
 * :
 * "Jet"
 * ManufacturerCode
 * :
 * "328 SUPPORT SERVICES"
 * ModelFullName
 * :
 * "Dornier 328JET"
 * WTC
 * :
 * "M"
 * WTG
 * :
 * "G"
 */
