## Запуск

```
yarn

yarn start

```

Запуск storybook :

```

yarn storybook

```

login : test@test.com
password : 123qwe

## От себя

Проект является надстройкой над прошлым проектом, но решил залить его отдельно.
В этом проекте я дополнительно решил укрепить знания по storybook, архитектуре feature-sliced.
Стэк : React, React Router Dom v6, Redux, Redux-thunk, storybook, styled-components, axios, react-hook-form. Методогия : feature-sliced

Баги (которые надо пофиксить) :

1. Если создать пользователя, зайти на его редактирование, потом вернуться -> пользователя не будет. Решение : сохранять как-то стейт, и не запрашивать новых пользователей
2. Свести количество лишних rerender к 0

Трудности :

1. Не получается реализовать styled-components + react hook form. Поэтому всё лежит в одном UI файле.
2. Не получилось сделать кастомный чексбокс. Вернусь через время
