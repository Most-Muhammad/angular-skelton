# Angular Skeleton

This is the repository for skeleton for create new Angular project , to be cloned and start develop

## Project Structure

```markdown
├── src
│ ├── app
│ │ ├── core
│ │ ├── shared
│ │ ├── modules/sections based on project bussines and logic it may be containrez all modules or folder for each one nameing is perosnal preferences
│ ├── assets
│ ├── environments
├── angular.json
├── package.json
├── package-lock.json
├── tsconfig.json  
├── tsconfig.spec.json
├── karma.conf.json //Testing config
└── .gitignore
```

## Key Features

### tsconfg.json

```json
"paths": {
"@src/*" : ["src/*"],
"@core/*":["src/app/core/*]
}
```

paths is a config section to summarize and shortness the path of folder/s to be readable and maintainable for import, we can add more key @ following name  
ex:

```typescript
import { AppInjector } from "@core/classes/app.injector";
```
