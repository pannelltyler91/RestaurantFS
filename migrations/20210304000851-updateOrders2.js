'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('orders','item5', 
    Sequelize.STRING
  
    );
  },

  down: async (queryInterface, Sequelize) => {
  
      await queryInterface.removeColumn('orders','item5'
        
      );
     
  }
};
