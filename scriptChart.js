function statsChart(parentId, canvasId, labels, data) {
  const ctx = document.getElementById(canvasId);
  new Chart(ctx, {
      type: 'polarArea',
      data: {
          labels: labels,
          datasets: [{
              label: '# of Votes',
              data: data,
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
}