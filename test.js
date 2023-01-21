var count = 0;
var ei = 0;
var sn = 0;
var tf = 0;
var jp = 0;

var questions = ['갑자기 예정에 없던 약속이 생기면 나는?', 
    '친구의 소개로 어느 모임에 나왔을 때 나는?', 
    '여행을 가려고 비행기에 탔을 때 내가 하는 생각은?',
    '밥 먹을 때 내가 하는 고민은?',
    '음악 경연 프로그램을 봤을 때 나는?',
    '친구가 우울해서 쇼핑했다고 했을 때 나는?',
    '친구가 갑자기 시험에 합격했다고 했다. 나의 반응은?',
    '여자친구가 갑자기 아끼는 물건을 잃어버렸을 때 나는?',
    '연인과 맛집을 가려고 할 때 나는?',
    '데이트 룩을 고를 때 나는?',
    '연인과 여행을 가기로 했을 때 나는?']

    var choices1 = ['재밌겠다! 별일 없으면 약속에 간다.',
    '사람들이 먼저 말을 걸어올 때까지 기다려본다.',
    '아 빨리 도착했으면 좋겠다.',
    '점심 먹으면서 저녁 뭐 먹을지 고민',
    '와.. 저 가사는 저 사람이 겪은 이야기인가? 연습은 얼마나 했을까?',
    '뭐 샀어? 아무거나 막 지른 건 아니지?',
    '오 무슨 시험이었어?? 축하해!',
    '어쩌다가 잃어버렸어ㅠ 마지막으로 어디서 봤어?',
    '미리 예약하고 뭐 먹을지 메뉴까지 생각해놓고 간다.',
    '전날 머리부터 발끝까지 세팅해 놓는다.',
    '일별로 계획을 세세하게 미리 정해놓는다.',]

    var choices2 = ['내 계획에 없던 건데.핑계를 댄다.',
    '먼저 주도적으로 말을 걸고, 분위기를 업시키려고 노력한다.',
    '재밌겠다! 근데 비행기는 무슨 원리로 뜨는 거지?',
    '들어간 식당 최애음식 두 메뉴 중 뭐 먹을지 고민',
    '와~ 찢었다 이거 음원 나오면 맨날 들을거야ㅠ',
    '무슨 일 있었어? 갑자기 쇼핑을 했다고?',
    '와 축하해! 고생했겠다 수고했어!',
    '그거 너가 아끼던 거였는데ㅠ 어떡해ㅠ',
    '약속이 다가왔을 때 급하게 찾아서 예약한다.',
    '준비하면서 끌리는 옷으로 입고 나간다.',
    '비행기 표만 끊어도 70%는 끝났다고 생각한다.']

    var typelist = [
    '올리브 스마일',
    '오렌지 스마일',
    '레드 스마일',
    '블루 스마일',
    '퍼플 스마일',
    '핑크 스마일',
    '옐로우 스마일',
    '민트 스마일',
    '스카이 스마일',
    '브라운 스마일',
    '그린 스마일',
    '카키 스마일',
    '그레이 스마일',
    '네이비 스마일',
    '베이지 스마일',
    '버건디 스마일']

    var typeintrolist = ['빠르고 깊게 사랑에 빠지는',
    '맹목적인 이해와 사랑',
    '불같이 뜨거운 연애',
    '연인의 문제를 해결해주는 해결사',
    '변덕스러운 연애주의자',
    '눈치력 끝판왕 연애장인',
    '쿨내 진동 연애 고수',
    '밀당따위 하지 않는 프로 직진러',
    '드라마 같은 사랑을 꿈꾸는',
    '답답하지만 진실된 사랑',
    '근자감에 휩싸인 츤데레',
    '연애는 글로 배운 연애 분석가',
    '귀찮아도 연애 못 잃는',
    '배려 넘치는 해바라기',
    '마이웨이 연애를 즐기는',
    '공감없이 웃기만 하는 연애봇']

    var explanationlist = ['좋아하는 사람 눈에 자주 띄려고 하고, 말을 자주 검. 쉽게 사랑에 빠지는 경향이 있음. 하지만 사귀면 진심을 다하고 열정적임. 내 사랑을 가볍게 보거나, 무시하는 것은 참을 수 없음. 다른 사람들의 일상도 궁금한 내게 내 연인의 일상은 당연히 알아야함. 사소한 거라도 연락해 주길 원함. 성격이 활발하고, 연인에게 리액션을 매우 잘함. 즉흥적이고, 연인과 함께 다양한 모임에 가는 것을 좋아함. 연인에게 필요하다 싶은 물건 있으면, 일단 지르고 생각함.' ,
    '좋아하는 사람에게 끊임없는 표현을 함. 유머감각이 뛰어나고, 센스가 있어 인기가 많음. 주변에 이성친구들이 많지만, 오로지 연인에게만 충실함. 연인을 응원해 주고, 챙겨주는 것 잘함. 내가 챙겨줄 때마다 리액션과 고마움 표현은 필수임. 눈치가 빠르고 촉이 좋음. "쎄"함을 느끼면 맞는 경우가 많음. 서운한 일 연인에게 말로 잘 안하고, 틱틱댐. 감정기복이 심할 때 있음. 이 때는 사소한 거에도 상처 잘 받음. 연인이 언행을 함부로 하는 모습 보이면 정떨어짐. 헤어지면 마음은 아프지만, 뒤끝 없음.',
    '표현에 적극적임. 완전 이 사람이다 싶으면 빠꾸 없이 직진함. 연애를 시작하면 불같이 타오름. 하지만 쉽게 꺼지는 경향도 있음. 그래서 나와의 연애는 유머코드, 대화 진짜 중요함. 매번 똑같은 데이트는 질림. 내 말에 공감과 경청은 필수임. 갈등이 생겼는데 억지부리면 정 떨어짐. 구속, 통제하는 것 싫어함.',
    '눈은 높지만, 연애는 생각보다 쉽게하는 타입. 좋아하는 사람에게 적극적이고, 빠른 만남을 가지려고 함. 리더십이 있어 데이트 할 때 먼저 주도하는 편. 연인이 고민이 있을 때, 문제에 대해 좋은 해결책을 제시함. 가끔 연애보다 내 일에 더 열중할 때가 있음. 연애하더라도 내 생활은 존중되어야 한다고 생각함. 내가 모르는 것을 알고, 해결책을 권유하는 연인에게 감동함. 연인과 갈등상황이 생기면 문제 해결을 우선으로 생각함. 갈등사황에 논리 없이 감정적으로 얘기하는 건 이해가 안됨',
    '외로움을 많이 탐. 연애나, 썸을 쉬지 않는 타입임. 변덕쟁이라 주변에서 많이 걱정함. 하지만 썸부터 연애까지 순탄하게 잘함. 애인 생기면 SNS에 티 내는 거 좋아함. 눈치 백단이라 잘 챙겨주고 리액션도 잘해줌. 데이트 할 때 즉흥으로 "이거 하자" "저거 해보자" 하는 편. 그래서 나의 즉흥력을 잘 받아줄 수 있는 사람이 좋음. 연락을 꾸준히 자주 해주는 거 좋아함. ',
    '연애를 신중하게 하는 편. 썸일때는 선을 지키며 다가오는 것이 중요함. 성격이 좋고, 다정해서 주변에 친구들이 많음. 소개팅보다는 지인에서 연인으로 발전되는 경우가 많음. 눈치 백단이라 상대방의 기분을 잘 알아채고 공감해줌. 표현이든 선물이든 내가 베푼만큼 돌려받고 싶음. 나에게 표현을 아끼지 않고 많이 해주면 관계에 안정감을 느낌. 연인이 예의 없는 모습을 보이면 실망함. 연인과의 갈등상황을 극도로 싫어함. 거짓말 하는 것은 더 싫어함.',
    '연애를 기본적으로 잘하는 편. 가는 사람 안 막고 오는 사람 안 막는다 하는 스타일. 성격보다는 외모, 패션센스 먼저 봄. 즉흥적이고 활동적인 데이트 선호함. 데이트 중에 말이나 행동이 필터링 없이 나오는 경향 있음. 쿨하게 넘어갔던 문제를 굳이 다시 꺼내면 싸움 시작임. 사귀다가 지루함이나 현타를 느끼면, 갑자기 헤어질까? 생각함. 이별 후에는 "사람은 사람으로 잊는거다"라고 생각함. 집착하거나 매달리는 것 극도로 싫어함.',
    '좋아하는 살마 생기면 티를 잘 안냄. 생각할 시간이 필요함. 썸일 때 좋기는 한데, 답답함을 느낌. 한 번 표현하기 시작하면 더 적극적으로 표현함. 연애하면 보통 데이트 계획짜고 리드하는 쪽임. 자기 일을 열심히 몰두하고 잘 하는 사람 멋있어서 끌림. 관종이라 사소한 거라도 연인에게 인정받고 싶어함. 그래서 다정하고 표현을 아끼지 않는 사람이 좋음. 내가 연인에게 짐이 될 것 같은 상황에 처하면 헤어질까 생각함. 싸울 때 감정적으로 떼쓰면 정 떨어짐. 서운한 거 빙빙 돌려 말하거나, 꽁해 있으면 너무 답답함.',
    '편한하고, 안정적인 연애를 추구함. 썸 타는 기간이 김. 마음은 열정적으로 좋아하지만, 티가 잘 안 남. 쉽게 상처받고 드라마나 영화같은 사랑을 꿈꾸고 있음. 그래서 현실적인 사람과 연애하면 힘듦. 연인의 말투, 행동 하나까지 다 의미부여 함. 그래서 나에게 수시로 사랑을 표현해주는 것이 중요함. 연인과 갈등이 생기면 그 상황을 회피하려는 경향이 있음. 유리멘탈이라 연인이 직설적으로 말하면 쉽게 상처받음. 걱정이 많은 내게 자꾸 불안감을 조성하면 지쳐서 헤어짐.',
    '주로 먼저 다가오는 사람과 연애를 함. 생각이 많아서 사귀기까지 오래 걸림. 하지만 한 번 마음 먹으면 빠르고 깊게 사귐. 사귈 때 인성을 가장 많이 봄. 확 불타는 연애보다 안정적이고, 장기적인 연애를 원함. 갈등은 크게 키우지 않고 조용히 해결하는 타입. 내 기준의 선을 넘지 않는다면, 크게 불화를 만들지 않음. 신뢰를 중요시 여겨 거짓말을 극단적으로 싫어함. 아무리 연인이어도 내 가치관을 흔들면 헤어짐.',
    '딱히 누구를 엄청 좋아해 본 적이 없음. 사귀기 전에 외모보다는 사고방식과 대화 스타일 많이 봄. 취미와 관심사가 맞으면 좋겠다고 생각함. 나에게 밀당을 한다면 멀어질 확률 100%임. 진지한 연애보다는 재미있는 연애를 원함. 대화 주제가 내 관심사 밖이면 연인의 말도 가끔 흘려들음. 갈등 상황이 생기면 팩트만 얘기하는 편. 그래서 조금은 무심해도 쿨하게 이해해주는 사람이 좋음. 내 사생활을 침범하고, 통제하려고 하면 짜증남.',
    '처음 볼 때 이미지가 좀 차가운 편. 취미와 가치관이 같은 사람에게 매력을 느낌. 사귀기까지 오래 걸리지만 사귀면 깊게 사귐. 차가운 이미지와 달리 연인에게 푹 빠져서 연애하는 스타일. 내가 관심있는 분야의 이야기를 잘 들어주는 사람이 좋음. 갈등상황 시 대화가 잘 이루어지지 않으면 피하려고 함. 눈치 안 보고 연인에게도 돌직구로 말할 때 있음. 감정으로 휘둘리는 것을 누구보다 싫어함.',
    '좋아하는 사람 생겨도 티 잘 안냄. 고백했다가 차일까봐 고백 안 할 때가 많음. 먼저 다가와 고백하는 상대와 주로 사귐. 사랑에 빠지면 다정하고, 마음을 담은 선물을 자주 함. 근데 연락에 많은 에너지를 쏟는 건 너무 힘듦. 당연히 내 사생활은 존중받아야 한다고 생각함. 연인과 갈등은 귀찮고, 피곤해서 말 안하고 피함. 긍적적이고, 나에게 매번 확신을 주는 사람. 뭐든 싫다는데 집착하는 거 너무 싫음.',
    '눈치가 빨라 연인의 감정에 잘 맞춰 줌. 차분하고, 서로 배려하는 연애를 원함. 내 사적인 일상에 지장이 없는 계획적인 데이트를 원함. 독립심이 강하고, 내 힘든 일은 연인에게 이야기 잘 안함. 힘든 일을 나누면 힘든 사람이 두 명이 된다 생각함. 인정 받는 것 좋아해서, 연인이 칭찬 많이 해주면 감동함. 은근 사소한 것 쉽게 감동함. 티는 잘 안 날 수도 있음. 연인과 싸우면 억울한게 많다 생각해 뒤 끝 있는 편임. 연인이 약속을 안지키면 많이 실망함.',
    '관심없는 이성과의 데이트는 시간낭비라고 생각함. 한 번 좋아하는 사람이 생기면 올인하는 스타일. 연애 초에 피로감을 많이 느낌. 연애 중에 혼자만의 시간으로 재충전은 필수임. 선을 지키며 서서히 깊어지는 연애를 원함. 연인에게 다소 표현이 서툴고 무뚝뚝한 편. 연인이 고민을 털어놓으면 해결책을 잘 제시해주는 타입. 갈등이 생기면 감정표현 확실하게 해주는 것을 좋아함. 잔소리를 세상 제일 피곤해함.',
    '다른 유형에 비해 연애나 썸에 관심이 별로 없는 편임. 이성관계를 빠르게 단정짓는 편이라 밀당 싫어함. 평소에 연애보다 일, 공부가 좀 더 중요하다고 생각함. 하지만, 책임감을 중요시여겨 막상 사귀면 헌신적임. 연애를 시작해도 주변에서 모르고 있는 경우 많음. 연인과 데이트는 내가 계획해서 하는 게 마음 편함. 갈등상황에서 팩트만 말하고, 서로 고칠 거 고치자고 함. 연인이 책임감 있는 말이나, 행동을 보이면 감동함. 반대로 약속 잘 안 지키거나 거짓말 하면 정 떨어짐']
    
    relation1list=['브라운 스마일 카키 스마일',
    '스카이 스마일 그레이 스마일',
    '브라운 스마일 카키 스마일',
    '스카이 스마일 그린 스마일',
    '네이비 스마일 베이지 스마일',
    '그레이 스마일 베이지 스마일',
    '네이비 스마일 버건디 스마일',
    '그레이 스마일 베이지 스마일',
    '오렌지 스마일 블루 스마일',
    '올리브 스마일 레드 스마일',
    '블루 스마일 민트 스마일',
    '올리브 스마일 옐로우 스마일',
    '핑크 스마일 민트 스마일',
    '퍼플 스마일 옐로우 스마일',
    '오렌지 스마일 민트 스마일',
    '핑크 스마일 민트 스마일']
    
    relation2list=['퍼플 스마일 옐로우 스마일',
    '베이지 스마일 옐로우 스마일',
    '네이비 스마일 핑크 스마일',
    '없어요',
    '스카이 스마일 올리브 스마일',
    '스카이 스마일 브라운 스마일',
    '올리브 스마일 스카이 스마일',
    '스카이 스마일 브라운 스마일',
    '베이지 스마일 옐로우 스마일',
    '그레이 스마일 퍼플 스마일',
    '없어요',
    '네이비 스마일 핑크 스마일',
    '스카이 스마일 올리브 스마일',
    '브라운 스마일 오렌지 스마일',
    '스카이 스마일 올리브 스마일',
    '브라운 스마일 오렌지 스마일']

