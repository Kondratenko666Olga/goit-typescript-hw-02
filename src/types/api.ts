export interface Urls {
    thumb: string;
    regular: string;
  }
  
  export interface Image {
    id: string;
    urls: Urls;
    alt_description?: string;
  }
  
  export interface ApiResponse {
    results: Image[];
    total: number;
    total_pages: number;
  }
  