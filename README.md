## Generador de proyectos GraphQL

Este generador servirá para crear proyectos de GraphQL con diferentes variantes con el objetivo de agilizar el proceso de crear el proyecto sin tener que hacer todos los pasos iniciales una y otra vez.

# Requirements
* Node >= 10.15.3
* NPM >= 6.0.0

# Proyectos

## Hola Mundo sin variables de entorno

Ejemplo en el que tenemos un simple hola mundo en GraphQL con varios tipos de saludo y con la configuración más básica y con un resolver de tipo mutation para gestionar una pequeña lista de tareas.

Aplicará la modularización de Schemas y Resolvers aparte de añadir buenas prácticas.

```graphql-hello-world```

## Hola Mundo con configuración de la base de datos MongoDB

Ejemplo en el que tenemos un simple hola mundo en GraphQL con varios tipos de saludo y con la configuración de la base de datos MongoDB disponible para poder trabajar con bases de datos sin tener que hacer el proceso de configuración paso a paso. Simplemente tenemos que ir al fichero **.env** y en la variable de entorno añadimos la referencia de la base de datos correcta.
```graphql-hello-world-db```

## Más proyectos de tipo template para el futuro

Abierto a ideas y contribuciones, espero que os animéis a contribuir con proyectos de diferentes tipos y objetivos, para agilizar el proceso cuando trabajemos con GraphQL.

# Install
```npm install -g graphql-course/graphql-cli```
# Usage
Ejecutamos esta orden
```gql```

# Example
![CLI](./cli.gif)
