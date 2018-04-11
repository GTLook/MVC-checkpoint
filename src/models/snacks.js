const uuid = require('uuid/v4')
const snacks = []

class Snack {
  constructor({name, brand, type}){
    this.name = name
    this.id = uuid()
    this.brand = brand
    this.type = type
  }
}

function getAll (limit) {
  return limit ? snacks.slice(0, limit) : snacks
}

function show(id){
    return snacks.find(ele => ele.id === id)
}

function create (body) {
  const errors = []
  const name = body.name

  let response
  if (!name) {
    errors.push('name is required')
    response = { errors }
  } else {
    const snack = new Snack({name: body.name, brand:'snackums', type: 'delicous'})
    snacks.push(snack)
    response = snack
  }
  return response
}

function modify(id, body){
  const obj = snacks.find(ele => ele.id === id)
  obj.data.name = body
  return obj
}

function remove(id){
  return snacks.splice(snacks.indexOf(snacks.find(ele => ele.id === id)),1)
}


module.exports = { getAll, create, show, modify, remove}
