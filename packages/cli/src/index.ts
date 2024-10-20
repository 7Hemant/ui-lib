#!/usr/bin/env node
import { Command } from "commander";
import { addCommand } from "./commands/add";
import { diffCommand } from "./commands/diff";
import { initCommand } from "./commands/init";

const program = new Command();

program.name("design-system").description("CLI for managing the design system components").version("1.0.0");

program
  .command("add")
  .description("Add a new component to the project")
  .action(() => {
    addCommand();
  });

program
  .command("diff")
  .description("Check for differences in components")
  .action(() => {
    diffCommand();
  });

program
  .command("init")
  .description("Initialize the project with the design system components")
  .action(() => {
    initCommand();
  });

program.parse(process.argv);
