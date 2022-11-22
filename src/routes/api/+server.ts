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

	const [rows] = await connection
		.promise()
		.query('SELECT DISTINCT * FROM data WHERE identifier = ? OR name LIKE ?', [
			query,
			`%${query}%`
		]);

	return json(rows);
}
