const TOTAL_QUESTIONS = 8;

const questions = [
  {
    title: `На какую сумму Роспотребнадзор оштрафовал продуктовую сеть «Вкусвилл»?`,
    options: [
      {
        text: `6,3 млн рублей`,
        answer: `Верно. Проверка обнаружила просроченные продукты, но представители
        сети утверждают, что большая часть замечаний не коснулась их качества.`,
        isCorrect: true,
      }, {
        text: `1 млн рублей`,
        answer: `Нет, немного больше: 6,3 млн рублей. Проверка обнаружила просроченные
        продукты, но представители сети утверждают, что большая часть замечаний не коснулась их качества.`,
        isCorrect: false,
      }, {
        text: `50 млн рублей`,
        answer: `Нет, гораздо меньше: 6,3 млн рублей. Проверка обнаружила просроченные продукты,
        но представители сети утверждают, что большая часть замечаний не коснулась их качества.`,
        isCorrect: false,
      }, {
        text: `Не оштрафовал, а объявил выговор`,
        answer: `Нет, всё же оштрафовал на 6,3 млн рублей.
        Проверка обнаружила просроченные продукты, но представители сети утверждают,
        что большая часть замечаний не коснулась их качества.`,
        isCorrect: false,
      }
    ],
  }, {
    title: `Почему бутылку воды «Святой источник» в форме футбольного мяча сняли с продажи?`,
    options: [
      {
        text: `Она оказалась огнеопасной`,
        answer: `Да, бутылка благодаря своей форме призмы фокусировала свет так, что он воспламенял окружающие предметы.`,
        isCorrect: true,
      }, {
        text: `Дети играли ею в футбол и разбивали окна`,
        answer: `Нет, дело в её форме призмы — она фокусировала свет так, что он воспламенял окружающие предметы.`,
        isCorrect: false,
      }, {
        text: `Она постоянно скатывалась с полок`,
        answer: `Бутылка была довольно устойчивая, но благодаря своей форме призмы фокусировала свет так,
        что он воспламенял окружающие предметы.`,
        isCorrect: false,
      }, {
        text: `Её никто не покупал`,
        answer: `Её покупали, но бутылка благодаря своей форме призмы фокусировала свет так, что он воспламенял окружающие предметы.`,
        isCorrect: false,
      }
    ],
  }, {
    title: `Сколько денег потеряли основатели WhatsApp после ухода из  Facebook?`,
    options: [
      {
        text: `Они лишились акций на $1,3 млрд`,
        answer: `Ян Кум и Брайан Эктон действительно могли получить акции на эту сумму,
        если бы проработали в Facebook до ноября 2018 года. Они ушли досрочно из-за конфликта с руководством.`,
        isCorrect: true,
      }, {
        text: `Они не только лишились акций на $1,3 млрд и выплатили штрафы на $100 млн`,
        answer: `Ян Кум и Брайан Эктон могли получить акции на $1,3 млрд, если бы проработали в Facebook до ноября 2018 года.
        Они ушли досрочно из-за конфликта с руководством, но штрафы никто не выплачивал.`,
        isCorrect: false,
      }, {
        text: `Ничего не лишились, к моменту ухода они уже получили всё вознаграждение`,
        answer: `Ян Кум и Брайан Эктон могли получить акции на $1,3 млрд, если бы проработали в Facebook до ноября 2018 года.
        Они ушли досрочно из-за конфликта с руководством.`,
        isCorrect: false,
      }, {
        text: `Ничего не лишились, но получили иски за нарушение коммерческой тайны`,
        answer: `Ян Кум и Брайан Эктон могли получить акции на $1,3 млрд, если бы проработали в Facebook до ноября 2018 года.
        Они ушли досрочно из-за конфликта с руководством — но коммерческую тайну пока никто не нарушил.`,
        isCorrect: false,
      }
    ],
  }, {
    title: `В какой скандал угодила компания «Газелькин» в июне 2018 года?`,
    options: [
      {
        text: `Предложила клиентам вызвать «водителей-славян» за дополнительную плату`,
        answer: `Компания дала клиентам возможность выбрать водителя славянской внешности
        и российского гражданства. После скандала она переименовала услугу в «идеальный русский язык».`,
        isCorrect: true,
      }, {
        text: `Её «Газели» постоянно застревали под мостом с надписью «Газель не проедет»`,
        answer: `Было пару раз, но не в июне. На самом деле компания дала клиентам возможность выбрать водителя
        славянской внешности и российского гражданства. После она переименовала услугу в «идеальный русский язык».`,
        isCorrect: false,
      }, {
        text: `Грузчики разбили антикварный шкаф стоимостью 163 млн рублей`,
        answer: `О таком случае не сообщалось, но зато компания дала клиентам возможность выбрать водителя славянской
        внешности и российского гражданства. После скандала она переименовала услугу в «идеальный русский язык».`,
        isCorrect: false,
      }, {
        text: `Выложила персональные данные клиентов — телефоны, адреса, почты — в открытый доступ`,
        answer: `О таком случае не сообщалось, но зато компания дала клиентам возможность выбрать водителя
        славянской внешности и российского гражданства. После скандала она переименовала услугу в «идеальный русский язык».`,
        isCorrect: false,
      }
    ],
  }, {
    title: `Простой вопрос для передышки. До какого порога правительство собирается повысить НДС?`,
    options: [
      {
        text: `20%`,
        answer: `Да, НДС собираются повысить с 18% до 20%. Кстати, вот чем это грозит`,
        isCorrect: true,
      }, {
        text: `19%`,
        answer: `Нет, всё же именно НДС собираются повысить с 18% до 20%. Кстати, вот чем это грозит`,
        isCorrect: false,
      }, {
        text: `21%`,
        answer: `Нет, НДС собираются повысить с 18% до 20%. Кстати, вот чем это грозит`,
        isCorrect: false,
      }, {
        text: `Никто не собирается повышать НДС, зато повысят НДФЛ`,
        answer: `Нет, всё же именно НДС собираются повысить с 18% до 20%. Кстати, вот чем это грозит`,
        isCorrect: false,
      }
    ],
  }, {
    title: `Чем займётся Герман Клименко после ухода с поста советника президента по интернету?`,
    options: [
      {
        text: `Проектами в сфере цифровой медицины`,
        answer: `<a href="#">Верно</a>`,
        isCorrect: true,
      }, {
        text: `Станет разрабатывать собственный мессенджер`,
        answer: `Это вполне возможно, но сперва он планирует заниматься проектами в сфере цифровой медицины.`,
        isCorrect: false,
      }, {
        text: `Будет советником по медицине`,
        answer: `Нет, он планирует заниматься собственными проектами в сфере цифровой медицины.`,
        isCorrect: false,
      }, {
        text: `Отправится в кругосветное путешествие`,
        answer: `Он планирует заниматься собственными проектами в сфере цифровой медицины.`,
        isCorrect: false,
      }
    ],
  }, {
    title: `Какую услугу запустила «Студия Артемия Лебедева» на волне успеха «Экспресс-дизайна»?`,
    options: [
      {
        text: `Экспресс-дизайн не логотипов, а предметов — за 300 тысяч рублей`,
        answer: `Да, и заказчик точно так же обязан принять первый предложенный вариант.`,
        isCorrect: true,
      }, {
        text: `Сервис экспресс-маркетинга: за 500 тысяч рублей Артемий Лебедев лично весь месяц будет вести ваш блог`,
        answer: `Речь об экспресс-дизайне предметов, и заказчик точно так же обязан принять первый предложенный вариант.`,
        isCorrect: false,
      }, {
        text: `Экспресс-доставку обедов в офис`,
        answer: `Речь об экспресс-дизайне предметов, и заказчик точно так же обязан принять первый предложенный вариант.`,
        isCorrect: false,
      }, {
        text: `Создание визиток за 50 тысяч рублей`,
        answer: `Речь об экспресс-дизайне предметов, и заказчик точно так же обязан принять первый предложенный вариант.`,
        isCorrect: false,
      }
    ],
  }, {
    title: `Что сказал Олег Тиньков в интервью Владимиру Познеру в рамках ПМЭФ-2018?`,
    options: [
      {
        text: `Это стыдно — нанимать людей, которыми нужно управлять`,
        answer: `Вопрос был с подвохом: все эти фразы прозвучали в <a href="#">интервью.</a>`,
        isCorrect: true,
      }, {
        text: `Я бы хотел, чтобы на моей гробовой доске было написано слово «Предприниматель»`,
        answer: `Вопрос был с подвохом: все эти фразы прозвучали в <a href="#">интервью.</a>`,
        isCorrect: false,
      }, {
        text: `Чтобы быть предпринимателем, не нужно никакого образования`,
        answer: `Вопрос был с подвохом: все эти фразы прозвучали в <a href="#">интервью.</a>`,
        isCorrect: false,
      }, {
        text: `Предприниматели должны быть звёздами и элитой общества`,
        answer: `Вопрос был с подвохом: все эти фразы прозвучали в <a href="#">интервью.</a>`,
        isCorrect: false,
      }
    ],
  },
];

