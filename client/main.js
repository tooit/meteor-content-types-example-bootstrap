FlowRouter.route('/', {
    name: 'front',
    action: function(params) {
      BlazeLayout.render("Layout", {content: "Frontpage"});
    }
});
