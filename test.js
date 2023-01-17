let count = 0;
question = 'question.html';
result = 'result.html';
let questions = ['갑자기 예정에 없던 약속이 생기면 나는?', 
'친구의 소개로 어느 모임에 나왔을 때 나는?', 
'여행을 가려고 비행기에 탔을 때 내가 하는 생각은?',
'밥 먹을 때 내가 하는 고민은?',
'음악 경연 프로그램을 봤을 때 나는?',
'친구가 우울해서 쇼핑했다고 했을 때 나는?',
'친구가 갑자기 시험에 합격했다고 했다. 나의 반응은?',
'여자친구가 갑자기 아끼는 물건을 잃어버렸을 때 나는?',
'연인과 맛집을 가려고 할 때 나는?',
'데이트 룩을 고를 때 나는?',
'연인과 여행을 가기로 했을 때 나는?'
]
choices1 = ['재밌겠다! 별일 없으면 약속에 간다.',
'사람들이 먼저 말을 걸어올 때까지 기다려본다.',
'재밌겠다! 근데 비행기는 무슨 원리로 뜨는 거지?',
'점심 먹으면서 저녁 뭐 먹을지 고민',
'와.. 저 가사는 저 사람이 겪은 이야기인가? 연습은 얼마나 했을까?',
'뭐 샀어? 아무거나 막 지른 건 아니지?',
'오 무슨 시험이었어?? 축하해!',
'어쩌다가 잃어버렸어ㅠ 마지막으로 어디서 봤어?',
'미리 예약하고 뭐 먹을지 메뉴까지 생각해놓고 간다.',
'준비하면서 끌리는 옷으로 입고 나간다.',
'비행기 표만 끊어도 70%는 끝났다고 생각한다.'
]
choices2 = ['내 계획에 없던 건데.핑계를 댄다.',
'먼저 주도적으로 말을 걸고, 분위기를 업시키려고 노력한다.',
'아 빨리 도착했으면 좋겠다.',
'들어간 식당 최애음식 두 메뉴 중 뭐 먹을지 고민',
'와~ 찢었다 이거 음원 나오면 맨날 들을거야ㅠ',
'무슨 일 있었어? 갑자기 쇼핑을 했다고?',
'와 축하해! 고생했겠다 수고했어!',
'그거 너가 아끼던 거였는데ㅠ 어떡해ㅠ',
'약속이 다가왔을 때 급하게 찾아서 예약한다.',
'전날 머리부터 발끝까지 세팅해 놓는다.',
'일별로 계획을 세세하게 미리 정해놓는다.'
]

body = document.getElementsById("body");
box1 = document.getElementById("1");
box2 = document.getElementById("2")

function hrefLink() {
    location.href = question;
}

function answer(id) {
    document.getElementById("body").textContent = questions[count];
    document.getElementById("1").textContent = choices1[count];
    document.getElementById("2").textContent = choices2[count];
    count ++
    if (count == questions.length){
        location.replace(result);
    }
}