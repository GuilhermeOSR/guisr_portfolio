// Adicione conquistas dinamicamente
const achievementsData = [
    { year: "2022", text: "Graduado em Análise e Desenvolvimento de Sistemas" },
    { year: "2023", text: "Desenvolvimento de WebSite Full Stack" },
    { year: "2024", text: "Pós-graduado em Desenvolvimento Full Stack" },
    { year: "2025", text: "Pós-graduado em Desenvolvimento Full Stack" },
    { year: "2026", text: "Mestrado em Engenharia de Software" },
    { year: "2027", text: "Outra conquista", link: "https://www.youtube.com/" }
];

const achievementsContainer = document.getElementById('achievements-container');

achievementsData.forEach((achievement, index) => {
    const achievementItem = document.createElement('div');
    achievementItem.classList.add('achievement-item', index % 2 === 0 ? 'even' : 'odd');

    const achievementCircle = document.createElement('div'); // Elemento para representar o círculo
    achievementCircle.id = `circle-${index}`; // Adiciona um ID exclusivo para cada círculo

    const achievementIcon = document.createElement('i');
    achievementIcon.classList.add('fas', 'fa-trophy', 'achievement-icon');

    const achievementText = document.createElement('p');
    achievementText.classList.add('achievement-text');
    achievementText.innerHTML = `<p class="achievement-year"><strong class="ano">${achievement.year} |</strong> <a href="${achievement.link}">${achievement.text}</a></p>`;

    // Ajuste para calcular a margem esquerda com base no índice
    achievementItem.style.marginLeft = index % 2 === 0 ? '-20%' : '20%';


    achievementItem.appendChild(achievementIcon);
    achievementItem.appendChild(achievementText);
    achievementsContainer.appendChild(achievementItem);
});
