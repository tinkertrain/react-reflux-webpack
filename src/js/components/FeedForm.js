import React from 'react';
import Reflux from 'Reflux';
import feedActions from '../actions/feedActions';
import feedStore from '../stores/feedStore';

var FeedForm = React.createClass({

  mixins: [Reflux.connect(feedStore)],

  handleForm(e) {
    e.preventDefault();
    var newItem = {
      title: this.refs.title.getDOMNode().value,
      description: this.refs.desc.getDOMNode().value,
      voteCount: 0
    };

    this.refs.feedForm.getDOMNode().reset();
    feedActions.newItem(newItem);
    feedActions.toggleForm(true);
  },

  render() {
    var display = this.props.displayed ? 'block' : 'none';
    var styles = {
      display: display
    };

    return (
      <form
        id="feedForm"
        ref="feedForm"
        style={styles}
        className="container"
        onSubmit={this.handleForm}>
        <div className="form-group">
          <input ref="title" type="text" className="form-control" placeholder="Title" />
          <input ref="desc" type="text" className="form-control" placeholder="Description" />
          <button type="submit" className="btn btn-primary btn-block">Add</button>
        </div>
      </form>
    );
  }
});

export default FeedForm;