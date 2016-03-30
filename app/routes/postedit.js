import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    update(blogpost, params){
      Object.keys(params).forEach(function(key){
        if(params[key] !==undefined){
          blogpost.set(key, params[key]);
        }
      });
      blogpost.save();
      this.transitionTo('admin');
    },
    delete(blogpost){
      blogpost.destroyRecord();
      this.transitionTo('admin');
      
    }
  }
});
