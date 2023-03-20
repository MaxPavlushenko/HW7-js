'use strict';



{


  function Scooter() {

    this.on = function () {
      this.state = true;
    }
    this.off = function () {
      this.state = false;
    }
    this.show = function () {
      console.log(`Выбранная вами модель ${this.model}`);
      console.log(`Цена за поездку ${this.price} рублей за ${this.time} минут`);
      console.log(`Дистанция ${this.distance} км при мвксимальной скорости ${this.speed} км.ч`);
      console.log(`Максимальный расход батареи ${this.buttery} %`);
    }

    this.get = function () {
      this.confirm = confirm('Включить скутер?');
      if (this.confirm === true) {
        this.on();
        this.cost();
        this.show();
      }
      else {
        this.off();
        console.log('До новых встреч');
      }
    }

    this.cost = function () {
      this.model = prompt('Выберите модель: Joyor , Kugoo , GT');
      this.time = +prompt('Введите время поездки в минутах');
      switch (this.model) {
        case 'Joyor':
          this.speed = 20;
          this.price = this.time * 0.5;
          this.distance = Math.round(this.time * (this.speed / 60));
          this.buttery = Math.round(this.distance * (350 / 100));
          break;
        case 'Kugoo':
          this.speed = 25;
          this.price = this.time * 1.2;
          this.distance = Math.round(this.time * (this.speed / 60));
          this.buttery = Math.round(this.distance * (400 / 100));
          break;
        case 'GT':
          this.speed = 30;
          this.price = this.time * 1.8;
          this.distance = Math.round(this.time * (this.speed / 60));
          this.buttery = Math.round(this.distance * (500 / 100));
          break;

      }
    }

  }
  let Scooters = new Scooter();
  Scooters.get();

} 
