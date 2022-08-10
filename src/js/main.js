import "../scss/styles.scss";

import Tab from "bootstrap/js/dist/tab";
import "bootstrap/js/dist/collapse";

const triggerTabList = document.querySelectorAll('#myTab button')
triggerTabList.forEach(triggerEl => {
    const tabTrigger = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', event => {
        event.preventDefault()
        tabTrigger.show()
    })
})