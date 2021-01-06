set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/52326125/52326125.github.io.git master:gh-pages

cd -