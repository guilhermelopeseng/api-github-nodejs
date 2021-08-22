# API Github
> Essa API for desenvolvida em NodeJS

## Utilização da API
Para utilizaar a API segue um exemplo utilizando o curl

Iniciar a aplicação em desenvolvimento
```bash
yarn dev:server
```

Em outro terminal

```bash
curl -i -X POST -H "Content-Type: application/json" -d \
'{"username": "yourusername"}' \
http://localhost:3333/user
```
