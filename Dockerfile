FROM node:14.11.0
WORKDIR app
COPY . .
EXPOSE 3000
CMD tail -f /dev/null
