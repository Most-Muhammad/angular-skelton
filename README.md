<h1 align="center">Angular Skeleton Project.</h1>


This is the repository for skeleton for create new Angular project , to be cloned and start develop

# Table of Contents

1. [Project Structure](#Project-Structure)
2. [Key Features](#Key-Features)
3. [HTTP Client](#HTTP-Client )
4. [Authorization](#Authorization)

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
│ │ │ ├── services <!-- application shared services -->
│ │ ├── modules/sections <!-- based on project bussines and logic it may be containrez all modules or folder for each one nameing is perosnal preferences -->
│ ├── assets <!-- asseet folder for static contents eg: images -->
│ ├── environments
├── angular.json
├── package.json
├── package-lock.json
├── tsconfig.json  
├── tsconfig.spec.json
├── karma.conf.json <!-- Testing config -->
├── style.scss <!-- main scss file it includes in angualt.json --> 
└── .gitignore
```
<a name="Key-Features"/>

## Key Features


- ### tsconfg.json

    <details><summary>Paths</summary><p>
  
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
    </p></details>
- ### core 
    <details><summary>classes</summary><p>

     1. app.injector : utility class used to inject services in constructor body instead of constructor declaeration it used when classes, components or services is a        base type or has no constructor
     2. LowerCaseUrlSerializer : url serializer to lower case URL because of angular routes is case sensentive to avoid wrong user input 
     3. AppBaseComponent :  base component to be extend from application components to handle common funcitionality DRY

  </p></details>
    <details><summary>exceptions</summary><p>
    expection handling class to handle application exceptions 
  </p></details>

    <details><summary>types</summary><p>
      1. FormGroupConfig: generic type for formGroup configuration 
      2. Guid: guid type to generate GUID it may used in x-requestid
  </p></details>

## HTTP Client 
   1. Inject token in http header To avoid [HTTP Interceptors are anti-pattern](https://www.bennadel.com/blog/3589-http-interceptors-are-an-anti-pattern-that-create-           hidden-dependencies-and-unnecessary-complexity-in-angular.htm) .
   2. Encapsulate CRUD operations and reutrn observable or alert error message returned from API.
   3. convertToFormData function retuns FromData from Object it used for post/push.
   ``` Ts
    convertToFormData(
        jsonObject: Object,
        parentKey: string | null,
        carryFormData: FormData | null
    ): FormData 
   ```
   
## Authorization 

