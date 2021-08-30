import { ProductItem } from './product/Product.types';

export interface Response {
  items: ProductItem[];
  meta: ResponseMeta;
  links: ResponseLinks;
}

export interface ResponseLinks {
  first: string;
  previous: string;
  next: string;
  last: string;
}

export interface ResponseMeta {
  itemCount: number;
  totalItems: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}
