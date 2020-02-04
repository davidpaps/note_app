# Note App

Installing Node from Terminal Check if there's a version installed: 
```
$ node -v
```

If not, install:

```
$ brew install node 
```

Initialize Node with Http-Server library from the top level of the project's directory:

```
$ cd projectfolder/
$ npm install http-server --save
```

Running the server from command line:

```
node node_modules/http-server/bin/http-server
```

...and visit: localhost://8080