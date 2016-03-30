import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(blogpost) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        date: this.get('date'),
        article: this.get('article'),
        category: this.get('category')
      };
      this.sendAction('update', blogpost, params);
    }
  }
});
