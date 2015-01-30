NewsReader.Views.FeedsIndexItem = Backbone.View.extend({
  template: JST['feeds/feeds_index_item'],

  tagName: 'li',

  events: {
    "click button": "deleteFeed"
  },

  render: function () {
    var renderedContent = this.template({ feed: this.model });
    this.$el.html(renderedContent);

    return this;
  },

  deleteFeed: function () {
    var prompt = "Are you sure you want to remove " + this.model.escape("title") + "?";
    if (confirm(prompt)) {
      this.model.destroy();
    };
  }
})
