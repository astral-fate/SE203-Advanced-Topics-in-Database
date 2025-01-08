
Counting Documents in a MongoDB Collection


📥 Instructions
Count All Documents That Match a Query (2)
In this activity, you will count all documents that match a query made with an array operator and a comparison operator.

Lab Instructions
You are now connected to an Atlas cluster and the sample_supplies database.

You will use the sales collection for this activity.

Find the number of sales that included a laptop that cost less than $600.(Forgot the command? Check the hint below!)
Once you complete the challenge, compare your answer to the correct answer in the Review & Solved Code section, then select 'Next.'


💡 Hints
Remember that the .countDocuments() method takes two parameters: a required query parameter that specifies selection criteria and an optional options parameter that affects the count behavior. Both parameters take the form of a document.

Use the $elemMatch operator in the query parameter to match documents in the items array that contain at least one element where name is equal to "laptop" and "price" is less than 600.

Note that you do not need to include the options parameter in this activity.


🏁 Review and Solved Code
Use the db.collection.countDocuments() to count the count of documents that match a query. This method takes two parameters: a required query parameter that specifies selection criteria and an optional options parameter that affects the count behavior. Both parameters take the form of a document.

Use the $elemMatch operator in the query parameter to specify the two criteria on the elements of the items array such that at least one array element meets both criteria. Use a <field>:<value> expression to match documents in which the items's name is equal to "laptop". Use the $lt operator to match documents in which the item's "price" is less than 600.

Note that the options parameter is not needed because the task does not require any modifications to the count behavior, like specifying a maximum number of documents to count.


db.sales.countDocuments({ items: { $elemMatch: { name: "laptop", price: { $lt: 600 } } } } )

