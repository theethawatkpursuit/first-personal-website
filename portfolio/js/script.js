const projectData = [
  {
    id: 'escape-the-tower',
    title: 'Escape The Tower',
    image: 'assets/images/Escape The Tower.png',
    description: 'The first game I ever made. It is a shooter game where the player must escape a tower while avoiding enemies moving through walls. Ricocheting bullets off walls gain extra points.',
    details: 'I made Escape The Tower with two classmates who were very inexperienced with video game development and coding. My existing knowledge of coding made me comfortable with learning Godot and teaching my teammates how to use it. I learned a lot about teamwork, communication, and the importance of keeping a project organized as I faced the challenges of having to constantly help my teammates while also working on my own tasks. I also learned how to design a game with engaging mechanics and a fun player experience in mind, as well as how to make a game that is visually appealing and easy to understand.'
  },
  {
    id: 'rootsong-enlighten-the-forest',
    title: 'Rootsong: Enlighten The Forest',
    image: 'assets/images/Rootsong - Enlighten The Forest.png',
    description: 'The second game I\'ve made. It is a rhythm game where the player must move in time with the music in cursed zones to move and gain power to defeat enemies.',
    details: 'Motion Mosaic helped me practice pacing, visual storytelling, and editing flow. It also taught me how to keep creative ideas organized when a project grows quickly.'
  },
  {
    id: 'nyc-eats',
    title: 'NYC Eats',
    image: 'assets/images/NYC Eats.png',
    description: 'A website I created with classmates while trying to relearn HTML, CSS, and JavaScript. It features a simple layout for sharing restaurant reviews and recommendations.',
    details: 'Calm Canvas is rooted in simplicity. I used it to work on readable layouts, thoughtful structure, and the feeling of calm that can come from a well-organized page.'
  },
  {
    id: 'team-bridge',
    title: 'Team Bridge',
    image: 'assets/images/project-4.svg',
    description: 'A planning prototype for helping teams recover from stress by reorganizing work into clear, manageable steps.',
    details: 'Team Bridge reflects one of my strongest interests: helping groups stay functional when pressure rises. I structured the project around organization, communication, and compassionate planning.'
  },
  {
    id: 'pixel-pulse',
    title: 'Pixel Pulse',
    image: 'assets/images/project-5.svg',
    description: 'A compact game ideas board focused on feedback loops, interaction moments, and playful progression.',
    details: 'Pixel Pulse is a lightweight design concept for a game that prioritizes user feedback and easy-to-understand systems. It was an exercise in balancing complexity with clarity.'
  },
  {
    id: 'story-hub',
    title: 'Story Hub',
    image: 'assets/images/project-6.svg',
    description: 'A website layout for curating personal stories, creative work, and project notes into one place.',
    details: 'Story Hub is a flexible structure that keeps a growing body of work organized. I designed it to feel welcoming while making it easy to find and revisit older ideas.'
  },
  {
    id: 'focus-loop',
    title: 'Focus Loop',
    image: 'assets/images/project-7.svg',
    description: 'A productivity-inspired concept that organizes tasks into calm, repeatable cycles for creators and small teams.',
    details: 'Focus Loop came from a need to make routine work feel more sustainable. It highlights the value of systems, pacing, and thoughtful collaboration.'
  },
  {
    id: 'shared-spark',
    title: 'Shared Spark',
    image: 'assets/images/project-8.svg',
    description: 'A collaborative concept for bringing creators together around a single visual identity and project workflow.',
    details: 'Shared Spark focuses on collaboration and shared imagination. It reflects how I see creative teams thriving when they combine structure with room for experimentation.'
  }
];

function renderProjects() {
  const previewGrid = document.getElementById('project-preview-grid');
  const toc = document.getElementById('project-toc');
  const details = document.getElementById('project-details');

  if (previewGrid) {
    projectData.slice(0, 8).forEach((project) => {
      const card = document.createElement('a');
      card.className = 'project-card';
      card.href = `projects.html#${project.id}`;
      card.innerHTML = `
        <div class="card-title">${project.title}</div>
        <img src="${project.image}" alt="${project.title} placeholder" />
      `;
      previewGrid.appendChild(card);
    });
  }

  if (toc) {
    projectData.forEach((project) => {
      const link = document.createElement('a');
      link.className = 'project-link';
      link.href = `#${project.id}`;
      link.textContent = project.title;
      toc.appendChild(link);
    });
  }

  if (details) {
    projectData.forEach((project) => {
      const section = document.createElement('section');
      section.id = project.id;
      section.className = 'project-detail-card';
      section.innerHTML = `
        <img src="${project.image}" alt="${project.title} placeholder" />
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p>${project.details}</p>
      `;
      details.appendChild(section);
    });
  }
}

function observeScrollQuote() {
  const quote = document.querySelector('.fade-quote');
  if (!quote) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        quote.classList.add('visible');
      }
    });
  }, { threshold: 0.35 });

  observer.observe(quote);
}

window.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  observeScrollQuote();
});
