import { Store } from 'flummox';


class feedStore extends Store {

  constructor(flux) {
    super();

    const feedActionsIds = flux.getActionIds('items');
    this.register(feedActionsIds.loadItems, this.handleLoadItems);

    this.state = {
      items: []
    }
  }

  handleLoadItems() {
    this.setState({
      items: this.state.items.concat(items)
    });
  }
}

export default feedStore;