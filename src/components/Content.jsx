import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
        <section class="bgwhite p-t-55 p-b-65">
            <div class="container">
                {this.props.children}
            </div>
        </section>
    );
  }
}

export default Content;
