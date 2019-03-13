# invoke-deep

Recursively walks through an object and calls any function passing the object as parameter.

## Installation

```
npm install invoke-deep
```

## Usage

```
import invokeDeep from 'invoke-deep';

const result = invokeDeep({
  colors: ['red', 'green', 'blue'],
  font: {
    colors: config => config.colors,
  },
});

result.font.colors == ['red', 'green', 'blue'];
```
