import _ from 'lodash';
import React from 'react';
import Reflux from 'Reflux';
import Firebase from 'firebase';
import feedActions from '../actions/feedActions';

var feedStore = Reflux.createStore({
  listenables: [feedActions],

  getInitialState() {
    return {
      items: [],
      formDisplayed: false
    };
  },

  onLoadData() {
    var ref = new Firebase('https://amber-fire-2148.firebaseio.com/feed');

    ref.on('value', function(snap) {
      var items = [];
      var sorted = [];

      snap.forEach(function(itemSnap) {
        var item = itemSnap.val();
        item.itemId = itemSnap.key();
        items.push(item);
      });

      sorted = _.sortBy(items, function(item) {
        return -item.voteCount;
      });

      this.trigger({
        items: sorted
      });

    }.bind(this));
  },

  onNewItem(newItem) {
    var ref = new Firebase('https://amber-fire-2148.firebaseio.com/feed');
    ref.push(newItem);
  },

  onVote(item) {
    var ref = new Firebase('https://amber-fire-2148.firebaseio.com/feed').child(item.itemId);
    ref.update(item);
  },

  onToggleForm(displayed) {
    this.trigger({
      formDisplayed: !displayed
    });
  }
});

export default feedStore;