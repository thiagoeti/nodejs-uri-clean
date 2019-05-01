# NodeJS - Clean URI

Install [uri-clean](https://www.npmjs.com/package/uri-clean)

```shell
npm i uri-clean
```

### Script JS

```js
// package
var uri=require('uri-clean');

// app
(async ()=>{

  // debug
  console.log('Start!');

  // exemple
  let u=uri('Títlê õf nôtícẽ');

  // console
  console.log(u);

  // debug
  console.log('Finish!');

})();
```

Clean URI, Path, File name, etc.
