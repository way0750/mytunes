// SongQueue.js - Defines a backbone model class for the song queue.
// 
var SongQueue = Songs.extend({

  initialize: function() {
  },

  enqueue : function (songModel) {
    this.push(songModel);
    if (this.length === 1){
      this.playFirst();
    }
    console.log(this.length + ' songs are in the queue')
  },

  dequeue : function (songModel) {
    this.shift();
    console.log(this.length + ' songs left');
  },

  playFirst : function () {
    console.log('songQueue: playing current first song in the queue')
    var firstSong = this.at(0);
    if (this.length){
      firstSong.play();
      return firstSong;
    } else {
      return new SongModel();
    }
    

  }

});