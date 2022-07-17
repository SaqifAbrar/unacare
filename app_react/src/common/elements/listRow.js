const ListRow = ({ styles = "", text1, text2, text3 }) => {
	return (
		<div className={`list-row ${styles}-btn`}>
			<p>{text1}</p>
			<p>{text2}</p>
			<p>{text3}</p>
		</div>
	);
};

export default ListRow;
