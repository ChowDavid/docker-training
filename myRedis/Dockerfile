# Use an existing docker image as a base
FROM alpine
# Downoad and install a dependence
RUN apk add gcc
RUN apk update
RUN apk add redis
RUN mkdir /java


# Tell the image what to do when it starts as a container
CMD ["redis-server"]


# docker run .
# docker run <image> [<cmd>]
# docker exec -it <containerId> sh
# docker exec -it <containerId> redis-cli