import logger from "jet-logger";
import app from "./app";

// Constants
const serverStartMsg = "Express server started on port: ",
  port = process.env.PORT || 3000;

// Start server
app.listen(port, () => {
  logger.info(serverStartMsg + port);
});
