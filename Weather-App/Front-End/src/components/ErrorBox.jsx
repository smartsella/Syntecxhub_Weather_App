import { AlertCircle, X } from "lucide-react";
import { useState } from "react";

const ErrorBox = ({ message, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 max-w-sm w-full">
      <div className="bg-red-50 border border-red-200 rounded-2xl shadow-lg p-4">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <AlertCircle className="h-6 w-6 text-red-500" />
          </div>
          <div className="flex-1">
            <h4 className="text-red-800 font-semibold mb-1">Error</h4>
            <p className="text-red-600 text-sm">{message}</p>
          </div>
          <button
            onClick={handleClose}
            className="flex-shrink-0 p-1 rounded-lg hover:bg-red-100 transition-colors duration-200"
          >
            <X className="h-4 w-4 text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorBox;
