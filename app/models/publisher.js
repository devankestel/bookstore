import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    discount: DS.attr('number'),
    published: DS.hasMany('book')    

});
