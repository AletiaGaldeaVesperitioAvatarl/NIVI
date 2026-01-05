import app from "./app";
import config from './utils/env'

app.listen(config.PORT, config.HOST, () => {
  console.log(`Server running at ${config.HOST}:${config.PORT}`);
});