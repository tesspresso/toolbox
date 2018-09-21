/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as SymptomChoice} from './symptom-choice'
export {Login, Signup} from './auth-form'
export {default as DropdownMenu} from './dropdown-menu'
export {default as SolutionsList} from './solutions-list'
