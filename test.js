question = 'question1.html';
question2 = '갑자기 예정에 없던 약속이 생기면 나는?'
question2_1 = '내 계획에 없던 건데, 핑계를 댄다.';
question2_2 = '재밌겠다! 별일 없으면 약속에 간다.';

function hrefLink() {
    location.href = question;
}

function answer(id) {
        document.getElementsByClassName("body-content").textContent = question2;
        document.getElementById("1").textContent = question2_1;
        document.getElementById("2").textContent = question2_2;
    
}