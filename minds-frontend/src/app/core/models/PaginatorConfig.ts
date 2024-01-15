import { Product } from "./Product";

export class PaginatorConfig {
    content?: Product[];
    totalPages?: number;
    totalElements: number = 0;
    last?: boolean;
    pageSize?: number;
    pageIndex?: number;
    sort?: any;
    numberOfElements?: number;
    first?: boolean;
    empty?: boolean;
  }