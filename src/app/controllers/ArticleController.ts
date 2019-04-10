import {ArticleRepository} from '../repositories/ArticleRepository'

export class ArticleController {

    public constructor(private readonly repository: ArticleRepository) {
    }

    public async all() {
        return await this.repository.all()
    }

    public async get(id: string) {
        return await this.repository.get(id)
    }

    public async create(request: any) {
        return await this.repository.save(request.body)
    }

    public async update(id: string, request: any) {
        return await this.repository.update(request.body)
    }

    public async patch(id: string, request: any) {
        return await this.repository.patch(id, request.body)
    }

    public async delete(id: string) {
        return await this.repository.delete(id)
    }
}



