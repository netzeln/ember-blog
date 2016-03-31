import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment3(params){
      console.log("at saveComment3:", params.user);
      var key = this.blogpost.id;
      console.log("heello3:", this.blogpost);
      var params = {
        user: params.user,
        date: params.date,
        text: params.text,
        blogpost: this.blogpost,
        // // repliesToThis: [null],
        // isReplyTo: params.isReplyTo
      };
      this.sendAction('saveComment4', params);
    }
  }
});
