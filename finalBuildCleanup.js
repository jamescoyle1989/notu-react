//Custom script called by the build script after rollup has finished

import fs from 'fs';


//Delete the 'dist/esm/types' & 'dist/cjs/types' folders
//Since types have already been bundled into a single dist/types/index.d.ts file
fs.rmSync('./dist/cjs/types', { recursive: true, force: true });
fs.rmSync('./dist/esm/types', { recursive: true, force: true });


//Remove attempted imports of 'fs' and 'path' in the dist files, since they're breaking, pointless, and I can't figure out how to remove them any other way
const originalCjs = fs.readFileSync('./dist/cjs/notu-react.cjs', 'utf-8');
const newCjs = originalCjs.replace("require('fs');", "").replace("require('path');", "");
fs.writeFileSync('./dist/cjs/notu-react.cjs', newCjs, 'utf-8');

const originalEsm = fs.readFileSync('./dist/esm/notu-react.js', 'utf-8');
const newEsm = originalEsm.replace("import 'fs';", "").replace("import 'path';", "");
fs.writeFileSync('./dist/esm/notu-react.js', newEsm, 'utf-8');