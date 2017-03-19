import './sass/main.scss';
import Api from './api';

import SlotGame from './js/slot';

(function () {
    // console.log(1);
    // Api.getMobileUseful('13482437881').then(function (data) {
    //     console.log(data);
    // });

    // alert(navigator.userAgent);

    const slotGame = new SlotGame();
    slotGame.resetGame();
})();
