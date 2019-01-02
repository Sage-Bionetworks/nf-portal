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

## ./amp-server 
contains node scripts which are used to update amp-ad static server. **note:** js files are written in es6 syntax and then compiled for node compatibility

#### how to compile with gulp
`example scenario:` changes are made to ./amp-server/src/index.js

```  
$ gulp 
[11:56:01] Working directory changed to ~/sites/amp-ad/amp-server  
[11:56:01] Using gulpfile ~/sites/amp-ad/amp-server/gulpfile.js  
[11:56:01] Starting 'default'...  
[11:56:02] Finished 'default' after 259 ms  
```

#### how to update static server with new files  
go to gulp output directory and run index.js. 

``` 
$ cd amp-ad/amp-server/dist
$ node index.js  
SELECT * FROM syn17024173
SELECT * FROM syn17024229
SELECT * FROM syn17024229 where ( ( "Program" = 'AMP-AD' ) )
SELECT * FROM syn17024229 where ( ( "Program" = 'MODEL-AD' ) )
SELECT * FROM syn17024229 where ( ( "Program" = 'M2OVE-AD' ) )
SELECT * FROM syn17024229 where ( ( "Program" = 'Resilience-AD' ) )
tools.json has been saved
whatsNew.json has been saved
programResilienceAD_wiki.json has been saved
programModelAD_wiki.json has been saved
programModelAD_wiki.json has been saved
about.json has been saved
programM2OVEAD_wiki.json has been saved
...
```

## ./amp-ad-portal  
**Node packages to be aware of:** 

- [ReactGA](https://github.com/react-ga/react-ga) - used to interface with google analytics. This was chosen because of the ease integration with google analytics. 
- [React Router Dom](https://reacttraining.com/react-router/web/guides/quick-start) - used to handle page routing. Has many features.
- [Source Map Explorer](https://www.npmjs.com/package/source-map-explorer) - used to examine js files for code bloat. 
- [React Markdown](https://github.com/rexxars/react-markdown) - the first version of the AMP-AD site (V0) used this to process markdown. The site has since switched to using the [Synapse React Client](https://www.npmjs.com/package/synapse-react-client) to process all markdown. The React Markdown package has been retained because there are still functions in the project that use it... however none of those functions are being used. These could be eliminated in future releases.  
- [React Accessible Accordion](https://github.com/springload/react-accessible-accordion) - all the dropdowns in the main navigation use the accordion package.  
 
























