import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
  state = {
    data: null
  }

  // 반복되는 코드
  async initialize() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
      this.setState({
        data: response.data
      });
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    this.initialize();
  }


  render() {
    const { data } = this.state;

    if (!data) return null;

    return (
      <div>
        { JSON.stringify(this.state.data) }
      </div>
    );
  }
}


export default Post;
