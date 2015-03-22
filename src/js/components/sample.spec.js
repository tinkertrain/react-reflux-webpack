"use strict";

import test from 'tape';
import React from 'react/addons';
import FeedItem from './FeedItem';

let { TestUtils } = React.addons;

test('FeedItem Component should have a title', function(t) {
  t.plan(1);

  let item = {
    key: 1,
    itemId: 1,
    title: 'An item',
    description: 'The item description',
    voteCount: 0
  };

  let feedItemComponent = TestUtils.renderIntoDocument(<FeedItem key={item.itemId} itemId={item.itemId} title={item.title} description={item.description} voteCount={item.voteCount}/>);

  let heading = TestUtils.findRenderedDOMComponentWithTag(
    feedItemComponent, 'h4');

  t.equal(heading.getDOMNode().textContent, 'An item');
  t.end();
});