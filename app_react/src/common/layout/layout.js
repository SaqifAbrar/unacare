const Layout = ({ type, children }) => {
	return <div className={`layout-container ${type}`}>{children}</div>;
};

export default Layout;
