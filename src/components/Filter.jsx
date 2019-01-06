import React,{Component} from 'react';
import { Input, Menu } from 'semantic-ui-react';

class Filter extends Component {

    constructor(props) {
      super(props);
      this.handleSortingChange = this.handleSortingChange.bind(this);
      this.handlePriceMinMaxChange = this.handlePriceMinMaxChange.bind(this);

    }
  
    handleSortingChange = e => {
      this.props.setFilter(e.target.value);
    };

    handlePriceMinMaxChange = e => {
      let values=e.target.value.split(',');
      this.props.setPriceMinMax({min:values[0],max:values[1]});
    };
  
    render() {
      const { setFilter, filterBy, searchQuery, setSearchQuery }=this.props;
      return (
  <div class="flex-sb-m flex-w p-b-35">
						<div class="flex-w">
							<div class="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
								<select class="selection-2" onChange={this.handleSortingChange}  name="sorting">
									<option value="all">Default Sorting</option>
									<option value="all">Popularity</option>
									<option value="price_low">Price: low to high</option>
									<option value="price_high">Price: high to low</option>
								</select>
							</div>

							<div class="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
								<select class="selection-2" onChange={this.handlePriceMinMaxChange} name="sorting">
									<option>Price</option>
									<option value="0,50">$0.00 - $50.00</option>
									<option value="50,100">$50.00 - $100.00</option>
									<option value="100,150">$100.00 - $150.00</option>
									<option value="150,200">$150.00 - $200.00</option>
									<option value="200,+">$200.00+</option>

								</select>
							</div>
						</div>

						<span class="s-text8 p-t-5 p-b-5">
							Showing 1–12 of 16 results
						</span>
					</div>
  /*<Menu secondary>
    <Menu.Item
      active={filterBy === 'all'}
      onClick={setFilter.bind(this, 'all')}>
      Все
    </Menu.Item>
    <Menu.Item
      active={filterBy === 'price_high'}
      onClick={setFilter.bind(this, 'price_high')}>
      Цена (дорогие)
    </Menu.Item>
    <Menu.Item
      active={filterBy === 'price_low'}
      onClick={setFilter.bind(this, 'price_low')}>
      Цена (дешевые)
    </Menu.Item>
    <Menu.Item
      active={filterBy === 'author'}
      onClick={setFilter.bind(this, 'author')}>
      Автор
    </Menu.Item>
    <Menu.Item>
      <Input
        icon="search"
        onChange={e => setSearchQuery(e.target.value)}
        value={searchQuery}
        placeholder="Введите запрос..."
      />
    </Menu.Item>
  </Menu>*/
      )}
};

export default Filter;
