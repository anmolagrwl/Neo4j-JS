//Let’s load the request module
var request = require("request");

//Define your host and port. This is where your database is running. Here it’s on localhost.
var host = 'localhost',
  port = 7474;

//This is the url where we will POST our data to fire the cypher query. This is specified in Neo4j docs.
var httpUrlForTransaction = 'http://' + host + ':' + port + '/db/data/transaction/commit';

//Let’s define a function which fires the cypher query.
function runCypherQuery(query, params, callback) {
  request.post({
      uri: httpUrlForTransaction,
      json: {statements: [{statement: query, parameters: params}]}
    },
    function (err, res, body) {
      callback(err, body);
    })
}

/**
 * Let’s fire some queries as shown below.
 * */
runCypherQuery(
  'CREATE (somebody:Person { name: {name}, from: {company}, age: {age} }) RETURN somebody', {
    name: 'Ghuffran',
    company: 'Modulus',
    age: 44
  }, function (err, resp) {
    if (err) {
      console.log(err);
    } else {
      console.log(resp);
    }
  }
);


// SOURCE - http://blog.modulus.io/learn-how-to-use-neo4j-with-node.js?utm_content=12954986&utm_medium=social&utm_source=twitter

// To delete all nodes and relationships:

// START n = node(*)
// OPTIONAL MATCH n-[r]-()
// WHERE (ID(n)>0 AND ID(n)<10000)
// DELETE n, r;


// http://www.sitepoint.com/making-http-requests-in-node-js/
// https://www.npmjs.com/package/request
// https://github.com/TrevorBurnham/Jitter
