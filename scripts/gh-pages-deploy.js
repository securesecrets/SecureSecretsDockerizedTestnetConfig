/* eslint - disable no - console */

const execa = require("execa");
const fs = require("fs");
(async () => {
  try {
    await execa("git", ["checkout", "--orphan", "gh-pages"]);
    // eslint-disable-next-line no-console
    console.log("Starting npm build...");
    await execa("npm", ["run", "build"]);

    // Understand if it's dist or build folder
    const folderName = fs.existsSync("dist") ? "dist" : "build";

    console.log(`adding ${folderName} to commit...`);
    await execa("git", ["--work-tree", folderName, "add", "--all"]);

    console.log('creating dh-pages commit...');
    await execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pages"]);

    console.log("Pushing to gh-pages branch...");
    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);

    try {
      console.log(`Deleting ${folderName} folder`);
      await execa("rimraf", [folderName]);
    }
    catch (ex) {
      console.warn(`>>> FAILED TO DELETE ${folderName} folder`)
    }

    console.log("Checking out main branch...");
    await execa("git", ["checkout", "-f", "main"]);

    console.log("Deleting gh-pages branch...");
    await execa("git", ["branch", "-D", "gh-pages"]);

    console.log("Successfully deployed!");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();