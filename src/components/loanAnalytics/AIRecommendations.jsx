import RecommendationCard from "./RecommendationCard";

export default function AIRecommendations() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-[#f8f8f8] p-5 dark:border-[#2a2a2a] dark:bg-[#1a1a1a]">
      <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
        AI Recommendations
      </h3>

      <div className="space-y-4">
        {[1, 2].map((_, index) => (
          <RecommendationCard key={index} />
        ))}
      </div>
    </div>
  );
}
