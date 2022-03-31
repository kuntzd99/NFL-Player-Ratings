const { Comment } = require('../models/index')

const getCommentsByPlayer = async (req, res) => {
  try {
    const allComments = await Comment.find()
    let comments = []
    allComments.forEach((comment) => {
      if (comment.player._id == req.params.playerId) {
        comments.push(comment)
      }
    })
    if (comments) {
      return res.status(200).json({ comments })
    }
    return res.status(404).send('Comments for this player do not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createComment = async (req, res) => {
  try {
    const comment = await new Comment(req.body)
    await comment.save()
    return res.status(201).json({ comment })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getCommentsByPlayer,
  createComment
}
