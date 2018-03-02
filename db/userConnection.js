const userConnection = require("mongoose");

if (process.env.NODE_ENV === "production") {
  mongoose.connect(process.env.MLAB_URL);
} else {
  userConnection.connect("mongodb://localhost/passport");
}
userConnection.Promise = Promise;

module.exports = userConnection;
