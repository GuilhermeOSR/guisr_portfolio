document.addEventListener("DOMContentLoaded", function () {
    const serviceDiv = document.querySelector(".services");

    // Número inicial da página
    let currentPage = 0;

    // Número de serviços a serem exibidos inicialmente
    const initialServicesToShow = 4;

    // Número de serviços a serem exibidos por página
    const servicesPerPage = 4;
    // Array de serviços
    const services = [
        {
            service: "Landing Page",
            description: "back-end, para criar aplicativos web abrangentes web abrangentes.",
            price: "500,00",
        },
        {
            service: "Website",
            description: "Construção de sites completos, dinâmicos e interativos.",
            price: "1500,00",
        },
        {
            service: "Front-end",
            description: "Implementação de interfaces de usuário modernas e responsivas.",
            price: "1000,00",
        },
        {
            service: "Back-end",
            description: "back-end, para criar aplicativos web abrangentes web abrangentes.",
            price: "1500,00",
        },
        {
            service: "Full Stack",
            description: "Oferta de soluções completas, desde o front-end até o back-end.",
            price: "3000,00",
        },
        {
            service: "Exemplo 1",
            description: "Oferta de soluções completas, desde o front-end até o back-end.",
            price: "3000,00",
        },
        {
            service: "Exemplo 2",
            description: "back-end, para criar aplicativos web abrangentes.",
            price: "3000,00",
        },
        {
            service: "Exemplo 3",
            description: "back-end, para criar aplicativos web abrangentes.",
            price: "3000,00",
        },
        {
            service: "Exemplo 3",
            description: "back-end, para criar aplicativos web abrangentes.",
            price: "3000,00",
        },
        {
            service: "Exemplo 3",
            description: "back-end, para criar aplicativos web abrangentes.",
            price: "3000,00",
        },
        // Adicione mais serviços conforme necessário
    ];

    // Função para exibir os serviços com base na página atual
    function displayServices() {
        const start = currentPage * servicesPerPage;
        const end = start + initialServicesToShow; // Ajustado para exibir apenas os primeiros 4

        // Animação de fade-out usando anime.js
        anime({
            targets: serviceDiv,
            opacity: 0,
            duration: 500,
            easing: 'linear',
            complete: function () {
                const start = currentPage * servicesPerPage;
                const end = start + initialServicesToShow; // Ajustado para exibir apenas os primeiros 4

                // Limpe o conteúdo atual da tabela
                serviceDiv.innerHTML = "";

                // Preencha a tabela com os serviços da página atual
                for (let i = start; i < end && i < services.length; i++) {
                    const service = services[i];
                    const row = `
                        <div class="card">
                            <div class="card-header">
                                <h4>${service.service}</h4>
                            </div>
                            <div class="card-content">
                                <div class="card-pricing">
                                    <h5><span>R$</span>${service.price}</h5>
                                </div>
                                <div class="card-desc">
                                    <p>${service.description}</p>
                                    <button class="contract">Contratar</button>
                                </div>
                            </div>
                        </div>
                    `;
                    serviceDiv.innerHTML += row;
                }

                // Animação de fade-in usando anime.js
                anime({
                    targets: serviceDiv,
                    opacity: 1,
                    duration: 500,
                    easing: 'linear'
                });
            }
        });
    }

    // Exibe os serviços iniciais
    displayServices();

    // Adiciona um ouvinte de evento de rolagem para detectar quando carregar mais cards
    serviceDiv.addEventListener('scroll', function () {
        const totalWidth = this.scrollWidth;
        const visibleWidth = this.clientWidth;
        const scrollPosition = this.scrollLeft;

        // Se o usuário rolar para o final da lista, carregue mais cards
        if (scrollPosition + visibleWidth >= totalWidth) {
            currentPage++; // Aumenta a página
            displayServices(); // Exibe os próximos cards
        }
    });
});

// Restante do seu código...

  //script
  const wrapper = document.querySelector(".services");

  let pressed = false;
  let startX = 0;
  
  wrapper.addEventListener('mousedown', function (e) {
      pressed = true;
      startX = e.clientX;
      this.style.cursor = 'grabbing';
  });
  
  wrapper.addEventListener('mouseleave', function (e) {
      pressed = false;
  });
  
  window.addEventListener('mouseup', function (e) {
      pressed = false;
      wrapper.style.cursor = 'grab';
  });
  
  wrapper.addEventListener('mousemove', function (e) {
      if (!pressed) {
          return;
      }
  
      // Ajusta o multiplicador abaixo para alterar a velocidade do scroll
      const scrollSpeed = 2;
  
      // Calcula a diferença entre a posição inicial e a posição atual
      const deltaX = startX - e.clientX;
  
      // Ajusta o scrollLeft com base na diferença, multiplicando pela velocidade desejada
      this.scrollLeft += deltaX * scrollSpeed;

      // Atualiza a posição inicial para a próxima iteração
      startX = e.clientX;
  });