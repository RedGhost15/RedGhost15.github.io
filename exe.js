document.addEventListener("DOMContentLoaded", () => {
    // Slideshow
    const images = [
        "/assets/img/profileImg/spaceProject.png",
        "/assets/img/profileImg/poolProject.png",
        "/assets/img/profileImg/outsource.png",
        "/assets/img/profileImg/WeatherApp.png",
        "/assets/img/profileImg/miniApps.png",
    ];
    let currentIndex = 0;
    const slideshow = document.getElementById("slideshow");

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        slideshow.src = images[currentIndex];
    }

    slideshow.src = images[currentIndex];
    setInterval(changeImage, 2500);

    // Date and Time
    function updateDateTime() {
        const dateTimeElement = document.getElementById("date-time");
        const now = new Date();
        dateTimeElement.textContent = now.toLocaleString();
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);

    // Menu Btn
    const menuButton = document.getElementById("menu-button");
    const menuTab = document.getElementById("menu-tab");

    menuButton.addEventListener("click", (event) => {
        event.preventDefault();
        menuTab.classList.toggle("hidden");
    });

    document.addEventListener("click", (event) => {
        if (!menuButton.contains(event.target) && !menuTab.contains(event.target)) {
            menuTab.classList.add("hidden");
        }
    });

    // Tab Btn Functionality
    const tabButtonProj = document.getElementById("menu-div-proj");
    const tabButtonCv = document.getElementById("menu-div-cv");
    const extendedTabProj = document.getElementById("extended-menu-tab-proj");
    const extendedTabCv = document.getElementById("extended-menu-tab-cv");

    function hideAllExtendedTabs() {
        document.querySelectorAll(".extended-menu-tab").forEach(function(tab) {
            tab.classList.add("hidden-tabs");
        });
    }

    function removeActiveState() {
        document.querySelectorAll(".menu-div").forEach(function(div) {
            div.classList.remove("active");
        });
    }

    function setActiveMenuDiv() {
        tabButtonProj.addEventListener("click", (event) => {
            event.preventDefault();
            if (extendedTabProj.classList.contains("hidden-tabs")) {
                hideAllExtendedTabs();
                extendedTabProj.classList.remove("hidden-tabs");
                removeActiveState();
                tabButtonProj.classList.add("active");
            } else {
                extendedTabProj.classList.add("hidden-tabs");
                tabButtonProj.classList.remove("active");
            }
        });

        tabButtonCv.addEventListener("click", (event) => {
            event.preventDefault();
            if (extendedTabCv.classList.contains("hidden-tabs")) {
                hideAllExtendedTabs();
                extendedTabCv.classList.remove("hidden-tabs");
                removeActiveState();
                tabButtonCv.classList.add("active");
            } else {
                extendedTabCv.classList.add("hidden-tabs");
                tabButtonCv.classList.remove("active");
            }
        });
    }

    setActiveMenuDiv();
    

    // LOCAL STORAGE ACTIVATION :)
    const sections = document.querySelectorAll("main > section");
    const appDivs = document.querySelectorAll(".app-div");
    const homeBtnCommand = document.querySelector(".home-btn-command");
    const weatherApp = document.querySelector(".weather-app");
    const spaceApp = document.querySelector(".space-app");
    const poolApp = document.querySelector(".pool-app");
    const miniAppPack = document.querySelector(".mini-app-pack");
    const outsourcingApp = document.querySelector(".outsourcing-app");
    const seeMoreBtn = document.querySelector("#seeMore");
    const weatherAlink = document.querySelector(".weather-a");
    const spaceAlink = document.querySelector(".space-a");
    const outsourceAlink = document.querySelector(".outsource-a");
    const poolAlink = document.querySelector(".pool-a");
    const miniAlink = document.querySelector(".mini-a");

    function setActiveSection(sectionId) {
        const isMobile = window.innerWidth <= 600;
    
        if (isMobile) {
            sections.forEach(section => {
                section.style.display = "flex";  // Ensure all sections are visible
            });
        } else {
            sections.forEach(section => {
                section.style.display = "none";  // Keep hiding sections normally
            });
    
            appDivs.forEach(div => {
                div.classList.remove("active");
            });
    
            const activeSection = document.querySelector(`.${sectionId}`);
            if (activeSection) {
                activeSection.style.display = "block";
            }
    
            const activeAppDiv = document.querySelector(`#${sectionId}`);
            if (activeAppDiv) {
                activeAppDiv.classList.add("active");
            }
        }
    
        localStorage.setItem('activeSection', sectionId);
    }

    const savedSection = localStorage.getItem('activeSection');
    if (savedSection) {
        setActiveSection(savedSection);
    } else {
        setActiveSection("welcome");
    }

    appDivs.forEach(div => {
        div.addEventListener("click", () => {
            const sectionId = div.id;
            setActiveSection(sectionId);
        });
    });
    if (seeMoreBtn) {
        seeMoreBtn.addEventListener("click", () => {
            setActiveSection("about")
        })
    }

    if (homeBtnCommand) {
        homeBtnCommand.addEventListener("click", () => {
            setActiveSection("welcome"); // Ensures only the welcome section is visible
        });
    }
    if (weatherApp) {
        weatherApp.addEventListener("click",() => {
            setActiveSection("project-presentation");
            loadProject("weather-app")
        });
    }
    if (spaceApp) {
        spaceApp.addEventListener("click",() => {
            setActiveSection("project-presentation");
            loadProject("space-tourism")
        });
    }
    if (poolApp) {
        poolApp.addEventListener("click",() => {
            setActiveSection("project-presentation");
            loadProject("pool-cleaning")
        });
    }
    if (miniAppPack) {
        miniAppPack.addEventListener("click",() => {
            setActiveSection("project-presentation");
            loadProject("mini-apps")
        });
    }
    if (outsourcingApp) {
        outsourcingApp.addEventListener("click",() => {
            setActiveSection("project-presentation");
            loadProject("outsourcing")
        });
    }
    // carousel hyperlinks to projects page
    if (weatherAlink) {
        weatherAlink.addEventListener("click",() => {
            event.preventDefault();
            setActiveSection("project-presentation");
            loadProject("weather-app")
        })
    }
    if (spaceAlink) {
        spaceAlink.addEventListener("click",() => {
            event.preventDefault();
            setActiveSection("project-presentation");
            loadProject("space-tourism")
        });
    }
    if (poolAlink) {
        poolAlink.addEventListener("click",() => {
            event.preventDefault();
            setActiveSection("project-presentation");
            loadProject("pool-cleaning")
        });
    }
    if (miniAlink) {
        miniAlink.addEventListener("click",() => {
            event.preventDefault();
            setActiveSection("project-presentation");
            loadProject("mini-apps")
        });
    }
    if (outsourceAlink) {
        outsourceAlink.addEventListener("click",() => {
            event.preventDefault();
            setActiveSection("project-presentation");
            loadProject("outsourcing")
        });
    }
    // Scroll Effect
    function onScroll() {
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        appDivs.forEach((appDiv) => {
            const section = document.querySelector(`.${appDiv.id}`);
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
                appDivs.forEach(div => div.classList.remove("active"));
                appDiv.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", onScroll);
    onScroll();

    // Progress Bars
    const initializeProgressBars = () => {
        const progressBars = document.querySelectorAll('.experienceDiv');

        if (progressBars.length === 0) return;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                const circularProgress = entry.target.querySelector('.circular-progress');
                const progressEndValue = parseInt(entry.target.getAttribute('data-progress-end-value')) || 0;
                const progressValue = entry.target.querySelector('.progress-value');

                if (!circularProgress || !progressValue) return;

                let progressStartValue = 0;
                const progressSpeed = 20;

                const progress = setInterval(() => {
                    if (progressStartValue >= progressEndValue) {
                        clearInterval(progress);
                    } else {
                        progressStartValue++;
                        progressValue.textContent = `${progressStartValue}%`;
                        const angle = progressStartValue * 3.6;
                        circularProgress.style.background = `conic-gradient(rgba(0,0,128,1) ${angle}deg, #ededed 0deg)`;
                    }
                }, progressSpeed);

                observer.unobserve(entry.target);
            });
        });

        progressBars.forEach(bar => observer.observe(bar));
    };

    // Carousel Slide Navigation
    const initializeCarousel = () => {
        const inputs = document.querySelectorAll('.carousel-input');
        const carousel = document.querySelector('.carousel');

        if (!carousel || inputs.length === 0) return;

        const middleIndex = Math.floor(inputs.length / 2);
        inputs[middleIndex].checked = true;
        carousel.style.setProperty('--position', middleIndex + 1);

        inputs.forEach((input, index) => {
            input.addEventListener('change', () => {
                carousel.style.setProperty('--position', index + 1);
            });
        });
    };

    // Initialize All Functions
    initializeProgressBars();
    initializeCarousel();

