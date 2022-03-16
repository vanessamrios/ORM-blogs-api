const express = require('express');
// require('express-async-errors');
const { userRouter, loginRouter, categoriesRouter, postRouter } = require('./routers');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/post', postRouter);
app.use('/categories', categoriesRouter);

app.use(errorHandler);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
