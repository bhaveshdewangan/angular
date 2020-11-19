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
