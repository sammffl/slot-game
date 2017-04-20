import './sass/main.scss';
import './utils/rem';

import SlotGame from './js/slot';

(function () {

    const slotProps = {
        awardList: {
            double: [
                '1_X_1', '1_1_X', 'X_1_1',
                '2_X_2', '2_2_X', 'X_2_2',
                '3_X_3', '3_3_X', 'X_3_3',
                '4_X_4', '4_4_X', 'X_4_4',
                '5_X_5', '5_5_X', 'X_5_5',
                '6_X_6', '6_6_X', 'X_6_6',
                '7_X_7', '7_7_X', 'X_7_7',
                '8_X_8', '8_8_X', 'X_8_8',
                '9_X_9', '9_9_X', 'X_9_9',
                '10_X_10', '10_10_X', 'X_10_10',
            ],
            1: ['2_2_2'],
            2: ['8_8_8'],
            3: ['6_6_6'],
            4: ['5_5_5'],
            5: ['3_3_3'],
            6: ['7_7_7'],
            7: ['4_4_4'],
            8: ['9_9_9'],
            9: ['1_1_1'],
            10: ['10_10_10']
        },
        prizeNum: 10,// 滚动显示奖品的数量
        isSync: true,// 老虎机动画是否同步进行
        time: 2000,
    };

    const slotGame = new SlotGame('#slot-game', slotProps);
    // slotGame.resetGame();


    $('button').bind('touchend', function (e) {
        slotGame.startGame('11', function () {
            // alert(1);
            console.log('done');
        });
    })

})();
