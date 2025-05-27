const ctx = document.getElementById('energiaChart').getContext('2d');

new Chart(ctx, {
  type: 'pie',
  data: {
    labels: [
      'Petróleo e Derivados',
      'Derivados da Cana de Açúcar',
      'Hidráulica',
      'Gás Natural',
      'Lenha e Carvão Vegetal',
      'Outras Renováveis',
      'Carvão Mineral',
      'Eólica e Solar',
      'Nuclear',
      'Outras Não-Renováveis'
    ],
    datasets: [{
      data: [35.7, 15.4, 12.5, 10.5, 9.0, 7.0, 4.6, 3.5, 1.3, 0.6],
      backgroundColor: [
        '#ff7900',
        '#ffd700',
        '#00c3f4',
        '#6c8d92',
        '#8d8d8d',
        '#a2f52b',
        '#c4c4c4',
        '#f7d358',
        '#00764b',
        '#999999'
      ],
      borderWidth: 1
    }]
  },
  options: {
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: false
      }
    }
  }
});
