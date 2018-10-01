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

    this.state = {
    	done: false
    };
  }

  // When a list item is clicked, we will toggle the `done`
  // boolean, and our component's `render` method will run again
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  // Every class component must have a `render` method
  // Stateless functional components are pretty much just this method
  render() {

  	var style = {
      //textDecoration: this.state.done ? 'line-through' : 'none'
      fontWeight: this.state.done ? 'bold' : 'normal'
    };


    return (
      <li style={style} onMouseOver={this.onListItemClick.bind(this)}>{this.props.ListItem}</li>
    );

  }

}


var GroceryList = (props) => {

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



