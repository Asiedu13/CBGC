
export class ArticleObj {
    constructor(id, title, type, liked, clicks, data ){
        this.id = id;
        this.title = title;
        this.type = type;
        this.liked = liked,
        this.clicks = clicks;
        this.data = data;
    }

    showData(){
        console.log(id, title, liked, clicks, data)
    }
}


const ArticlesData = [
    {   
        id: 1,
        name: 'Anxious',
        type:"feelings",
        liked:undefined,
        clicks: 0,
        data:'He is worried about tomorrow. He is concerned about the world around hom',
    },
    {   
        id: 2,
        name: 'Breaking the status quo',
        type:"society",
        liked: true,
        clicks: 0,
        data:'He is worried about tomorrow. He is concerned about the world around hom',
    },
    {   
        id: 3,
        name: 'His Occupation',
        type:"Society",
        liked:undefined,
        clicks: 0,
        data:'He is worried about tomorrow. He is concerned about the world around hom',
    },
    {   
        id: 4,
        name: 'Organisms',
        type:"Nature",
        liked:undefined,
        clicks: 0,
        data:'He is worried about tomorrow. He is concerned about the world around hom',
    }
]