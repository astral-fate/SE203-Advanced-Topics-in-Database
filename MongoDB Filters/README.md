
<details>
<summary style="cursor: pointer; font-weight: bold; padding: 10px; background-color: #f8f9fa; border: 1px solid #ddd; border-radius: 4px;">Basic Comparison Operators</summary>
<div style="padding-left: 20px; margin-top: 10px;">

- [$eq - Equality Matching](#eq-equality-operator)
  - Simple equality checks
  - Traditional vs explicit syntax
  - Use cases and examples

- [$gt and $gte - Greater Than Operations](#gt-and-gte-greater-than-operators)
  - Strict greater than
  - Greater than or equal
  - Threshold comparisons

- [$lt and $lte - Less Than Operations](#lt-and-lte-less-than-operators)
  - Strict less than
  - Less than or equal
  - Range queries
</div>
</details>

<details>
<summary style="cursor: pointer; font-weight: bold; padding: 10px; background-color: #f8f9fa; border: 1px solid #ddd; border-radius: 4px;">Array Operations</summary>
<div style="padding-left: 20px; margin-top: 10px;">

- [$in - Array Inclusion](#in-array-inclusion)
  - Membership checking
  - Multiple value matching
  - Efficient value testing

- [$nin - Array Exclusion](#nin-array-exclusion)
  - Inverse membership
  - Exclusion patterns
  - Filtering unwanted values
</div>
</details>

<details>
<summary style="cursor: pointer; font-weight: bold; padding: 10px; background-color: #f8f9fa; border: 1px solid #ddd; border-radius: 4px;">Logical Operators</summary>
<div style="padding-left: 20px; margin-top: 10px;">

- [$and - Logical AND](#and-logical-and)
  - Multiple condition matching
  - Combining criteria
  - Complex queries

- [$or - Logical OR](#or-logical-or)
  - Alternative matching
  - Multiple possibilities
  - Flexible querying
</div>
</details>

<details>
<summary style="cursor: pointer; font-weight: bold; padding: 10px; background-color: #f8f9fa; border: 1px solid #ddd; border-radius: 4px;">Advanced Query Examples</summary>
<div style="padding-left: 20px; margin-top: 10px;">

- [Range Queries](#range-queries)
  - Combining operators
  - Numerical ranges
  - Date ranges
  - Complex filtering
</div>
</details>



## Basic Comparison Operators

### $eq (Equality Operator)
The $eq operator is MongoDB's way of finding exact matches in your data. Think of it as looking for records that match a specific value exactly, like finding all employees with a specific ID number.

```javascript
// Simple equality check
{"dno": 14}  // Traditional syntax
{"dno": {$eq: 14}}  // Explicit $eq syntax

// This query finds all documents where dno equals exactly 14
```

### $gt and $gte (Greater Than Operators)
These operators help you find values above a certain threshold. The distinction between $gt (strictly greater) and $gte (greater or equal) is crucial when you need precise numeric comparisons.

```javascript
// Greater than example
{"dno": {$gt: 5}}   // Matches when dno > 5
{"dno": {$gte: 5}}  // Matches when dno ≥ 5

// Practical use case: Finding employees with experience above 5 years
```

### $lt and $lte (Less Than Operators)
Think of these as the opposite of greater than operators. They're particularly useful when you need to find values below a certain point or within a range when combined with other operators.

```javascript
// Less than example
{"dno": {$lt: 5}}   // Matches when dno < 5
{"dno": {$lte: 5}}  // Matches when dno ≤ 5

// Useful for scenarios like finding junior employees or items below a price point
```

## Array Operations

### $in (Array Inclusion)
The $in operator is like a membership check - it looks for values that match any value in a specified list. This is particularly efficient when you need to check multiple possible values for a field.

```javascript
// Checking membership in a set of values
{"dno": {$in: [7, 8]}}

// Real-world example: Finding employees in specific departments
```

### $nin (Array Exclusion)
Working as the logical opposite of $in, the $nin operator helps you find documents where a field doesn't match any values in a specified array. This is valuable when you need to exclude certain categories or groups.

```javascript
// Excluding specific values
{"dno": {$nin: [7, 8]}}

// Practical use: Finding employees not in certain departments
```

## Logical Operators

### $and (Logical AND)
The $and operator allows you to combine multiple conditions where all must be true. It's essential for creating precise queries that match multiple criteria simultaneously.

```javascript
// Combining multiple conditions
{$and: [
    {"fname": "Kim"},
    {"gender": "F"}
]}

// This finds documents where both conditions must be satisfied
```

### $or (Logical OR)
Use $or when you need to find documents that match at least one of several conditions. This operator is perfect for queries where you want to capture multiple possible scenarios.

```javascript
// Alternative conditions
{$or: [
    {"salary": {$gte: 79000}},
    {"gender": "F"}
]}

// Common use case: Finding employees who either have high salary or match specific criteria
```

## Advanced Query Examples

### Range Queries
Combining comparison operators allows you to create sophisticated range queries. This is particularly useful for numerical ranges like salary bands or date ranges.

```javascript
// Complex range query example
{$and: [
    {"salary": {$lte: 79000}},
    {"salary": {$gte: 19000}},
    {"dno": 6}
]}

// Real-world application: Finding mid-level employees in a specific department
```

