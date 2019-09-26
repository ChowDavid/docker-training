# instructment
```$xslt
docker-machine start default
docker-machine ip
docker-machine env
eval $(docker-machine env)
docker build --tag=friendlyhello .
docker run -d -p 4000:80 --name test friendlyhello
docker contrainer ls

```

```$xslt
http://192.168.99.100:4000
```