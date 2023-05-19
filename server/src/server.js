const { json, urlencoded } = require("express");
const { Server: HTTPServer } = require("http");
const cors = require("cors");
const appRouter = require("./routes");

const SERVER_PORT = 5001;

class Server {
  constructor(app) {
    this.app = app;
  }

  start() {
    this.#securityMiddleware(this.app);
    this.#standartMiddleware(this.app);
    this.#routerMiddleware(this.app);
    this.#startServer(this.app);
  }

  #startServer(app) {
    const httpServer = new HTTPServer(app);
    this.#startHttpServer(httpServer);
  }

  #securityMiddleware(app) {
    app.use(cors("*"));
  }

  #routerMiddleware(app) {
    appRouter(app);
  }

  #standartMiddleware(app) {
    app.use(json());
    app.use(urlencoded({ extended: true }));
  }

  #startHttpServer(httpServer) {
    httpServer.listen(SERVER_PORT, () => {
      console.log(`Server running on port ${SERVER_PORT}`);
    });
  }
}

module.exports = Server;
