Return a Limited Number of Sorted Results
In this activity, you will return query results sorted by most recent and specify the maximum number of documents to return.

Lab Instructions
You are now connected to an Atlas cluster and the sample_supplies database.

You will use the sales collection.

Return the data on the three most recent sales made from the London store that included one or more of the following items: a laptop, a backpack or printer paper.(Forgot the command? Check the hints below!)
Once you complete the challenge, compare your answer to the correct answer in the Review & Solved Code section, then select 'Next.'


# 1st attempt
// db.sales.find({
//   {"storeLocation":"London"}, {"items: [“laptop”, “backpack”, “printer paper”]}
//     } ).sort("dateSale": -1).limit(3)


db.sales.find({
    "items.name": {   
          $in: ["laptop", "backpack", "printer paper"] 
              },
          "storeLocation":"London",}).sort({"dateSale": -1}).limit(3)


// db.sales.find({
//       "items.name": {  
//             $in: ["laptop", "backpack", "printer paper"]  
//             },
//       "storeLocation": "London", })
//       .sort({ saleDate: -1, })
//       .limit(3)
