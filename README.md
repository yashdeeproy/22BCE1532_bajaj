# 🚀 BFHL REST API - 22BCE1532

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yashdeeproy/22BCE1532_bajaj)

A professional Node.js REST API built with Express.js that processes arrays and categorizes elements according to specific business logic requirements.

## 👨‍💻 Developer Information

- **Name**: Yashdeep Roy
- **Roll Number**: 22BCE1532
- **Email**: yashdeeproy2004@gmail.com
- **Repository**: [https://github.com/yashdeeproy/22BCE1532_bajaj](https://github.com/yashdeeproy/22BCE1532_bajaj)

## 🌟 Features

- **Dynamic User ID Generation** with current date (DDMMYYYY format)
- **Professional MVC Architecture** with controllers, routes, and middleware
- **Comprehensive Data Processing** for numbers, alphabets, and special characters
- **Advanced String Concatenation** with reverse order alternating caps
- **Robust Error Handling** and input validation
- **CORS Enabled** for cross-origin requests
- **Production Ready** with deployment configurations

## 📋 API Specification

### Main Endpoint: POST /bfhl

**Request:**
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

**Response:**
```json
{
  "is_success": true,
  "user_id": "yashdeeproy_29082025",
  "email": "yashdeeproy2004@gmail.com",
  "roll_number": "22BCE1532",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

### Additional Endpoints

| Method | Endpoint | Description | Response |
|--------|----------|-------------|----------|
| GET | `/bfhl` | Operation code | `{"operation_code": 1}` |
| GET | `/health` | Health check | `{"status": "OK", "message": "Server is running"}` |
| GET | `/` | API information | API documentation |

## 🏗️ Project Structure

```
22BCE1532_bajaj/
├── config/
│   └── userConfig.js          # User configuration & dynamic date
├── controllers/
│   └── bfhlController.js      # Business logic controllers
├── middleware/
│   └── validation.js          # Input validation & error handling
├── routes/
│   ├── bfhlRoutes.js         # BFHL specific routes
│   └── index.js              # General API routes
├── utils/
│   └── dataProcessor.js      # Data processing utilities
├── index.js                  # Main application entry point
├── test.js                   # Test suite
├── vercel.json              # Deployment configuration
└── package.json             # Project dependencies
```

## 🧮 Processing Logic

### 1. Number Classification
- **Odd Numbers**: Numbers with remainder 1 when divided by 2
- **Even Numbers**: Numbers with remainder 0 when divided by 2
- **Sum Calculation**: Total of all numeric values
- **Format**: All numbers returned as strings

### 2. Alphabet Processing
- **Single Characters**: Converted to uppercase (a → A)
- **Multi-character Strings**: All alphabetic strings uppercased
- **Mixed Content**: Strings containing any alphabets treated as alphabetic

### 3. Special Characters
- **Definition**: Non-alphanumeric single characters
- **Examples**: `$`, `@`, `#`, `%`, `&`, `*`, `-`, `+`

### 4. Concatenation Algorithm
1. Extract all alphabetical characters from alphabet array
2. Convert to lowercase
3. Reverse the character sequence
4. Apply alternating capitalization (1st=Upper, 2nd=Lower, 3rd=Upper...)

**Example**: `["A", "ABCD", "DOE"]` → `"EoDdCbAa"`

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yashdeeproy/22BCE1532_bajaj.git
   cd 22BCE1532_bajaj
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Server will start at `http://localhost:3000`

4. **Run tests**
   ```bash
   npm test
   ```

## 🧪 Testing Examples

### Example A - Mixed Data
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a","1","334","4","R", "$"]}'
```

### Example B - Complex Array
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["2","a","y","4","&","-","*","5","92","b"]}'
```

### Example C - Alphabets Only
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["A","ABcD","DOE"]}'
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel login
vercel
```

### Railway
1. Connect GitHub repository at [railway.app](https://railway.app)
2. Auto-deploy from main branch

### Render
1. Create web service at [render.com](https://render.com)
2. Connect repository and deploy

## 📊 Performance Features

- **Fast Response Times**: Optimized algorithms
- **Scalable Architecture**: Modular design
- **Error Resilience**: Comprehensive error handling
- **Input Validation**: Robust request validation
- **Dynamic Configuration**: Runtime user ID generation

## 🔧 Environment Variables

The application automatically handles:
- `PORT`: Server port (default: 3000)
- Dynamic date generation for user_id
- CORS configuration for cross-origin requests

## 🚨 Error Handling

### Common Error Responses

**Invalid Input (400)**
```json
{
  "is_success": false,
  "error": "Invalid input: 'data' must be an array"
}
```

**Server Error (500)**
```json
{
  "is_success": false,
  "error": "Internal server error"
}
```

**Not Found (404)**
```json
{
  "is_success": false,
  "error": "Endpoint not found"
}
```

## 📈 API Usage Statistics

- **Response Format**: JSON
- **Status Codes**: 200 (Success), 400 (Bad Request), 404 (Not Found), 500 (Server Error)
- **Content-Type**: application/json
- **CORS**: Enabled for all origins

## 🎯 Business Logic Requirements Met

✅ **Dynamic User ID**: `yashdeeproy_DDMMYYYY`  
✅ **Array Processing**: Numbers, alphabets, special characters  
✅ **String Concatenation**: Reverse order with alternating caps  
✅ **Sum Calculation**: All numbers as string  
✅ **Error Handling**: Comprehensive validation  
✅ **Professional Structure**: MVC architecture  
✅ **Production Ready**: Deployment configured  

## 📝 License

MIT License - See LICENSE file for details

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📧 Contact

**Yashdeep Roy**
- Email: yashdeeproy2004@gmail.com
- GitHub: [@yashdeeproy](https://github.com/yashdeeproy)
- Roll Number: 22BCE1532

---

**⭐ Star this repository if you found it helpful!**

Built with ❤️ using Node.js and Express.js