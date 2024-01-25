import { connect } from "./database";
import app from "./app";

const port = 3000;

connect();

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
