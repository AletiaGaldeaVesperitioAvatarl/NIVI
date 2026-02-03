import app from "./app";
import config from "./utils/env";

const PORT = process.env.PORT || 3000;

app.listen(config.PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
