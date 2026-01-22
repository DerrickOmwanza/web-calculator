# Simple Web Calculator

A fully functional web-based calculator with a responsive UI, auto-saving calculation history, and PHP backend. Built with HTML5, CSS3, JavaScript, and PHP.

## Features

### Core Calculator Functions
✅ **Arithmetic Operations**: Addition (+), Subtraction (−), Multiplication (×), Division (÷)
✅ **Input Validation**: Prevents invalid inputs like multiple decimals, division by zero
✅ **Clear/Reset Function**: AC button clears all, DEL removes last digit
✅ **Sign Toggle**: Toggle between positive and negative numbers (+/− button)
✅ **Error Handling**: Graceful error handling for edge cases

### UI/UX Features
✅ **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
✅ **Clash Display Color Scheme**: Modern blue, purple, and dark navy aesthetics
✅ **Improved Button Interactions**: 
  - Ripple effect on hover
  - Smooth transitions with cubic-bezier timing
  - Inset shadows for 3D depth
  - Satisfying press feedback
✅ **Keyboard Support**: Full keyboard support for number entry and operations
✅ **Beautiful Gradients**: Gradient backgrounds and button styling throughout

### History & Data Persistence
✅ **Auto-Saving Calculations**: Every calculation automatically saves to history
✅ **Calculation History Panel**: Slide-in sidebar showing all past calculations
✅ **Timestamps**: Each calculation displays the exact time it was performed
✅ **Delete Individual Items**: Red X button to remove specific calculations
✅ **Clear All**: Button to clear entire calculation history
✅ **Persistent Storage**: History saved in JSON file via PHP backend
✅ **Last 50 Calculations**: Keeps the most recent 50 calculations

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
├── index.html       # Main HTML structure + history panel
├── style.css        # Responsive styling with Clash Display colors
├── script.js        # Calculator logic, validation, and history management
├── api.php          # PHP backend for history management
├── history.json     # JSON file storing calculation history
└── README.md        # Documentation
```

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript ES6
- **Backend**: PHP 7.x+
- **Storage**: JSON file-based (no database required)
- **Server**: XAMPP (Apache + PHP)
- **Deployment**: GitHub + Local XAMPP

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
- Automatically formats very large/small numbers to scientific notation

### Display Features
- Main display shows current input/result with 2px blue border
- Expression display shows the ongoing calculation in blue text
- Error messages for invalid operations
- Clear visual feedback on all interactions

### Responsive Design
- Mobile-first approach
- Optimized for screens from 360px to 4K+
- Smooth animations and transitions with cubic-bezier timing
- Touch-friendly button sizes (18px padding)
- History panel resizes for mobile (full width on small screens)

### PHP Backend (api.php)
**Endpoints:**
- `GET /api.php?action=get` - Retrieve all calculations from history
- `POST /api.php?action=save` - Save new calculation to history
- `POST /api.php?action=delete` - Delete specific calculation by ID
- `POST /api.php?action=clear` - Clear entire calculation history

**Data Structure:**
```json
{
  "id": "unique_timestamp_id",
  "expression": "7 + 3",
  "result": "10",
  "timestamp": "2026-01-22 17:49:32"
}
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Usage Guide

### Basic Calculations
1. Click number buttons or use keyboard (0-9, .)
2. Click operator (+, −, ×, ÷) or use keyboard (+, -, *, /)
3. Click = or press Enter to calculate
4. Calculation automatically saves to history

### History Management
1. Click 📋 History button (bottom right) to open history panel
2. View all past calculations with timestamps
3. Click red × to delete individual calculation
4. Click "Clear All" to remove entire history

### Keyboard Navigation
- **Numbers**: 0-9 keys
- **Operators**: +, -, *, /
- **Calculate**: Enter or =
- **Delete Last**: Backspace
- **Clear All**: Escape
- **Toggle Sign**: Use +/− button

## API Documentation

### Save Calculation
```bash
curl -X POST http://localhost/Web-Calculator/api.php?action=save \
  -H "Content-Type: application/json" \
  -d '{"expression": "5 + 3", "result": "8"}'
```

### Get History
```bash
curl http://localhost/Web-Calculator/api.php?action=get
```

### Delete Calculation
```bash
curl -X POST http://localhost/Web-Calculator/api.php?action=delete \
  -H "Content-Type: application/json" \
  -d '{"id": "697242a3335d2"}'
```

### Clear All History
```bash
curl -X POST http://localhost/Web-Calculator/api.php?action=clear
```

## Notes

- Pure JavaScript calculation logic (no external dependencies for frontend)
- PHP backend for persistent history storage
- Works completely offline for calculations
- History requires PHP/Apache (XAMPP)
- Stores up to 50 most recent calculations
- JSON file-based storage (no database setup needed)

## Future Enhancements (Optional)

- Advanced functions (square root, percentage, exponents, etc.)
- Dark mode toggle
- Scientific calculator mode
- Calculation memory (M+, M-, MR, MC)
- Export history as CSV/PDF
- Calculation templates
- Voice input support

---

**Created**: 2025 | **Technology**: HTML5, CSS3, JavaScript ES6
