import Hero from './components/Hero.js';
import Posts from './components/Posts.js';
import Settings from './components/Settings.js';

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: '/', view: Hero },
        // { path: '/posts', view: Posts },
        // { path: '/settings', view: Settings },
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    }); 

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };

    }
    const view = new match.route.view();
    document.getElementById('app').innerHTML = await view.getHtml();
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    router();
});

document.addEventListener('click', e => {
    if (e.target.className === 'link') {
        e.preventDefault();
        navigateTo(e.target.href);
    }
});


