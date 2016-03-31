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
    // var repliesToThis = null;
    // var isReplyTo = "";
    blogpost.get('comments').addObject(newComment);
    newComment.save().then(function(){
      return blogpost.save();
      });
    this.transitionTo('index', params.blogpost);
  },

  deleteComment(comment){
    var blogpost = comment.get('blogpost');
    console.log(comment);
    console.log("ye ol blogpost", blogpost);
    comment.destroyRecord().then(function(){
      blogpost.save();
    });
    this.transitionTo('blogpost');
  },

  deleteBlogPost(blogpost){
    var comment_deletions = blogpost.get('comments').map(function(blogpost){
      return comment.destroyRecord();
    });
    Ember.RSVP.all(comment_deletions).then(function(){
      return blogpost.destroyRecord();
    });
    this.transitionTo('index');
  }
  }
});
