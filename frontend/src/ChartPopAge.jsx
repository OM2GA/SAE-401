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
            backgroundColor: ["#fca5a5", "#DC2626", "#b91c1c"],
            borderColor: "#ffffff",
            borderWidth: 2,
            hoverOffset: 4,
            borderRadius: 8,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
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
    <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1.5 h-6 bg-red-600 rounded-full"></div> 
        <h2 className="text-xl font-bold text-bold">Répartition de la population par âge (%) - {departementChoisi}</h2>
      </div>
      <div className="h-[350px]">
        <canvas id="chart1"></canvas>
      </div>
    </div>
  );
    
}

export default ChartpopAge;