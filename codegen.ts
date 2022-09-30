import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://graphql.anilist.co",
  documents: "src/graphql/**/*ts",
  generates: {
    "src/graphql/types": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
