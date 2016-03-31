import Ember from 'ember';

export default Ember.Route.extend({

  model(params){
  return this.store.findRecord('blogpost', params.blogpost_id)
},
actions:{
  saveComment5(params) {
    var blogpost = this.blogpost;
    console.log("in Save 5:", params);
    console.log("heello:", this.blogpost);
    // var isReplyTo = "";
    // var repliesToThis = [];
    var newComment = this.store.createRecord('comment', params);
    blogpost.get('comments').addObject(newComment);
    newComment.save().then(function(){
      return blogpost.save();
      });
    this.transitionTo('index', params.blogpost);
    }
  }
});
