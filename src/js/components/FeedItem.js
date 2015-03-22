import React from 'react';
import Reflux from 'Reflux';
import feedActions from '../actions/feedActions';
import feedStore from '../stores/feedStore';

var FeedItem = React.createClass({

  mixins: [Reflux.connect(feedStore)],

  vote(newCount) {
    feedActions.vote({
      itemId: this.props.itemId,
      title: this.props.title,
      description: this.props.description,
      voteCount: newCount
    });
  },

  voteUp() {
    var count = parseInt(this.props.voteCount, 10);
    var newCount = count + 1;
    this.vote(newCount);
  },

  voteDown() {
    var count = parseInt(this.props.voteCount, 10);
    var newCount = count - 1;
    this.vote(newCount);
  },

  render() {
    var sentimentClass = this.props.voteCount >= 0 ?
      'badge badge-success' :
      'badge badge-danger';

    return (
      <li className="list-group-item">
        <span className={sentimentClass}>{this.props.voteCount} </span>
        <h4>{this.props.title}</h4>
        <span>{this.props.description}</span>
        <span className="pull-right">
          <button id="up" className="btn btn-sm btn-primary" onClick={this.voteUp}>&uarr;</button>
          <button id="down" className="btn btn-sm btn-primary" onClick={this.voteDown}>&darr;</button>
        </span>
      </li>
    );
  }
});

export default FeedItem;