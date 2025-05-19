

Backend : 

- include the Database url in the .env - (refer .env.local)
- generate the prisma client : ```npx prisma generate```
- migrate the schema : ```npx prisma migrate dev --name init```
- generate better-auth client : ```npx @better-auth/cli generate```
- start the backend : ```yarn dev```

Frontend :

- start the frontend : ```yarn dev```


Cors already configired ! just add the DB url and 
