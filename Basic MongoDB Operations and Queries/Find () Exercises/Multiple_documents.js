// Query to find transactions with sell items under $4500
db.transactions.find({
  items: {
    $elemMatch: { 
      transaction_code: "sell",   
      amount: {$lte: 4500} 
    },
  },
})
