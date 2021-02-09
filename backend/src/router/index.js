
import Router from 'restify-router'
import initRouter from './initRouter'
import {areaRouter, realtimeArea} from './areaRouter'
import usuarioRouter from './usuarioRouter'
import equipeRouter, {setRealtimeEquipe} from './equipeRouter'
import {arrecadacaoRouter, setRealtimeArrecadacao} from './arrecadacaoRouter'
import {metaRouter, setRealtimeMeta} from './metaRouter'
import {menuRouter, setRealtimeMenu} from './menuRouter'
import temaRouter from './temaRouter'
import emailConfigRouter from './emailConfigRouter'
import emailContactRouter from './emailContactRouter'
import {contatoRouter, setRealtimeContato} from './contatoRouter'
import redesSociaisRouter, {setRealtimeRedes} from './redesSociaisRouter'
const router = new Router.Router()
const prefix = '/api/v1'

const routes = deps => {
    
    const {server, io} = deps
    realtimeArea( io )
    setRealtimeMenu(io)
    setRealtimeArrecadacao(io)
    setRealtimeMeta(io)
    setRealtimeContato(io)
    setRealtimeRedes(io)
    setRealtimeEquipe(io)
    router.add('/', initRouter)
    router.add(`${prefix}/area`, areaRouter)
    router.add(`${prefix}/usuario`, usuarioRouter)
    router.add(`${prefix}/equipe`, equipeRouter)
    router.add(`${prefix}/arrecadacao`, arrecadacaoRouter)
    router.add(`${prefix}/meta`, metaRouter)
    router.add(`${prefix}/menu`, menuRouter)
    router.add(`${prefix}/tema`, temaRouter)
    router.add(`${prefix}/email-config`, emailConfigRouter)
    router.add(`${prefix}/email-contact`, emailContactRouter)
    router.add(`${prefix}/contato`, contatoRouter)
    router.add(`${prefix}/redes`, redesSociaisRouter)

    router.applyRoutes( server )
}



export default routes