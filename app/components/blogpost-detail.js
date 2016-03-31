import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment3(params){
      console.log("at saveComment3:", params.user);
      console.log("heello:", this.blogpost.id);
      var params = {
        user: params.user,
        date: params.date,
        text: params.text,
        blogpost: this.blogpost.id,
        // // repliesToThis: [null],
        // isReplyTo: params.isReplyTo
      };
      this.sendAction('saveComment4', params);
    }
  }
});
