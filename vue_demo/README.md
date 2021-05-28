# hello-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Docker build and run two stage
```aidl
cd vue_demo
docker build -t vue_image .
docker run -p 8080:80 vue_image
localhost:8080

```