import { useEffect, useRef } from "react";

function ChartChomage({ data, departementChoisi }) {
  const graph = useRef(null);

  useEffect(() => {
    if (!data || data.length === 0) return;

    const chart = document.getElementById("scatterChart");
    if (!chart) return;

    const ctx = chart.getContext("2d");

    if (graph.current) {
      graph.current.destroy();
    }



    graph.current = new Chart(ctx, {
      type: "scatter",
      data: {
        datasets: data.map((item) => ({
          label: item.departement.nomDepartement,
          data: [
            {
              x: item.tauxChomage,
              y: item.tauxPauvrete,
            },
          ],
          backgroundColor: item.departement.nomDepartement === departementChoisi ? "#dc2626" : "#fecaca",
          pointRadius: 8,
          pointHoverRadius: 10,
          pointBackgroundColor: item.departement.nomDepartement === departementChoisi ? "#dc2626" : "#fecaca",
        })),
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                return `${context.dataset.label} - Pauvreté: ${context.parsed.y}%, Chômage: ${context.parsed.x}% `;
              },
            },
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Taux de chômage (%)",
            },
          },
          y: {
            title: {
              display: true,
              text: "Taux de pauvreté (%)",
            },
          },
        },
      },
    });
  }, [data, departementChoisi]);

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
        <h2 className="text-xl font-bold text-bold">Relation entre chômage et pauvreté</h2>
      </div>
      <div className="h-[350px]">
        <canvas id="scatterChart"></canvas>
      </div>
    </div>
  );
}
export default ChartChomage;
