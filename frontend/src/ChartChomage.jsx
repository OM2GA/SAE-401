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
          pointBackgroundColor: item.departement.nomDepartement === departementChoisi ? "#dc2626" : "#fecaca",
        })),
      },
      options: {
        responsive: true,
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
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4">Relation entre chômage et pauvreté</h2>
      <canvas id="scatterChart"></canvas>
    </div>
  );
}
export default ChartChomage;
