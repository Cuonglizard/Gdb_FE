# GDB GUI Frontend

A modern React/TypeScript frontend for GDB (GNU Debugger) with a clean, intuitive interface.

## Features

- 🎯 **Real-time Debugging**: Interactive GDB session with live updates
- 🔧 **Breakpoint Management**: Easy breakpoint setting, toggling, and management
- 📊 **Variable Inspection**: Real-time variable monitoring and stack inspection
- 🎨 **Modern UI**: Clean, responsive interface built with React and Tailwind CSS
- ⚡ **TypeScript**: Full type safety and excellent developer experience
- 🔄 **WebSocket Integration**: Real-time communication with GDB backend

## Quick Start

### Prerequisites

- Node.js 16+ and npm/yarn
- GDB backend server running (see backend documentation)

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Development

```bash
# Start dev server with hot reload
npm start

# Type checking
npm run type-check

# Linting
npm run lint
npm run lint:fix

# Clean build artifacts
npm run clean
```

## Project Structure

```
frontend/
├── public/                    # Static assets
│   ├── index.html            # Main app entry point
│   ├── dashboard.html        # Dashboard entry point
│   ├── favicon.ico
│   └── static/
│       ├── css/
│       ├── images/
│       └── vendor/
├── src/
│   ├── components/           # React components
│   │   ├── Actions.ts       # Action creators
│   │   ├── BinaryLoader.tsx # Binary file loader
│   │   ├── Breakpoints.tsx  # Breakpoint management
│   │   └── ControlButtons.tsx # Debug control buttons
│   ├── types/
│   │   └── types.d.ts       # TypeScript type definitions
│   ├── utils/
│   │   ├── constants.ts     # Application constants
│   │   └── Util.ts         # Utility functions
│   ├── api/
│   │   └── GdbApi.tsx      # GDB WebSocket API
│   ├── gdbgui.tsx          # Main application
│   ├── dashboard.tsx       # Dashboard application
│   └── style.css           # Global styles
├── package.json
├── tsconfig.json           # TypeScript configuration
├── webpack.config.js       # Webpack configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── postcss.config.js       # PostCSS configuration
```

## Components

### BinaryLoader
- Drag & drop binary file loading
- Path input for remote binaries
- Loading states and error handling

### ControlButtons
- Debug control interface (play, pause, step, etc.)
- Real-time status indicators
- Keyboard shortcut support

### Breakpoints
- List all active breakpoints
- Toggle breakpoint enabled/disabled state
- Navigate to breakpoint locations
- Conditional breakpoint support

## API Integration

The frontend communicates with the GDB backend via WebSocket:

```typescript
const gdbApi = new GdbApi('ws://localhost:8080', {
  onResponse: handleGdbResponse,
  onError: handleGdbError
});

// Connect to GDB
await gdbApi.connect();

// Send commands
gdbApi.sendCommand('break main.c:42');
gdbApi.stepOver();
gdbApi.continue();
```

## Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_GDB_WS_URL=ws://localhost:8080
REACT_APP_API_BASE_URL=http://localhost:8080
```

### Webpack Configuration

The webpack configuration supports:
- TypeScript compilation
- CSS/Tailwind processing
- Hot module replacement
- Code splitting
- Production optimization

### Tailwind Configuration

Custom theme with:
- Debug-focused color palette
- Monospace font for code
- Dark mode support
- Custom components for common UI patterns

## Building for Production

```bash
# Build optimized bundle
npm run build

# Serve static files
npx serve dist
```

The build process creates optimized bundles with:
- Code splitting
- Tree shaking
- Minification
- Source maps

## Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## Development Tips

### Hot Reload
The development server supports hot module replacement for instant feedback during development.

### Type Safety
All components are fully typed with TypeScript. Use the type definitions in `src/types/types.d.ts`.

### Styling
Use Tailwind CSS utility classes. Custom components are defined in `src/style.css`.

### State Management
Currently uses React's built-in state management. For complex applications, consider adding Redux or Zustand.

## Troubleshooting

### WebSocket Connection Issues
- Verify GDB backend is running
- Check WebSocket URL in configuration
- Ensure no firewall blocking connections

### Build Issues
- Clear node_modules and reinstall dependencies
- Check Node.js version compatibility
- Verify all peer dependencies are installed

### TypeScript Errors
- Run `npm run type-check` for detailed error information
- Ensure all imported modules have type definitions
- Check tsconfig.json for correct path mappings

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details
