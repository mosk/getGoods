import * as fs from 'fs';

// default only text
const readFile = (filePath = `links.txt`) => {
	let data = [];
	
	try {
		// добавить удаление пробелов, запятых и пр.
		data = fs.readFileSync(`${filePath}`, `utf8`)
			.replace(/\n/g, `,`).split(`,`);

		console.log(typeof data);
		console.log(data);
	} catch (err) {
		console.error(err);
	}

	return data;
};

export default readFile;