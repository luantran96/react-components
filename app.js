// TODO
var Eggs = () => (
	<li> Eggs </li>
);

var Milk = () => (
	<li> Milk </li>
);

// A class component can be defined as an ES6 class
// that extends the base Component class included in the React library
class GroceryListItem extends React.Component {

  // A `constructor` method is expected on all ES6 classes
  // When React instantiates the component,
  // it will pass `props` to the constructor
  constructor(props) {
    // Equivalent to ES5's React.Component.call(this, props)
    super(props);
  }

  // Every class component must have a `render` method
  // Stateless functional components are pretty much just this method
  render() {

    // `props` is no longer passed as an argument,
    // but instead accessed with `this.props`
    return (
      <li>{this.props.ListItem}</li>
    );

  }

}


var GroceryList = (props) => {

	var onListItemClick = (event) => {
		console.log('I got clicked');
	}

	return (
	<ul>
		{props.GroceryListItems.map(ListItem =>
			<GroceryListItem ListItem={ListItem}/>
		)}
	</ul>

	);
};

var App = () => (
  <div><h2> Grocery List </h2>
  	<GroceryList GroceryListItems= {['Bananas','Eggs','Bread','Cheese']}/>
  	</div>

);




ReactDOM.render(<App />, document.getElementById("app"));


//ReactDOM.render(<GroceryList GroceryListItems= {['Bananas','Eggs','Milk']}/>, document.getElementById("app"));



