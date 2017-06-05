import './sass/main.scss';
import './utils/rem';

import SlotGame from './js/slot';

import test from 'slot-game-js';

(function () {

    const slotProps = {
        prizeNum: 11,// 滚动显示奖品的数量
        isSync: true,// 老虎机动画是否同步进行
        time: 2000,
    };

    // const slotGame = new SlotGame('#slot-game', slotProps);
    // // slotGame.resetGame();
    //
    //
    $('button').bind('touchend', function (e) {
        // slotGame.startGame('12', function () {
        //     // alert(1);
        //     console.log('done');
        // });


        t.startGame('12',function(){
            console.log(1)
        })
    });


    const t = new test('#slot-game', slotProps);


})();