const results = [
  {
    maxScore: 0,
    comment: `Мне больше интересен футбол`,
    image: `imgAnswer1`,
  }, {
    maxScore: 3,
    comment: `Читаю vc.ru с экрана попутчика в метро`,
    image: `imgAnswer2`,
  }, {
    maxScore: 5,
    comment: `Бизнес это интересно, но где взять столько времени?`,
    image: `imgAnswer3`,
  }, {
    maxScore: 7,
    comment: `Читаю vc.ru каждый день, но работать тоже нужно`,
    image: `imgAnswer4`,
  }, {
    maxScore: 8,
    comment: `Я работаю в редакции vc.ru`,
    image: `imgAnswer5`,
  }
];

let currentQuestion = 1;
let correctAnswers = 0;

const quizBlock = document.querySelector(`.quiz`);
const startWindow = document.querySelector(`#start`).content.querySelector(`.start-window`);
const startButton = startWindow.querySelector(`button`);

const generateQuestionOption = (option, index) => {
  return (
    `<div class="question__option">
      <input type="radio" name="option" id="${index}">
      <label for="${index}">${option.text}</label>
  </div>`
  );
};

const generateQuestion = (question) => {
  return (
    `<section class="quiz__question  question">
      <p class="question__number">${currentQuestion}/${TOTAL_QUESTIONS}</p>
      <p class="question__title">${question.title}</p>
      <form class="question__form"></form>
    </section>`
  );
};

