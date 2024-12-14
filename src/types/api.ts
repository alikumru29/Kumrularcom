export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  details?: string;
}

export interface ApiError {
  message: string;
  code?: string;
  details?: any;
}
