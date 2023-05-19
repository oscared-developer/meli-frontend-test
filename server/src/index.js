const express = require("express");
const Server = require("./server");

class App {
  init() {
    const app = express();
    const server = new Server(app);
    server.start();
  }
}

const app = new App();
app.init();
