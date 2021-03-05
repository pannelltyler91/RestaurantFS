'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('orders','custom_fkey_user_id', 
    Sequelize.INTEGER
  
    );
  },

  down: async (queryInterface, Sequelize) => {
  
      await queryInterface.removeColumn('orders','custom_fkey_user_id'
        
      );
     
  }
};
