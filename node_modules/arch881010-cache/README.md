# Hi

I do not have an full documentation and things yet, but let me explain some things.
Notice: I keep a global variable as "Cache" until I understand a few things, may test with JSON soon.

If you require it as ```const Cache = require('arch881010-cache);```,  
Password is optional.
`Cache.new(password);` - Creates the cache.  
`Cache.add(key, value);` - Adds a key with a certain value.  
`Cache.update(key, value);` - Updates the existing key with a new value.  
`Cache.delete(key);` - Deletes the key and it's value.  
`Cache.get(key);` - Gets the key's value.
`Cache.clear(password)` - Clears the Cache. (Requires your password you already have.)
In favor of maintaining, I have removed the below:

`Cache.manage(action, key, value);`  
List of actions is: "Add", "Delete", "Edit", "Update", "Get". (There is some shortened naming pre-emptively, please open a issue and let me know what acronym could be added.)
Note: Capitalization is not sensitive, and forced to lower.
Now, if you would like to require individual functions with good sounding names:

```js
const { addCache, updateCache, deleteCache, getCache, newCache } = require('arch881010-cache`); 
```

W.I.P.
