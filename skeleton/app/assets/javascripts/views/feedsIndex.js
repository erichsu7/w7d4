NewsReader.Views.FeedsIndex = Backbone.View.extend({
  template: JST["feeds/feeds_index"],

  initialize: function() {
    this.listenTo(this.collection, "sync", this.render)
  },

  render: function () {
    var that = this;
    var renderedContent = this.template();
    this.$el.html(renderedContent);

    this.collection.each( function (feed) {
      var view = new NewsReader.Views.FeedsIndexItem({ model: feed });
      that.$el.append(view.render().$el);
    })

    return this;
  }
})
