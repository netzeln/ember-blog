import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    deleteComment(comment){
      console.log("com-tilejs", comment);
      this.sendAction("deleteComment", comment);
    }
  }
});
