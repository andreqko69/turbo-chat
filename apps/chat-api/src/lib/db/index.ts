import { Sequelize } from 'sequelize';

let sequelize: Sequelize;

export const intializeDb = async () => {
  console.info('Connecting to the database!');

  sequelize = new Sequelize(
    'postgresql://neondb_owner:npg_p9B4IDLFXWis@ep-yellow-unit-a2m1ily1-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require',
  );
  await sequelize.authenticate();

  console.info('Connection has been established successfully!');
};

export const getSequalize = async () => {
  if (!sequelize) {
    await intializeDb();
  }

  return sequelize;
};
