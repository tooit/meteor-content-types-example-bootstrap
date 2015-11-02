BooksCT = new ContentType({
  collection: Books,
  ctid: "book",
  theme: "bootstrap3",
  layout: 'Layout',
  endpoints: {
    index: {
      displays: {
        default: {
          helpers: {
            meta: {
              title: "List of all available Books",
              summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem nulla, eleifend nec nisl in, pretium condimentum ante.",
              help: "Consectetur adipiscing elit. Pellentesque lorem nulla, eleifend nec nisl in, pretium condimentum ante."
            }
          },
          onRendered: function () {
            $('[data-toggle="tooltip"]').tooltip();
          }
        }
      }
    },
    books: {
      path: '/books',
      name: 'books',
      displays: {
        default: {
          helpers: {
            items: function () {
              var cursor = Books.find({});
              return {
                cursor: cursor,
                total: cursor.count()
              };
            }
          },
          events: {
            'click .book-view-detail': function (event) {
              FlowRouter.go('books.purchase', {_id: this._id});
            }
          }
        }
      }
    },
    book_purchase: {
      path: '/books/purchase/:_id',
      name: 'books.purchase',
      displays: {
        default: {
          helpers: {
            item: function () {
              var router = FlowRouter.current();
              return Books.findOne({_id:router.params._id});
            }
          },
          events: {
            'click .goto-checkout': function (event) {
              alert("I'm doing a checkout from the Book default display.");
            },
            'click .goto-detail': function (event) {
              BooksCT.setDisplay('book_purchase', 'full');
            }
          }
        },
        full: {
          helpers: {
            item: function () {
              var router = FlowRouter.current();
              return Books.findOne({_id:router.params._id});
            }
          },
          events: {
            'click .goto-checkout': function (event) {
              alert("I'm doing a checkout from the Book full display.");
            },
            'click .goto-default': function (event) {
              BooksCT.setDisplay('book_purchase', 'default');
            }
          }
        }
      }
    }
  }
});
