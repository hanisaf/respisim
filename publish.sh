#! /bin/bash
# if not installed
#npm install -g angular-cli-ghpages
ng build --prod --base-href https://hanisaf.github.io/respisim/
#ngh
npx ngh --dir=dist/respisim
