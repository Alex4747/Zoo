import { useState, useEffect } from 'react';
import { Routes, Route, } from 'react-router-dom';
import Main from './pages/Main';
import Animal from './pages/Animal';

const animalsData = [
  {
    id: 1,
    parentId: 1,
    src: '../images/matatabi.png',
    name: 'Мататаби',
    title: 'Мататаби - двухвостая кошка биджу, хвостатый дух которая полностью покрыта сине-черным огнём. Запечатана в ' +
      'дженчурики(человеке в котором живёт демон) по имени Югито из деревни скрытого облака. Глаза у Мататаби с гетерохромией' +
      ' — правый жёлтый, а левый зелёный. В отличие от других Биджу, Мататаби крайне вежлива и уважительна. Является ' +
      'представительницей женского пола, когда говорит о себе.',
    dgenName: 'Югито Нии',
    src2: '../images/Yugito.png',
    gif: '../images/matatabi_gif.gif',
    lastEat: Date.now(),
    feedIteration: 3 * 3600,
    alive: true,
    wasHungry: Date.now(),
    birthday: "29.12.2012",
  },
  {
    id: 2,
    parentId: 2,
    src: '../images/sonGoky.png',
    name: 'Сон Гоку',
    title: 'Сон Гоку - четыреххвостая обезьяна биджу, красношерстная зеленокожая обезьяна, дух который напоминающая по своей комплекции гориллу. ' +
      'Запечатан в ' + 'дженчурики(человеке в котором живёт демон) по имени Роуши из деревни скрытого камня. Его глаза имеют жёлтые склеры и белые ' +
      'зрачки, а по всем его хвостам располагаются костяные гребни, в то время как клыки удлинены, а из головы прорастают два изогнутых рога с чёрными' +
      ' концами, похожие на корону. У Сона отсутствует язык, однако во рту имеется отверстие в форме купольного вулкана.',
    dgenName: 'Роуши',
    src2: '../images/Roushi.png',
    gif: '../images/songoku_gif.gif',
    lastEat: Date.now(),
    feedIteration: 12 * 3600,
    alive: true,
    wasHungry: Date.now(),
    birthday: "2.9.2010",
  },
  {
    id: 3,
    parentId: 3,
    src: '../images/hachibi.png',
    name: 'Гьюки',
    title: 'Гьюки - осьминог с четырьмя длинными рогами на голове, похожими на рога овцы Якова. Как хвостатый зверь, он довольно большой,' +
      ' он больше лесов, башен и по размеру не уступает Гигантскому Кальмару. Нижняя левая часть его рога была отрезана в битве с Четвертым Райкаге,' +
      ' а правый рог был уничтожен его собственным Шаром Хвостатого Зверя, который он использовал в упор в битве с Десятихвостым. ' +
      'У него прямые зубы, один из которых был выбит во время использования Шара Хвостатого Зверя, который отразили в него самого. ' +
      'Гьюки имеет мускулистую структуру верхней части тела, с согнутой спиной, подобной американскому зубру, руки с шипами на локтях и ' +
      'ладони с противостоящими большими пальцами, как у человека. Вместо задних ног его нижняя половина состоит из восьми хвостов,' +
      ' которые напоминают щупальца головоногих осьминогов. Эти хвосты будут отращены заново, если их отрезать.',
    dgenName: 'Биллер Би',
    src2: '../images/Killer_B.png',
    gif: '../images/giybi_gif.gif',
    lastEat: Date.now(),
    feedIteration: 24 * 3600,
    alive: true,
    wasHungry: Date.now(),
    birthday: "15.1.2015",
  },
  {
    id: 4,
    parentId: 4,
    src: '../images/kurama.png',
    name: 'Курама',
    title: 'Курама - лис с красно-оранженой шерстью, человеческими руками и девятью длинными хвостами. Внутри ушей и вокруг глаз' +
      ' у него черная шерсть. Радужки глаз красные, а зрачки черные. Глава Горы Мьёбоку - огромная жаба Гамабунта, был размером лишь с половину туловища Девятихвостого. ' +
      'Один зрачок Курамы больше человека в полный рост. Когда Минато разделил Кураму на две части, в размерах они стали в два раза меньше, чем когда были единым целым,' +
      ' но все равно смотрелись наравне с остальными хвостатыми.',
    dgenName: 'Наруто',
    src2: '../images/Naruto_Uzumaki.png',
    gif: '../images/kurama_gif.gif',
    lastEat: Date.now(),
    feedIteration: 6 * 3600,
    alive: true,
    wasHungry: Date.now(),
    birthday: "6.6.2011",
  },
];

const animalsWithFun = [...animalsData].map((animal) => {
  return Object.assign(animal, {
    feed: () => {
      animal.lastEat = Date.now();
    }
  });
})


function App() {
  const [animals, setAnimals] = useState(animalsWithFun);

  // useEffect(() => {
  //   const data = localStorage.getItem("server");
  //   if (data) {
  //     setAnimals(JSON.parse(data));
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem("server", JSON.stringify(animals));
  });

  const getUpdatedAnimalsOnTimer = (animalsPrev) => {
    const animalCopy = [...animalsPrev];

    animalCopy.map((animal) => {
      const start = animal.lastEat;
      const diffInMilliSec = Date.now() - start;
      const diffInSec = Math.floor(diffInMilliSec / 1000);
      const diffInPercent = 100 - Math.round((diffInSec / animal.feedIteration) * 100);
      let hungryStatus = '';
      let speech = '';

      const dateObj = new Date();
      const day = dateObj.getUTCDate();
      const month = dateObj.getUTCMonth() + 1;
      const year = dateObj.getUTCFullYear();

      if (diffInPercent >= 51) {
        hungryStatus = 'green';
        speech = 'Полный бак, дай полежать';
      }
      else if (diffInPercent <= 50 && diffInPercent >= 11) {
        hungryStatus = 'yellow';
        speech = 'Ну, печенюшку скушаю';
      }

      else if (diffInPercent <= 10 && diffInPercent >= -100){
        hungryStatus = 'red';
        speech = 'Дайте покушоц пожалуйсто';
        animal.wasHungry = Date.now();
      }

      if (diffInPercent <= -100) {
        animal.alive = false;
      }

      if ((Date.now() - animal.wasHungry) > (animal.feedIteration * 4000) && !animal.hadChild) {
        animalCopy.push(Object.assign({}, animalCopy.find((e) => e.id === animal.parentId), {
          id: animalCopy.length + 1,
          wasHungry: Date.now(),
          birthday: day + "." + month + "." + year,
        }));
        animal.hadChild = true;
      }

      if (animal.alive === false) {
        animal.wasHungry = Date.now();
      }


      animal.hungryStatus = hungryStatus;
      animal.speech = speech;
    })

    return animalCopy;
  }


  useEffect(() => {
    const interval = setInterval(() => {
      if (animals && animals.length) {
        setAnimals(getUpdatedAnimalsOnTimer);
      }
    }, 10 );

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Main animals={animals}/>}/>
        <Route path='/animal/:id' element={<Animal animals={animals}/>}/>
      </Routes>
    </>
  );
}

export default App;
