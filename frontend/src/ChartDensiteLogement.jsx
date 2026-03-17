import { useEffect, useRef } from "react";

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
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
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
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4">Logement</h2>
      <canvas id="ChartBubble"></canvas>
    </div>
  );
}

export default ChartDensiteLogement;