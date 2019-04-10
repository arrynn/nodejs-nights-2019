import {Storage} from '../utils/contracts/Storage'
import {Article} from '../models/Article'

export class ArticleRepository {

    public constructor(private readonly storage: Storage) {

    }

    public all() {
        return this.storage.getBulk()
    }

    public get(id: string) {
        return this.storage.get(id)
    }

    public save(article: Article) {
        return this.storage.put(article)
    }

    public update(article: Article) {
        return this.storage.put(article)
    }

    public patch(id: string, data: any) {
        return this.storage.get(id).then(res => {
            const article = Article.fromObj(res)
            article.merge(data)
            return article
        })
    }

    public delete(id: string) {
        return this.storage.remove(id)
    }
}
