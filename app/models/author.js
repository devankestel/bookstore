import DS from 'ember-data';
import Publisher from './publisher';

export default Publisher.extend({
  name: DS.attr('string'),
  books: DS.hasMany('book')
});
