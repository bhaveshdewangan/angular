### Here i have covered couple of angular or UI related topics/feature which will help you to build a standard project.
 * Angular Version Update
 * Ngrx Store
 * Lazy Loading
 * Internationalization 
 * Internationalization using ngx-translation
 
# Angular Version Update

Follow the angular documentation listed below to update your angular version.
* [Angular CLI UPDATE](https://angular.io/cli/update)
* [Application and Dependencies update current version to required stable version](https://update.angular.io/)

# Ngrx Store

## WHAT IS Ngrx Store

NgRx is a state management system that is based on the [Redux](https://redux.js.org/) pattern.

### Redux principles

* **Single source of truth** - This means the state of your application is stored in an object tree within a single store. The store is responsible for storing the data and providing the data to components whenever requested.
* **Read-only state** - State is immutable. This doesn’t necessarily mean that state is always constant and cannot be changed. You are not allowed to change the state directly. In order to make changes in the state, you have to dispatch actions.
* **State is modified with pure functions** - Dispatching actions will trigger a set of pure functions called reducers. Reducers are responsible for modifying the state.  Reducer always returns a new state object with the modifications.

### NgRx
NgRx is a group of libraries inspired by the Redux pattern. As the name suggests, NgRx is written specifically for Angular application as a state management solution

### The Store
The store is the key element in the entire state management process. It holds the state and facilitates the interaction between the components and the state.

## How NgRx works

There are five parts that constitute NgRx:
- Store
- Reducers (and Meta-Reducers)
- Actions
- Selectors
- Effects

### The basic implementation looks like the following:
* Your application’s state is maintained in the store. The store is immutable.
* Your application’s components can subscribe to the store and get automatic updates of state through selectors.
* Selectors enable components to get a slice (a part) of your application’s state, and also mutate state with selector functions.
* Actions modify the state of the store by using reducers (functions) that enable changes while keeping it immutable.
* Meta-Reducers (not shown) are hooks where you can pre or post-process actions before they get invoked.
* Effects occur as a result from actions, and can also create actions when called. Effects primary responsibility is to create async side-effects (like service calls to APIs), that ultimately generate other actions.

### Installation:

Here i will give the command which i used in the angular feature project above to setup a **Ngrx Store** using the "User" component.

#### Dependencies
It will add the libraries for the store, effects, store-devtools, and the schematics to the project.

```bash
npm i @ngrx/store @ngrx/effects @ngrx/store-devtools @ngrx/schematics --save
```
#### Default Schematics Collection
To use @ngrx/schematics as the default collection in your Angular CLI project, add it to your angular.json:

```bash
ng config cli.defaultCollection @ngrx/schematics
```
#### Initial Store Setup
Generate the initial state management and register it within the app.module.ts. You can use either of them.

```bash
ng generate @ngrx/schematics:store State --root --module app.module.ts
```

```bash
ng generate store State --root --module app.module.ts
```

#### Initial Effects Setup
Generate the root effects and register it within the app.module.ts. You can use either of them.

```bash
ng generate @ngrx/schematics:effect App --root --module app.module.ts
```

```bash
ng generate effect User --root --module app.module.ts
```

#### Initial Action Setup
Generate the action with the standard Success and Failure action type. If you want you can create your own action types, for example you can see my user action where i have created a different action type based on my requirements.

```bash
ng generate action User
```

#### Initial Reducer Setup
Generate the reducer with the standard Success and Failure action type. If you want you can say No to the deafult success and failure action on reducer. You can modify the reducer based on the action you have created. Use the relative path to make a entry on your reducers/index.ts. I have mention command which i used in my app to give a relative path.

```bash
ng generate reducer User --reducers ../../app/reducers/index.ts
```

#### Initial Selector Setup
Generate the selector file with the required import types.

```bash
ng generate selector User
```

## PROS

* They solve the problem of component interaction via the Observable pattern.
* They provide a client-side cache if needed, to avoid doing repeated Ajax/HTTP requests.
* They provide a place to put temporary UI state, as we fill in a large form or want to store search criteria in a search form when navigating between router views.
* The concept of a single source of the truth makes it easier for components to share information in an Angular application.

## CONS

* There is a steep learning curve when you first start working with NgRx.
* Application will be a bit verbose as you have to introduce several new artifacts, such as reducers, selectors, effects, and so on.


Please follow the official [Ngrx Store](https://ngrx.io/) site for further information and update.


# LazyLoading

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## WHAT IS LAZY LOADING

Lazy Loading nothing but loading the component dynamically or loaded the component as per the user demands.
Intially load everything is not a good user as well as developement experience. It will take more time to load
everything that's why concept came of "angular-features"

## ADVANTAGES OF LAZY LOADING

### Cost Reduction
For example we will consider Image Loading. As you all know that image consume more byte to load. If we load before
may cost more and might be possibale user not jump or navigate to see tha image. A lazy loaded image may never get loaded if the user never reaches it. Thus, you may reduce the total bytes delivered on the page and ultimately save yourself a few pennies in the process.

### Performance Gain
Same above example of Image Loading as we know if we not load all image upfront reduces load on web site. Fewer image requests mean fewer bytes to download. And fewer bytes to download means the page renders faster than if those bytes and requests were being made.


# Internationalization 
Internationalization is the process is making our app to support various language to extend a reach to world wide.

## Localization
Localization doesn’t only mean to changing your message from English to French, German or any language. It means adjusting your tone, look and feel to provide a product that is comfortable with your target audience.
You need to cover every component of your app because picture speaks a thousand words and image have different meaning in different culture.
Local regulation and legal requirement also important when you step in into foreign market.

When you go with the built-in tools for your Angular localization there is a second decision to make:

### Ahead-of-Time (AOT) compiler
* With AOT your application can be served fast and better performance
* As a disadvantage, need to serve an application for each locale due to all information including the content is built-in when compiling the app.
* Decision which language should be shown to the users needs to happen with server side logic or by URL parameters.

### Just-in-Time (JIT) compiler
* Translations are dynamic but you need to take care of providing the translations in your application. However performance might decrease.


### Setup:

```bash
ng add @angular/localize
```
* This will add the package to our angular app
*	Update the polyfill.ts file which allows the project to take advantages of agular’s localization feature.
*	The framework provide the i18n attribute to which will be used to mark an html element for the translation.
*	If you want to translate the htm attribute, we will use the i18n-x where x will be the attribute name
  For example: 
  ```bash
  <input i18n-placeholder placeholder=”search”></input>
  ```
  
After preparing the template file for translation we will be ready to extract all the html element which marked for translation to translation source file.
run the below command, It will create a folder called translation inside the src and will create messages.xlf file inside it.
 ```bash
  ng xi18n –output-path src/translate
 ```
 
Please create a copy of this file with the different local name which you want your app to serve, like "messages.es.xlf" and below source file you just need to add the "target" take and put your content translation based on the language that file has.

for example:
```bash
  <trans-unit id="navigation-home" datatype="html">
     <source>Home</source>
     <target>Home Es</target>
     <context-group purpose="location">
       <context context-type="sourcefile">app/app.component.html</context>
       <context context-type="linenumber">5</context>
     </context-group>
   </trans-unit>
 ```
 
 Now you need to configure few things in angular.json
 #### Define locales in build configuration
 Here you need to add the following json snippet in angular.json under the project -> "your app name"
 
 ```bash
  "i18n": {
        "locales": {
          "en": "src/translate/messages.en.xlf",
          "es": "src/translate/messages.es.xlf",
          "pt": "src/translate/messages.pt.xlf"
        }
     }
 ```
 
 #### Set the localize build configuration option
 This will instruct the AOT compiler to use the translation configuration.
 Here you need to add the following json snippet in angular.json under the "configurations" which comes inside architect -> build
 
 ```bash
  "en": {
    "localize": ["en"]
  },
  "es": {
    "localize": ["es"]
  },
  "pt": {
    "localize": ["pt"]
  }
 ```
 
 #### Configure for production build
 Finally, we will add the custom locale-specific configurations. This will allow us to apply specific build options to a particular locale.
 this will come under serve -> configuration and along with the production.
 
 ```bash
  "en": {
    "browserTarget": "angular-features:build:en"
  },
  "es": {
    "browserTarget": "angular-features:build:es"
  },
  "pt": {
    "browserTarget": "angular-features:build:pt"
  }
 ```
 please follow the my angular.json file having with this project, if you have any confusion.
 
 Now we need to serve the app...
 ```bash
  ng serve --configuration=es
 ```

 # Internationalization Using NGX-TRANSLATION
 Above we did the internationalization using Angular's in-built library, Now we are going to achieve the same using thrid party library
 called "ngx-translation", I found the thrid party translation is easy to setup rather then using angualr's own library.


## Setup:

### Add ngx-transalate to your app 

To add the required lubrary to our app we need to type the command on our console.
```bash
  npm install @ngx-translate/core @ngx-translate/http-loader --save
 ```

The @ngx-translate/core contains the core routines for the translation: The TranslateService and some pipes.

The @ngx-translate/http-loader loads the translation files from your webserver.


### App module configuration
Now you have to init the translation TranslateModule in your app.module.ts:
```bash
  import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
  import { TranslateHttpLoader } from '@ngx-translate/http-loader';

  export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
  }

  @NgModule({
    declarations: [
      AppComponent,
      HomeComponent,
      UsersComponent
    ],
    imports: [
      BrowserModule,
      HttpClientModule,
      routing,
      StoreModule.forRoot(reducers, { metaReducers }),
      !environment.production ? StoreDevtoolsModule.instrument() : [],
      EffectsModule.forRoot([UserEffects]),
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }
      )
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
 ```
 The HttpLoaderFactory is required for AOT (ahead of time) compilation in your project.

 ### Initial Translate Service Setup

 For doing initial translate service setup i have created a "TranslateUIService.ts" file where i perform the common task but you guys can
 also do the same on app.component.ts file.

 First, you have to inject TranslateService in the constructor.

 The next step is to set the default language of your application using translate.setDefaultLang('en'). In a real app you can of course load language from the user's settings. Also user the browser language also to change the language of your application.
 Below is the common service file code.

 ```bash
  import { Injectable } from "@angular/core";
  import { TranslateService } from "@ngx-translate/core";

  @Injectable()
  export class TranslateUiService {
      constructor(private translateService: TranslateService) {}

      translateInIt() {
          this.translateService.addLangs(['en', 'pt', 'es']);
          this.translateService.setDefaultLang('en');
          const browserLang = this.translateService.getBrowserLang();
          this.translateService.use(browserLang.match(/en|es|pt|/) ? browserLang : 'en');
      }
  }}
 ```

 based on your application requirement you can play around with the TranslateUiService file.


 ### Create a translation file

 Each language is stored in a separate .json file. Let's create the JSON file for the English translation: assets/i18n/en.json. Similarly
 you can create the JSON file for the language you want to suppot.
 Below is the example of two language JSOn file.

#### en.json
 ```bash
  {
      "MENU": {
          "HOME": "Home",
          "USERS": "Users",
          "LAZY_COMPONENT": "Lazy Component"
      }
  }
 ```

 #### es.json
 ```bash
{
    "MENU": {
        "HOME": "Home es",
        "USERS": "Users es",
        "LAZY_COMPONENT": "Lazy Component es"
    }
}
```

Now we need to serve the app...
 ```bash
  ng serve --configuration=es
 ```





	




