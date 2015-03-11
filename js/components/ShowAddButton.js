import React from 'react';
import Reflux from 'Reflux';
import feedActions from '../actions/feedActions';
import feedStore from '../stores/feedStore';

var ShowAddButton = React.createClass({

  mixins: [Reflux.connect(feedStore)],

  onToggleForm() {
    feedActions.toggleForm(this.props.displayed);
  },

  render() {

    var classString;
    var buttonText;

    if(this.props.displayed) {
      classString = 'btn btn-default btn-block';
      buttonText = 'Cancel';
    }
    else {
      classString = 'btn btn-success btn-block';
      buttonText = 'Create New Item';
    }

    return (
      <button className={classString}
              onClick={this.onToggleForm}>
        {buttonText}
      </button>
    );
  }
});

export default ShowAddButton;