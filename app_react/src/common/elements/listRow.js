const ListRow = ({ style, text1, text2, text3 }) => {
	return (
		<div className={`list-row ${style}`}>
			<p>{text1}</p>
			<p>{text2}</p>
			<p>{text3}</p>
		</div>
	);
};

export default ListRow;
