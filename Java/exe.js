document.addEventListener('DOMContentLoaded', function () {

    if (document.readyState === "complete")
    document.querySelectorAll('.header-links a', '.header-navi a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            const targetID = this.getAttribute('href');
            const targetSection = document.querySelector(targetID);
            
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    

    const exploreBtn = document.querySelector('.exploreBtn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function () {
            const aboutSection = document.getElementById('about-section');
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        });
    } else {
        console.error('Explore button not found.');
    }


    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function () {
        if (window.scrollY > lastScrollY) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }
        lastScrollY = window.scrollY;
    });


    const easyReadButton = document.getElementById('easy-read');
    const descriptionText = document.getElementById('description-text');

    if (easyReadButton) {
        easyReadButton.addEventListener('click', function () {
            descriptionText.classList.toggle('easy-read-active');
            easyReadButton.textContent = 'Easy Read';
        });
    }

    const projectEasyReadButton = document.getElementById('project-easy-read');
    const projectDescriptionText = document.getElementById('project-description-text');

    if (projectEasyReadButton) {
        projectEasyReadButton.addEventListener('click', function () {
            projectDescriptionText.classList.toggle('easy-read-active');
            projectEasyReadButton.textContent = 'Easy Read';
        });
    }


    const progressBars = document.querySelectorAll('.experienceDiv');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const circularProgress = entry.target.querySelector('.circular-progress');
            const progressEndValue = Math.min(parseInt(entry.target.getAttribute('data-progress-end-value')), 100);
            const progressValue = entry.target.querySelector('.progress-value');

            let progressStartValue = 0;
            const progressSpeed = 20;

            const progress = setInterval(() => {
                if (progressStartValue >= progressEndValue) {
                    clearInterval(progress);
                } else {
                    progressStartValue++;
                    progressValue.textContent = `${progressStartValue}%`;

                    const angle = progressStartValue * 3.6;
                    circularProgress.style.background = `conic-gradient(rgb(199, 83, 83) ${angle}deg, #ededed 0deg)`;
                }
            }, progressSpeed);

            observer.unobserve(entry.target);
        });
    });

    progressBars.forEach(bar => observer.observe(bar));


    let slideIndex = 1;
    const images = [
        "./assets/img/WeatherApp.png",
        "./assets/img/spaceProject.png",
        "./assets/img/miniApps.png"
    ];

    const projectNames = [
        "Weather App",
        "Space Project",
        "Mini Apps"
    ];

    const descriptions = [
        "The Weather App is a cool, user-friendly tool that helps you check the weather in real time, right where you are! With the help of a weather API, it fetches all the important details like temperature, humidity, and wind speed, plus forecasts for the days ahead. The app is designed to be super easy to use—just search for any location you’re curious about, and voilà! You’ll get a quick snapshot of the weather. It's mobile-friendly, so you can stay updated on the go. Plus, with its vibrant design, it’s not just functional but a joy to use!",
        "The Space-Themed Website is an exciting single-page adventure that takes you through the wonders of the universe! You can explore sections about destinations, the crew, and the amazing technology behind space exploration. It’s got a sleek hamburger menu for easy navigation, making it super simple to hop between sections. Using some snazzy JavaScript, the site updates dynamically based on your clicks, giving you a smooth and interactive experience. With its fun visuals and engaging content, it's the perfect spot for anyone curious about space!",
        "This fun bundle of apps has everything you need to keep your life organized, improve your skills, and maybe even give you a little inspiration! The Age Calculator is a quick and easy way to find out how old you are in different units, whether it’s years, months, or even days. The To-Do App helps you stay on top of your tasks, letting you jot down reminders and check things off as you go. Want to sharpen your shooting skills? The Aim Trainer is perfect for practicing your aim and improving your focus. And when you’re in need of a little pick-me-up, the Random Advice App offers quirky and insightful tips to brighten your day. With this bundle, you’ll have tools at your fingertips to help you stay organized, improve, and have fun!"
    ];

    const imgElements = images.map((src) => {
        const img = new Image();
        img.src = src;
        return img;
    });


    document.querySelector('.mySlides img').src = imgElements[0].src;


    showSlides(slideIndex);


    window.plusSlides = function (n) {
        showSlides(slideIndex += n);
    };


    function showSlides(n) {
        const slides = document.getElementsByClassName("mySlides");
        const projectNameText = document.getElementById("project-name-text");
        const projectDescriptionText = document.getElementById("project-description-text");


        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }


        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slides[slideIndex - 1].style.display = "block"; 
        slides[slideIndex - 1].querySelector('img').src = imgElements[slideIndex - 1].src;

        projectNameText.textContent = projectNames[slideIndex - 1];
        projectDescriptionText.textContent = descriptions[slideIndex - 1];
    }
});
