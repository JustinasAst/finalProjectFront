import React from 'react';

const NewStar = ({ value, children }) => {
	switch (parseFloat(value)) {
		case 0:
			return <p>-</p>;
		case 1:
			return <p>&#11088;</p>;
		case 2:
			return <p>&#11088; &#11088;</p>;
		case 3:
			return <p>&#11088; &#11088;&#11088;</p>;
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
