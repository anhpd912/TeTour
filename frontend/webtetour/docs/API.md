# API Documentation

## Configuration

API base URL is configured in `.env` file:

```env
NEXT_PUBLIC_API_URL=https://tetour.onrender.com
```

## Authentication

### Register
```typescript
import { useRegisterMutation } from 'src/shared/services/api';

const registerMutation = useRegisterMutation({
  onSuccess: (data) => {
    console.log('Registration successful:', data);
  },
  onError: (error) => {
    console.error('Registration failed:', error);
  },
});

registerMutation.mutate({
  username: 'john_doe',
  password: 'password123',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  phoneNumber: '+84123456789',
});
```

**Endpoint:** `POST /api/auth/register`

**Request Body:**
```json
{
  "username": "string",
  "password": "string",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "phoneNumber": "string",
  "gender": true,
  "dateOfBirth": "2024-01-13"
}
```

### Login
```typescript
import { useLoginMutation } from 'src/shared/services/api';

const loginMutation = useLoginMutation({
  onSuccess: (data) => {
    console.log('Login successful:', data);
    // Token is automatically saved to localStorage
  },
});

loginMutation.mutate({
  email: 'john@example.com',
  password: 'password123',
});
```

**Endpoint:** `POST /api/auth/login`

**Request Body:**
```json
{
  "username": "string",
  "password": "string",
  "rememberMe": true
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "refresh_token_here",
  "user": {
    "id": "user_id",
    "email": "john@example.com",
    "username": "john_doe",
    "firstName": "John",
    "lastName": "Doe"
  }
}
```

### Logout
```typescript
import { AuthService } from 'src/shared/services/api';

AuthService.logout(); // Clears tokens from localStorage
```

## User Profile

### Get Profile
```typescript
import { useUserProfileQuery } from 'src/shared/services/api';

const { data: profile, isLoading } = useUserProfileQuery();
```

**Endpoint:** `GET /api/user/profile`

### Update Profile
```typescript
import { UserService } from 'src/shared/services/api';

await UserService.updateProfile({
  firstName: 'John',
  lastName: 'Doe',
  phoneNumber: '+84123456789',
});
```

**Endpoint:** `PUT /api/user/profile`

## Tours

### Get Tours List
```typescript
import { useToursQuery } from 'src/shared/services/api';

const { data: tours, isLoading } = useToursQuery({
  category: 'beach',
  minPrice: 100,
  maxPrice: 500,
  page: 1,
  limit: 10,
});
```

**Endpoint:** `GET /api/tours`

**Query Parameters:**
- `category`: string
- `minPrice`: number
- `maxPrice`: number
- `duration`: string
- `location`: string
- `search`: string
- `page`: number
- `limit`: number

### Get Tour by ID
```typescript
import { useTourByIdQuery } from 'src/shared/services/api';

const { data: tour } = useTourByIdQuery(1);
```

**Endpoint:** `GET /api/tours/:id`

### Get Trending Tours
```typescript
import { useTrendingToursQuery } from 'src/shared/services/api';

const { data: trendingTours } = useTrendingToursQuery(6);
```

**Endpoint:** `GET /api/tours/trending`

## Bookings

### Book a Tour
```typescript
import { useBookTourMutation } from 'src/shared/services/api';

const bookMutation = useBookTourMutation({
  onSuccess: (data) => {
    console.log('Booking successful:', data);
  },
});

bookMutation.mutate({
  tourId: 1,
  startDate: '2024-02-01',
  numberOfPeople: 2,
  specialRequests: 'Vegetarian meals',
});
```

**Endpoint:** `POST /api/bookings`

### Get User Bookings
```typescript
import { TourService } from 'src/shared/services/api';

const bookings = await TourService.getUserBookings();
```

**Endpoint:** `GET /api/bookings`

### Cancel Booking
```typescript
import { useCancelBookingMutation } from 'src/shared/services/api';

const cancelMutation = useCancelBookingMutation({
  onSuccess: () => {
    console.log('Booking cancelled');
  },
});

cancelMutation.mutate('booking_id');
```

**Endpoint:** `DELETE /api/bookings/:id`

## Chatbot

### Send Message
```typescript
import { useSendMessageMutation } from 'src/shared/services/api';

const sendMessageMutation = useSendMessageMutation({
  onSuccess: (data) => {
    console.log('Bot response:', data.message);
  },
});

sendMessageMutation.mutate({
  message: 'I want to visit Hanoi',
  conversationId: 'optional_conversation_id',
});
```

**Endpoint:** `POST /api/chatbot/message`

**Request Body:**
```json
{
  "message": "string",
  "conversationId": "string"
}
```

**Response:**
```json
{
  "message": "string",
  "conversationId": "string",
  "suggestions": ["suggestion1", "suggestion2"]
}
```

### Generate Itinerary
```typescript
import { useGenerateItineraryMutation } from 'src/shared/services/api';

const generateMutation = useGenerateItineraryMutation({
  onSuccess: (data) => {
    console.log('Itinerary:', data.itinerary);
  },
});

generateMutation.mutate({
  destination: 'Hanoi',
  duration: 7,
  budget: 1500,
  interests: ['culture', 'food', 'history'],
});
```

**Endpoint:** `POST /api/chatbot/generate-itinerary`

## Error Handling

All API calls automatically handle errors. You can catch them in the `onError` callback:

```typescript
const mutation = useSomeMutation({
  onError: (error) => {
    if (error.response?.status === 401) {
      // Unauthorized - redirect to login
      router.push('/login');
    } else if (error.response?.data?.errors) {
      // Validation errors
      console.error('Validation errors:', error.response.data.errors);
    } else {
      // General error
      console.error('Error:', error.response?.data?.message);
    }
  },
});
```

## Authentication Token

The authentication token is automatically:
- Saved to localStorage on login
- Included in all API requests via interceptor
- Refreshed automatically when expired
- Cleared on logout

You can manually check authentication status:

```typescript
import { AuthService } from 'src/shared/services/api';

const isAuthenticated = AuthService.isAuthenticated();
const token = AuthService.getToken();
```
