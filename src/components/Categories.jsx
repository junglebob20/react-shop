import React, { Component } from 'react';
import axios from 'axios';

class Categories extends Component {
    componentWillMount() {
        const { setCategories } = this.props;
        axios.get('/categories.json').then(({ data }) => {
            setCategories(data);
        });
      }
  render() {
    const { categories, isReady, setCategory } = this.props;
    console.log(this.props);
    return (
        <ul class="p-b-54">
            {!isReady? 'Загрузка...' : categories.map((item, i) => 
                <li class="p-t-4">
                    <button onClick={setCategory.bind(this, item.id)} class="s-text13 active1">
                        {item.name}
                    </button>
                </li>
            )}
        </ul>
    );
  }
}

export default Categories;
