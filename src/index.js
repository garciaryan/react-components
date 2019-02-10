import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail 
        author="Sam" 
        timeAgo="Today at 4:20pm" 
        content="Nice post!" 
        avatar={faker.image.avatar()}
      />
      <CommentDetail 
        author="Jane" 
        timeAgo="Today at 2:00am" 
        content="This sucks dog"
        avatar={faker.image.avatar()} 
      />
      <CommentDetail 
        author="Alex" 
        timeAgo="Yesterday at 3:33pm" 
        content="Yes!"
        avatar={faker.image.avatar()} 
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));