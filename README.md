# React Selectors Comparison

Basically this is a sample application to compare some tools to implement react/redux selector patterns.


To run
```
npm start
```
Check in the browser at http://localhost:3000/ by default.

It will count the number of rerenders and recomputations the selector has to do. This will vary depending which tool you use to implement the selector. To change, just change the import file at the top of ./App.js to either

``` javascript
import prefixSelector, {name} from './prefixSelectorWithNothing';
// or 
import prefixSelector, {name} from './prefixSelectorWithReselect';
// or
import prefixSelector, {name} from './prefixSelectorWithRamda';
```

Sorry too lazy to make a switch on the UI :)

