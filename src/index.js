import "./style.css";
import data from './assets/data/coffees.json';

{
    const init = () => {
        getCoffees(data);

       const $items = document.querySelectorAll(`.price`);
       $items.forEach(function($item) {
           $item.addEventListener(`click`, e => {
                addOrder(e.composedPath()(2));
           });
       }); 
    };

    const getCoffees = data => {
        const coffees = data.coffees;
        coffees.forEach(coffee => {

            if (coffees.plantsbased == true) {
                makeCoffee(coffee);
            }
        });
    };

    const makeCoffee = coffee => {
        const $lijst = document.querySelector(`.price__list`);

        const $li = document.createElement(`li`);
        $li.classList.add(`price`);
        $li.setAttribute(`data_id`, `${coffee.id}`);
        $li.innerHTML = opbouw(coffee);
        $lijst.appendChild($li);
    };

    const opbouw = data => {
        return `
        <a class="price__button">
        <span class="price__button__wrapper">
          <span class="price__button__name">${data.name}</span>
          <span class="price__button__amount">&euro; ${round(data.prices.medium)}</span>
        </span>
        <span class="price__button__plus">+</span>
        </a>`;
    };




};