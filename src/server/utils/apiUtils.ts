import { ApiError } from "../../types/api.js";

export class ApiUtils {
  static handleError(error: unknown): ApiError {
    if (error instanceof Error) {
      return {
        message: error.message,
        details: error.stack,
      };
    }
    return {
      message: "An unknown error occurred",
      details: error,
    };
  }

  static createErrorResponse(error: ApiError) {
    return {
      success: false,
      error: error.message,
      details: error.details,
    };
  }

  static createSuccessResponse<T>(data: T) {
    return {
      success: true,
      data,
    };
  }
}
