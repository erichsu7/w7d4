NewsReader.Views.FeedsShow = Backbone.View.extend({
  template: JST["feeds/feeds_show"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "click button": "refreshFeed"
  },

  render: function () {
    var that = this;
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.model.entries().each(function (entry) {
      var itemView = new NewsReader.Views.EntriesIndexItem({ model: entry })
      that.$el.find('ul').append(itemView.render().$el);

    })

    return this;
  },

  refreshFeed: function () {
    var that = this;
    this.model.fetch({
      success: function () {
        that.render();
        console.log(that.model.escape("updated_at"));
      }
    })
  }

})
