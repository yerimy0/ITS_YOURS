const sendDataToServer = async (url, data) => {
	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			throw new Error('서버 통신 실패');
		}

		const result = await response.json();
		return result.success;
	} catch (error) {
		console.error('Error sending data to server:', error);
		return false;
	}
};

export default sendDataToServer;
