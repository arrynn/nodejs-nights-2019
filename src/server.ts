import {AppServiceProvider} from './app/services/AppServiceProvider'
import {HttpMethods} from './app/routing/HttpMethods'

const SITE_PORT = 8083

const Koa = require('koa')
const Router = require('koa-router')
const Body = require('koa-body')
const JSONFileStorage = require('jsonfile-storage')

const path = require('path')
const fs = require('fs')
const logger = require('pino')()
const appDir = path.dirname(__filename)
const dataDir = appDir + '/data'

const app = new Koa()
const koaRouter = new Router()

const mkdirAndInitApp = () => {
    fs.mkdirSync(dataDir)
    initApp()
}

const initApp = () => {
    const storage = new JSONFileStorage(dataDir)
    const appServiceProvider = new AppServiceProvider(koaRouter, storage)

    const router = appServiceProvider.RouteProvider;

    router.registerRoute(HttpMethods.Get, '/articles', 'article', 'all')
    router.registerRoute(HttpMethods.Get, '/articles/:id', 'article', 'get')
    router.registerRoute(HttpMethods.Post, '/articles', 'article', 'create')
    router.registerRoute(HttpMethods.Put, '/articles/:id', 'article', 'update')
    router.registerRoute(HttpMethods.Patch, '/articles/:id', 'article', 'patch')
    router.registerRoute(HttpMethods.Delete, '/articles/:id', 'article', 'delete')

    app.use(koaRouter.allowedMethods())
        .use(Body())
        .use((ctx: any, next: () => void) => {
            logger.info({description:'Incoming request'}, {requestBody: ctx.request.body})
            next()
        })
        .use(async (ctx: any, next: () => void) => {
            await next()
            logger.info({description:'Outgoing response'}, {responseBody: ctx.response.body})
        }).use(koaRouter.routes())

    logger.info(`Starting server listener on port ${SITE_PORT}`)
    app.listen(SITE_PORT)
}

fs.existsSync(dataDir) === true ? initApp() : mkdirAndInitApp()
