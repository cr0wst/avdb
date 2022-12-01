import mysql from 'mysql2';
import { DATABASE_URL } from '$env/static/private';
import type { RequestEvent } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';

const connection = mysql.createConnection(DATABASE_URL);

export async function GET(request: RequestEvent) {
	const query = request.url.searchParams.get('query') || null;
	const page = Number(request.url.searchParams.get('page')) || 0;
	const resultsPerPage = Number(request.url.searchParams.get('resultsPerPage')) || 5;
	if (query === null) {
		return json([]);
	}

	const sql = `
		SELECT d.id, d.classification, d.identifier, d.kind, d.city, d.state, d.country, d.latitude, d.longitude, d.icao_identifier, d.artcc, IFNULL(d.name, n.name) as name, d.effective_date, d.created_at, d.manufacturer, d.model, d.engine_type
		FROM
			data d
			LEFT JOIN names n ON n.identifier = d.identifier
		WHERE d.identifier = ? OR d.icao_identifier = ?
		UNION
		SELECT d.id, d.classification, d.identifier, d.kind, d.city, d.state, d.country, d.latitude, d.longitude, d.icao_identifier, d.artcc, IFNULL(d.name, n.name) as name, d.effective_date, d.created_at, d.manufacturer, d.model, d.engine_type
		FROM
			data d
			LEFT JOIN names n ON n.identifier = d.identifier
		WHERE IFNULL(d.name, n.name) LIKE ? OR d.identifier LIKE ? OR d.icao_identifier LIKE ?
		LIMIT ? OFFSET ?
		`;

	const params = [
		query,
		query,
		`${query}%`,
		`${query}%`,
		`${query}%`,
		resultsPerPage,
		page * resultsPerPage
	];

	// Search for a matching identifier first and then union with a search against the names.
	// This helps prioritize results since most people searching for an identifier will probably want those first.
	const [rows] = await connection.promise().query(sql, params);

	const totalSql = `
		SELECT count(*) as total
		FROM
			data d
			LEFT JOIN names n ON n.identifier = d.identifier
		WHERE d.identifier = ? OR d.icao_identifier = ?
		OR IFNULL(d.name, n.name) LIKE ? OR d.identifier LIKE ? OR d.icao_identifier LIKE ?`;

	const [total]: any[] = await connection.promise().query(totalSql, params);
	return json({ data: rows, total: total[0]['total'] });
}
