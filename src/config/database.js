module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '1234',
  database: 'go_meetapp',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
