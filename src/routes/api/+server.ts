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

	const sql = `
		SELECT d.id, d.identifier, d.kind, d.city, d.state, d.country, d.latitude, d.longitude, d.icao_identifier, d.artcc, IFNULL(d.name, n.name) as name, d.effective_date, d.created_at
		FROM
			data d
			LEFT JOIN names n ON n.identifier = d.identifier
		WHERE d.identifier = ? OR d.icao_identifier = ?
		UNION
		SELECT d.id, d.identifier, d.kind, d.city, d.state, d.country, d.latitude, d.longitude, d.icao_identifier, d.artcc, IFNULL(d.name, n.name) as name, d.effective_date, d.created_at
		FROM
			data d
			LEFT JOIN names n ON n.identifier = d.identifier
		WHERE IFNULL(d.name, n.name) LIKE ? OR d.identifier LIKE ? OR d.icao_identifier LIKE ?
		LIMIT 20
		`;

	const params = [query, query, `${query}%`, `${query}%`, `${query}%`];

	// Search for a matching identifier first and then union with a search against the names.
	// This helps prioritize results since most people searching for an identifier will probably want those first.
	const [rows] = await connection.promise().query(sql, params);

	return json(rows);
}
