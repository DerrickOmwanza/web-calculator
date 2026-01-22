# Simple Web Calculator

A fully functional web-based calculator with a responsive UI, built with HTML, CSS, and JavaScript.

## Features

✅ **Arithmetic Operations**: Addition (+), Subtraction (−), Multiplication (×), Division (÷)
✅ **Input Validation**: Prevents invalid inputs like multiple decimals, division by zero
✅ **Clear/Reset Function**: AC button clears all, DEL removes last digit
✅ **Sign Toggle**: Toggle between positive and negative numbers
✅ **Responsive UI**: Works seamlessly on desktop, tablet, and mobile devices
✅ **Keyboard Support**: Full keyboard support for number entry and operations
✅ **Error Handling**: Graceful error handling for edge cases

## How to Run

### Using XAMPP

1. **Start XAMPP**
   - Open XAMPP Control Panel
   - Click "Start" for Apache and MySQL (if needed)

2. **Open Calculator**
   - Open your browser
   - Navigate to: `http://localhost/Web-Calculator/`
   - The calculator will load and be ready to use

## File Structure

```
Web-Calculator/
├── index.html       # Main HTML structure
├── style.css        # Responsive styling
├── script.js        # Calculator logic and validation
└── README.md        # This file
```

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| 0-9 | Enter numbers |
| . | Decimal point |
| + | Addition |
| - | Subtraction |
| * | Multiplication |
| / | Division |
| Enter or = | Calculate result |
| Backspace | Delete last digit |
| Escape | Clear all |

## Features Detail

### Input Validation
- Prevents multiple leading zeros
- Prevents multiple decimal points
- Prevents operations with empty inputs
- Division by zero protection
- Maximum digit limit (15 digits) to prevent overflow

### Display
- Main display shows current input/result
- Expression display shows the ongoing calculation
- Error messages for invalid operations

### Responsive Design
- Mobile-first approach
- Optimized for screens as small as 360px
- Smooth animations and transitions
- Touch-friendly button sizes

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- No external dependencies required
- Pure client-side JavaScript (no server needed)
- Works offline
- No data is collected or sent anywhere

## Future Enhancements (Optional)

- History of calculations
- Advanced functions (square root, percentage, etc.)
- Dark mode toggle
- Scientific calculator mode
- Calculation memory (M+, M-, etc.)

---

**Created**: 2025 | **Technology**: HTML5, CSS3, JavaScript ES6
