module.exports = {
  preset: "ts-jest",
  verbose: true,
  resolver: "jest-node-exports-resolver",
  moduleFileExtensions: ["js", "ts", "vue"],
  transform: {
    "^.+\\js$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!@directus/shared)"],
};
