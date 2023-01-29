import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

export const fontAwesomeInit = (app) => {
  library.add(faCheck)
  library.add(faXmark)
  app.component('font-awesome-icon', FontAwesomeIcon)
}
