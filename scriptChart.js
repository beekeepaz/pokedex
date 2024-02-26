function statsChart(parentId, canvasId, labels, data) {
    parentId
    const ctx = document.getElementById(canvasId);
    new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                borderWidth: 0,
                responsive: true,
            }]
        },
        options: {
            y: {
                beginAtZero: true
            }

        }
    });
}
