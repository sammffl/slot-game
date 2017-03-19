/**
 * Created by SamMFFL on 17/3/19.
 */

const awardList = {
    2: [
        '1_X_1', '1_1_X', 'X_1_1',
        '2_X_2', '2_2_X', 'X_2_2',
        '3_X_3', '3_3_X', 'X_3_3',
        '4_X_4', '4_4_X', 'X_4_4',
        '5_X_5', '5_5_X', 'X_5_5'
    ],
    10: ['3_3_3', '4_4_4', '5_5_5'],
    100: ['2_2_2']
};

const liContent = '<ul>' +
    '<li class="slot-icon-1 slot-icon" data-number="0"></li>' +
    '<li class="slot-icon-2 slot-icon" data-number="1"></li>' +
    '<li class="slot-icon-3 slot-icon" data-number="2"></li>' +
    '<li class="slot-icon-4 slot-icon" data-number="3"></li>' +
    '<li class="slot-icon-5 slot-icon" data-number="4"></li>' +
    '</ul>';


let $container;

export default class SlotGame {
    /**
     *
     * @param container
     */
    constructor(container) {
        $container = $(container);
        this._init();
    }

    _init() {
        this._reset();
    }


    _reset() {
        let $contentArray = $container.find('.content');
        for (let i = 0; i < $contentArray.length; i++) {
            let $item = $($contentArray[i]);
            $item.html(liContent);
        }
    }


    resetGame() {
        this._reset();
    }

    _getRandomValueOfArray(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    /**
     * 根据抽奖结果返回最终显示图案的编号
     * @param prize
     * @returns {string}
     * @private
     */
    _calFinalResult(prize) {
        const self = this;
        let result = '';
        let slotArr = [1, 2, 3, 4, 5];
        if (/noPrize/.test(prize) || !prize) {
            let prizeIndexes = [];
            for (let i = 0; i < 3; i++) {
                prizeIndexes.push(slotArr.splice(Math.floor(Math.random() * slotArr.length), 1)[0])
            }
            result = prizeIndexes.join('_');
        } else {
            result = self._getRandomValueOfArray(awardList[prize]);
            slotArr.splice(result.match(/\d/)[0] - 1, 1);
            result = result.replace(/X/, self._getRandomValueOfArray(slotArr));
        }
        return result;
    }

    _drawPrizeUl(content, prizeNum, callback) {
        const self = this;
        const $content = $(content);
        $content.html(liContent);
        let $ul = $content.find('ul');
        let count = 5;
        for (let i = 1, max = 15; i <= max; i++) {
            if (i > 0 && i <= 5) {
                $ul.append(`<li class="slot-icon-${i} slot-icon" data-number="${count}"></li>`);
            } else if (i > 5 && i <= 10) {
                $ul.append(`<li class="slot-icon-${i - 5} slot-icon" data-number="${count}"></li>`);
            } else {
                $ul.append(`<li class="slot-icon-${i - 10} slot-icon" data-number="${count}"></li>`);
            }
            count++;
        }
        for (let i = 1, max = +prizeNum + 1; i <= max; i++) {
            if (i > 5) {
                $ul.append(`<li class="slot-icon-${i - 5} slot-icon" data-number="${count}"></li>`);
            } else {
                $ul.append(`<li class="slot-icon-${i} slot-icon" data-number="${count}"></li>`);
            }
            count++;
        }

        let num = $ul.find('li').last().data('number');
        self._runContent($content, num - 1, callback);
    }

    _runContent(content, num, callback) {
        const $content = $(content);
        const unitHeight = $(content).find('li').width();

        var end = num * unitHeight - unitHeight / 2;
        var $ul = $content.find('ul');
        $ul.animate({"top": -end}, 2000, "swing", function () {
            if (callback && typeof callback == "function") {
                callback();
            }
        });
    }

    startGame(prize = 'noPrize', callback) {
        const self = this;
        let result = this._calFinalResult(prize);
        console.log(result);
        result = result.split('_');
        for (let i = 0; i < result.length; i++) {
            (function (i) {
                setTimeout(function () {
                    if (i == 2) {
                        self._drawPrizeUl($container.find('.content')[i], result[i], callback)
                    } else {
                        self._drawPrizeUl($container.find('.content')[i], result[i]);
                    }
                }, 1000 * i)
            })(i);
        }
    }
}
