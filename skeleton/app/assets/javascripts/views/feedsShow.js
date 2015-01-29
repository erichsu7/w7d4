NewsReader.Views.FeedsShow = Backbone.View.extend({
  template: JST["feeds/feeds_show"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({ entries: this.model.entries() });
    this.$el.html(renderedContent);

    return this;
  }
})
