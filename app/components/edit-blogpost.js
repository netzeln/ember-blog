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
    },
    delete(blogpost){
      if (confirm('Are you sure you want to delete this story?')){
      this.sendAction('delete', blogpost);
      }
    }
  }
});
