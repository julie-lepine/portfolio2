// transition au scroll
const ratio = 0.1

// objet qui définit l'ensemble des options de notre intersection observer
var options = {
    // élément qui servira de zone d'affichage et qui permettra de détecter si l'élément est visible ou non
    root: null,
    // marges sur les côtés de la zone d'affichage
    rootMargin: '0px',
    // à partir de quel moment le système d'intersection est détecté. 1 : entiereté de l'élément doit être visible
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options)
// observer l'élément avec la classe reveal
document.querySelectorAll('.reveal').forEach(function (r) {
    observer.observe(r)
})
