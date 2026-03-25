import { useEffect, useRef } from "react";
import Def from "./DefDensite";


function ChartDensiteLogement({ data, departementChoisi }) {
  const graph = useRef(null)

  useEffect(() => {
    if (!data || data.length === 0) return;

    const chart = document.getElementById("ChartBubble");
    if (!chart) return;

    const ctx = chart.getContext("2d");

    if (graph.current) {
      graph.current.destroy();
    }

    graph.current = new Chart(ctx, {
      type: "bubble",
      data: {
        datasets: data.map((item) => ({
          label: item.departement.nomDepartement,
          data: [
            {
              x: item.densitePopulation,
              y: item.nombreLogements,
              r: item.parcSocialNombreLogements / 1000 < 5 ? 5 : item.parcSocialNombreLogements / 1000 > 25 ? 25 : item.parcSocialNombreLogements / 1000,// rayon avec taille proportionnelle au nombre de logements sociaux mais jamais inferieur a 5 et superieur a 25
              logementsSociaux: item.parcSocialNombreLogements
            }
          ],
          backgroundColor: item.departement.nomDepartement === departementChoisi ? "rgba(220, 38, 38, 0.9)" : "rgba(252, 165, 165, 0.5)"
        }))
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
              backgroundColor: "#1f2937", 
              titleColor: "#ffffff",      
              bodyColor: "#d1d5db",       
              borderColor: "#ef4444",
              borderWidth: 1,

              titleFont: {
                size: 16,
                weight: "bold"
              },
              bodyFont: {
                size: 13
              },
            callbacks: {
              label: (context) => {
                return `${context.dataset.label} - Densité: ${context.raw.x}, Logements: ${context.raw.y}, Logements sociaux: ${context.raw.logementsSociaux}`;
              }
            }
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Densité de population"
            }
          },
          y: {
            title: {
              display: true,
              text: "Nombre de logements"
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
        <h2 className="text-xl font-bold text-bold">Densité de population et nombre de logements</h2>
      </div>
      <div className="h-[400px] ">
        <canvas id="ChartBubble"></canvas>
      </div>
      <Def />
    </div>

  );
}

export default ChartDensiteLogement;