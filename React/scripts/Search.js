//最外层
var FilterableProductTable = React.createClass({
  getInitialState: function () {
    return {
      stocked: "true", filterText: ""
    }
  },
  handleSearchChange: function (filterText) {
    this.setState({filterText: filterText});
  },
  handleCheckedChange: function (checked) {
    this.setState({stocked: checked});
  },
  render: function () {
    return (
      <div className="filterableProductTable">
        <SearchBar onSearchChange={this.handleSearchChange}
                   onCheckedChange={this.handleCheckedChange}
                   stocked={this.state.stocked}
                   filterText={this.state.filterText}>
        </SearchBar>
        <ProductTable products={this.props.products}
                      stocked={this.state.stocked}
                      filterText={this.state.filterText}>

        </ProductTable>
        <Detail></Detail>
      </div>
    );
  }
});

var Detail = React.createClass({
  render: function () {
    {
      console.log("Detai Render 了下")
    }
    return (
      <div>
        详细
      </div>
    );
  }
});

//搜索层
var SearchBar = React.createClass({
  handleSearchChange: function (e) {
    this.props.onSearchChange(e.target.value);
  },
  handleCheckedChange: function (e) {
    this.props.onCheckedChange(e.target.value);
  },
  render: function () {
    return (
      <div>
        <input type="text" placeholder="Search" value={this.props.filterText} onChange={this.handleSearchChange}/>
        <br />
        <input type="checkbox" checked={this.props.stocked} onChange={this.handleCheckedChange}></input>Only show
        products
        in stock
      </div>
    );
  }
});

//产品列表
var ProductTable = React.createClass({
  render: function () {
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function (product) {
      if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category}/>);
      }
      rows.push(<ProductRow product={product} key={product.name}/>);
      lastCategory = product.category;
    }.bind(this));
    return (
      <table>
        <tr>
          <th>
            Name
          </th>
          <th>
            Price
          </th>
        </tr>
        {rows}
      </table>
    );
  }
});
//产品分类
var ProductCategoryRow = React.createClass({
  render: function () {
    return (
      <tr colSpan="2">{this.props.category}</tr>
    );
  }
});
//产品详细
var ProductRow = React.createClass({
  render: function () {
    return (
      <tr>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
});


var products = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

ReactDOM.render(
  <FilterableProductTable products={products}/>,
  document.getElementById('content')
);
