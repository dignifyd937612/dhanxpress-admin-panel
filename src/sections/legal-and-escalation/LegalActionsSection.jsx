const LegalActionsSection = () => {
  const actions = [
    {
      title: "Optimizer Roaster",
      className:
        "bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700",
    },

    {
      title: "Assign Leads",
      className:
        "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
    },

    {
      title: "Export Report",
      className:
        "bg-[#1f1f1f] hover:bg-black dark:bg-orange-500 dark:hover:bg-orange-600",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 p-5">
      {actions.map((action) => (
        <button
          key={action.title}
          className={`rounded-lg py-3 text-sm font-medium text-white transition-all duration-300 hover:shadow-md ${action.className}`}
        >
          {action.title}
        </button>
      ))}
    </div>
  );
};

export default LegalActionsSection;
