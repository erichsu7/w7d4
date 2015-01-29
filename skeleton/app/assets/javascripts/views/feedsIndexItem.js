NewsReader.Views.FeedsIndexItem = Backbone.View.extend({
  template: JST['feeds/feeds_index_item'],

  tagName: 'li',

  render: function () {
    var renderedContent = this.template({ feed: this.model });
    this.$el.html(renderedContent);

    return this;
  }
})
