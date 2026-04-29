#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");
const dayjs = require("dayjs");

const cwd = process.cwd();
const README_PATH = path.join(cwd, "README.md");

const getNewReadmeContent = (content) => `
<p align="center">
  <!-- HUMAN -->
  <!-- <img width="100%" alt="github-banner" src="https://github.com/user-attachments/assets/6e62ba8b-4bf4-4cdb-bf14-066c6d1c524e" /> -->

  <!-- AI -->
  <img width="100%" alt="github-banner" src="https://github.com/user-attachments/assets/7af24e12-110c-4b0a-833d-26522718cd70" />
</p>

---

<p align="center">
  <samp>
    👨 Father / 💻 Hacker / 🪄 Creator
  </samp>
</p>

<p align="center">
  <samp>
    <a href="https://github.com/qddegtya">github</a> .
    <a href="https://xiaoa.name">blog</a> .
    <a href="https://www.yuque.com/chiyu-heb0t">digital garden</a>
  </samp>
</p>

---

[![Auto-Update Task Status](https://github.com/qddegtya/qddegtya/actions/workflows/dispatch-github-profile-update.yml/badge.svg?branch=main)](https://github.com/qddegtya/qddegtya/actions/workflows/dispatch-github-profile-update.yml)

${content}

🤖️ Auto-Updated: ${dayjs().format("YYYY-MM-DD HH:MM:ss")}

Powered by [@atools/portrayal](https://github.com/qddegtya/portrayal)

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
