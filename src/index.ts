import { httpServer } from "./socket";
import config from "./utils/env";
import os from "os";

httpServer.listen(config.PORT, config.HOST, () => {
  console.log(`Server running at http://${config.HOST}:${config.PORT}`);

  if (config.HOST === "0.0.0.0") {
    const nets = os.networkInterfaces();
    console.log("Accessible network addresses:");
    for (const name of Object.keys(nets)) {
      const netInfo = nets[name] || [];
      for (const net of netInfo) {
        if (net.family === "IPv4" && !net.internal) {
          console.log(
            `  - http://${net.address}:${config.PORT}/ (interface: ${name})`
          );
        }
      }
    }
  }
});
