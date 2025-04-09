import { app } from "./src/app.js";
import { APP_URL, PORT } from "./src/constants.js";

app.listen(PORT, () => {
  console.log(`Server is running at ${APP_URL}:${PORT}`);
});