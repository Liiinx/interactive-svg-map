// tuto grafikart pour aider
// https://www.grafikart.fr/tutoriels/carte-interactive-791

// défini les variables
let map = document.querySelector('#map');
let paths = map.querySelectorAll('.map__image #area path');
// var links = map.querySelectorAll('.map__list div');

// polyfill du foreach, pour faire fonctionner forEach sur tous les navigateurs
if(NodeList.prototype.forEach === undefined) {
    NodeList.prototype.forEach = function (callback) {
        [].forEach.call(this, callback)
    }
}

// function activeArea, ajoute et enlève classe is-active à un élément css
var activeArea = function (id) {
    map.querySelectorAll('.is-active').forEach(function (item) {
        item.classList.remove('is-active')
    });
    if (id !== undefined) {
        document.querySelector('#list-' + id).classList.add('is-active');
        // document.querySelector('#' + id).classList.add('is-active');
    }
};

// défini chaque zone de la carte et declare l'évènement mouseenter
paths.forEach(function (path) {
    path.addEventListener('mouseenter', function (e) {
        let id = this.id;
        activeArea(id);
    })
});

map.addEventListener('mouseover', function() {
    activeArea();
});

// mobile click popup, pas de hover sur mobile
paths.forEach(function (path) {
    path.addEventListener('click', function (e) {

        let id = this.id;
        let regionArea = document.getElementById('region-' + id);

        function showPopup()
        {
            map.querySelectorAll('.is-active').forEach(function (item) {
                item.classList.remove('is-active')
            });
            console.log(id);
            if (id !== undefined) {
                document.querySelector('#list-' + id).classList.add('is-active');
            }
        }
        regionArea.onclick = showPopup;
    })
});


