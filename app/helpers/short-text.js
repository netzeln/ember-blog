import Ember from 'ember';

export function shortText(params) {

  // var pString = params[0];
  // console.log(pString.length);
  if (params[0].length > 140) {
      return (params[0].substring(0, 140) + "...");
  }
  else {
      return params;
  }
}

export default Ember.Helper.helper(shortText);
