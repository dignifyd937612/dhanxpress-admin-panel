import GaugeComponent from "react-gauge-component";

const GaugeMeter = () => {
  return (
    <div className="relative h-[170px] w-full">
      <GaugeComponent
        type="semicircle"
        arc={{
          width: 0.28,
          padding: 0.006,
          cornerRadius: 2,
          subArcs: [
            {
              limit: 20,
              color: "#ff6b5f",
            },
            {
              limit: 40,
              color: "#18c98b",
            },
            {
              limit: 60,
              color: "#1f62f0",
            },
            {
              limit: 80,
              color: "#f5be10",
            },
            {
              limit: 100,
              color: "#007a10",
            },
          ],
        }}
        pointer={{
          color: "#ffffff",
          length: 0.8,
          width: 25,
        }}
        labels={{
          valueLabel: {
            hide: true,
          },
          tickLabels: {
            hideMinMax: true,
            defaultTickValueConfig: {
              style: {
                fill: "#9CA3AF",
                fontSize: "11px",
              },
            },
          },
        }}
        value={92}
        minValue={0}
        maxValue={100}
      />

      <div className="absolute left-1/2 top-[70%] z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <h2 className="text-[25px] font-semibold leading-none text-gray-900 dark:text-white">
          92%
        </h2>

        <p className="mt-2 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
          Efficient Follow - Ups
        </p>
      </div>
    </div>
  );
};

export default GaugeMeter;
