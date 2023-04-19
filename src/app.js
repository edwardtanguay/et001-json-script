import fs from 'fs';

// TODO: get this array by reading /src/input/employees.txt
const lines = [
	'Schmolke, Andreas, developer',
	'Schulz, Pedro, CEO',
	'Himmelton, Barbara, marketing director'
];

// create array to be converted to JSON file
const employees = [];
for (const line of lines) {
	const parts = line.split(',');
	const lastName = parts[0].trim();
	const firstName = parts[1].trim();
	const position = parts[2].trim();
	const employee = {
		firstName,
		lastName,
		position
	};
	employees.push(employee);
}

//save file
fs.writeFileSync(
	'./src/output/employees.json',
	JSON.stringify(employees, null, 2)
);
