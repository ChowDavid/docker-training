# instruction
- docker machine start
```$xslt
docker-machine start default
docker-machine env
eval $(docker-machine env)
```
- build run 
```$xslt
docker build --tag=friendlyhello .
docker run -d -p 4000:80 --name test friendlyhello
docker contrainer ls
docker image ls
```
- check IP
```$xslt
docker-machine ip
```
- test browser
```$xslt
http://192.168.99.100:4000
```