export default function RealTimeActivity() {
  const activities = [
    {
      id: 1,
      name: "Ruchika Rowat",
      time: "12:21 PM",
      action: "Purchase the Enterprise package for ₹54,901",
      image: "https://i.pravatar.cc/40?img=1",
    },
    {
      id: 2,
      name: "Ruchika Rowat",
      time: "12:21 PM",
      action: "Purchase the Enterprise package for ₹54,901",
      image: "https://i.pravatar.cc/40?img=2",
    },
    {
      id: 3,
      name: "Ruchika Rowat",
      time: "12:21 PM",
      action: "Purchase the Enterprise package for ₹54,901",
      image: "https://i.pravatar.cc/40?img=3",
    },
    {
      id: 4,
      name: "Ruchika Rowat",
      time: "12:21 PM",
      action: "Purchase the Enterprise package for ₹54,901",
      image: "https://i.pravatar.cc/40?img=4",
    },
  ];

  return (
    <div className="h-full rounded-2xl border border-gray-200 bg-[#f8f8f8] p-5 dark:border-[#2a2a2a] dark:bg-[#1a1a1a]">
      <h3 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">
        Real Time Activity (Customer)
      </h3>

      <div className="mb-4 grid grid-cols-3 border-b border-gray-200 pb-3 text-xs font-medium text-gray-500 dark:border-[#2a2a2a] dark:text-gray-400">
        <span>Name</span>
        <span>Time</span>
        <span>Action</span>
      </div>

      <div className="space-y-3">
        {activities.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-3 items-center rounded-xl border-b border-gray-200 px-2 pb-3 text-sm transition-all hover:bg-white dark:border-[#2a2a2a] dark:hover:bg-[#252525]"
          >
            <div className="flex items-center gap-2">
              <img
                src={item.image}
                alt={item.name}
                className="h-8 w-8 rounded-full object-cover ring-2 ring-white dark:ring-[#2a2a2a]"
              />

              <span className="text-xs font-medium text-gray-900 dark:text-white">
                {item.name}
              </span>
            </div>

            <span className="text-xs text-gray-500 dark:text-gray-400">
              {item.time}
            </span>

            <span className="text-xs leading-5 text-gray-700 dark:text-gray-300">
              {item.action}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
