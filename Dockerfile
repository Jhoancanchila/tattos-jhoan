#imagen oficial de node

FROM node:lts-bullseye as build

#creamos un directorio de trabajo
WORKDIR /app

#copiamos el package.json y el package-lock.json
COPY package*.json ./

#instalamos las dependencias
RUN npm ci

#copiamos el resto de los archivos
COPY . .

#compilamos la aplicacion
RUN npm run build

#exponemos el puerto 3000
EXPOSE 3000

#comando para iniciar la aplicacion
CMD ["npm", "start"]

#docker build -t nodejs-app .
#docker run -p 3000:3000 nodejs-app