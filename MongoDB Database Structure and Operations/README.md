

## Table of Contents

1. Basic CRUD Operations
   - Insert Operations
   - Update Operations
   - Delete Operations

2. Advanced Query Operations
   - Logical Operators
   - Comparison Operators
   - Field Operators

3. Database Schema and Collections
   - Company Database Structure
   - Collection Types
   - Data Relationships

Let's dive into each topic in detail:

# 1. Basic CRUD Operations

## Insert Operations
MongoDB provides two main methods for inserting documents into collections:

1. Single Document Insert (insertOne):
```javascript
// Example from the lecture
db.people.insertOne({ 
    "ssn": 1, 
    "name": "Ali",
    "age": 20
})
```

2. Multiple Document Insert (insertMany):
```javascript
// Example from company database
db.sales.insertMany([
    { '_id': 1, 'item': 'abc', 'price': 10, 'quantity': 2 },
    { '_id': 2, 'item': 'jkl', 'price': 20, 'quantity': 1 }
])
```

## Update Operations

Updating MongoDB Documents by Using updateOne()
The updateOne() method accepts a filter document, an update document, and an optional options object. MongoDB provides update operators and options to help you update documents. In this section, we'll cover three of them: $set, upsert, and $push.


```$set```
The $set operator replaces the value of a field with the specified value, as shown in the following code:
```javascript
db.podcasts.updateOne(
  {
    _id: ObjectId("5e8f8f8f8f8f8f8f8f8f8f8"),
  },

  {
    $set: {
      subscribers: 98562,
    },
  }
)
```
```upsert```
The upsert option creates a new document if no documents match the filtered criteria. Here's an example:

db.podcasts.updateOne(
  { title: "The Developer Hub" },
  { $set: { topics: ["databases", "MongoDB"] } },
  { upsert: true }
)
$push
The $push operator adds a new value to the hosts array field. Here's an example:

db.podcasts.updateOne(
  { _id: ObjectId("5e8f8f8f8f8f8f8f8f8f8f8") },
  { $push: { hosts: "Nic Raboy" } }
)
MongoDB uses updateMany() for modifying existing documents:

1. Basic Update:
```javascript
// Setting a new field for all documents
db.sales.updateMany(
    {}, // empty filter means all documents
    { $set: { "start_date": new Date() } }
)
```

2. Conditional Update:
```javascript
// Update documents with specific ID
db.sales.updateMany(
    { "_id": 13 },
    { $set: { join_date: new Date() } }
)
```



<details>
<summary> Update Many Quiz</summary>
Three computer science classes, with the class_ids of 377, 259, and 350, have earned 100 extra credit points by competing in a hackathon. You need to update the database so that all students who are in these classes receive extra credit points. Note that you will use the grades collection, which is in the sample_training database.

Which of the following queries will accomplish this goal? (Select one).


A.
```
db.grades.insertMany(
  {
    class_id: {
$in: [ 377, 259, 350 ]
    },
   },
  {
    $push: {
      scores: [ 
{ type : 'extra credit', score: 100 }
]
    }
  }
)
```
B.
```
db.grades.updateMany(
  {
    class_id: {
$in: [ 377, 259, 350 ]
    },
   },
  {
    $push: {
      scores: [ 
{ type : 'extra credit', score: 100 }
]
    }
  }
)
```

C.
```
db.grades.updateOne(
  {
    class_id: {
$in: [ 377, 259, 350 ]
    },
   },
  {
    $push: {
      scores: [ 
{ type : 'extra credit', score: 100 }
]
    }
  }
)
```

D.
```
db.grades.findAndModify(
  {
    class_id: {
$in: [ 377, 259, 350]
    },
   },
  {
    $push: {
      scores: [ 
{ type : 'extra credit', score: 100 }
]
    }
  }
)
```
option (b)

</details>

## Delete Operations
The lecture shows collection removal using drop():
```javascript
// Example from lecture
db.employee.drop()
```

# 2. Advanced Query Operations

## Logical Operators
MongoDB supports complex queries using logical operators:

1. $and Operator:
```javascript
db.sales.updateMany(
    { $and: [
        { "_id": { $gte: 14, $lte: 16 } },
        { price: 7.5 }
    ]},
    { $set: { join_date: new Date() } }
)
```

2. $or Operator:
```javascript
db.sales.updateMany(
    { $or: [
        { "_id": { $gte: 14, $lte: 16 } },
        { price: 7.5 },
        { quantity: { $gte: 10 } }
    ]},
    { $set: { end_date: new Date() } }
)
```

## Comparison Operators
The lecture demonstrates several comparison operators:

- $gt (greater than)
- $lt (less than)
- $gte (greater than or equal)
- $lte (less than or equal)
- $ne (not equal)

Example:
```javascript
db.sales.updateMany(
    { "_id": { $gt: 17 } },
    { $set: { "item": "abcdefgh" } }
)
```

## Field Operators
The $exists operator checks for presence/absence of fields:
```javascript
db.sales.updateMany(
    { "join_date": { $exists: false } },
    { $set: { start_date: new Date() } }
)
```

# 3. Database Schema and Collections

The lecture implements a comprehensive company database with multiple collections:

1. Main Collections:
   - employee
   - department
   - project
   - works_on
   - dependent
   - dept_locations
   - sales

2. Collection Relationships:
   - Employees have dependents (one-to-many)
   - Departments have locations (one-to-many)
   - Employees work on projects (many-to-many through works_on)

