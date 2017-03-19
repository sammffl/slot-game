import './sass/main.scss';
import Api from './api';

(function () {
    console.log(1);
    Api.getMobileUseful('13482437881').then(function (data) {
        console.log(data);
    });

    alert(navigator.userAgent);


})();
