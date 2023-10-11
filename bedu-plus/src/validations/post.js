const Joi = require("joi");

exports.createPostSchema = Joi.object({
	title: Joi.string().min(5).max(100).required(),
	content: Joi.string().min(5).max(2500).required(),
});

exports.updatePostSchema = Joi.object({
	title: Joi.string().min(5).max(100).optional(),
	content: Joi.string().min(5).max(2500).optional(),
}).min(1);

exports.paramsSchema = Joi.object({
	id: Joi.number().required(),
});
