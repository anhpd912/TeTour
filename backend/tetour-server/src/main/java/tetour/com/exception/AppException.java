package tetour.com.exception;

import tetour.com.enums.ErrorCode;

public class AppException extends RuntimeException {
    public ErrorCode errorCode;

    public AppException(ErrorCode errorCode) {
        this.errorCode = errorCode;
    }
}
