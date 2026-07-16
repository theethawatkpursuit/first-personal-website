const projectData = [
  {
    id: 'whos-that-instructor',
    title: 'Who\'s That Instructor?',
    image: 'assets/images/Who\'s That Instructor.png',
    description: 'A website I made in a coding bootcamp with other students. It is a game inspired by the "Who\'s That Pokémon?" segment of the Pokémon anime, where players guess the instructor based on a silhouette and a few hints.',
    details: 'Who\'s That Instructor? served as my proper introduction to creating a program with collaborators. Admittedly I was a bit lost and had yet to truly understand how any ounce of code worked, but thankfully, my collaborators were happy to review with me how everything worked. In the end, this experience ended up being one of the biggest contributors to my knowledge of JavaScript and really started my journey of valuing teamwork in computer science.',
    category: 'created'
  },
  {
    id: 'nyc-eats',
    title: 'NYC Eats',
    image: 'assets/images/NYC Eats.png',
    description: 'A website I created with classmates while trying to relearn HTML, CSS, and JavaScript. It features a simple layout for sharing our restaurant reviews and recommendations.',
    details: 'NYC Eats was a project assigned within the first computer science class I took at Fordham University, where my group and I all had to create a proper website using HTML, CSS and JavaScript. However, between Who’s That Instructor and this, I learned more about how to build websites thanks to coming in contact with a friend who was able to teach me every weekend. As such, this website ended up being one of my first opportunities to put my newfound knowledge of website building to use as well as my first in-person opportunity to build a website with collaborators, since the bootcamp I built Who’s That Instructor in was virtual.',
    category: 'created'
  },
  {
    id: 'escape-the-tower',
    title: 'Escape The Tower',
    image: 'assets/images/Escape The Tower.png',
    description: 'The first game I ever made. It is a shooter game where the player must escape a tower while avoiding enemies moving through walls. Ricocheting bullets off walls gain extra points.',
    details: 'I made Escape The Tower with two classmates who were very inexperienced with video game development and coding. My existing knowledge of coding made me comfortable with learning Godot and teaching my teammates how to use it. I learned a lot about teamwork, communication, and the importance of keeping a project organized as I faced the challenges of having to constantly help my teammates while also working on my own tasks. I also learned how to design a game with engaging mechanics and a fun player experience in mind, as well as how to make a game that is visually appealing and easy to understand.',
    category: 'created'
  },
  {
    id: 'rootsong-enlighten-the-forest',
    title: 'Rootsong: Enlighten The Forest',
    image: 'assets/images/Rootsong - Enlighten The Forest.png',
    description: 'The second game I\'ve made. It is a rhythm game where the player must move in time with the music in cursed zones to move and gain power to defeat enemies.',
    details: 'Coming fresh off Escape The Tower, the other main assignment my professor gave us for this class was to create a bigger game, this time with more people of our choosing. Now that I had more experienced people working with me, I was able to ask them for help if I was struggling with something. Ultimately, Rootsong: Escape The Forest was able to allow me to expand my knowledge of vibe coding with Godot and using GitHub with multiple collaborators, as well as create a proper workflow under the tight schedule that we were given.',
    category: 'created'
  },
  {
    id: 'pixel-pulse',
    title: 'Pixel Pulse',
    image: 'assets/images/project-5.svg',
    description: 'A compact game ideas board focused on feedback loops, interaction moments, and playful progression.',
    details: 'Pixel Pulse is a lightweight design concept for a game that prioritizes user feedback and easy-to-understand systems. It was an exercise in balancing complexity with clarity.',
    category: 'future'
  },
  {
    id: 'story-hub',
    title: 'Story Hub',
    image: 'assets/images/project-6.svg',
    description: 'A website layout for curating personal stories, creative work, and project notes into one place.',
    details: 'Story Hub is a flexible structure that keeps a growing body of work organized. I designed it to feel welcoming while making it easy to find and revisit older ideas.',
    category: 'future'
  },
  {
    id: 'focus-loop',
    title: 'Focus Loop',
    image: 'assets/images/project-7.svg',
    description: 'A productivity-inspired concept that organizes tasks into calm, repeatable cycles for creators and small teams.',
    details: 'Focus Loop came from a need to make routine work feel more sustainable. It highlights the value of systems, pacing, and thoughtful collaboration.',
    category: 'future'
  },
  {
    id: 'shared-spark',
    title: 'Shared Spark',
    image: 'assets/images/project-8.svg',
    description: 'A collaborative concept for bringing creators together around a single visual identity and project workflow.',
    details: 'Shared Spark focuses on collaboration and shared imagination. It reflects how I see creative teams thriving when they combine structure with room for experimentation.',
    category: 'future'
  }
];

