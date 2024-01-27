document.addEventListener("DOMContentLoaded", function () {
  const serviceDiv = document.querySelector(".services");

  // Número inicial da página
  let currentPage = 0;

  // Número de serviços a serem exibidos por página
  const servicesPerPage = 7;

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
      const end = start + servicesPerPage;

      // Animação de fade-out usando anime.js
      anime({
          targets: serviceDiv,
          opacity: 0,
          duration: 500,
          easing: 'linear',
          complete: function () {
              const start = currentPage * servicesPerPage;
              const end = start + servicesPerPage;

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
});



//script
const wrapper = document.querySelector(".services");

let pressed = false;
let startX = 0;

wrapper.addEventListener('mousedown', function (e) {
  pressed = true
  startX = e.clientX
  this.style.cursor = 'grabbing'

  console.log(startX);
});

wrapper.addEventListener('mouseleave', function (e) {
  pressed = false
})

window.addEventListener('mouseup', function (e) {
  pressed = false
  wrapper.style.cursor = 'grab'

  console.log(startX)
})

wrapper.addEventListener('mousemove', function (e) {
  if(!pressed) {
    return
  }

  this.scrollLeft += startX - e.clientX;
})
