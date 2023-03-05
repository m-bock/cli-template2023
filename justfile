bundle:
    rm -rf dist
    mkdir dist
    spago bundle-app --platform=node --to dist/index.js

format:
    purs-tidy format-in-place 'src/**/*.purs'