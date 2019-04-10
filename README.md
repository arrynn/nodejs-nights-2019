## Instructions:

1. `npm install`

2. `npm run dist`

## Endpoints:

* base url: `localhost:8083/articles`
* typical REST endpoint behaviour
    * `GET` `localhost:8083/articles` - List all articles
    * `GET` `localhost:8083/articles/:id` - Get a particular article
    * `POST` `localhost:8083/articles/` - Create article (json format described below)
    * `PUT` `localhost:8083/articles/:id` - Update article
    * `PATCH` `localhost:8083/articles/:id` - Update article partially
    * `DELETE` `localhost:8083/articles/:id` - Delete article
* json format:
    * ```
      {
        "title": "How to cook an egg",
        "text": "boil for 7,5 minutes.",
        "id": "d1708cc7-29c4-4d40-a042-7e4f0ab0d82b"
      }
      ```
    * notes:
        * no need to have `id` in `POST` and `PATCH` request inside the request body
        * no prepared data - data directory is created on first run. 
