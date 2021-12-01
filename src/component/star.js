import React from 'react';

// I know, not the best way to use case method, but it still works. I will fix in the future.

/* const numberFloat = 2.8;

const numberInt = Math.floor(numberFloat);

console.log(numberInt); */

const NewStar = ({ value, children }) => {
	switch (parseFloat(value)) {
		case 1:
			return <p>&#11088;</p>;
		case 2:
			return <p>&#11088; &#11088;</p>;
		case 3:
			return <p>&#11088; &#11088; &#11088;</p>;
		case 4:
			return <p>&#11088; &#11088; &#11088; &#11088;</p>;
		case 5:
			return <p>&#11088; &#11088; &#11088; &#11088; &#11088;</p>;

		default:
			<p>No rating</p>;
	}
	return <div value={value}>{children}</div>;
};
export default NewStar;
