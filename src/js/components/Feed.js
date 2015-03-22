import React from 'react';
import Reflux from 'Reflux';
import feedActions from '../actions/feedActions';
import feedStore from '../stores/feedStore';
import FeedList from './FeedList';
import FeedForm from './FeedForm';
import ShowAddButton from './ShowAddButton';

var Feed = React.createClass({

  mixins: [Reflux.connect(feedStore)],

  componentDidMount() {
    feedActions.loadData();
  },

  render() {
    return (
      <div>
        <div className="container">
          <ShowAddButton displayed={this.state.formDisplayed} />
        </div>

        <FeedForm displayed={this.state.formDisplayed} />

        <br/>
        <br/>

        <FeedList items={this.state.items} />
      </div>
    );
  }
});

export default Feed;