npx dotenv sequelize db:create

npx sequelize model:generate --name User --attributes username:string,email:string,hashedPassword:string
npx dotenv sequelize db:migrate

//if you need to undue a single migration
npx dotenv sequelize db:migrate:undo

//user seed
npx sequelize seed:generate --name demo-user

npx dotenv sequelize db:seed:all
npx dotenv sequelize db:seed:undo:all
