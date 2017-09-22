var Products = React.createClass({
	displayName : "Products",

	render : function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"h2",
				null,
				"Products"
			),
			React.createElement(
				"p",
				null,
				"This is the products page"
			)
		);
	}
});