
export interface Post {
    id: number;
    title: string;
    date: string;
    author: string;
    content: string;
  }
  
  export interface Blog {
    title: string;
    description: string;
    posts: Post[];
  }
  
  export interface BlogData {
    blog: Blog;
  }
  