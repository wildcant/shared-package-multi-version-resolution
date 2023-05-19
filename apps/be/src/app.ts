import express from 'express'
import {sum} from '@acme-wct/core'

express()
  .get('/', (_, res) => res.send('OK'))
  .get('/:number', (req, res) => {
    const param = parseInt(req.params.number)
    return res.json({param, plus: 2, equals: sum(param, 2)})
  })
  .listen(3000, () => console.log('Server running at http://localhost:3000'))
