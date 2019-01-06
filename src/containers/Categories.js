import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as categoriesActions from '../actions/categories';
import * as filterActions from '../actions/filter';
import Categories from '../components/Categories';

const mapStateToProps = ({ categories }) => ({
  categories: categories.items,
  isReady: categories.isReady,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(categoriesActions, dispatch),
  ...bindActionCreators(filterActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Categories);
