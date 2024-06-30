let acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

acordeonTriggers.forEach((trigger) => {

    trigger.addEventListener("click", () => {
        let acordeon = trigger.parentElement
        acordeon.classList.toggle('open')
    })
})