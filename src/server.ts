import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import express, { Request, Response } from "express";
import "express-async-errors";
import swaggerUi, { JsonObject } from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";
import booksRoute from "./routes/booksRoute";

//import swaggerDocument from './swagger/swagger.json'
const swaggerDocument: JsonObject | undefined = YAML.load(
  path.join(__dirname, "../_build/swagger.yaml")
);

//initialize the express server
const app = express();

// Common middlewaresm
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Show routes called in console during development
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Security (helmet recommended in express docs)
if (process.env.NODE_ENV === "production") {
  app.use(helmet());
}

// Experimenting with GET routes - they all work!
// Remember that order matters!
// That is why the main "/" route is below all other routes!
app.get("/admin", (req, res) => {
  res.send("Welcome to GET /admin");
});

app.get("/books", booksRoute);

app.get("/authors", (req, res) => {
  res.send("Welcome to GET /authors");
});

app.get("/cart", (req, res) => {
  res.send("Welcome to GET /cart");
});

// Adding swagger router (according to the task #1 in the README file)
app.use(
  "/",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    explorer: true,
  })
);

// Set dynamic view from views dir
const viewsDir = path.join(__dirname, "views");
app.set("views", viewsDir);

// Set static view from public dir
/* const staticDir = path.join(__dirname, 'public');
app.use(express.static(staticDir)); */

// Serve index.html file
// app.get("/", (_: Request, res: Response) => {
//   res.sendFile("index.html", { root: viewsDir });
// });

// Export here and start in a diff file (for testing).
export default app;
