module.exports = {
  preset: "ts-jest",
  verbose: true,
  moduleFileExtensions: ["js", "ts", "vue"],
  transform: {
    "^.+\\js$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!@directus/shared)"],
};
