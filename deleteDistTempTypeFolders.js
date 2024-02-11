//Custom script called by the build script after rollup has finished
//It just deletes the 'dist/esm/types' & 'dist/cjs/types' folders
//Since types have already been bundled into a single dist/types/index.d.ts file

import fs from 'fs';

fs.rmSync('./dist/cjs/types', { recursive: true, force: true });
fs.rmSync('./dist/esm/types', { recursive: true, force: true });