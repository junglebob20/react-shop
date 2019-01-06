import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import Header from "../containers/Header";
import Footer from "../components/Footer";
import Shop from "../containers/Shop";
import BookCard from '../containers/BookCard';
import Filter from '../containers/Filter';
import Menu from '../containers/Menu';
import { Card } from 'semantic-ui-react';
import Content from '../components/Content';

class App extends Component {

  render() {
    const { books, isReady } = this.props;
    return (
        <div>
          <Header/>
          <Content>
            <Shop>

            </Shop>
          </Content>
          <Footer/>
        </div>
      /*<Container>
        <Header/>
        <Menu />
        <Filter />
        <Card.Group itemsPerRow={4}>
          {!isReady
            ? 'Загрузка...'
            : books.map((book, i) => <BookCard key={i} {...book} />)}
        </Card.Group>
          </Container>*/
    );
  }
}

export default App;