$(document).ready(function(){
    $('#start').click(function() {
        location.href = 'question.html';
    });

    $('#1').on("click",function(){
        if ((count >= 1) && (count <= 3)) ei += 1;
        else if ((count >= 4) && (count <= 6)) sn += 1;
        else if ((count >= 7) && (count <= 9)) tf += 1;
        else if ((count >= 10) && (count <= 12)) jp += 1;
        $('#body').text(questions[count]);
        $('#1').text(choices1[count]);
        $('#2').text(choices2[count]);
        count++;
        if (count == 13){
            window.localStorage.setItem('ei', ei);
            window.localStorage.setItem('sn', sn);
            window.localStorage.setItem('tf', tf);
            window.localStorage.setItem('jp', jp);
            location.href = 'result.html';
        }
    });

    $('#2').on("click", function(){
        if ((count >= 1) && (count <= 3)) ei -= 1;
        else if ((count >= 4) && (count <= 6)) sn -= 1;
        else if ((count >= 7) && (count <= 9)) tf -= 1;
        else if ((count >= 10) && (count <= 12)) jp -= 1;
        $('#body').text(questions[count]);
        $('#1').text(choices1[count]);
        $('#2').text(choices2[count]);
        count++;

        if (count == 13){
            window.localStorage.setItem('ei', ei);
            window.localStorage.setItem('sn', sn);
            window.localStorage.setItem('tf', tf);
            window.localStorage.setItem('jp', jp);
            location.href = 'result.html';
        }
    }); 

    ei = window.localStorage.getItem("ei");
    sn = window.localStorage.getItem("sn");
    tf = window.localStorage.getItem("tf");
    jp = window.localStorage.getItem("jp");

    if ((ei>0) && (sn>0) && (tf>0) && (jp>0)){ 
        $('#typeintro').text(typeintrolist[0]);
        $('#type').text(typelist[0]);
        $('#explanation').text(explanationlist[0]);
        $('#relation1').text(relation1list[0]);    
        $('#relation2').text(relation2list[0]);
        $('#type').css("background-color", "rgb(95, 187, 80)");
        $('#resultpic').css("color", "rgb(95, 187, 80)");
    }
    else if (ei>0 && sn>0 && tf>0 && jp<0){
        $('#typeintro').text(typeintrolist[1]);
        $('#type').text(typelist[1]);
        $('#explanation').text(explanationlist[1]);
        $('#relation1').text(relation1list[1]);    
        $('#relation2').text(relation2list[1]);
        $('#type').css("background-color", "rgb(216, 90, 27)");
        $('#resultpic').css("color", "rgb(216, 90, 27)");
    }
    else if (ei>0 && sn>0 && tf<0 && jp>0){
        $('#typeintro').text(typeintrolist[2]);
        $('#type').text(typelist[2]);
        $('#explanation').text(explanationlist[2]);
        $('#relation1').text(relation1list[2]);    
        $('#relation2').text(relation2list[2]);
        $('#type').css("background-color", "rgb(169, 24, 24)");
        $('#resultpic').css("color", "rgb(169, 24, 24)");
    }
    else if (ei>0 && sn>0 && tf<0 && jp<0){
        $('#typeintro').text(typeintrolist[3]);
        $('#type').text(typelist[3]);
        $('#explanation').text(explanationlist[3]);
        $('#relation1').text(relation1list[3]);    
        $('#relation2').text(relation2list[3]);
        $('#type').css("background-color", "rgb(24, 87, 169)");
        $('#resultpic').css("color", "rgb(24, 87, 169)");
    }
    else if (ei>0 && sn<0 && tf>0 && jp>0){
        $('#typeintro').text(typeintrolist[4]);
        $('#type').text(typelist[4]);
        $('#explanation').text(explanationlist[4]);
        $('#relation1').text(relation1list[4]);    
        $('#relation2').text(relation2list[4]);
        $('#type').css("background-color", "rgb(120, 69, 179)");
        $('#resultpic').css("color", "rgb(120, 69, 179)");
    }
    else if (ei>0 && sn<0 && tf>0 && jp<0){
        $('#typeintro').text(typeintrolist[5]);
        $('#type').text(typelist[5]);
        $('#explanation').text(explanationlist[5]);
        $('#relation1').text(relation1list[5]);    
        $('#relation2').text(relation2list[5]);
        $('#type').css("background-color", "rgb(220, 66, 182)");
        $('#resultpic').css("color", "rgb(220, 66, 182)");
    }
    else if (ei>0 && sn<0 && tf<0 && jp>0){
        $('#typeintro').text(typeintrolist[6]);
        $('#type').text(typelist[6]);
        $('#explanation').text(explanationlist[6]);
        $('#relation1').text(relation1list[6]);    
        $('#relation2').text(relation2list[6]);
        $('#type').css("background-color", "rgb(224, 234, 23)");
        $('#resultpic').css("color", "rgb(224, 234, 23)");
    }
    else if (ei>0 && sn<0 && tf<0 && jp<0){
        $('#typeintro').text(typeintrolist[7]);
        $('#type').text(typelist[7]);
        $('#explanation').text(explanationlist[7]);
        $('#relation1').text(relation1list[7]);    
        $('#relation2').text(relation2list[7]);
        $('#type').css("background-color", "rgb(112, 188, 180)");
        $('#resultpic').css("color", "rgb(112, 188, 180)");
    }
    else if (ei<0 && sn>0 && tf>0 && jp>0){
        $('#typeintro').text(typeintrolist[8]);
        $('#type').text(typelist[8]);
        $('#explanation').text(explanationlist[8]);
        $('#relation1').text(relation1list[8]);    
        $('#relation2').text(relation2list[8]);
        $('#type').css("background-color", "rgb(102, 206, 217)");
        $('#resultpic').css("color", "rgb(102, 206, 217)");
    }
    else if (ei<0 && sn>0 && tf>0 && jp<0){
        $('#typeintro').text(typeintrolist[9]);
        $('#type').text(typelist[9]);
        $('#explanation').text(explanationlist[9]);
        $('#relation1').text(relation1list[9]);    
        $('#relation2').text(relation2list[9]);
        $('#type').css("background-color", "rgb(151, 110, 91)");
        $('#resultpic').css("color", "rgb(151, 110, 91)");
    }
    else if (ei<0 && sn>0 && tf<0 && jp>0){
        $('#typeintro').text(typeintrolist[10]);
        $('#type').text(typelist[10]);
        $('#explanation').text(explanationlist[10]);
        $('#relation1').text(relation1list[10]);    
        $('#relation2').text(relation2list[10]);
        $('#type').css("background-color", "rgb(37, 98, 60)");
        $('#resultpic').css("color", "rgb(37, 98, 60)");
    }
    else if (ei<0 && sn>0 && tf<0 && jp<0){
        $('#typeintro').text(typeintrolist[11]);
        $('#type').text(typelist[11]);
        $('#explanation').text(explanationlist[11]);
        $('#relation1').text(relation1list[11]);    
        $('#relation2').text(relation2list[11]);
        $('#type').css("background-color", "rgb(47, 62, 38)");
        $('#resultpic').css("color", "rgb(47, 62, 38");
    }
    else if (ei<0 && sn<0 && tf>0 && jp>0){
        $('#typeintro').text(typeintrolist[12]);
        $('#type').text(typelist[12]);
        $('#explanation').text(explanationlist[12]);
        $('#relation1').text(relation1list[12]);    
        $('#relation2').text(relation2list[12]);
        $('#type').css("background-color", "rgb(93, 93, 93)");
        $('#resultpic').css("color", "rgb(93, 93, 93)");
    }
    else if (ei<0 && sn<0 && tf>0 && jp<0){
        $('#typeintro').text(typeintrolist[13]);
        $('#type').text(typelist[13]);
        $('#explanation').text(explanationlist[13]);
        $('#relation1').text(relation1list[13]);    
        $('#relation2').text(relation2list[13]);
        $('#type').css("background-color", "rgb(38, 38, 117)");
        $('#resultpic').css("color", "rgb(38, 38, 117)");
    }
    else if (ei<0 && sn<0 && tf<0 && jp>0){
        $('#typeintro').text(typeintrolist[14]);
        $('#type').text(typelist[14]);
        $('#explanation').text(explanationlist[14]);
        $('#relation1').text(relation1list[14]);    
        $('#relation2').text(relation2list[14]);
        $('#type').css("background-color", "rgb(214, 185, 155)");
        $('#resultpic').css("color", "rgb(214, 185, 155)");
    }
    else if (ei<0 && sn<0 && tf<0 && jp<0){
        $('#typeintro').text(typeintrolist[15]);
        $('#type').text(typelist[15]);
        $('#explanation').text(explanationlist[15]);
        $('#relation1').text(relation1list[15]);    
        $('#relation2').text(relation2list[15]);
        $('#type').css("background-color", "rgb(119, 46, 40)");
        $('#resultpic').css("color", "rgb(119, 46, 40)");
    }
    window.localStorage.clear();
    

});