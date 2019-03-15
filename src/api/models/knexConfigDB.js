export default {
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'ninh',
    password: process.env.MYSQL_USER_PASSWORD,
    database: 'shopphone'
  },
  useNullAsDefault: true
};
