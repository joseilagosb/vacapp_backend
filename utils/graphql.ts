import fs from "fs";
import path from "path";

import { Module } from "graphql-modules";

export const getAllGraphqlModules = (): Array<Module> => {
  const graphqlModules = [];
  const exceptions = ["CrowdReport.ts", "PlaceSnapshot.ts"];

  const modulesDirectory = path.join(__dirname, "..", "graphql", "modules");

  fs.readdirSync(modulesDirectory)
    .filter((file) => {
      return file.indexOf(".") !== 0 && !exceptions.includes(file) && file.slice(-3) === ".ts";
    })
    .forEach((file) => {
      const module = require(path.join(modulesDirectory, file));
      graphqlModules.push(module[Object.keys(module)[0]]);
    });

  return graphqlModules;
};
