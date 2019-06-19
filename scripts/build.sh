#!/bin/bash
rm -rf public
yarn gatsby:build
git add .
git commit -m 'build: use `build.sh`'
git push
git commit --allow-empty -m 'build: trigger deployment'
git push