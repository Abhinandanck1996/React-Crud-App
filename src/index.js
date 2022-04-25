import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery'
import 'bootstrap/dist/js/bootstrap'
import 'popper.js/dist/popper'
import './global.css'


let container = document.getElementById("root")
createRoot(container).render(<App/>)