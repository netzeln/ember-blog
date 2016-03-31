import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment1(){
      var params = {
        user: this.get('user'),
        date: this.get('date'),
        text: this.get('text'),
        blogpost: this.get('blogpost'),
        // repliesToThis: this.get('repliesToThis'),
        // isReplyTo: this.get('isReplyTo')
      };
      console.log("at save 1:", params);
      console.log("heello1:", this.blogpost);
      this.sendAction('saveComment2', params);
      }
    }
});
