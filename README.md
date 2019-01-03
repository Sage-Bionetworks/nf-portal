# NF Portal  

### Project folder structure 
```
.
├── ./static
│   ├── ./static/css
│   ├── ./static/js
│   └── ./static/media
├── ./nf-portal-server
│   ├── ./nf-portal-server/dist
│   │   ├── ./nf-portal-server/dist/synapse
│   │   └── ./nf-portal-server/dist/public
│   └── ./nf-portal-server/src
│       └── ./nf-portal-server/src/synapse
└── ./nf-portal-site
    ├── ./nf-portal-site/storybook-static
    │   └── ./nf-portal-site/storybook-static/static
    ├── ./nf-portal-site/public
    ├── ./nf-portal-site/src
    │   ├── ./nf-portal-site/src/controller
    │   ├── ./nf-portal-site/src/model
    │   ├── ./nf-portal-site/src/synapse
    │   ├── ./nf-portal-site/src/view
    │   ├── ./nf-portal-site/src/tests
    │   ├── ./nf-portal-site/src/stories
    │   ├── ./nf-portal-site/src/defaultData
    │   ├── ./nf-portal-site/src/images
    │   │   └── ./nf-portal-site/src/images/favicon_package_v0.16
    │   ├── ./nf-portal-site/src/style
    │   ├── ./nf-portal-site/src/library
    │   ├── ./nf-portal-site/src/queries
    │   └── ./nf-portal-site/src/components
    └── ./nf-portal-site/build
        └── ./nf-portal-site/build/static
            ├── ./nf-portal-site/build/static/css
            ├── ./nf-portal-site/build/static/js
            └── ./nf-portal-site/build/static/media 
```

## ./nf-portal-server 
This project contains node scripts which are used to update amp-ad static server. **note:** js files are written in es6 syntax and then compiled for node compatibility. **Also note that this is not an actual server!** – it is merely a collection of scripts which are used to update the s3 bucket. The s3 bucket is the server which contains the static files.

#### how to compile with gulp
`example scenario:` changes are made to ./nf-portal-server/src/index.js 
Compiling is now required for the changes to be reflected in the node compatible js file (location: nf-portal-server/dist/index.js)

```  
$ gulp 
[15:20:17] Working directory changed to ~/sites/nf-portal/nf-portal-server
[15:20:18] Using gulpfile ~/sites/nf-portal/nf-portal-server/gulpfile.js
[15:20:18] Starting 'default'...
[15:20:18] Finished 'default' after 212 ms
```

#### how to update static server with new files
In order to complete this operation and update the server we must run the scripts with node:  

1) Only after compiling (compile with the gulp command above) can you run the index.js with node. Gulp automatically outputs to the dist folder. When the index.js is compiled to es5 it can then be run by node.
  
2) go to the dist folder and run index.js. 

``` 
$ cd nf-portal-server/dist
$ node index.js
SELECT * FROM syn16859580
SELECT * FROM syn16858699
SELECT * FROM syn16858331
SELECT * FROM syn16857542
SELECT * FROM syn16787123
SELECT * FROM syn16859448
SELECT * FROM syn16859580 WHERE ( ( "fundingAgency" = 'CTF' ) )
SELECT * FROM syn16858699 WHERE ( ( "fundingAgency" = 'CTF' ) )
...
```

## ./nf-portal-site
**Node packages to be aware of:** 

- [ReactGA](https://github.com/react-ga/react-ga) - used to interface with google analytics. This was chosen because of the ease integration with google analytics. 
- [React Router Dom](https://reacttraining.com/react-router/web/guides/quick-start) - used to handle page routing. Has many features.
- [Source Map Explorer](https://www.npmjs.com/package/source-map-explorer) - used to examine js files for code bloat. 
- [React Markdown](https://github.com/rexxars/react-markdown) - the first version of the AMP-AD site (V0) used this to process markdown. The site has since switched to using the [Synapse React Client](https://www.npmjs.com/package/synapse-react-client) to process all markdown. The React Markdown package has been retained because there are still functions in the project that use it... however none of those functions are being used. These could be eliminated in future releases.  
- [React Accessible Accordion](https://github.com/springload/react-accessible-accordion) - all the dropdowns in the main navigation use the accordion package.  
 

### how to build and deploy

**to build** 

```
$ cd nf-portal/nf-portal-site 
$ yarn build
File sizes after gzip:

  839.81 KB  build/static/js/4.fd57c941.chunk.js
  437.59 KB  build/static/js/main.01e61786.js
  39.19 KB   build/static/js/3.d8104305.chunk.js
  17.33 KB   build/static/js/0.161958e2.chunk.js
  16.11 KB   build/static/js/1.11afe167.chunk.js
  14.07 KB   build/static/js/2.4e9374a4.chunk.js
  10.33 KB   build/static/css/main.def1ea16.css
  1.32 KB    build/static/js/7.5ea3a65f.chunk.js
  1.28 KB    build/static/js/9.cd4902cb.chunk.js
  1.26 KB    build/static/js/5.a7135f4f.chunk.js
  1.25 KB    build/static/js/8.23176ad5.chunk.js
  500 B      build/static/js/6.1d570e65.chunk.js   
...
```
**to deploy to staging:**  

``` 
$ aws s3 sync --delete --cache-control max-age=0 ./build s3://staging.nf.synapse.org
```

or

```
$ ./sync-with-s3-staging
```



**to deploy to production:**  

```
$ aws s3 sync --delete --cache-control max-age=3000 ./build s3://prod.nf.synapse.org
```
or

``` 
$ ./WARNING-sync-with-s3-production
```

### how is data routed do the the synapse react client?  

```
├── Explore.js
	 ├── SelectorRow.js
	 │		└── Button.js
	 ├── SynapseChartAndCards.js
	 │		├── SynapseComponents (Synapse React Client) 
	 │		└── SynapseConstants (Synapse React Client)
	 └── synapseObjects.js

```
- **Explore.js** - is the explore page. It's loaded by the application when the user visits any explore page.  
- **SelectorRow.js** - the row of buttons above the explore charts, tables and cards.
- **synapseObjects.js** - contains all the data required to power the Synapse React Client, this includes the SQL needed to set up all the queryWrapperMenus in the SRC.


**what does explore.js do? how does it work?**  
Explore.js reads the url. It automatically selects the synId based on the url path with a switch statement. Then it routes the synapseId and the synapseObject to the SynapseChartAndCards.js. The selected synapseObject is passed into the SynapseChartAndCards as a single prop.

**what does selectorRow.js do? how does it work?**  
selectorRow.js has the synIds hardcoded into each
