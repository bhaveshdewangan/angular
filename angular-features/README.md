### Here i have covered couple of angular or UI related topics/feature which will help you to build a standard project.
 * Angular Version Update
 * Ngrx Store
 * Lazy Loading
 
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
