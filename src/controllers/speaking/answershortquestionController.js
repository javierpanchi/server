// External Dependancies
const boom = require('boom')

// Get Data Models
const Obj = require('../../models/speaking/Answershortquestion')

// Get all objs
exports.getObjs = async (req, reply) => {
  try {
    const objs = await Obj.find()
    return objs
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single obj by ID
exports.getSingleObj = async (req, reply) => {
  try {
    const id = req.params.id
    const obj = await Obj.findById(id)
    return obj
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new obj
exports.addObj = async (req, reply) => {
  try {
    const obj = new Obj(req.body)
    return obj.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing obj
exports.updateObj = async (req, reply) => {
  try {
    const id = req.params.id
    const obj = req.body
    const { ...updateData } = obj
    const update = await Obj.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a obj
exports.deleteObj = async (req, reply) => {
  try {
    const id = req.params.id
    const obj = await Obj.findByIdAndRemove(id)
    return obj
  } catch (err) {
    throw boom.boomify(err)
  }
}