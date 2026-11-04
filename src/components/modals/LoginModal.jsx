import { X } from "lucide-react";

const LoginModal = ({ onClose, cancelText, confirmText, children }) => {
  return (
    <>
      <div className="p-5">{children}</div>

      <div className="flex justify-end gap-3 border-t border-gray-200 px-5 py-4 dark:border-[#2a2a2a]">
        <button
          onClick={() => onClose(false)}
          className="rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50 dark:border-[#2a2a2a] dark:bg-[#252525] dark:text-white dark:hover:bg-[#303030]"
        >
          {cancelText}
        </button>

        <button
          onClick={() => onClose(false)}
          className="rounded-xl bg-red-500 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-red-600"
        >
          {confirmText}
        </button>
      </div>
    </>
  );
};

export default LoginModal;
