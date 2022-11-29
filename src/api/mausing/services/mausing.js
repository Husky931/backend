'use strict';

/**
 * mausing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mausing.mausing');
