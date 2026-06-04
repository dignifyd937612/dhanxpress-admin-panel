const ContactOptionCard = ({ icon: Icon, title, subTitle }) => {
  return (
    <button className="flex w-full items-start gap-4 rounded-xl bg-[#fafafa] p-4 transition-all duration-300 hover:bg-gray-50 dark:bg-[#252525] dark:hover:bg-[#303030]">
      <div className="mt-1 text-gray-700 dark:text-gray-300">
        <Icon size={20} />
      </div>

      <div className="text-left">
        <h3 className="text-[15px] font-medium text-gray-900 dark:text-white">
          {title}
        </h3>

        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          {subTitle}
        </p>
      </div>
    </button>
  );
};

export default ContactOptionCard;
