// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    // console.log('song being enqueued!')
    this.trigger('enqueue', this);
  },

  // dequeue: function() {
  //   console.log('song being ddddddqueued!')
  //   this.trigger('dequeue', this);
  // },

  ended: function () {
    this.trigger('ended', this);
  }

});