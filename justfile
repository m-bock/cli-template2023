bundle:
    rm -rf dist
    mkdir dist
    spago bundle-app --platform=node --to dist/index.js