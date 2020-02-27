
import * as React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Helmet } from "react-helmet"

import Dashboard from './components/Dashboard'

const Application = () => {
  return (
    <BrowserRouter>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Money Charts</title>
      </Helmet>
    </BrowserRouter>
  )
}

render(
  <Application />,
  document.getElementById("root")
)