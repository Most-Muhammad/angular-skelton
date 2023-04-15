# Angular Skeleton

This is the repository for skeleton for create new Angular project , to be cloned and start develop

# Table of Contents

1. [Project Structure](#Project-Structure)
2. [Key Features](#Key-Features)

<a name="Project-Structure"/>

## Project Structure

```markdown
├── src
│ ├── app
│ │ ├── core <!-- application core it hasn't module contents can be imported directly  -->
│ │ │ ├── classes <!-- application classes like baseComponent and appInjector -->
│ │ │ ├── config <!-- includes application config like route names  or menu config etc -->
│ │ │ ├── constants <!-- Keep all constants in a single place and avoid magic IDs/strings -->
│ │ │ ├── dictionary <!-- includes any global dictionary for ex: global api routes authorizatoin, config and etc -->
│ │ │ ├── exceptions <!-- application exception handler -->
│ │ │ ├── i18n <!-- translation service -->
│ │ │ ├── types <!-- application type like guid and form-config  -->
│ │ ├── shared
│ │ ├── modules/sections <!-- based on project bussines and logic it may be containrez all modules or folder for each one nameing is perosnal preferences -->
│ ├── assets
│ ├── environments
├── angular.json
├── package.json
├── package-lock.json
├── tsconfig.json  
├── tsconfig.spec.json
├── karma.conf.json <!-- Testing config -->
└── .gitignore
```
<a name="Key-Features"/>

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

