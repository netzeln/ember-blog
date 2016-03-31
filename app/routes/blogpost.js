import Ember from 'ember';

export default Ember.Route.extend({

  model(params){
  return this.store.findRecord('blogpost', params.blogpost_id)
},
actions:{
  saveComment5(params) {
    var newComment = this.store.createRecord('comment', params);
    var blogpost = params.blogpost;
    console.log("in Save 5:", params);
    console.log("heello5:", blogpost);
    // var isReplyTo = "";
    // var repliesToThis = [];
    blogpost.get('comments').addObject(newComment);
    newComment.save().then(function(){
      return blogpost.save();
      });
    this.transitionTo('index', params.blogpost);
    }
  }
});
