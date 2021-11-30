import React, { useState, useEffect, useCallback } from 'react';

export function useResource(path) {
	const [data, setData] = useState([]);

	const refresh = useCallback(() => {
		fetch(`${process.env.REACT_APP_API_URL}/v1/${path}`)
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
