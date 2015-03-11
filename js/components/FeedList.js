import React from 'react';
import FeedItem from './FeedItem';

var FeedList = React.createClass({

  render() {

    var feedItems = this.props.items.map(function(item) {
      return <FeedItem key={item.itemId}
                       itemId={item.itemId}
                       title={item.title}
                       description={item.description}
                       voteCount={item.voteCount} />
    }.bind(this));

    return (
      <ul className="list-group container">
        {feedItems}
      </ul>
    );
  }
});

export default FeedList;