function renderProjects() {
  const previewGrid = document.getElementById('project-preview-grid');
  const toc = document.getElementById('project-toc');
  const details = document.getElementById('project-details');
  const createdProjects = projectData.filter((project) => project.category === 'created');
  const futureProjects = projectData.filter((project) => project.category === 'future');

  if (previewGrid) {
    [
      { title: 'Created Projects', projects: createdProjects },
      { title: 'Future Projects', projects: futureProjects }
    ].forEach((group) => {
      const groupWrap = document.createElement('div');
      groupWrap.className = 'preview-group';

      const heading = document.createElement('h3');
      heading.className = 'preview-group-title';
      heading.textContent = group.title;
      groupWrap.appendChild(heading);

      const groupGrid = document.createElement('div');
      groupGrid.className = 'preview-group-grid';

      group.projects.forEach((project) => {
        const card = document.createElement('a');
        card.className = 'project-card';
        card.href = `projects.html#${project.id}`;
        card.innerHTML = `
          <div class="card-title">${project.title}</div>
          <div class="card-image-wrap">
            <img class="project-image" src="${project.image}" alt="${project.title}" />
          </div>
        `;
        groupGrid.appendChild(card);
      });

      groupWrap.appendChild(groupGrid);
      previewGrid.appendChild(groupWrap);
    });
  }

  if (toc) {
    [
      { title: 'Created Projects', projects: createdProjects },
      { title: 'Future Projects', projects: futureProjects }
    ].forEach((group) => {
      const groupSection = document.createElement('div');
      groupSection.className = 'project-index-group';

      const heading = document.createElement('h3');
      heading.className = 'project-index-heading';
      heading.textContent = group.title;
      groupSection.appendChild(heading);

      const list = document.createElement('div');
      list.className = 'project-index-list';

      group.projects.forEach((project) => {
        const link = document.createElement('a');
        link.className = 'project-link';
        link.href = `#${project.id}`;
        link.textContent = project.title;
        list.appendChild(link);
      });

      groupSection.appendChild(list);
      toc.appendChild(groupSection);
    });
  }

  if (details) {
    projectData.forEach((project) => {
      const section = document.createElement('section');
      section.id = project.id;
      section.className = 'project-detail-card';
      section.innerHTML = `
        <img class="project-image" src="${project.image}" alt="${project.title}" />
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p>${project.details}</p>
      `;
      details.appendChild(section);
    });
  }
}

function setupProjectIndexDrawer() {
  const drawer = document.getElementById('project-index');
  if (!drawer) return;

  const mobileQuery = window.matchMedia('(max-width: 900px)');
  const backdrop = document.createElement('div');
  backdrop.className = 'project-index-backdrop';
  backdrop.hidden = true;
  document.body.appendChild(backdrop);

  let touchStartX = 0;
  let touchStartY = 0;
  let isTouchTracking = false;

  const openDrawer = () => {
    if (!mobileQuery.matches) return;
    drawer.classList.add('is-open');
    backdrop.hidden = false;
    requestAnimationFrame(() => backdrop.classList.add('is-visible'));
    document.body.classList.add('project-index-open');
    drawer.setAttribute('aria-hidden', 'false');
  };

  const closeDrawer = () => {
    drawer.classList.remove('is-open');
    backdrop.classList.remove('is-visible');
    document.body.classList.remove('project-index-open');
    drawer.setAttribute('aria-hidden', mobileQuery.matches ? 'true' : 'false');

    window.setTimeout(() => {
      if (!backdrop.classList.contains('is-visible')) {
        backdrop.hidden = true;
      }
    }, 220);
  };

  const syncDrawerMode = () => {
    if (mobileQuery.matches) {
      if (!drawer.classList.contains('is-open')) {
        drawer.setAttribute('aria-hidden', 'true');
        backdrop.hidden = true;
      }
      return;
    }

    drawer.classList.remove('is-open');
    backdrop.classList.remove('is-visible');
    backdrop.hidden = true;
    document.body.classList.remove('project-index-open');
    drawer.setAttribute('aria-hidden', 'false');
  };

  document.addEventListener('touchstart', (event) => {
    if (!mobileQuery.matches || event.touches.length !== 1) return;

    const touch = event.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
    isTouchTracking = touchStartX <= 48 || drawer.classList.contains('is-open');
  }, { passive: true });

  document.addEventListener('touchend', (event) => {
    if (!isTouchTracking || !event.changedTouches.length) return;

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartX;
    const deltaY = touch.clientY - touchStartY;
    const isMostlyHorizontal = Math.abs(deltaX) > Math.abs(deltaY) * 1.5;

    if (touchStartX <= 48 && deltaX > 80 && isMostlyHorizontal) {
      openDrawer();
    }

    if (drawer.classList.contains('is-open') && deltaX < -80 && isMostlyHorizontal) {
      closeDrawer();
    }

    isTouchTracking = false;
  }, { passive: true });

  drawer.addEventListener('click', (event) => {
    if (event.target.closest('.project-link')) {
      closeDrawer();
    }
  });

  backdrop.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeDrawer();
  });

  if (typeof mobileQuery.addEventListener === 'function') {
    mobileQuery.addEventListener('change', syncDrawerMode);
  } else {
    mobileQuery.addListener(syncDrawerMode);
  }

  syncDrawerMode();
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
  setupProjectIndexDrawer();
});
