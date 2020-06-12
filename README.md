# regru-api
Библиотека Node.js для упрощения работы с [REG.API 2](https://www.reg.ru/support/help/api2?rlink=reflink-1064807)

## Установка

```bash
$ npm install regru-api
```
Для использования [REG.API](https://www.reg.ru/support/help/api2?rlink=reflink-1064807)
необходимо добавить свой IP адрес в список разрешённых. Для этого перейдите в раздел [Настройки API](https://www.reg.ru/user/account/#/settings/api?rlink=reflink-1064807), желательно сразу установить `Альтернативный пароль` для работы с API.

Для авторизации необходимо использовать логин и пароль от вашего аккаунта.
## Использование

Указанные данные авторизации будут автоматически добавлены в запрос. Наибольшим приоритетом обладает логин и пароль указанные в  `query` объекте.
```javascript
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

Пример с указанием логина и пароля в запросе, на примере [получения списка лотов](https://www.reg.ru/support/help/api2?rlink=reflink-1064807#shop_get_lot_list).
```javascript
const reg = require('regru-api');

(async () => {
    const query = {
        pg: 0,
        sortcol: 'dname',
        sortorder: 'ASC',
        show_my_lots: false,
        username: 'mail@reg.ru',
        password: 'apiPassword',
    };

    const result = await reg.shop.getLotList(query);

    console.log(JSON.stringify(result));
})();
```

## License

  [MIT](LICENSE)