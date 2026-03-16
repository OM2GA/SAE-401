import { useEffect,useRef } from "react";

function ChartpopAge({ data,departementChoisi }) {
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
      type: "bar",
      data: {
        labels: ["Moins de 20 ans", "20 à 60 ans", "60 ans et plus"],
        datasets: [
          {
            label: departementChoisi,
            data: [moins20, entre20et60, plus60],
            backgroundColor: ["#9ecae1", "#3182bd", "#b2df8a"],
            borderColor: ["#4a4a4a", "#4a4a4a", "#4a4a4a"],
            borderWidth: 0.5,
            categoryPercentage: 1,
            barPercentage: 0.5,
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            offset: true
          },
          y: {
            beginAtZero: true,
            max: 100,
            title: {
              display: true,
              text: "Pourcentage"
            }
          }
        }
      }
    });
  }, [data, departementChoisi]);

  return (
    <div>
        <div className="mb-10" style={{ width: "500px" }}>
            <h2 className="text-2xl font-bold text-center">Répartition de la population par âge (%)</h2>
            <canvas id="chart1" height="350"></canvas>
        </div>
    </div>
  );
}

export default ChartpopAge;