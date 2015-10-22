// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(this.collection, 'remove', this.render);
    // this.collection.on('update', this.render, this);
  },

  render: function() {
    console.log('SongQueueView being rendered!')
    this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(songModel) {
        // debugger;
        return new SongQueueEntryView({model: songModel}).render();
      }))
  }

});
