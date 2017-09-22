var App = React.createClass({
	displayName : "App",

	render : function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"ul",
				{
					className : "header"
				},
				React.createElement(
					"li",
					null,
					React.createElement("img", {
						src : "images/starcom_logo.png",
						width : "70",
						height : "20",
						alt : "Starcom"
					})
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						Link,
						{
							to : "/"
						},
						"Home"
					)
				),
				React.createElement(
						"li",
						null,
						React.createElement(
							Link,
							{
								to : "/products"
							},
							"Products"
						)
					),
				React.createElement(
					"li",
					null,
					React.createElement(
						Link,
						{
							to : "/shop"
						},
						"Shop"
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						Link,
						{
							to : "/orders"
						},
						"Orders"
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						Link,
						{
							to : "/stuff"
						},
						"Stuff"
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						Link,
						{
							to : "/contact"
						},
						"Contact"
					)
				)
			),
			React.createElement(
				"div",
				{
					className : "content"
				},
				this.props.children
			)
		);
	}
});