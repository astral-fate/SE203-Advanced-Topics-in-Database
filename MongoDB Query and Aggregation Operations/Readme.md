
# SE203-Advanced-Topics-in-Database

## Table of Contents

<details>
<summary style="cursor: pointer; font-weight: bold; padding: 10px; background-color: #f8f9fa; border: 1px solid #ddd; border-radius: 4px;">Basic Aggregation Operations</summary>
<div style="padding-left: 20px; margin-top: 10px;">

- [$avg - Computation of Averages](#avg---computation-of-averages)
- [$sum - Total Value Calculations](#sum---total-value-calculations)
- [$min - Minimum Value Finding](#min---minimum-value-finding)
- [$max - Maximum Value Finding](#max---maximum-value-finding)
</div>
</details>

<details>
<summary style="cursor: pointer; font-weight: bold; padding: 10px; background-color: #f8f9fa; border: 1px solid #ddd; border-radius: 4px;">Group Operations</summary>
<div style="padding-left: 20px; margin-top: 10px;">

- [$group - Document Grouping](#group---document-grouping)
- [$id - Group Key Specification](#id---group-key-specification)
- [Count Operations - Document Counting](#count-operations---document-counting)
</div>
</details>

<details>
<summary style="cursor: pointer; font-weight: bold; padding: 10px; background-color: #f8f9fa; border: 1px solid #ddd; border-radius: 4px;">Sorting and Filtering</summary>
<div style="padding-left: 20px; margin-top: 10px;">

- [$sort - Document Ordering](#sort---document-ordering)
- [$match - Condition Filtering](#match---condition-filtering)
- [Comparison Operators ($gt, $lt, $ne)](#comparison-operators)
</div>
</details>

<details>
<summary style="cursor: pointer; font-weight: bold; padding: 10px; background-color: #f8f9fa; border: 1px solid #ddd; border-radius: 4px;">Join Operations</summary>
<div style="padding-left: 20px; margin-top: 10px;">

- [$lookup - Collection Joining](#lookup---collection-joining)
- [localField - Source Field Specification](#localfield---source-field-specification)
- [foreignField - Target Field Matching](#foreignfield---target-field-matching)
- [as - Output Array Naming](#as---output-array-naming)
</div>
</details>

<details>
<summary style="cursor: pointer; font-weight: bold; padding: 10px; background-color: #f8f9fa; border: 1px solid #ddd; border-radius: 4px;">Projection Operations</summary>
<div style="padding-left: 20px; margin-top: 10px;">

- [$project - Output Field Control](#project---output-field-control)
- [Field Inclusion - Including Fields](#field-inclusion---including-fields)
- [Field Exclusion - Excluding Fields](#field-exclusion---excluding-fields)
</div>
</details>



## Basic Aggregation Operations

### $avg - Computation of Averages
The $avg operator in MongoDB is a powerful tool for calculating averages across document collections. Think of it as calculating the mean of a set of numbers, but at a database scale. When you use $avg, MongoDB:
1. Collects all specified numeric values
2. Adds them together
3. Divides by the total count of values

Here's a practical example:
```javascript
// Calculate average employee salary
db.employee.aggregate([
    {
        $group: {
            _id: null,
            averageSalary: { $avg: "$salary" }
        }
    }
])
```
This operation would take all salary values in your collection and compute their mean, giving you insights like the company's average pay rate.

### $sum - Total Value Calculations
The $sum operator acts as MongoDB's adding machine. It's particularly useful when you need to calculate totals across many documents. For example, you might use it to:
- Calculate total sales for a period
- Sum up inventory across warehouses
- Compute total working hours for a team

```javascript
// Calculate total department expenses
db.employee.aggregate([
    {
        $group: {
            _id: "$department",
            totalExpenses: { $sum: "$salary" }
        }
    }
])
```


### $sum - Total Value Calculations
Learning to compute sums of numeric values within MongoDB documents.


### $min - Minimum Value Finding
The $min operator helps identify the smallest value in a set of documents. This is particularly valuable when you need to:
- Find the lowest price point in a product catalog
- Identify the earliest date in a series of events
- Determine the minimum salary in a department

```javascript
// Find minimum salary by department
db.employee.aggregate([
    {
        $group: {
            _id: "$department",
            lowestSalary: { $min: "$salary" }
        }
    }
])
```

### $max - Maximum Value Finding
The $max operator searches for the highest value in your document set. Common applications include:
- Finding the highest score in a game
- Identifying peak sales periods
- Determining the most expensive item in inventory

```javascript
// Find highest salary across departments
db.employee.aggregate([
    {
        $group: {
            _id: "$department",
            highestSalary: { $max: "$salary" }
        }
    }
])
```

## Group Operations

### $group - Document Grouping
The $group stage is MongoDB's way of organizing related data together. Think of it as sorting items into different boxes based on shared characteristics. Key features include:
- Multiple levels of grouping
- Complex calculations within groups
- Nested grouping operations

```javascript
// Group employees by department and calculate statistics
db.employee.aggregate([
    {
        $group: {
            _id: "$department",
            employeeCount: { $sum: 1 },
            totalSalary: { $sum: "$salary" },
            avgSalary: { $avg: "$salary" }
        }
    }
])
```

### $id - Group Key Specification
The _id field in a $group operation defines how documents should be grouped together. It's like creating a unique label for each group. You can:
- Use a single field as the group key
- Combine multiple fields
- Create computed values for grouping

```javascript
// Group by multiple fields
db.employee.aggregate([
    {
        $group: {
            _id: {
                dept: "$department",
                year: { $year: "$hireDate" }
            },
            count: { $sum: 1 }
        }
    }
])
```

### Count Operations - Document Counting
Counting documents in MongoDB is achieved using $sum: 1 within a group operation. This technique allows you to:
- Count items in each group
- Track frequency of values
- Monitor distribution of data

```javascript
// Count employees per department
db.employee.aggregate([
    {
        $group: {
            _id: "$department",
            employeeCount: { $sum: 1 }
        }
    }
])
```

## Sorting and Filtering

### $sort - Document Ordering
The $sort stage arranges documents based on specified fields. Important aspects include:
- Ascending (1) or descending (-1) order
- Multiple sort levels
- Performance considerations with indexes

```javascript
// Sort employees by salary and name
db.employee.aggregate([
    {
        $sort: {
            salary: -1,  // Descending
            lastName: 1   // Ascending
        }
    }
])
```

### $match - Condition Filtering
The $match stage filters documents based on specified conditions, similar to SQL's WHERE clause. Key features:
- Complex query conditions
- Regular expressions
- Comparison operators

```javascript
// Find high-salary employees in specific department
db.employee.aggregate([
    {
        $match: {
            salary: { $gt: 50000 },
            department: "Engineering"
        }
    }
])
```

### Comparison Operators
MongoDB provides various comparison operators ($gt, $lt, $ne) for complex filtering:
- $gt, $gte: Greater than (or equal)
- $lt, $lte: Less than (or equal)
- $ne: Not equal
- $in, $nin: In (or not in) array

```javascript
// Find employees with salary range
db.employee.aggregate([
    {
        $match: {
            salary: {
                $gte: 40000,
                $lte: 80000
            }
        }
    }
])
```

## Join Operations

### $lookup - Collection Joining
Think of $lookup as MongoDB's way of connecting related information from different collections, similar to how you might connect entries in a paper ledger by reference numbers. This operation is particularly powerful because:
- It performs a left outer join
- Preserves all documents from the source collection
- Creates arrays of matching documents

Here's a practical example:
```javascript
// Connect employees with their department details
db.employee.aggregate([
    {
        $lookup: {
            from: "department",    // The collection to join with
            localField: "dno",     // Field from employee collection
            foreignField: "dnumber", // Field from department collection
            as: "department_info"  // Name for the new array field
        }
    }
])
// This gives us employee records enriched with their department information
```

### localField - Source Field Specification
The localField parameter is like a key that connects documents. It's important to understand that:
- It refers to the field in your current collection
- Must match the data type of foreignField
- Is typically an identifier or reference number

```javascript
// Example showing the importance of field matching
db.orders.aggregate([
    {
        $lookup: {
            from: "customers",
            localField: "customer_id",  // Field in orders collection
            foreignField: "_id",        // Matching field in customers
            as: "customer_details"
        }
    }
])
// The connection is made when customer_id equals _id
```

### foreignField - Target Field Matching
The foreignField specifies which field in the target collection should match our localField. Consider it the other half of the connection:
- Must exist in the target collection
- Should be indexed for better performance
- Creates the basis for document matching

```javascript
// More complex joining example
db.employee.aggregate([
    {
        $lookup: {
            from: "projects",
            localField: "project_ids", // Array of project IDs
            foreignField: "project_id", // Single project identifier
            as: "assigned_projects"
        }
    }
])
// This handles one-to-many relationships effectively
```

### as - Output Array Naming
The 'as' parameter defines how the joined data will be incorporated into your results. This is crucial because:
- It creates a new array field in your output documents
- The name should be descriptive and meaningful
- It affects how you access the joined data in subsequent stages

```javascript
// Example showing how to use the joined data
db.employee.aggregate([
    {
        $lookup: {
            from: "department",
            localField: "dno",
            foreignField: "dnumber",
            as: "department_info"
        }
    },
    // We can now reference department_info in later stages
    {
        $match: {
            "department_info.budget": { $gt: 100000 }
        }
    }
])
```

## Projection Operations

### $project - Output Field Control
The $project stage is like a filter that shapes your final output. It allows you to:
- Select which fields to include or exclude
- Rename fields for clarity
- Create computed fields
- Reshape nested documents

```javascript
// Sophisticated projection example
db.employee.aggregate([
    {
        $project: {
            fullName: { 
                $concat: ["$firstName", " ", "$lastName"] 
            },
            yearlyIncome: { $multiply: ["$monthlySalary", 12] },
            department: 1,
            _id: 0  // Explicitly exclude _id
        }
    }
])
```

### Field Inclusion - Including Fields
When including fields, remember these key principles:
- Explicitly specify fields with 1
- Plan your data structure
- Consider downstream applications

```javascript
// Selective field inclusion example
db.employee.aggregate([
    {
        $project: {
            name: 1,
            salary: 1,
            department: 1,
            "contact.email": 1  // Include nested field
        }
    }
])
```

### Field Exclusion - Excluding Fields
Field exclusion follows these important rules:
- Use 0 to exclude fields
- Cannot mix inclusion and exclusion (except for _id)
- Helps reduce document size and network transfer

```javascript
// Example of excluding sensitive data
db.employee.aggregate([
    {
        $project: {
            ssn: 0,
            salary_history: 0,
            personal_notes: 0
        }
    }
])
```


