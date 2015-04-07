import React from 'react';

import feedActions from '../actions/feedActions';



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