// POPUP
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popup-message");
const popupCloseBtn = document.getElementById("popup-close-btn");

// Function to show the popup
function showPopup(message) {
    popupMessage.textContent = message; 
    popup.classList.remove("hidden");

    setTimeout(() => {
        popup.classList.add("hidden");
    }, 6000);
}


popupCloseBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
});


function handleButtonClick(event) {
    const button = event.currentTarget;


    const message = button.getAttribute("data-message");
    if (message) {
        showPopup(message);
    }
}


const actionButtons = document.querySelectorAll(".window-button");
actionButtons.forEach(button => {
    button.addEventListener("click", handleButtonClick);
});


// PROJECT DETAILS

let projectsData = [];

async function loadProjects() {
    try {
        const response = await fetch('projects.json');
        const data = await response.json();
        projectsData = data.projects;

        loadProject('outsourcing');
    } catch (error) {
        console.error('Error fetching project data:', error);
    }
}

function loadProject(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) {
        console.error('Project not found:', projectId);
        return;
    }


    document.getElementById("project-title").textContent = project.title;
    document.getElementById("project-description").textContent = project.description;
    document.getElementById("project-image").src = project.image;
    document.getElementById("project-image").alt = project.title;
    document.getElementById("project-why").textContent = project.why;
    document.getElementById("project-difficulties").textContent = project.difficulties;
    document.getElementById("project-learned").textContent = project.learned;


    document.getElementById("project-pic-why").src = project["why-img"];
    document.getElementById("project-diff-img").src = project["diff-img"];

    setActiveButton(projectId);
}

function setActiveButton(activeId) {
    const buttons = document.querySelectorAll(".project-btns-tab button");
    buttons.forEach(btn => {
        if (btn.getAttribute("data-id") === activeId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}


document.querySelectorAll(".project-btns-tab button").forEach(button => {
    button.addEventListener('click', () => {
        const projectId = button.getAttribute("data-id");
        loadProject(projectId);
    });
});

loadProjects();

document.getElementById('extended-menu-tab-cv').addEventListener('click', function() {

    const link = document.createElement('a');
    link.href = '/assets/CV/EduardTudorache.pdf';
    link.download = 'EduardTudorache.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

});
