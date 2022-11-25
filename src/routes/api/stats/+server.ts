import mysql from 'mysql2';
import { DATABASE_URL } from '$env/static/private';
import type { RequestEvent } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';

const connection = mysql.createConnection(DATABASE_URL);

export async function GET(request: RequestEvent) {
	const sql = `
		SELECT
	(
		SELECT
			count(*)
		FROM
			airports) AS airport_count,
	(
		SELECT
			count(*)
		FROM
			fixes) AS fixes_count,
	(
		SELECT
			count(*)
		FROM
			navaids) AS navaids_count`;

	console.log(sql);
	const [rows] = await connection.promise().query(sql);

	return json((rows as any[])[0]);
}
