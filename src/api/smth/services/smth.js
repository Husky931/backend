'use strict';

/**
 * smth service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::smth.smth');
