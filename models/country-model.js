const { Schema, model } = require('mongoose');

/**
 * @swagger
 * components:
 *   schemas:
 *     Country:
 *       type: object
 *       properties:
 *         abbrev:
 *           type: string
 *           description: Country code.
 *           example: FI
 *         name:
 *           type: string
 *           description: Country name.
 *           example: Finland
 *         postalCodePattern:
 *           type: string
 *           description: Postal code pattern.
 *           example: 99999
 *         postalRegex:
 *           type: string
 *           description: Postal code regexp.
 *           example: ^[0-9]{5}$
 *         _id:
 *           type: string
 *           description: Identifier received from the server.
 *           example: 663a132951c79c45833675fa
 */

const countrySchema = new Schema({
  abbrev: String,
  name: String,
  postalCodePattern: String,
  postalRegex: String,
});

module.exports = model('Country', countrySchema);
