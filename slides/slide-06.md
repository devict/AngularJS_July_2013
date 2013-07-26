# Two-way Data Binding

Keeping things in sync


## Real-time view updates

DOM updates model, model upates DOM

No need for manual syncing


## ng-model input directive

Binds input value to data source value, both ways

    <input type="text" ng-model="myVar">
    <p>{{ myVar }}</p>
