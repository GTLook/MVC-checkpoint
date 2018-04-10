const model = require('../models/snacks')

function getAll (request, response, next) {
  const limit = request.query.limit
  const data = model.getAll(limit)
  response.status(200).json({ data })
}

function show (request, response, next) {
  const id = request.params.id
  const data = model.show(id)
  response.status(200).json({ data })
}

function create (request, response, next) {
  const result = model.create(request.body)

  if (result.errors) {
    return next({ status: 400, message: `Could not create new snack`, errors: result.errors })
  }

  response.status(201).json({ data: result })
}

module.exports = { getAll, create, show }
