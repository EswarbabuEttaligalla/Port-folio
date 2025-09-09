function Toast({ message, type, onClose }) {
  try {
    React.useEffect(() => {
      const timer = setTimeout(onClose, 4000);
      return () => clearTimeout(timer);
    }, [onClose]);

    const getToastStyles = () => {
      switch (type) {
        case 'success':
          return 'bg-green-500 text-white';
        case 'error':
          return 'bg-red-500 text-white';
        case 'info':
          return 'bg-blue-500 text-white';
        default:
          return 'bg-gray-800 text-white';
      }
    };

    const getIcon = () => {
      switch (type) {
        case 'success':
          return 'check-circle';
        case 'error':
          return 'x-circle';
        case 'info':
          return 'info';
        default:
          return 'bell';
      }
    };

    return (
      <div className="fixed top-24 right-4 z-50 animate-in slide-in-from-right-2 duration-300" data-name="toast" data-file="components/Toast.js">
        <div className={`${getToastStyles()} px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 max-w-sm`}>
          <div className={`icon-${getIcon()} text-xl`}></div>
          <span className="font-medium">{message}</span>
          <button onClick={onClose} className="ml-2 hover:opacity-80 transition-opacity">
            <div className="icon-x text-lg"></div>
          </button>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Toast component error:', error);
    return null;
  }
}
