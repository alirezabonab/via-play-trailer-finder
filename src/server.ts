import app from "./app";
import Cluster from "cluster";
const numCPUs = require("os").cpus().length;

if (Cluster.isMaster) {
  for (var i = 0; i < numCPUs; i++) {
    Cluster.fork();
  }
} else {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log("listening on port " + PORT);
  });
}
