import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment3(params){

      
      var params = {
        user: params.user,
        date: params.date,
        text: params.text,
        blogpost: this.blogpost,
        // repliesToThis: null,
        isReplyTo: null
      };

      this.sendAction('saveComment4', params);
    },

    deleteComment(comment){
      var comment = comment;

    this.sendAction('deleteComment', comment);
    }


  }
});
