// Updating Multiple Documents
// Imagine you’re working with a research who asked you to update the last_seen field value of the birds collection for a few different species at once.

// Before you begin, please note that you are now connected to an Atlas cluster and the bird_data database. Use the birds collection for this lab.

// Lab Instructions
// Update the last_seen date to 2022-01-01 for Blue Jay and Grackle in the birds collection.

// Verify the output of the command in the terminal. It should look like this:

// javascript
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 2,
//   modifiedCount: 2,
//   upsertedCount: 0
// }
// Note
// If you get an unexpected result of modifiedCount: 0, where the output of the command is as follows:

// javascript
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 2,
//   modifiedCount: 0,
//   upsertedCount: 0
// }
// Load and run the restoreData.js script by typing load("/app/restoreData.js") in your terminal and pressing Enter. You can then re-attempt the lab, regardless of what the modifiedCount value is.

// javascript

// copy

// run
// load("/app/restoreData.js")
// Once you complete this lab, compare your answer to the correct answer in the Review and Solved Code section, then select Next.


// 💡 Hints
// Remember that database commands start with the db.<collection>.<command> in the MongoDB shell.

// Use the updateMany() command to update multiple documents.

// Use the $in operator to match multiple values within the query document, such as { field: { $in: [<value1>, <value2>, ... <valueN> ] } }

// Use the $set operator to update the value of the last_seen field.

// Use the ISODate() function in MongoDB to convert the date to a Date() object.


// 🏁 Review and Solved Code
// Use the updateMany() method on the birds collection to update multiple documents.

// The updateMany() method accepts a filter, an update, and an optional options object.

// javascript

// copy
// db.collection.updateMany(filter, update, [options])
// In this example, our filter will look for the common_name values of Blue Jay and Grackle.

// The $in operator is used to match documents that have a common_name field that is equal to one of the bird names provided in the filter.

// In the update, we set the last_seen field to ISODate("2022-01-01").

// The ISODate() function is used to convert the date string into a Date object that MongoDB can store.


db.birds.updateMany(
  {
    common_name: {
      $in: ["Blue Jay", "Grackle"],
    },
  },
  {
    $set: {
      last_seen: ISODate("2022-01-01"),
    },
  }
)

// 👨‍💻 Troubleshooting
// If for whatever reason the terminal tab in the terminal does not show a connected mongosh (to Atlas) and is blank. Please refresh your web browser page to reload the lab.

// If you need to scroll back in the terminal, you can use the Shift + Page Up keys. To scroll forward in the terminal, you can use the Shift + Page Down keys.

// If you encounter an error "Session closed: error" in the terminal, please try to reload the window by clicking the reload button, you may need to try this two or three times. If this fails, you should try restarting your browser. If you are still encountering errors, please exit the lab and retry it from learn.mongodb.com.

// A screenshot showing the reload button for the virtual lab environment

// If you are still experiencing issues after several attempts, please post in our community forums at https://www.mongodb.com/community/forums/ or email us at learn@mongodb.com.
