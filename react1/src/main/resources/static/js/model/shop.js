var Shop = React.createClass({
	displayName : "Shop",

	render : function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"h2",
				null,
				"Shop"
			),
			React.createElement(
				"p",
				null,
				"This is the shopping page"
			)
		);
	}
});