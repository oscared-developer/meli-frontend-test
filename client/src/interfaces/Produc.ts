export interface Product {
  pictures: URL[];
  condition: string;
  sold_quantity: number;
  title: string;
  price: number;
}

export interface ProductDescription {
  plain_text: string;
}

interface URL {
  url: string;
}
