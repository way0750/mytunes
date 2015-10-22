// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click td': function() {
      //the this would be the libraryentryview itself
      //and this.model is the song model;
      var songModel = this.model;
      songModel.play();
      songModel.enqueue();
    }
  },


  render: function(){
    var songModel = this.model;
    return this.$el.html(this.template(songModel.attributes));
  }

});