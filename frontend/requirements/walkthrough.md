  ## A Pimer on Vue CLI

Understanding how Vue CLI works is crucial for understanding how
to develop a Vue application and how a Vue app can be served
with a back end.

Vue CLI is an official scaffolding tool for Vue that streamlines 
the configuration of front end tools and provides some essential
utilities for building a Vue app.

For now, the most important thing to understand is how Vue CLI
bundles Javascript and CSS files. 

Before going any further,take a quick look at the 
[frontend/src/components](https://github.com/hayden7913/vue-express-example/tree/master/frontend/src/components) folder. As you can see this contains a bunch
of javascript files linked together with es6 `import` statements. 

Unfortunately not all browsers know how to handle these `import` statements
so we can ask Vue CLI to take them and bundle them up into one big 
Javascript file. 

To see what that looks like open up the [app.0746e484.js](https://www.google.com)  file
in the `frontend/dist/js` folder

It doesn't look pretty (it's been minified by Vue CLI to reduce file size),
but believe it or not that includes all of the javascript that's in the 
`frontend/src/components` folder.

Next take a look at the `index.html` file in the `frontend/dist` folder. 

``` html
<!DOCTYPE html>
<html lang=en>
<head>
    <!-- ... other header stuff -->
    <link href=css/app.2831893f.css rel=stylesheet>
    <link href=css/chunk-vendors.efe834aa.css rel=preload as=style>
</head>
<body>
    <div id=app></div>
    <script src=js/app.0746e484.js></script>
    <script src=js/chunk-vendors.517b8dd4.js> </script>
</body>
</html
```
This should look pretty familiar. Just a barebones html file but with 
    a script tag that has a link to our javascript bundle and a link with our CSS bundle. 
If you've cloned this project locally, you could open this `index.html` file in a browser and you'd see the UI.

(NOTE: Under the hood, Vue CLI uses Webpack to do all of this 
bundling stuff. For more details check out the [Webpack docs](https://www.google.com)).