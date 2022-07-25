# Git / GitHub

## committing
Commits should be small and only capture one feature / fix at a time. Further on ` husky ` is used to run an eslint check and all jest tests pre-commit, when one of them fails, the commit will be aborted. Eslint might fail often, depending on your local settings for line endings, to automatically fix some eslint errors, run ``` npm run check:fix ```. Don't forget to add the fixes to your commit.