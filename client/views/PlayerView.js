// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
  },

  events : {
    'ended' : 'ended'
  },

  ended : function () {
    var songModel = this.model;
    songModel.ended();
  },

  setSong: function(songModel) {
    this.model = songModel;
    // once you render it and add it to the dom, it starts to play
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
