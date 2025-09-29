declare type ErrorResponse = {
  message: string;
  code: number;
};

declare type SuccessfullResponse<T> = {
  message: "success";
} & T;

declare type APIResponse<T> = SuccessfullResponse<T> | ErrorResponse;

declare type MetaData = {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage: number;
};

declare type PaginatedResponse<T> = {
  metadata: MetaData;
} & T;
