NewsReader.Routers.Feeds = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "index",
    "feeds/:id": "feedShow"
  },


  index: function () {
    var that = this;
    NewsReader.feeds.fetch({
      success: function () {
        var indexView =
          new NewsReader.Views.FeedsIndex({ collection: NewsReader.feeds });
        that.$rootEl.html(indexView.render().$el);
      }
    });
  },

  feedShow: function (id) {
    var that = this;
    var feed = NewsReader.feeds.getOrFetch(id)
    feed.fetch({
      success: function () {
        var view =
          new NewsReader.Views.FeedsShow({ model: feed });
        that.$rootEl.html(view.render().$el);
      }
    })
  }
})
