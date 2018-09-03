import React, { Component } from 'react';
import withRequest from './withRequest';

class Comments extends Component {
  render() {
    const { data } = this.props;

    if (!data) return null;

    return (
      <div>
        {JSON.stringify(data)}
      </div>
    );
  }
}


const CommentsWithData = withRequest('https://jsonplaceholder.typicode.com/comments?postId=1')(Comments)
export default CommentsWithData;
