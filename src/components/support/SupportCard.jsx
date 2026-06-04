const SupportCard = ({ heading, width, children }) => {
  return (
    <div
      className={`col-span-${width} overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-[#2a2a2a] dark:bg-[#1a1a1a]`}
    >
      <div className="border-b border-gray-200 bg-[#fafafa] px-5 py-4 dark:border-[#2a2a2a] dark:bg-[#252525]">
        <h2 className="text-[18px] font-semibold tracking-[-0.3px] text-[#2f2f2f] dark:text-white">
          {heading}
        </h2>
      </div>

      <div className="p-4">{children}</div>
    </div>
  );
};

export default SupportCard;
