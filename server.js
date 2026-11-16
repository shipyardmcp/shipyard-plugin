#!/usr/bin/env node
// Starts the Shipyard program that is already installed on this computer as an MCP server,
// and passes Claude's messages straight through to it. This file contains no Shipyard code,
// downloads nothing and sends nothing anywhere. Get Shipyard at https://shipyardmcp.com
'use strict';
const { spawn } = require('node:child_process');

// On Windows a program installed by npm is a .cmd file, which only starts through a shell.
// The command and its one argument are fixed, so nothing a caller sends reaches the shell.
const child = spawn('shipyard', ['mcp'], { stdio: 'inherit', shell: process.platform === 'win32' });

const missing = () => {
  process.stderr.write('Shipyard is not installed on this computer. Create an account at https://shipyardmcp.com and paste the two install lines from your account page into a terminal, then try again.\n');
  process.exit(1);
};
child.on('error', missing);
child.on('exit', (code, signal) => {
  // 127 (Unix) and 9009 (Windows) both mean "no such program".
  if (code === 127 || code === 9009) return missing();
  process.exit(signal ? 1 : code ?? 0);
});
for (const s of ['SIGINT', 'SIGTERM']) process.on(s, () => child.kill(s));
