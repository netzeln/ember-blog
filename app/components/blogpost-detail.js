import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment3(params){
      console.log("at saveComment3:", params.user);
      var key = this.blogpost.id;
      var params = {
        user: params.user,
        date: params.date,
        text: params.text,
        blogpost: this.blogpost,
        // repliesToThis: null,
        isReplyTo: null
      };
      console.log("hello3:", params.blogpost);
      this.sendAction('saveComment4', params);
    },

    deleteComment(comment){
      var comment = comment;
      console.log("blgpstdtl", comment);
    this.sendAction('deleteComment', comment);
    }


  }
});
