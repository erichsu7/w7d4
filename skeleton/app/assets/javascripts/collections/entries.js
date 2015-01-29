NewsReader.Collections.Entries = Backbone.Collection.extend({
  url: function () {
    return this.feed.url() + '/entries';
  },

  initialize: function (options) {
    this.feed = options.feed;
  }
});
