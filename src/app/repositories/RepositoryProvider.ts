import {ArticleRepository} from './ArticleRepository'

export class RepositoryProvider {

    private repositories: any

    public constructor(private readonly storage: any) {
        this.bindRepositories()
    }

    bindRepositories() {
        // todo: extract into config
        this.repositories = {}
        this.repositories.article = new ArticleRepository(this.storage)
    }

    get Repositories() {
        return this.repositories
    }
}
