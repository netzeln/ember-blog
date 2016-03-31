import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  date: DS.attr(),
  text: DS.attr(),
  blogpost:DS.belongsTo('blogpost', {async: true}),
  firstReply: DS.hasMany('comment', {inverse: 'childReply'}),
  childReply: DS.belongsTo('comment', {inverse: 'firstReply'})
});
