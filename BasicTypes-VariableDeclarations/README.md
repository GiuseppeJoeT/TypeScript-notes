# Basic Types

## Introduction

For programs to be useful, we need to be able to work with some of the simplest units of data: numbers, strings, structures, boolean values, and the like. In TypeScript, we support much the same types as you would expect in JavaScript, with a convenient enumeration type thrown in to help things along.

### Boolean

The most basic datatype is the simple true/false value, JavaScript and TypeScript call a **boolean** value.

```typescript
let isDone: boolean = false;
```

### Number 

As in JavaScript, all numbers in TypeScript are floating point values. These floating point numbers get the type **number**. In addition to hexadecimal and decimal literals, TypeScript also supports binary and octal literals introduced in ECMAScript 2015.

```typescript
let decimal: number = 11;
let hex: number = 0xf00d;
let binary: number = 1011; 
let octal: number = 0o744;
```

### String 

Another fundamental part of creating programs in JavaScript for webpages and servers alike is working with textual data. As in other languages, we use the type **string** to refer to these textual datatypes. Just like JavaScript, TypeScript also uses double quotes (") or single quotes (') to surround string data.

```typescript
let color: string = "blue";
color = 'green';
```

### Array

### Tuple