module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "expo-env/babel-plugin",
        {
          envSchemaPath: "./src/env.ts",
          tsconfigPath: "./tsconfig.json",
        },
      ],
    ],
  };
};
