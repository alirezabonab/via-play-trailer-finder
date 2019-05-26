import app from "./app";
import Cluster from "cluster";
import Config from "./config";
import OS from "os";
const numCPUs = OS.cpus().length;

if (Cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    Cluster.fork();
  }
} else {
  const PORT = process.env.PORT || Config.PORT;
  app.listen(PORT, () => {
    console.log("listening on port " + PORT);
  });
}
