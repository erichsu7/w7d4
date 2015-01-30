NewsReader.Views.FeedsForm = Backbone.View.extend({
  template: JST["feeds/feeds_form"],

  events: {
    "submit form": "createFeed"
  },

  render: function () {
    var renderedContent = this.template({ feed: this.model });
    this.$el.html(renderedContent);

    return this;
  },

  createFeed: function (event) {
    event.preventDefault();

    var that = this;
    var $currentTarget = $(event.currentTarget);
    var formData = $currentTarget.serializeJSON();
    this.model = new NewsReader.Models.Feed(formData.feed);

    this.model.save({}, {
      success: function(model) {
        NewsReader.feeds.add(model, { merge: true });
        console.log("saved");
      },
      error: function(model, response) {
        that.render({ model: model })
        console.log("failed");
      }
    });
  }

})
