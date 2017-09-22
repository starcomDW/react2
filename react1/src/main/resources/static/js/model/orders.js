var Orders = React.createClass({
	displayName : "Orders",
	componentDidMount: function() {
$("#orderSearchPanel").kendoPanelBar({
    expandMode: "multiple"
});
	  },
	  render: function render() {
  	    return React.createElement(
  	      "div",
  	      null,
  	      React.createElement("ul", {"id": "orderSearchPanel"},  
  	    	React.createElement("li", {"className": "k-state-active"}, 
  	    		React.createElement("span", {"className": "k-link k-state-selected"}, "Order Search"),
  	    		React.createElement("div", {"id": "orderSearchCriteria"}, 
  	    		  React.createElement("p", null, "Search criteria")
  	    		) // end of search criteria div
  	    	),
  	    	React.createElement("li", null, 
  	    	  	React.createElement("span", null, "Search Results"),
  	    	  	React.createElement("div", {"id": "orderSearchResults"},
  	    	  	  React.createElement("p", null, "results of search"))
  	    	 ) // end of results
  	      ) // end of ul
  	    
  	    ); // end of outer div create element
  	  } // end of render


});
//React.createElement("ul", {"id": "orderSearchPanel",
//  	React.createElement("li", {"class": "k-state-active"}, 
//        React.createElement("span", null, "Order Search"),
//        React.createElement("div", {"id": "orderSearchCriteria", "class": "k-link k-state-selected"},
//          React.createElement("p", null, "Search criteria")
//      )
//    )
// end li
//    React.createElement("li", {"class": "k-state-active"}, 
//		React.createElement("span", null, "Search Results"),
//		React.createElement("div", {"id": "orderSearchResults"}, React.createElement("p", null, "results of search"))
//	) 
