NewsReader.Views.EntriesIndexItem = Backbone.View.extend({
  template: JST['entries/entries_index_item'],

  tagName: 'li',

  render: function () {
    var renderedContent = this.template({ entry: this.model });
    this.$el.html(renderedContent);

    return this;
  }
})
