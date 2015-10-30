ContactsCT = new ContentType({
  collection:       Contacts, // The collection defined above.
  ctid:             "contact", // The unique identifier for this content type.
  labels: {
    deletePrefix: "Hey, pay attention!! The delete action is unrecoverable!! You are about to delete ",
    deleteSuffix: "Are you 110% positive?",
    noItemsFound: "No books found."
  }
});
