const timestamp = new Date();

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('users', [{
    id: 1,
    username: 'oliver',
    passwd: '02be052300bdd2390b1ba0776e43cbaa663aad44e751446c0f4d2d58fc7108ba',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    id: 2,
    username: 'troy',
    passwd: 'this-is-fake-encrypted-passwd',
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('users', {
    id: { [Sequelize.Op.in]: [1, 2] },
  }, {}),
};