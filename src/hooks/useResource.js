import React, { useState, useEffect, useCallback } from 'react';

export function useResource(path) {
	const [data, setData] = useState([]);

	const refresh = useCallback(() => {
		fetch(`http://localhost:8080/v1/${path}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (!data) {
					return alert('error');
				}
				setData(data);
			})
			.catch((err) => alert(err));
	}, [setData]);

	useEffect(() => {
		refresh();
	}, [refresh]);

	return { data, refresh };
}
