
# coating

Functional programming with coating.

## get coating

```npm install coating --save```

## example

Here is an simple example

```typescript
import coating = require('coating');
let foo = (a, b, c) => a + b * c;
let fo = coating(foo)(1);

>>> fo(2, 3) === foo(1, 2, 3)
true
>>> fo(3, 4) === foo(1, 3, 4)
true
```

see more complex example [here](https://github.com/Master76/coating/blob/master/examples/compose.ts).

## intellisense

Coating has powerful declaration file, you won't get puzzled for how many parameters are still requiring and you don't need to use operator ```as``` to specify the return value of the final step.

![intellisense](https://master76.github.io/res/coating.png)

## what is functional programming & why or when to use it

TODO
