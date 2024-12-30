# Python Programming: Comprehensive Study Notes

## Table of Contents

<details>
<summary>1. Basic Output and String Operations</summary>

- Print Function Basics
- String Concatenation
- Print Formatting
</details>

<details>
<summary>2. Variables and Data Types</summary>

- Variable Declaration
- Type Checking
- Type Conversion
- Variable Naming Rules
</details>

<details>
<summary>3. String Methods and Operations</summary>

- String Indexing
- String Methods
- String Manipulation
- String Formatting
</details>

<details>
<summary>4. Mathematical Operations</summary>

- Basic Arithmetic
- Math Functions
- Number Types
- Mathematical Libraries
</details>

<details>
<summary>5. Input Operations</summary>

- Basic Input
- Type Converting Input
- Input Validation
</details>

<details>
<summary>6. Lists and List Operations</summary>

- List Basics
- List Methods
- List Slicing
- List Comprehension
- List Manipulation
</details>

<details>
<summary>7. Functions</summary>

- Function Definition
- Parameters and Arguments
- Return Values
- Function Scope
</details>

<details>
<summary>8. Control Flow (If Statements)</summary>

- Basic If Statements
- Multiple Conditions
- Nested If Statements
- Conditional Expressions
</details>

<details>
<summary>9. Dictionaries</summary>

- Dictionary Basics
- Dictionary Methods
- Dictionary Operations
- Nested Dictionaries
</details>

<details>
<summary>10. Loops</summary>

- While Loops
- For Loops
- Loop Control Statements
- Nested Loops
</details>

<details>
<summary>11. Exception Handling</summary>

- Try-Except Blocks
- Multiple Except Blocks
- Finally Clause
- Custom Exceptions
</details>

<details>
<summary>12. Object-Oriented Programming (Classes)</summary>

- Class Definition
- Instance Methods
- Class Methods
- Inheritance
- Constructors
</details>



## 1. Basic Output and String Operations

### Print Function Basics
The print function is the fundamental way to output information in Python. Here are different ways to use it:

```python
print('python')        # Basic string output
print("python")        # Double quotes work the same as single quotes
print('python' + '3')  # String concatenation
print('python', '3')   # Multiple arguments with space
```

### String Concatenation
Python offers different ways to combine strings:
- Using + operator: `'python' + '3'`
- Using comma in print: `print('python', '3')`
- With variables: `print('python', version)`

## 2. Variables and Data Types

### Variable Declaration
Python variables are dynamically typed:
```python
version = 3
name = 'python'
```

### Type Checking
You can check variable types using the `type()` function:
```python
version = 3
print(type(version))    # Output: <class 'int'>
name = 'python'
print(type(name))       # Output: <class 'str'>
```

### Type Conversion
Python allows conversion between different data types:
```python
version = '3'          # String
print(int(version)+1)  # Converting string to integer
```

## 3. String Methods and Operations

### String Indexing
Strings can be accessed by index:
```python
name = 'python'
print(name[1])        # Output: 'y'
```

### String Methods
Common string methods include:
```python
name = 'python'
print(name.upper())    # Convert to uppercase
print(name.islower()) # Check if lowercase
print(len(name))      # Get string length
```

## 4. Mathematical Operations

### Basic Arithmetic
Python supports all standard mathematical operations:
```python
x = 20
y = 6
print('x+y=', x+y)    # Addition
print('x*y=', x*y)    # Multiplication
print('x/y=', x/y)    # Division
print('x-y=', x-y)    # Subtraction
print('x%y=', x%y)    # Modulus
```

### Math Functions
Built-in and imported math functions:
```python
print(abs(-6))        # Absolute value
print(max(6, 10))     # Maximum value
print(round(3.6345))  # Rounding
```

## 5. Lists and List Operations

### List Basics
Lists are ordered collections that can hold different types:
```python
courses = ['database', 'c++', 'java', 'python']
print(courses[1])     # Accessing elements
print(courses[1:3])   # Slicing
```

### List Methods
Common list operations:
```python
list1 = [1,2,3]
list1.append(4)       # Add element
list1.extend([5,6])   # Combine lists
list1.remove(2)       # Remove element
list1.sort()          # Sort list
```

## 6. Functions

### Function Definition
Functions are defined using the `def` keyword:
```python
def fun(name, version):
    print(name, version)

fun('python', 3)
```

### Return Values
Functions can return values:
```python
def add(a, b):
    return(a+b)

result = add(5, 3)
```

## 7. Control Flow

### If Statements
Basic conditional execution:
```python
x = 20
if x%2 == 0:
    print('x is even')
else:
    print('x is odd')
```

### Multiple Conditions
Using elif for multiple conditions:
```python
if x > 0:
    print('x is positive')
elif x < 0:
    print('x is negative')
else:
    print('x is zero')
```

## 8. Dictionaries

### Dictionary Basics
Dictionaries store key-value pairs:
```python
emp = {
    'name': 'Ali',
    'age': 15,
    'classes': ['CS','IT']
}
```

### Dictionary Operations
Common dictionary operations:
```python
print(emp['name'])     # Accessing values
emp['name'] = 'Ahmed'  # Modifying values
```

## 9. Loops

### While Loops
Execute while a condition is true:
```python
i = 1
while i <= 5:
    print(i)
    i += 1
```

### For Loops
Iterate over sequences:
```python
for c in 'abcdef':
    print(c)

for i in range(5):
    print(i)
```

## 10. Exception Handling

### Try-Except Blocks
Handle potential errors:
```python
try:
    x = int(input('enter integer:'))
    print(2*x)
except:
    print('it is not integer')
```

## 11. Object-Oriented Programming

### Class Definition
Creating classes and objects:
```python
class emp:
    def __init__(self, name, no):
        self.name = name
        self.no = no
        
x = emp('Ahmed', 15)
print(x.name)
```

### Class Methods
Adding methods to classes:
```python
class emp:
    def __init__(self, name, no):
        self.name = name
        self.no = no
    
    def add(self):
        return self.no + self.age
```

### Inheritance
Creating derived classes:
```python
class person:
    name = 'Ali'
    no = 10

class employee(person):
    pass
```
