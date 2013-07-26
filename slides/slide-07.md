# Filters

Transform your data


## Angular provided filters

filter, uppercase, lowercase, orderBy, etc..

```
<div>{{ myName | uppercase }}</div>
```


## Create your own!

```
app.filter('shout', function () {
  return function (input) {
    return input + '!';
  };
});
```
