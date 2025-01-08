// Return Query Results in Ascending Order
// In this activity, you will return query results in ascending order.

// Lab Instructions
// You are now connected to an Atlas cluster and the sample_supplies database.

// You will use the sales collection. (Suggestion: run db.sales.findOne() to return a sample document and review the structure of the data in this this collection.)

// Return the data on all sales, ordered by date from oldest to newest.(Forgot the command? Check the hints below!)
// Once you complete the challenge, compare your answer to the correct answer in the Review & Solved Code section, then select 'Next.'


// 💡 Hints
db.sales.find().sort({"saleDate":1})
    
