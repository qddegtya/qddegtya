#!/usr/bin/node
const fs = require("node:fs");
const path = require("node:path");
const cwd = process.cwd();

const README_PATH = path.join(cwd, "README.md");

const getNewReadmeContent = (content) => `
<p align="center">
  <br />
  <br />
  <samp>
    👨 Father / 💻 Indie Hacker / 🪄 Creator
  </samp>
</p>

<p align="center">
  <samp>
    <a href="https://xiaoa.name">blog</a> .
    <a href="https://www.yuque.com/chiyu-heb0t">digital garden</a> .
    <a href="https://twitter.com/qddegtya">tweets</a>
  </samp>
</p>

---

${content}

---

<p align="center">
  <samp>
    - Tell me and I forget; Show me and I remember; Involve me and I understand. -
  </samp>
  <br />
  <br />
  <br />
</p>
`;

const UPDATED_README_CONTENT = fs.readFileSync(
  path.join(cwd, "./.portrayal/.twoColRecentPostsForGithubProfile.markdown")
);

fs.existsSync(README_PATH) && fs.unlinkSync(README_PATH);
fs.writeFileSync(README_PATH, getNewReadmeContent(UPDATED_README_CONTENT));
