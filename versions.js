import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

let server = "https://matrix-client.matrix.org"
let path = "/_matrix/client/versions";

fetch(server + path).then(response => response.json()).then(data => {
   console.log(data);
});
