# Angular2-txt | Export to TXT  in Angular2

> Helper library for create TXT file in Angular2
> 

## Installation

```javascript
npm install --save angular2-txt
```

## Example
```javascript

import { Angular2Txt } from 'angular2-txt/Angular2-txt';

var data = [
  {
    name: "Test 1",
    age: 13,
    average: 8.2,
    approved: true,
    description: "using 'Content here, content here' "
  },
  {
    name: 'Test 2',
    age: 11,
    average: 8.2,
    approved: true,
    description: "using 'Content here, content here' "
  },
  {
    name: 'Test 4',
    age: 10,
    average: 8.2,
    approved: true,
    description: "using 'Content here, content here' "
  },
];

new Angular2Txt(data, 'My Report');

```

## API | **Angular2Txt(data, filename, options)**


| Option        | Default           | Description  |
| :------------- |:-------------:| -----|
| **fieldSeparator**      | , | Defines the field separator character |
| **quoteStrings**      | "      | If provided, will use this characters to "escape" fields, otherwise will use double quotes as deafult |
| **decimalseparator** | .      | Defines the decimal separator character (default is .). If set to "locale", it uses the [language sensitive representation of the number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString).|
| **showLabels** | false      | If provided, would use this attribute to create a header row. Have not found a use for this.|
| **showTitle** | false      |   |
| **useBom** | true      | If true, adds a BOM character at the start of the TXT |


**Example**
---

```javascript
  var options = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true, 
    showTitle: true,
    useBom: true
  };

  Angular2Txt(data, filename, options);

```
#Credits
---

|                |
| **[sn123](https://github.com/sn123)** |
| **[arf1980](https://github.com/arf1980)** |
Fork
| **[lcborn4](https://github.com/lcborn4)** |
