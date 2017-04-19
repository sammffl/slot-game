import './sass/main.scss';
import './utils/rem';

import SlotGame from './js/slot';

(function () {

    const slotProps = {
        awardList: {
            2: [
                '1_X_1', '1_1_X', 'X_1_1',
                '2_X_2', '2_2_X', 'X_2_2',
                '3_X_3', '3_3_X', 'X_3_3',
                '4_X_4', '4_4_X', 'X_4_4',
                '5_X_5', '5_5_X', 'X_5_5',
                '6_X_6', '6_6_X', 'X_6_6',
                '7_X_7', '7_7_X', 'X_7_7',
                '8_X_8', '8_8_X', 'X_8_8',
                '9_X_9', '9_9_X', 'X_9_9'
            ],
            10: ['3_3_3', '4_4_4', '5_5_5'],
            100: ['2_2_2'],
            11:['11_11_11'],
        },
        prizeNum: 11,// 滚动显示奖品的数量
        isSync: true,// 老虎机动画是否同步进行
        time: 2000,
    };

    const slotGame = new SlotGame('#slot-game', slotProps);
    // slotGame.resetGame();


    $('button').bind('touchend', function (e) {
        slotGame.startGame('11', function () {
            alert(1)
        });
    })

})();
