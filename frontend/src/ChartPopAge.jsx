import { useEffect, useRef } from "react";

function ChartpopAge({ data, departementChoisi }) {
  const graph = useRef(null)

  useEffect(() => {
    if (!data || data.length === 0) return;
    if (!departementChoisi || departementChoisi === "default") return;

    const departementData = data.find(
      (item) => item.departement.nomDepartement === departementChoisi
    );

    if (!departementData) return;

    const chart = document.getElementById("chart1");
    if (!chart) return;

    const ctx = chart.getContext("2d");

    if (graph.current) {
      graph.current.destroy();
    }

    const moins20 = departementData.pourcentagePopMoins20;
    const plus60 = departementData.pourcentagePop60Plus;

    const entre20et60 = 100 - moins20 - plus60;

    graph.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Moins de 20 ans", "20 à 60 ans", "60 ans et plus"],
        datasets: [
          {
            label: departementChoisi,
            data: [moins20, entre20et60, plus60],
            backgroundColor: ["#fca5a5", "#ef4444", "#b91c1c"],
            borderColor: "#ffffff",
            borderWidth: 2,
            hoverOffset: 4,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: true,
            position: "bottom",
          }
        },

      }
    });
  }, [data, departementChoisi]);

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4">Répartition de la population par âge (%)</h2>
      <div style={{ maxWidth: "300px", maxHeight: "300px", margin: "0 auto" }}>
        <canvas id="chart1"></canvas>
      </div>
    </div>
  );
}

export default ChartpopAge;