# Email-Validator

A simple web application to validate email addresses using HTML, CSS, and JavaScript. This project integrates with the Email Validation API from [emailvalidation.io](https://emailvalidation.io) to provide comprehensive email validation.

## Features

- Real-time email validation
- Detailed validation results including:
  - Email deliverability status
  - Domain verification
  - MX record check
  - SMTP validation
  - Disposable email detection
  - Spam score
  - Format validation
- Clean and responsive UI
- Easy to use interface

## Prerequisites

- A web browser (Chrome, Firefox, Safari, Edge, etc.)
- API key from [emailvalidation.io](https://emailvalidation.io) (free tier available)

## Setup Instructions

1. **Clone or download this repository**
   ```bash
   git clone <repository-url>
   cd Email-Validator
   ```

2. **Get your API key**
   - Visit [emailvalidation.io](https://emailvalidation.io)
   - Sign up for a free account
   - Copy your API key from the dashboard

3. **Configure the API key**
   - Open `js/script.js`
   - Replace the placeholder on line 23 with your actual API key:
     ```javascript
     let key = "your_actual_api_key_here";
     ```

## How to Run

### Option 1: Direct File Opening
1. Navigate to the project folder
2. Double-click `index.html`
3. The application will open in your default browser

### Option 2: Using Live Server (Recommended)
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Your browser will open with live reload capability

### Option 3: Using Python HTTP Server
```bash
# Python 3
python -m http.server 8000

# Then visit http://localhost:8000 in your browser
```

## Usage

1. Enter an email address in the input field
2. Click the validation button
3. View detailed validation results displayed on the screen

## Project Structure

```
Email-Validator/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Styling
├── js/
│   └── script.js       # JavaScript logic and API integration
└── README.md           # Documentation
```

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Email Validation API from emailvalidation.io

## API Information

This project uses the Email Validation API which provides:
- Free tier with limited requests
- Comprehensive email validation
- Real-time results

## Security Note

⚠️ **Important**: Never commit your actual API key to public repositories. Consider using environment variables or a config file that's included in `.gitignore` for production projects.

## License

Free to use for educational and personal projects.

## Contributing

Feel free to fork this project and submit pull requests for any improvements.
