async function request(url, method, body) {
	let options = {
		method,
	};

	if (body) {
		Object.assign(options, {
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(body),
		});
	}

	let response = await fetch(url, options);

	let data = await response.json();

	return data;
}

export async function get(url) {
	return request(url, "GET");
}

export async function post(url, body) {
	return request(url, "POST", body);
}

export async function del(url) {
	return request(url, "DELETE");
}

export async function patch(url, body) {
	return request(url, "PATCH", body);
}

export function validateRecipe(
	{ name, style, imageURL, boilTime, malt, hops, yeast, preparation },
	setError
) {
	if (name.length < 5) {
		setError("Name should be at least 5 symbols long");
		return false;
	}

	if (style.length < 5) {
		setError("Style should be at least 5 symbols long");
		return false;
	}

	if (!(imageURL.startsWith("http://") || imageURL.startsWith("https://"))) {
		setError("Image link is not a valid URL");
		return false;
	}

	if (!Number(boilTime)) {
		setError("Boiling time should be a number");
		return false;
	}

	if (malt.length < 5) {
		setError("Malt should be at least 5 symbols long");
		return false;
	}

	if (hops.length < 5) {
		setError("Hops should be at least 5 symbols long");

		return false;
	}

	if (yeast.length < 5) {
		setError("Yeast should be at least 5 symbols long");
		return false;
	}

	if (preparation.length < 20) {
		setError(
			"Please provide a more descriptive preparation method, at least 20 symbols long :)"
		);
		return false;
	}

	return true;
}
