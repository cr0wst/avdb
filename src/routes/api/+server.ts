import mysql from 'mysql2';
import { DATABASE_URL } from '$env/static/private';
import type { RequestEvent } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';

const connection = mysql.createConnection(DATABASE_URL);

export async function GET(request: RequestEvent) {
	const query = request.url.searchParams.get('query') || null;
	if (query === null) {
		return json([]);
	}

	// Search for a matching identifier first and then union with a search against the names.
	// This helps prioritize results since most people searching for an identifier will probably want those first.
	const [rows] = await connection.promise().query(
		`
		SELECT d.identifier, d.kind, d.city, d.state, d.country, d.latitude, d.longitude, IFNULL(d.name, n.name) as name
		FROM
			data d
			LEFT JOIN names n ON n.identifier = d.identifier
		WHERE d.identifier = ?
		UNION
		SELECT d.identifier, d.kind, d.city, d.state, d.country, d.latitude, d.longitude, IFNULL(d.name, n.name) as name
		FROM
			data d
			LEFT JOIN names n ON n.identifier = d.identifier
		WHERE IFNULL(d.name, n.name) LIKE ?
		`,
		[query, `${query}%`]
	);

	return json(rows);
}
