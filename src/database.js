const mongoose = require("mongoose");
const URI = "mongodb://localhost/balaio";

mongoose
  .connect(URI)
  .then(() => console.log("DB subiu caramba!"))
  .catch((err) => console.log(err));
