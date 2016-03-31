import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  date: DS.attr(),
  text: DS.attr(),
  blogpost:DS.belongsTo('blogpost', {async: true}),
  repliesToThis: DS.hasMany('comment', {inverse: 'isReplyTo'}),
  isReplyTo: DS.belongsTo('comment', {inverse: 'repliesToThis'})
});
