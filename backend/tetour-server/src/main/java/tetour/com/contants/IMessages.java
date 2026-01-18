package tetour.com.contants;

public interface IMessages {
    // User related messages
    String USER_BANNED = "User banned";
    String USER_NOT_FOUND = "User not found";
    String USERNAME_OR_EMAIL_ALREADY_EXISTS = "Username or email already exists";
    String USERNAME_ALREADY_EXISTS = "Username already exists";
    String EMAIL_ALREADY_EXISTS = "Email already exists";

    // Authentication related messages
    String INVALID_CREDENTIALS = "Invalid credentials";
    String INVALID_REFRESH_TOKEN = "Invalid refresh token";
    String INVALID_PASSWORD = "Invalid password";
    String LENGTH_PASSWORD = "Password must be at least 8 characters";
    String INVALID_USERNAME = "Invalid username";
    String INVALID_EMAIL = "Invalid email";
    String UNAUTHORIZED = "Unauthorized";
    String UNAUTHENTICATED = "You do not have access to this api";
    String FORBIDDEN = "Forbidden";
    String INVALID_TOKEN = "Invalid token";

    // General messages
    String PERMISSION_NOT_FOUND = "Permission not found";
    String UNKNOWN_ERROR = "Unknown error";
    String SEND_MAIL_FAILED = "Send email failed";
    String ROLE_NOT_FOUND = "Role not found in system";

    // Subject related messages
    String SUBJECT_NOT_FOUND = "Subject not found";
    String SUBJECT_CODE_ALREADY_EXISTS = "Subject code already exists";

    // Class related messages
    String CLASS_NOT_FOUND = "Class not found";
    String CLASS_CODE_NOT_FOUND = "Invalid class code";

    // Teacher related messages
    String TEACHER_NOT_FOUND = "Teacher not found";
    String TEACHER_ALREADY_EXISTS = "Teacher already exists for this user";

    // Class Subject related messages
    String CLASS_SUBJECT_NOT_FOUND = "Class subject not found";
    String CLASS_SUBJECT_ALREADY_EXISTS = "Class subject already exists";

    // Class Teacher related messages
    String CLASS_TEACHER_NOT_FOUND = "Class teacher not found";
    String CLASS_TEACHER_ALREADY_EXISTS = "Class teacher already exists";

    // Timetable related messages
    String TIMETABLE_NOT_FOUND = "Timetable not found";
    String TIMETABLE_OVERLAP = "Teacher's schedule overlaps with another timetable";

    // Class Student related messages
    String CLASS_STUDENT_NOT_FOUND = "Class student not found";
    String CLASS_STUDENT_ALREADY_EXISTS = "Student already enrolled in this class";
    String STUDENT_NOT_FOUND = "Student not found";

    String OLDPASSWORD_NOT_MATCH = "Old password not match";
    String CONFIRM_PASSWORD_NOT_MATCH = "Confirm password not match";
}
