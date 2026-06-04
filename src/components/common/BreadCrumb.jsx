"use client";

import Link from "next/link";

const Breadcrumb = ({ items = [] }) => {
  return (
    <div className="flex items-center overflow-x-auto px-3">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div
            key={index}
            className={`relative flex items-center px-8 py-2 text-sm font-medium transition-all duration-300 ${isLast ? "bg-orange-400 text-white" : "bg-gray-200 text-gray-600 hover:-translate-x-1 hover:bg-orange-400 hover:text-white hover:shadow-lg"} ${index !== 0 ? "-ml-2" : ""} `}
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%, 12px 50%)",
            }}
          >
            {item.href && !isLast ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span>{item.label}</span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
