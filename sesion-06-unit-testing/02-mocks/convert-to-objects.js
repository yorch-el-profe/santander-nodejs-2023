const { readFile } = require("fs/promises");

async function convertToObjects() {
	const text = await readFile("./dataset.txt", "utf-8");

	if (!text.length) {
		return [];
	}

	// La manera chafa (Junior)
	const lines = text
		.trim()
		.split("\n")
		.map((line) => line.trim())
		.filter((line) => line.length > 0);

	const result = [];

	for (let i = 0; i < lines.length; i++) {
		const parts = lines[i].split("|");
		const person = {
			id: parts[0],
			name: parts[1],
			age: parts[2],
			email: parts[3],
		};
		result.push(person);
	}

	return result;
}

// Versión Senior
/*const convertToObject = async () =>
	(await fs.readFile("./dataset.txt", "utf-8")).split("\n").map((line) => {
		const [id, name, age, email] = line.split("|");
		return { id, name, age, email };
	});*/

module.exports = convertToObjects;
