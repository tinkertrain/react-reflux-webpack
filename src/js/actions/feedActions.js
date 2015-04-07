import { Actions } from 'flummox';
import request from 'superagent'
import Promise from 'bluebird';

class feedActions extends Actions {
  // [
  //   'loadData',
  //   'toggleForm',
  //   'newItem',
  //   'vote',
  //   'toggleForm'
  // ]
  async loadItems() {
    try {
      return await getMessages('http://beta.json-generator.com/api/json/get/NtE_q7x');
    }
    catch(error) {
      console.log(error);
    }
  }
}

function getMessages(url) {
  return new Promise(function(resolve, reject) {
    request
      .get(url)
      .end(function(err, res) {
        resolve(res.body);
      });
  });
}

// getMessages('http://beta.json-generator.com/api/json/get/NtE_q7x').then(function(resp) {
//   console.log(resp.body);
// });


export default feedActions;