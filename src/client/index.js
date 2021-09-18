import { handleSubmit } from './js/formHandler'
import { retrieveAPI } from './js/formHandler'
import { isUrlValid } from './js/formHandler'
import { createPostReq } from './js/postText'
import { postText } from './js/postText'
import { createTable } from './js/createTable'
import { createTableRows } from './js/createTable'
import { removeTable } from './js/createTable'
import { createTableBody } from './js/createTable'
import { populateTableRows } from './js/createTable'


import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'
import './styles/table.scss'

import './styles/img/newspaper.JPG'

export { 
    handleSubmit,
    retrieveAPI,
    removeTable,
    isUrlValid,
    createPostReq,
    postText,
    createTable,
    createTableBody,
    createTableRows,
    populateTableRows
    }
