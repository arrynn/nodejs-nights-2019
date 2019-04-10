export class Article {
    public constructor(public id: string, public title: string, public text: string) {

    }

    public static fromObj(obj: any) {
        return new Article(obj.id, obj.title, obj.text)
    }

    public merge(data: any){
        for (let attr in this){
            if(data.hasOwnProperty(attr)){
                this[attr] = data[attr]
            }
        }
    }
}