const generateAnswer = (answer) => {
  return (
    `<section class="quiz__answer  answer">
      <p class="answer__number">${currentQuestion}/8</p>
      <p class="answer__title">${questions[currentQuestion - 1].title}</p>
      <p class="answer__text ${answer.isCorrect ? `answer__text--correct` : ``}">${answer.text}</p>
      <p class="answer__answer">${answer.answer}</p>
      <button class="answer__button" type="button">Продолжить</button>
    </section>`
  );
};

const generateResult = () => {
  let result = 0;
  results.forEach((it, index) => {
    if (it.maxScore <= correctAnswers) {
      result = index;
    }
  });

  return (
    `<section class="quiz__result  result">
      <img src="./img/bg-boy.jpg" alt="">
      <p class="result__number">${correctAnswers} из ${TOTAL_QUESTIONS} правильных ответов</p>
      <p class="result__title">${results[result].comment}</p>
      <ul class="result__social  social">
        <li class="social__item  social__item--fb" aria-label="Поделиться результатом в Фейсбук"></li>
        <li class="social__item  social__item--vk" aria-label="Поделиться результатом во Вконтакте"></li>
        <li class="social__item  social__item--twitter" aria-label="Поделиться результатом в Твиттер"></li>
      </ul>
      <button class="result__button" type="button">Пройти еще раз</button>
    </section>`
  );
};

const onAnswerButtonClick = () => {
  if (currentQuestion >= TOTAL_QUESTIONS) {
    quizBlock.innerHTML = generateResult();
    document.querySelector(`.result__button`).addEventListener(`click`, () => {
      currentQuestion = 1;
      correctAnswers = 0;
      openQuestionWindow();
    });
  } else {
    currentQuestion += 1;
    openQuestionWindow();
  }
};

const onQuestionControlClick = (evt) => {
  const choosedOption = questions[currentQuestion - 1].options[evt.target.id];
  if (choosedOption.isCorrect) {
    correctAnswers += 1;
  }
  quizBlock.innerHTML = generateAnswer(choosedOption);
  document.querySelector(`.answer__button`).addEventListener(`click`, onAnswerButtonClick);
};

const openQuestionWindow = () => {
  const question = questions[currentQuestion - 1];
  quizBlock.innerHTML = generateQuestion(question);
  const form = document.querySelector(`.question__form`);
  question.options.forEach((option, index) => {
    form.insertAdjacentHTML(`beforeend`, generateQuestionOption(option, index));
  });
  form.addEventListener(`change`, onQuestionControlClick);
};

const startTest = () => {
  quizBlock.appendChild(startWindow);
  startButton.addEventListener(`click`, () => {
    openQuestionWindow();
  });
};

startTest();
