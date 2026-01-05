import app from "./app.js";
import config from "./utils/env.js";
app.listen(config.PORT, config.HOST, () => {
    console.log(`Server running at ${config.HOST}:${config.PORT}`);
});
//# sourceMappingURL=index.js.map
