const { check } = require('express-validator')
const { Restaurant, Product } = require('../../models')
const { checkFileIsImage, checkFileMaxSize } = require('./FileValidationHelper')

const maxFileSize = 2000000 // around 2Mb

const checkRestaurantExists = async (value, { req }) => {
  try {
    const restaurant = await Restaurant.findByPk(req.body.restaurantId)
    if (restaurant === null) {
      return Promise.reject(new Error('The restaurantId does not exist.'))
    } else { return Promise.resolve() }
  } catch (err) {
    return Promise.reject(new Error(err))
  }
}

const checkBussinessRuleOneProductPromoted = async (restId, promotedValue) => {
  if (promotedValue) {
    try {
      const promotedProducts = await Product.findAll({ where: { restaurantId: restId, promoted: true } })
      if (promotedProducts.length !== 0) {
        return Promise.reject(new Error('You can only promote one product at a time'))
      }
    } catch (err) {
      return Promise.reject(new Error(err))
    }
  }

  return Promise.resolve('ok')
}

module.exports = {
  create: [
    check('name').exists().isString().isLength({ min: 1, max: 255 }).trim(),
    check('promoted').exists().isBoolean().toBoolean().custom(checkBussinessRuleOneProductPromoted),
    check('description').optional({ checkNull: true, checkFalsy: true }).isString().isLength({ min: 1 }).trim(),
    check('price').exists().isFloat({ min: 0 }).toFloat(),
    check('order').default(null).optional({ nullable: true }).isInt().toInt(),
    check('availability').optional().isBoolean().toBoolean(),
    check('productCategoryId').exists().isInt({ min: 1 }).toInt(),
    check('restaurantId').exists().isInt({ min: 1 }).toInt(),
    check('restaurantId').custom(checkRestaurantExists),
    check('image').custom((value, { req }) => {
      return checkFileIsImage(req, 'image')
    }).withMessage('Please upload an image with format (jpeg, png).'),
    check('image').custom((value, { req }) => {
      return checkFileMaxSize(req, 'image', maxFileSize)
    }).withMessage('Maximum file size of ' + maxFileSize / 1000000 + 'MB')
  ],

  update: [
    check('name').exists().isString().isLength({ min: 1, max: 255 }),
    check('description').optional({ nullable: true, checkFalsy: true }).isString().isLength({ min: 1 }).trim(),
    check('price').exists().isFloat({ min: 0 }).toFloat(),
    check('order').default(null).optional({ nullable: true }).isInt().toInt(),
    check('availability').optional().isBoolean().toBoolean(),
    check('productCategoryId').exists().isInt({ min: 1 }).toInt(),
    check('restaurantId').not().exists(),
    check('image').custom((value, { req }) => {
      return checkFileIsImage(req, 'image')
    }).withMessage('Please upload an image with format (jpeg, png).'),
    check('image').custom((value, { req }) => {
      return checkFileMaxSize(req, 'image', maxFileSize)
    }).withMessage('Maximum file size of ' + maxFileSize / 1000000 + 'MB'),
    check('restaurantId').not().exists()
  ]
}
