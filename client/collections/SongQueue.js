// SongQueue.js - Defines a backbone model class for the song queue.
// 
var SongQueue = Songs.extend({

  initialize: function() {
  },

  enqueue : function (songModel) {
    this.push(songModel);
    console.log(this.length + ' songs are in the queue')
  },

  dequeue : function (songModel) {
    this.shift();
    console.log(this.length + ' songs left');
  }

});