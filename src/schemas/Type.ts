export interface INews {
    description: string;
    content: string;
    publishedAt: Date;
    source: ISource;
    title: string;
    url: string;
    urlToImage: string;
  }
  export interface ISource {
    id: string;
    name: string;
  }

  
