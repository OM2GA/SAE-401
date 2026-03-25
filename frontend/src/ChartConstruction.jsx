import { useEffect, useRef } from "react";
import { DataStats } from "./apiCall";

function ChartConstruction({ regionChoisi }) {
  const graph = useRef(null);

  useEffect(() => {
    const chargerDonnees = async () => {
      const data2021 = await DataStats(regionChoisi, 2021);
      const data2022 = await DataStats(regionChoisi, 2022);
      const data2023 = await DataStats(regionChoisi, 2023);

      if (!data2021 || !data2022 || !data2023) return;

      const total2021 = data2021.reduce((sum, item) => sum + item.constructionNeuve, 0);
      const total2022 = data2022.reduce((sum, item) => sum + item.constructionNeuve, 0);
      const total2023 = data2023.reduce((sum, item) => sum + item.constructionNeuve, 0);

      const chart = document.getElementById("chartEvolutionConstruction");
      if (!chart) return;

      const ctx = chart.getContext("2d");

      if (graph.current) {
        graph.current.destroy();
      }

      graph.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["2021", "2022", "2023"],
          datasets: [
            {
              label: "Construction neuve",
              data: [total2021, total2022, total2023],
              backgroundColor: "rgba(239, 38, 38, 0.3)",
              borderColor: "#DC2626",
              borderWidth: 1,
              pointRadius: 6,
              pointHoverRadius: 8,
              pointBackgroundColor: "#ffffff",
              fill: true,
              lineTension: 0.3,
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Nombre de constructions"
              }
            }
          }
        }
      });
    };

    chargerDonnees();
  }, [regionChoisi]);

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
        <h2 className="text-xl font-bold text-bold"> Évolution du nombre de nouvelles constructions</h2>
      </div>
      <div className="h-[350px]">
        <canvas id="chartEvolutionConstruction"></canvas>
      </div>
    </div>
  );
}

export default ChartConstruction;
