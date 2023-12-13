# Tour Of Heroes

This project is based on tutorial - https://angular.io/tutorial/tour-of-heroes

## Features of application

* Gets a list of heroes from simulated data server based on https://github.com/angular/angular/tree/main/packages/misc/angular-in-memory-web-api
* Displays the heroes in a list
* Edits a selected hero's details
* Add/delete hero
* Navigates between different views of heroic data




## Overview of project

**tsconfig.json** - This file contains TypeScript compiler configuration

**package.json** -Tthis file contains information about packages installed by npm

**server.ts** - This file configures Node Server and handle server-side rendering. CommongEngine is used to render an angular application.

**angular.json** - This file contains overal configuration of project or whole workspace. This is used for build and development tools provided by Angular CLI.

**src/styles.css**  - The common CSS style for whole application.


**src/main.ts** - this is the main entry point of Angular Appllication. In main.ts file last line platformBrowserDynamic().bootstrapModule(AppModule)responsible for bootstraping of angular application. platformBrowserDynamic() part of this line indicates that we are about to boot Angular in a browser environment.

**src/app/app.module.ts** - The root module to bootstrap application. @NgModule decorator is used to identify AppModuel. It has imports, declarations and bootstrap arrays. The bootstrap array contains the root component that Angular creates and inserts into the index.html web page.

### Components

1. AppComponent - the root Component

- **src/app/app.component.ts** - defines the root component of an Angular application
- **src/app/app.component.html** - html template file for AppComponent
- **src/app/app.component.css** - CSS file for AppComponent

2. DashboardComponent
 - **src/app/components/dashboard/dashboard.component.ts**
   - ngOnInit() is a lifecycle hook in Angular that is called after the constructor is called and after the component’s inputs have been initialized. It is used to perform any additional initialization that is required for the component. ngOnInit is commonly used to call services or to set up subscriptions.
   - getHeroes() - gets heroes array data with the help of injected HeroService


