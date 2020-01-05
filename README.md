### Redux-Persist

### Reselect Library

### Data Normalization

### BEM

### Firebase

A query is a request we make to firebase to give us something from the database. Firebase returns us two types of objects.

a. References
b. Snapshots

They can be either Document or Collection versions. These objects are always returned even if nothing exists at from the query.

### DocumentReference vs CollectionReference

We use documentRef objects to perform our CRUD methods (create,read,update,delete). The documentRef methods are .set(), .get(),.update() and .delete().

We can also add documents to collections using the collectionRef object with the add() method.

We get the snapshotObject from the referenceObject using the .get() method i.e documentRef.get() or collectionRef.get().

documentRef returns a documentSnapshot object
collectionRef returns a querySnapshot object.

### Batch Write

### Observer Pattern

### Promise Pattern

### Redux-Thunk

### Container Pattern

### Refactoring is a tradeoff

### Generator Functions

```javascript
function* gen(i) {
	yield i;
	yield i + 10;
	return 25;
}

const g = gen(5);
g.next();
//{value:5, done:false}

g.next();
//{value:15, done:false}

g.next();
//{value:25, done:true}
```
