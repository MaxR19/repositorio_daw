PS C:\www\repositorio_daw_alumno\React> mkdir project


    Directorio: C:\www\repositorio_daw_alumno\React


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        19/05/2025     12:17                project


PS C:\www\repositorio_daw_alumno\React> npm init -Y
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (react) npm warn init canceled

npm notice
npm notice New major version of npm available! 10.9.2 -> 11.4.0
npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.4.0
npm notice To update run: npm install -g npm@11.4.0
npm notice
PS C:\www\repositorio_daw_alumno\React> npm init -y
Wrote to C:\www\repositorio_daw_alumno\React\package.json:

{
  "name": "react",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}



PS C:\www\repositorio_daw_alumno\React> cd projects
PS C:\www\repositorio_daw_alumno\React\projects> npm create vite@latest
Need to install the following packages:
create-vite@6.5.0
Ok to proceed? (y) y


> react@1.0.0 npx
> create-vite

│
◇  Project name:
│  00-initial-project
│
◇  Select a framework:
│  React
│
◇  Select a variant:
◇  Select a variant:
◇  Select a variant:
│  JavaScript + SWC
│
◇  Scaffolding project in C:\www\repositorio_daw_alumno\React\projects\00-initial-project...
│
└  Done. Now run:

  cd 00-initial-project
  npm install
  npm run dev

PS C:\www\repositorio_daw_alumno\React\projects> cd .\00-initial-project\          
PS C:\www\repositorio_daw_alumno\React\projects\00-initial-project> npm install

added 112 packages, and audited 113 packages in 7s

30 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\www\repositorio_daw_alumno\React\projects\00-initial-project> npm run dev

> 00-initial-project@0.0.0 dev
> vite


  VITE v6.3.5  ready in 581 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
h

  Shortcuts
  press r + enter to restart the server
  press u + enter to show server url
  press o + enter to open in browser
  press c + enter to clear console
  press q + enter to quit