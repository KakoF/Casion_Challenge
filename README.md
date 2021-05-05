# Casion Desafio

Api em NodeJs com framework Express além de:

- Typescript
- TypeOrm
- Swagger
- Mongo

Alguns princípios de SOLID foram adotados, como a singularidade de responsábilidade e usos de interface na injeção das dependências

## Dependências para rodar o projeto

Não tenho muita prática com docker mas, coloquei um arquivo docker-compose.yml para inicializar o banco com a prévias configurações para rodar a aplicação.
Executar os dois comandos na raíz:

```bash
yarn install ou npm install (para instalar as dependências)

...

docker-compose up -d (subir o container com o mongo)
```

## Run

Bom, como não há ambientes acabei subindo GIT os envs apenas para demonstração

```python
yarn run dev (executa o projeto apontando para .env.development)

yarn run prod (executa o projeto apontando para .env)
```

## Swagger

Foi adicionado a documentação com swagger para simplificar e testar o consumo dos endpoints

```python
/api-docs
```
