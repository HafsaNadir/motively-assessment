const { query } = require('express-validator');

const podcastValidationRules = [
  query('title').optional().isString().withMessage('Title must be a string'),
  query('categoryName').optional().isString().withMessage('Category name must be a string'),
  query('search').optional().isString().withMessage('Search term must be a string'),
  query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
  query('limit').optional().isInt({ min: 1 }).withMessage('Limit must be a positive integer')
];

module.exports = {
  podcastValidationRules,
};
