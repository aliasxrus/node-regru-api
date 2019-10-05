# regru-api
Библиотека Node.js для упрощения работы с [REG.API 2](https://www.reg.ru/support/help/api2?rlink=reflink-1064807)

## Установка

```bash
$ npm install regru-api
```
Для использования [REG.API](https://www.reg.ru/support/help/api2?rlink=reflink-1064807)
необходимо добавить свой IP адрес в список разрешённых. Для этого обратитесь
в [службу технической поддержки.](https://www.reg.ru/support/tickets?rlink=reflink-1064807)

Для авторизации необходимо использовать логин и пароль от вашего аккаунта.
## Использование

```bash
const reg = require('regru-api');

const auth = {
  username: 'test',
  password: 'test',
};
reg.auth(auth);

(async () => {
  const query = {
    servtype: 'domain'
  };

  const result = await reg.service.getList(query);

  console.log(JSON.stringify(result));
})();
```

## License

  [MIT](LICENSE)