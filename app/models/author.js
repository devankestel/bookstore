import DS from 'ember-data';
import Publisher from './publisher';
import { on } from '@ember/object/evented';



export default Publisher.extend({
  name: DS.attr('string'),
  books: DS.hasMany('book'),
  onDidLoad: on('didLoad', function() {
    this.set('loadedAt', new Date());
  })
});
