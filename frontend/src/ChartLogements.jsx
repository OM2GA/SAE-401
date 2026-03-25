import { useEffect, useRef } from "react";
import Def from "./Def";


function ChartLogements({ data, departementChoisi }) {
  const graph = useRef(null);

  useEffect(() => {
    if (!data || data.length === 0) return;

    const ctx = document.getElementById("chartlogements").getContext("2d");

    if (graph.current) {
      graph.current.destroy();
    }

    graph.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: data.map((item) => item.departement.nomDepartement),
        datasets: [
          {
            label: "Logements vacants",
            data: data.map((item) => item.tauxLogementsVacants),
            backgroundColor: data.map((item) => item.departement.nomDepartement === departementChoisi ? "#ef4444" : "#fee2e2"),
            borderRadius: 8,
          },
          {
            label: "Logements sociaux",
            data: data.map((item) => item.tauxLogementsSociaux),
            backgroundColor: data.map((item) => item.departement.nomDepartement === departementChoisi ? "#1e40af" : "#dbeafe"),
            borderRadius: 8,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
          legend: {
            position: "bottom",
            labels: {
              generateLabels: function (chart) {
                const vividColors = ["#ef4444", "#1e40af"];
                return chart.data.datasets.map((dataset, i) => ({
                  text: dataset.label,
                  fillStyle: vividColors[i],
                  strokeStyle: vividColors[i],
                  hidden: !chart.isDatasetVisible(i),
                  datasetIndex: i
                }));
              }
            }
          },
          tooltip: {
              backgroundColor: "white",  
              titleColor: "#ef4444",
              bodyColor: "#000000",
              borderColor: "#ef4444",
              borderWidth: 1,
              titleFont: {
                size: 16,
                weight: "bold"
              },
              bodyFont: {
                size: 14
              },
            callbacks: {
              label: function (context) {
                return context.dataset.label + " : " + context.raw + "%";
              }
            }
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              color: "#f3f4f6"
            },
            border: {
              display: false
            },
            title: {
              display: true,
              text: "Pourcentage (%)"
            }
          }
        }
      }
    });
  }, [data, departementChoisi]);

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
        <h2 className="text-xl font-bold text-bold">Taux de Logements Sociaux et Vacants par Département</h2>
      </div>
      <div className="h-[350px]">
        <canvas id="chartlogements"></canvas>
      </div>
      <Def />
    </div>
  );
}

export default ChartLogements;