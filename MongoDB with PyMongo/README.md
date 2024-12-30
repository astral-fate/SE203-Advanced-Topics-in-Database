
# MongoDB with PyMongo Study Notes

## Table of Contents
1. [Basic Connection Setup](#basic-connection-setup)
2. [Database Operations](#database-operations)
   - [Collection Management](#collection-management)
   - [Dropping Collections](#dropping-collections)
3. [Document Operations](#document-operations)
   - [Inserting Documents](#inserting-documents)
   - [Updating Documents](#updating-documents)
   - [Deleting Documents](#deleting-documents)
4. [Querying Documents](#querying-documents)
5. [Index Operations](#index-operations)
6. [Aggregation Operations](#aggregation-operations)

## Basic Connection Setup
The foundation of any MongoDB application with PyMongo starts with establishing a connection to the database server.

```python
from pymongo import MongoClient
client = MongoClient("mongodb://localhost:27017/?readPreference=primary&ssl=false&directConnection=true")
db = client.company
```

## Database Operations

### Collection Management
Collections in MongoDB are similar to tables in relational databases. PyMongo provides methods to create and manage collections.

Example - Creating a Collection:
```python
try:
    db.create_collection("people2")
except:
    print("the people2 collection already exists")
```

### Dropping Collections
Removing collections when needed:
```python
db.employee.drop()
db.people.drop()
```

## Document Operations

### Inserting Documents
PyMongo supports both single and multiple document insertions.

Single Document Insert:
```python
result = db.people.insert_one({
    "ssn": None,
    "manager": True,
    "name": "Ali",
    "age": 20,
    "phone": ["123", "345", "567"],
    "start_date": datetime.datetime(1999, 12, 30)
})
```

Multiple Documents Insert:
```python
result = db.sales.insert_many([
    { '_id': 101, 'item': 'abc', 'price': 10, 'quantity': 2 },
    { '_id': 102, 'item': 'jkl', 'price': 20, 'quantity': 1 },
    { '_id': 103, 'item': 'xyz', 'price': 5, 'quantity': 10 }
])
```

### Updating Documents
Documents can be updated using various methods and operators.

Update Multiple Documents:
```python
result = db.sales.update_many(
    { "_id": {"$ne": 13} },
    { "$set": { "join_date": datetime.datetime.now() } }
)
```

### Deleting Documents
PyMongo provides methods for both single and multiple document deletions.

Delete Single Document:
```python
result = db.project.delete_one({ "pnumber": 1 })
```

Delete Multiple Documents:
```python
result = db.project.delete_many({ "plocation": "Stafford" })
```

## Querying Documents
PyMongo provides flexible querying capabilities with filtering, projection, and sorting options.

Basic Query with Projection:
```python
result = db.employee.find(
    filter={"dno": 8},
    projection={"_id": 0, "fname": 1, "lname": 1}
)
```

Query with Sort and Limit:
```python
result = db.employee.find(
    filter={"dno": 8},
    projection={"_id": 0, "fname": 1, "lname": 1, "salary": 1},
    limit=3,
    sort=[("salary", 1), ("fname", -1)]
)
```

## Index Operations
Indexes improve query performance and can enforce uniqueness constraints.

Creating an Index:
```python
result = db.project.create_index(
    [("pnumber", 1), ("Pname", -1)],
    name="pno_name",
    unique=True
)
```

Dropping an Index:
```python
db.project.drop_index("pno_name")
```

## Aggregation Operations
MongoDB's aggregation framework allows for complex data analysis and transformations.

Simple Aggregation:
```python
result = db.employee.aggregate([
    {
        "$group": {
            "_id": None,
            "averageSalary": { "$avg": "$salary" }
        }
    }
])
```

Complex Aggregation with Multiple Stages:
```python
result = db.employee.aggregate([
    { "$match": {"dno": 7} },
    {
        "$group": {
            "_id": None,
            "averageSalary": { "$avg": "$salary" }
        }
    }
])
```

Group By with Having Clause Equivalent:
```python
result = db.employee.aggregate([
    {
        "$group": {
            "_id": "$dno",
            "count": {"$sum": 1}
        }
    },
    {"$match": {"count": {"$gt": 4}}}
])
```

These notes cover the essential operations in MongoDB using PyMongo, from basic CRUD operations to more advanced features like indexing and aggregation pipelines. Each section includes practical examples that demonstrate the syntax and usage of different PyMongo methods.
