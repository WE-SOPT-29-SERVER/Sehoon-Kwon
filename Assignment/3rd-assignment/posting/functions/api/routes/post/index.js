const express = require('express');
const router = express.Router();
const rm = require('../../../constants/responseMessage');
const sc = require('../../../constants/statusCode');
const { fail, success } = require('../../../lib/util');
const posts = require('../../../dbMockup/posts');

/**
 * @모든_게시글_조회
 */
router.get('/', async (req, res) => {
  const allPost = posts.length > 0;
  if (!allPost) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NO_POST));
  }
  res.status(sc.OK).send(success(sc.OK, rm.GET_POST_SUCCESS, posts));
});

/**
 * @특정_게시글_조회
 */
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  const findPost = posts.filter((post) => post.id === Number(id))[0];

  if (!findPost) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NO_POST));
  }

  res.status(sc.OK).send(success(sc.OK, rm.GET_POST_SUCCESS, findPost));
});

/**
 * @게시글_생성
 */
router.post('/', async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  const newPost = { id: posts.length + 1, title, content };
  posts.push(newPost);
  res.status(sc.OK).send(success(sc.OK, rm.CREATED_POST, newPost));
});

/**
 * @특정_게시글_수정
 */
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { newTitle, newContent } = req.body;

  if (!id || !newTitle || !newContent) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  const findPost = posts.filter((post) => post.id === Number(id))[0];

  if (!findPost) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NO_POST));
  }

  const updatedPost = { ...findPost, title: newTitle, content: newContent };
  res.status(sc.OK).send(success(sc.OK, rm.UPDATE_POST_SUCCESS, updatedPost));
});

/**
 * @특정_게시글_삭제
 */
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  const post = posts.filter((post) => post.id === Number(id))[0];

  if (!post) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NO_POST));
  }

  const newPosts = posts.filter((post) => post.id !== Number(id));
  res.status(sc.OK).send(success(sc.OK, rm.DELETE_POST, newPosts));
});

module.exports = router;
