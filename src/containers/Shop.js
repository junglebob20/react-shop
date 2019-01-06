import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booksActions from '../actions/books';
import Shop from '../components/Shop';
import orderBy from 'lodash/orderBy';

const sortBy = (books, filterBy) => {
  switch (filterBy) {
    case 'price_high':
      return orderBy(books, 'price', 'desc');
    case 'price_low':
      return orderBy(books, 'price', 'asc');
    case 'author':
      return orderBy(books, 'author', 'asc');
    default:
      return books;
  }
};

const filterBooks = (books, searchQuery, category, price) =>
  books.filter(
    o => {
      if(category!='' && o.category!=category){
        return false;
      }
      if(price!=''){
        if(o.price>=price.min && price.max>=o.price){
          return true;
        }
        return false;
      }
      return true;
    }
  );

const searchBooks = (books, filterBy, searchQuery, category, price) => {
  return sortBy(filterBooks(books, searchQuery, category, price), filterBy);
};

const mapStateToProps = ({ books, filter }) => ({
  books: books.items && searchBooks(books.items, filter.filterBy, filter.searchQuery, filter.category, filter.price),
  isReady: books.isReady,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(booksActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Shop);
