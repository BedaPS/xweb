import { defineConfig } from "tinacms";

const branch = process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || process.env.GITHUB_REF_NAME || "master";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      publicFolder: "static",
      mediaRoot: "images",
    },
  },
  schema: {
    collections: [
      {
        name: "blog",
        label: "Blog",
        path: "content/blog",
        format: "md",
        match: {
          include: "**/*.md",
        },
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "datetime", name: "date", label: "Publish Date" },
          { type: "string", name: "description", label: "Description" },
          { type: "rich-text", name: "body", label: "Body", isBody: true },
        ],
      },
      {
        name: "pages",
        label: "Pages",
        path: "content",
        format: "md",
        match: {
          include: [
            "contact/_index.md",
            "pricing/_index.md",
            "faq/_index.md",
            "privacy-policy/_index.md",
            "terms-conditions/_index.md",
            "about/_index.md",
          ],
        },
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "string", name: "subtitle", label: "Subtitle" },
          { type: "string", name: "description", label: "Meta Description" },
          { type: "rich-text", name: "body", label: "Body", isBody: true },
        ],
      },
    ],
  },
});
