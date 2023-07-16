### To run the container locally on port 8080:

```shell
$ cd ~/Sites/LEARNING/docker-via-educative/practice/fake-website

$ docker build -t cristinoconnor/fake_website .

$ docker run --rm -it -p 8080:80 cristinoconnor/fake_website
```