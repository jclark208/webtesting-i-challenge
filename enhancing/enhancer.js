module.exports = {
	succeed,
	fail,
	repair,
	get
};

function succeed(item) {
	let { enhancement } = item;

	if (enhancement === 20) {
		return { ...item };
	} else {
		enhancement = enhancement + 1;
		return { ...item, enhancement };
	}
}

function fail(item) {
	let { enhancement } = item;
	let { durability } = item;

	if (enhancement < 15) {
		return { ...item, durability: durability - 5 };
	} else if (enhancement >= 15 && enhancement > 16) {
		return {
			...item,
			durability: durability - 10,
			enhancement: enhancement - 1
		};
	} else {
		return { ...item, durability: durability - 10 };
	}
}

function repair(item) {
	return { ...item, durability: 100 };
}

function get(item) {
	const { name } = item;
	const { enhancement } = item;

	if (enhancement === 0) {
		return { ...item };
	} else {
		return { ...item, name: `[+${enhancement}] ${name}` };
	}
}