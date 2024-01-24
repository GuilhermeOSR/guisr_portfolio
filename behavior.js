// Stacks
const stackImages = {
    html: './imgs/stacks/html5.png',
    css: './imgs/stacks/css3.png',
    javascript: './imgs/stacks/js.png',
    nodejs: './imgs/stacks/node.png',
    python: './imgs/stacks/python.png',
    banco_de_dados: './imgs/stacks/dba.png',
    reactjs: './imgs/stacks/react.png',
    graphql: './imgs/stacks/graphql.png',
    tailwindcss: './imgs/stacks/tailwindcss.png'


};
// Criar Projetos
const projects = [
    {
    'Titulo': 'AskGui',
    'Desc': 'Primeiro Projeto Full Stack de perguntas e respostas com NodeJS.',
    'Image_url': 'Askgui4',
    'Stack': ['html', 'css', 'javascript', 'nodejs', 'banco_de_dados'],
    'Project_url': 'https://github.com/GuilhermeOSR/projeto-asks-and-answers',
    },

    {
    'Titulo': 'DogGen',
    'Desc': 'Projeto para gerenciamento de cachorros de um clube.',
    'Image_url': 'DogGen',
    'Stack': ['html', 'css', 'javascript', 'python', 'banco_de_dados'],
    'Project_url': 'https://github.com/GuilhermeOSR/mvp_doggen_back'
    },
    {
    'Titulo': 'Portfolio',
    'Desc': 'Porfolio desenvolvido por mim, para mostrar meus projetos.',
    'Image_url': 'GuiPortfolio',
    'Stack': ['html', 'css', 'javascript'],
    'Project_url': 'https://guilhermeosr.github.io/guisr_portfolio/'
    },
    {
    'Titulo': 'Jogo de Adivinhar',
    'Desc': 'Jogo desenvolvido com Samyra Rodrigues estudante de Bacharelado de Design.',
    'Image_url': 'JogoAdivinhar',
    'Stack': ['html', 'css', 'javascript'],
    'Project_url': 'https://guilhermeosr.github.io/Jogo_de_Adivinhar/',
    },
    {
    'Titulo': 'Site do Raiwonk',
    'Desc': 'Site desenvolvido para uma ideia para canal no Youtube.',
    'Image_url': 'raiwonksite',
    'Stack': ['html', 'css', 'javascript'],
    'Project_url': 'https://raiwonk.4users.com.br'
    },

    {
    'Titulo': 'TODOPALIST',
    'Desc': 'Aplicação com objetivo de organizar tarefas e adquirir satisfação ao concluí-las.',
    'Image_url': 'ETES',
    'Stack': ['reactjs', 'javascript', 'nodejs', 'graphql', 'python', 'banco_de_dados'],
    'Project_url': 'https://raiwonk.4users.com.br'
    },

    {
    'Titulo': 'Gendiesel',
    'Desc': 'Gendiesel fornece soluções de energia confiáveis e sustentáveis para residências e empresas',
    'Stack': ['reactjs', 'css', 'tailwindcss', 'javascript', 'nodejs'],
    'Image_url': 'gendiemvp',
    'Project_url': 'https://raiwonk.4users.com.br'
    },

]

const projectsContainer = document.getElementById('projects-container');
const btnstack = document.querySelectorAll('.btn-stack');

// Lista os projetos criados 
projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project';

    projectDiv.innerHTML = `
    <a href="${project.Project_url}" target='_blank' >
    <img src="./imgs/${project.Image_url}.png" class="project-image" alt="" >
    <h3 class="project-title">${project.Titulo}</h3>
    <p class="project-desc">${project.Desc}</p>
    <ul class="project-stack">
    ${project.Stack.map(stack => `<li class="stack-image"><img class="project-stack-image" src="${stackImages[stack]}" alt="${stack}"></li>`).join('')}

    </div>
    </ul>
    </a>
    `;

    projectsContainer.appendChild(projectDiv);
})

// Adiciona a função de clicar no botão para escolher as stacks */
btnstack.forEach(btn => {
    btn.addEventListener('mouseover', () => {
        if(!btn.classList.contains('marked')) {
            btn.style.backgroundColor = '#05e0fd'; 
        }
        
    });
    btn.addEventListener('mouseout', () => {
        if(!btn.classList.contains('marked')) {
            btn.style.backgroundColor = ''; 
        }
        
    });
    btn.addEventListener('click', () => {
        const selectedStack = btn.getAttribute('data-stack');    
        filterProjects(selectedStack)
        animateProjects();

        // Remover o selecionado
            btnstack.forEach(btn => {
                btn.classList.remove('marked');
                btn.style.backgroundColor = '';
            })
    
        // Adicionar o selecionado

        btn.classList.add('marked');

    })
})
// Função para filtrar projetos */
function filterProjects(stack) {
    projectsContainer.innerHTML = ''; // Limpa o container antes de renderizar

    const filteredProjects = projects.filter(project => project.Stack.includes(stack));
    // Verifica se a quantidade de projetos é igual a 0. Se for, mostra a mensagem de que não há projetos dessa tecnologia.
    if(filteredProjects.length === 0) {
        const noProjectsMessage = document.createElement('p');
        noProjectsMessage.className = 'noProjects'
        noProjectsMessage.innerText = 'Não há projetos dessa tecnologia.';
        projectsContainer.appendChild(noProjectsMessage);
    }
    else {
        filteredProjects.forEach(project => {
            if(project.Stack.includes(stack)) {
                const projectDiv = document.createElement('div');
                projectDiv.className = 'project';

                projectDiv.innerHTML = `
                <a href="${project.Project_url}" target='_blank' >
                <img src="./imgs/${project.Image_url}.png" class="project-image" alt="" height="400" width="400">
                <h3 class="project-title">${project.Titulo}</h3>
                <p class="project-desc">${project.Desc}</p>
                <ul class="project-stack">
                ${project.Stack.map(stack => `<li class="stack-image"><img class="project-stack-image" src="${stackImages[stack]}" alt="${stack}"></li>`).join('')}
                </ul>
                </a>
                `;

                projectsContainer.appendChild(projectDiv);
        
            }
        })
    }
}

// Animação com a lib reveal 
function animateProjects() {
    const revealOptions = {
        delay: 100,
        duration: 1800,
        distance: '0',
        scale: 1,
        beforeReveal: (domEl) => {
            // Adicione a classe que ativa a animação de salto
            domEl.classList.add('jump-animation');
        },
        // Remova a classe após a animação para permitir repetições
        afterReset: (domEl) => {
            domEl.classList.remove('jump-animation');
        }
    };

    // Instância do ScrollReveal
    const sr = ScrollReveal(revealOptions);

    // Apliqua a animação
    const projects = projectsContainer.querySelectorAll('.project');
    sr.reveal(projects);

    
}

