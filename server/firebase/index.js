
var admin = require("firebase-admin");

var serviceAccount = require("../config/fbserviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ecommerce-68399-default-rtdb.firebaseio.com"
});
module.exports = admin;

