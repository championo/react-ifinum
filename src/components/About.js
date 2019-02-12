import React from 'react'
import { Section } from './Section/Section'

export const About = () => {
  return (
    <Section title="Ifinum project info">
      <p>
      Этот проект посвящен выполнению тестового задания на позицию Junior Front-end developer. 
      Подробнее о задании можно узнать по ссылке <a href="https://github.com/devjsru/react_test/blob/master/ifinum/task.md">github</a>.
      </p>
      <p>
        Проект Ifinum является учебным и не предназначен для получения коммерческой выгоды.
      </p>
      <p>
        В кодовой базе проекта Вы можете увидеть схожесть с кодом других проектов с сервиса <a href="https://github.com">github</a>.
        Есть вероятность нахождения фрагментов кода полностью совпадающих с кодом в этом проекте. 
        В случае, если Вас, как автора таких фрагментов, это не устраивает - свяжитесь со мной через telegram <a href="https://t.me/championo">https://t.me/championo</a>.
        <blockquote>"Я собираюсь сделать ему предложение, от которого он не сможет отказаться"</blockquote>
      </p>
    </Section>
  );
}