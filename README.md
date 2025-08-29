# BFHL REST API

A Node.js REST API built with Express.js that processes arrays and categorizes elements according to specific logic requirements.

## 🚀 Features

- **POST /bfhl**: Main endpoint that processes input array
- **GET /bfhl**: Returns operation code
- **GET /health**: Health check endpoint
- Error handling and input validation
- CORS enabled for cross-origin requests

## 📋 API Specification

### POST /bfhl

**Request Body:**
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

**Response:**
```json
{
  "is_success": true,
  "user_id": "yash_sharma_15102001",
  "email": "yash.sharma@example.com",
  "roll_number": "22BCE1532",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

### Response Fields

1. **is_success**: Boolean indicating operation status
2. **user_id**: User identifier in format `{name_ddmmyyyy}`
3. **email**: User email address
4. **roll_number**: College roll number
5. **odd_numbers**: Array of odd numbers as strings
6. **even_numbers**: Array of even numbers as strings
7. **alphabets**: Array of alphabetical strings in uppercase
8. **special_characters**: Array of special characters
9. **sum**: Sum of all numbers as string
10. **concat_string**: Concatenated alphabets in reverse order with alternating caps

## 🧮 Processing Logic

### Number Classification
- Numbers are identified using `parseInt()` and `isNaN()` checks
- Odd/even classification based on modulo operation
- All numbers returned as strings

### Alphabet Processing
- Single characters: Converted to uppercase
- Multi-character strings: If all alphabetic, converted to uppercase
- Mixed strings: If contains alphabets, treated as alphabetic

### Special Characters
- Any single character that is not alphanumeric
- Symbols like `$`, `@`, `#`, `%`, etc.

### Concatenation String Algorithm
1. Extract all alphabetical characters from alphabet array
2. Convert to lowercase
3. Reverse the character order
4. Apply alternating capitalization (1st=upper, 2nd=lower, etc.)

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd 22BCE1532_bajaj
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```
   
   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

4. **Test the API**
   ```bash
   curl -X POST -H "Content-Type: application/json" \
        -d '{"data": ["a","1","334","4","R", "$"]}' \
        http://localhost:3000/bfhl
   ```

## 🧪 Testing

Run the test suite:
```bash
npm test
```

The test file (`test.js`) includes:
- All provided examples (A, B, C)
- Edge cases (empty array, single type arrays)
- Logic validation for each component

## 🌐 Deployment

### Vercel Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts**
   - Link to existing project or create new
   - Choose Node.js runtime
   - Use default build settings

### Alternative Platforms

The API can also be deployed on:
- **Railway**: Connect GitHub repo and deploy
- **Render**: Connect GitHub repo and set build command
- **Heroku**: Use `heroku create` and `git push heroku main`

## 📝 Example Usage

### Example A
```bash
curl -X POST https://your-api-url.vercel.app/bfhl \
     -H "Content-Type: application/json" \
     -d '{"data": ["a","1","334","4","R", "$"]}'
```

### Example B
```bash
curl -X POST https://your-api-url.vercel.app/bfhl \
     -H "Content-Type: application/json" \
     -d '{"data": ["2","a","y","4","&","-","*","5","92","b"]}'
```

### Example C
```bash
curl -X POST https://your-api-url.vercel.app/bfhl \
     -H "Content-Type: application/json" \
     -d '{"data": ["A","ABcD","DOE"]}'
```

## 🔧 Configuration

Update the `USER_INFO` object in `index.js` with your personal details:

```javascript
const USER_INFO = {
    user_id: "your_name_ddmmyyyy",
    email: "your.email@example.com",
    roll_number: "YOUR_ROLL_NUMBER"
};
```

## 📊 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | /bfhl    | Main processing endpoint |
| GET    | /bfhl    | Returns operation code |
| GET    | /health  | Health check |
| GET    | /        | API information |

## 🚨 Error Handling

The API includes comprehensive error handling:

- **400 Bad Request**: Invalid input format
- **500 Internal Server Error**: Server processing errors
- **404 Not Found**: Invalid endpoints

Example error response:
```json
{
  "is_success": false,
  "error": "Invalid input: 'data' must be an array"
}
```

## 🔗 Dependencies

- **express**: Web framework for Node.js
- **cors**: Cross-Origin Resource Sharing middleware
- **nodemon**: Development dependency for auto-reload

## 📄 License

MIT License

## 👤 Author

**22BCE1532**
- Email: yash.sharma@example.com
- Roll Number: 22BCE1532

---

**Note**: Remember to update the personal information in the code before deployment!
