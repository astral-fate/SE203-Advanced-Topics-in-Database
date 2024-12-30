
I'll reformat my previous study notes to match the style of the provided document, with clear sections, detailed explanations, and thorough examples.

# MongoDB Study Guide

<details>
<summary style="cursor: pointer; font-weight: bold; padding: 10px; background-color: #f8f9fa; border: 1px solid #ddd; border-radius: 4px;">Table of Contents</summary>
<div style="padding-left: 20px; margin-top: 10px;">

- [Basic MongoDB Operations](#basic-mongodb-operations)
  - [Indexes and Their Management](#indexes-and-their-management)
  - [Document Operations](#document-operations)
- [Query Operations](#query-operations)
  - [Find Operations](#find-operations)
  - [Projection Techniques](#projection-techniques)
  - [Advanced Query Operations](#advanced-query-operations)
- [Results Management](#results-management)
  - [Limiting Results](#limiting-results)
  - [Sorting Operations](#sorting-operations)
  - [Count Operations](#count-operations)

</div>
</details>

## Basic MongoDB Operations

### Indexes and Their Management

MongoDB indexes are special data structures that store a small portion of the collection's data in an easy-to-traverse form. Think of them as the index in a book - they help MongoDB quickly locate information without scanning every page. When you create an index, MongoDB maintains an ordered list of values, making queries significantly faster.

```javascript
// Basic index creation
db.collection.createIndex(keys, options, commitQuorum)

// Example 1: Simple ascending index
db.employee.createIndex({"ssn": 1})  // 1 indicates ascending order

// Example 2: Compound index with options
db.project.createIndex(
    { pnumber: 1, Pname: -1 },
    { name: "pno_name", unique: true }
)
```

Understanding index management is crucial:
```javascript
// View all indexes in a collection
db.project.getIndexes()

// Remove a specific index
db.project.dropIndex("index_name")
```

### Document Operations

Document operations in MongoDB allow you to create, modify, and remove documents from your collections. These operations form the foundation of data manipulation in MongoDB.

Creating Documents:
```javascript
// Single document insertion
db.employee.insertOne({
    "fname": 'John',
    "minit": 'B',
    "lname": 'Smith',
    "ssn": '123456789',
    "bdate": new Date('1975-01-09')
})

// Multiple document insertion
db.department.insertMany([
    { 
        'dname': 'Research',
        'dnumber': 5,
        'mgrssn': '333445555'
    },
    { 
        'dname': 'Administration',
        'dnumber': 4,
        'mgrssn': '987654321'
    }
])
```

Document Removal Operations:
```javascript
// Remove a single matching document
db.project.deleteOne({ "pnumber": 1 })

// Remove all matching documents
db.project.deleteMany({ "plocation": "Stafford" })

// Clear entire collection
db.sales.deleteMany({})
```

## Query Operations

### Find Operations

MongoDB's find operations are the primary way to retrieve documents from a collection. They offer flexible querying capabilities with various options for filtering and shaping the results.

Basic Query Operations:
```javascript
// Retrieve all documents
db.employee.find()

// Retrieve first matching document
db.employee.findOne()

// Find with specific criteria
db.employee.find({"dno": 8})
```

### Projection Techniques

Projection in MongoDB allows you to control which fields appear in the query results. This is particularly useful for optimizing network bandwidth and processing only necessary data.

```javascript
// Include specific fields
db.employee.find(
    {},
    {
        "fname": 1,
        "lname": 1,
        "_id": 0  // Explicitly exclude _id
    }
)

// Complex projection with conditions
db.employee.find(
    {"dno": 8},
    {
        "fname": 1,
        "lname": 1,
        "salary": 1
    }
)
```

### Advanced Query Operations

MongoDB provides a rich set of operators for complex queries, allowing you to express sophisticated search conditions.

Comparison Operators:
```javascript
// Not equal to
db.employee.find({
    "dno": { $ne: 8 }
})

// Range queries
db.employee.find({
    "dno": {
        $gte: 4,   // Greater than or equal to 4
        $lte: 6    // Less than or equal to 6
    }
})

// Logical OR operation
db.employee.find({
    $or: [
        {"dno": 8},
        {"gender": "M"}
    ]
})
```

## Results Management

### Limiting Results

Control the number of returned documents to manage memory and improve performance:

```javascript
// Limit to first 3 matching documents
db.employee.find({"dno": 8}).limit(3)

// Combine with projection
db.employee.find(
    {"dno": 8},
    {"_id": 0, "fname": 1, "lname": 1}
).limit(3)
```

### Sorting Operations

Order your results based on one or more fields:

```javascript
// Ascending sort by salary
db.employee.find().sort({"salary": 1})

// Descending sort by salary
db.employee.find().sort({"salary": -1})

// Multiple field sort
db.employee.find().sort({
    "dno": 1,
    "salary": -1
})
```

### Count Operations

Efficiently count documents in your collections:

```javascript
// Count all documents
db.employee.count()

// Count with criteria
db.employee.find({"dno": 8}).count()

// Alternative count syntax
db.employee.find().count()
```

This structured approach to MongoDB operations provides a comprehensive understanding of how to work with MongoDB effectively, from basic CRUD operations to more complex queries and data manipulation techniques.
