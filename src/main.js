import './sass/main.scss';
import './utils/rem';

import SlotGame from './js/slot';

(function () {

    const slotGame = new SlotGame('#slot-game');
    // slotGame.resetGame();


    $('button').bind('touchend', function (e) {
        slotGame.startGame('',function () {
            alert(1)
        });
    })

})();
