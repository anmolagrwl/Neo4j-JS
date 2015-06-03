var db = require("seraph")("http://localhost:7474");

// NOTES
// 1. Work on finding node


// GENERIC OPERATIONS
// --------------------------

// 1. Create

// db.save({ name: "Test-Man", age: 40 }, function(err, node) {
//   if (err) throw err;
//   console.log("Test-Man inserted.");
// });


// https://github.com/brikteknologier/seraph

// 2. Find all - version 1

// var cypher = "MATCH (n) RETURN (n)";
//
// db.queryRaw(cypher, function(err, result) {
//   if (err) throw err;
//   // result contains the raw response from neo4j's rest API. See
//   // http://docs.neo4j.org/chunked/milestone/rest-api-cypher.html
//   // for more info
//   console.log(result);
// })


// 3. Find all - version 2

// var cypher = "MATCH (n) RETURN (n)";
//
// db.query(cypher, function(err, result) {
//   if (err) throw err;
//   console.log(result);
// })


// API COMMUNICATION OPERATIONS ?????
// ---------------------------

// NODE OPERATIONS
// ------------------

// 4. Find a node

// var node = { id : 422 };
//
// db.read(node.id, function(err, node) {
//   if (err) throw err;
//   console.log(node);
// })

// 5. Update a node - version 1

// var node = { id : 422 };
//
// db.read(node.id, function(err, node) {
//   if (err) throw err;
//   console.log(node);
//
//   delete node.likes;
//   node.age++;
//   db.save(node, function(err, node) {
//     console.log(node);
//   })
//
// })

// 6. Creating a node with a label

// db.save({ name: 'Anmol' }, 'Person', function(err, node) {
//     if (err) throw err;
//     console.log(node);
// });

// 7. Update a node - version 2

// var node = { id : 422 };
//
// db.read(node.id, function(err, node) {
//   if (err) throw err;
//   console.log(node);
//
//   db.save(node, 'age', 20, function(err, node) {
//     console.log(node);
//   })
//
// })

// 8. Find a node

// var predicate = { name: "Anmol", id : 423};

// db.find(predicate,function (err, obj) {
//     if (err) throw err;
//     console.log(obj);
// });

// db.find(predicate, ["Person"],function (err, obj) {    //using label
//     if (err) throw err;
//     console.log(obj);
//
//     for (var i = 0; i < obj.length; i++) {
//       console.log(obj[i].id);
//     }
// });

// 9. Delete a node

// db.find(predicate, ["Person"], function (err, node) {
//     if (err) throw err;
//     console.log(node);
//
//     db.delete(node, function(err) {
//       if (!err) console.log('Node has been deleted!');
//     })
// });
