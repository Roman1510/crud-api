const express = require("express");
const monk = require("monk");

const Joi = require("@hapi/joi");

const router = express.Router();

const db = monk(process.env.MONGO_URI);

const faqs = db.get("faqs");

const schema = Joi.object({
  question: Joi.string().trim().required(),
  answer: Joi.string().trim().required(),
  video_url: Joi.string().uri(),
});
router.get("/", async (req, res, next) => {
  try {
    const items = await faqs.find({});
    res.json(items);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await faqs.findOne({
      _id: id,
    });
    if (!item) {
      next(error);
    }
    return res.json(item);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const value = await schema.validateAsync(req.body);
    const item = await faqs.findOne({
      _id: id,
    });
    if (!item) next(error);
    const updated = await faqs.update({
      _id:id,
    },value);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { id } = req.params;
    const value = await schema.validateAsync(req.body);
    const inserted = await faqs.insert(value);
    res.json(value);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", (req, res, next) => {
  res.json({
    message: "hello delete ONE",
  });
});

module.exports = router;
