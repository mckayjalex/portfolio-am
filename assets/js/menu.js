const menuBtn = document.getElementById('menuButton');
const menuSection = document.getElementById('menu');

const menuHandler = () => {
    if(menuSection.classList.contains('hidden')) {
        menuSection.classList.remove('hidden');
    } else {
        menuSection.classList.add('hidden');
    }
}

menuBtn.addEventListener('click', menuHandler)


const sortBtn = document.getElementById('sortameal-btn');
const techblogBtn = document.getElementById('techblog-btn');
const plannerBtn = document.getElementById('planner-btn');
const quizBtn = document.getElementById('quiz-btn');
const weatherBtn = document.getElementById('weather-btn');
const guruBtn = document.getElementById('guru-btn');

const sortInfo = document.getElementById('sortameal-info');
const techblogInfo = document.getElementById('techblog-info');
const plannerInfo = document.getElementById('planner-info');
const quizInfo = document.getElementById('quiz-info');
const weatherInfo = document.getElementById('weather-info');
const guruInfo = document.getElementById('guru-info');

const sortHandler = () => {
    if (sortInfo.classList.contains('hidden')) {
        sortInfo.classList.remove('hidden');
        sortBtn.classList.add('opacity-40');
        return;
    } 
    sortInfo.classList.add('hidden');
    sortBtn.classList.remove('opacity-40');
}
const techHandler = () => {
    if (techblogInfo.classList.contains('hidden')) {
        techblogInfo.classList.remove('hidden');
        techblogBtn.classList.add('opacity-40');
        return;
    } 
    techblogInfo.classList.add('hidden');
    techblogBtn.classList.remove('opacity-40');
}
const plannerHandler = () => {
    if (plannerInfo.classList.contains('hidden')) {
        plannerInfo.classList.remove('hidden');
        plannerBtn.classList.add('opacity-40');
        return;
    } 
    plannerInfo.classList.add('hidden');
    plannerBtn.classList.remove('opacity-40');
}
const quizHandler = () => {
    if (quizInfo.classList.contains('hidden')) {
        quizInfo.classList.remove('hidden');
        quizBtn.classList.add('opacity-40');
        return;
    } 
    quizInfo.classList.add('hidden');
    quizBtn.classList.remove('opacity-40');
}
const weatherHandler = () => {
    if (weatherInfo.classList.contains('hidden')) {
        weatherInfo.classList.remove('hidden');
        weatherBtn.classList.add('opacity-40');
        return;
    } 
    weatherInfo.classList.add('hidden');
    weatherBtn.classList.remove('opacity-40');
}
const guruHandler = () => {
    if (guruInfo.classList.contains('hidden')) {
        guruInfo.classList.remove('hidden');
        guruBtn.classList.add('opacity-40');
        return;
    } 
    guruInfo.classList.add('hidden');
    guruBtn.classList.remove('opacity-40');
}

sortBtn.addEventListener('click', sortHandler);
techblogBtn.addEventListener('click', techHandler);
plannerBtn.addEventListener('click', plannerHandler);
quizBtn.addEventListener('click', quizHandler);
weatherBtn.addEventListener('click', weatherHandler);
guruBtn.addEventListener('click', guruHandler);
