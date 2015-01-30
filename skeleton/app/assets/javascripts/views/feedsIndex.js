NewsReader.Views.FeedsIndex = Backbone.View.extend({
  template: JST["feeds/feeds_index"],

  initialize: function() {
    this.listenTo(this.collection, "sync remove", this.render)
  },

  render: function () {
    var that = this;
    var newFeed = new NewsReader.Models.Feed({ title: "", url: "" })
    var newFormView = new NewsReader.Views.FeedsForm({ model: newFeed });
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.$el.append(newFormView.render().$el);

    this.collection.each( function (feed) {
      var view = new NewsReader.Views.FeedsIndexItem({ model: feed });
      that.$el.append(view.render().$el);
    })

    return this;
  }
})
