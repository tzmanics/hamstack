exports.config = {
  projectRoot: "./src",
  projectName: "hamstack",
  outDir: "./dist/static",
  routes: {
    "/blog/:title": {
      type: "contentFolder",
      title: {
        folder: "./blog"
      }
    }
  }
};
