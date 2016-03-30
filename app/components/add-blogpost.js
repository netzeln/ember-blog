import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        date: this.get('date'),
        article: this.get('article'),
        category: this.get('category')
      };
      this.sendAction('save', params);
    }
  }
});
