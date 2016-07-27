doc = document;

(function () {
    var coursesItemsCheck = doc.querySelectorAll(".courses__check-elem"),
        coursesItems = doc.getElementsByClassName("courses__item"),
        finish = doc.getElementsByClassName("finish"),
        id,
        flag = true,
        checkCount = 0;

    function hidden(id) {
        coursesItems[id].style.visibility = "hidden";
    }

    console.log(coursesItems[0]);

    for (var i = 0, len = coursesItemsCheck.length; i < len; i++) {
        console.log("начало итерации " + i);
        coursesItemsCheck[i].addEventListener("change", function (e) {
            e.preventDefault();

            console.log("Элемент " + this.dataset.id);
            console.log("flag " + flag);

            if (this.checked && flag) {
                flag = false;
                console.log("Элемент прошел проверку на chek " + this.dataset.id);
                id = this.dataset.id;


                coursesItems[id].classList.add('courses__item--active');
                setTimeout(function () {
                    console.log("Элемент скрыт " + id);
                    coursesItems[id].style.opacity = "0";
                    coursesItems[id].style.display = "none";
                    flag = true;
                }, 1000);

                checkCount++;

                if (checkCount >= 6) {
                    setTimeout(function () {
                        finish[0].style.display = "block";
                    }, 1000);
                }

            }else{
                this.checked = false;
            }
        }, false);
    }

})();
