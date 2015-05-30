//Require the Neo4J module
var neo4j = require('node-neo4j');

//Create a db object. We will using this object to work on the DB.
db = new neo4j('http://localhost:7474');

//Let’s create a node
db.insertNode({
  name: 'Anmol',
  company: 'Pubnub',
  age: 24
}, function (err, node) {
  if (err) {
    return console.log(err);
  }

  // Output node data.
  console.log(node);
});


// SOURCE - http://blog.modulus.io/learn-how-to-use-neo4j-with-node.js?utm_content=12954986&utm_medium=social&utm_source=twitter 


// To delete all nodes and relationships:

// START n = node(*) 
// OPTIONAL MATCH n-[r]-() 
// WHERE (ID(n)>0 AND ID(n)<10000) 
// DELETE n, r;