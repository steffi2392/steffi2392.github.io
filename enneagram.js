let currentSlide = 0;
let score = [];

function getQuestions() {
	questions = [
					{
						question: "I see myself as something of a 'healer of broken hearts.'",
						question_type: 2
					},
					{
						question: "One of my main problems is that I am easily distracted and can get too scattered.",
						question_type: 7
					},
					{
						question: "It's really weird; I can be skeptical, even cynical, about all kinds of things, and then turn around and fall for something hook, line and sinker.",
						question_type: 6
					},
					{
						question: "My mind is so intense and active that I often feel like it's on fire.",
						question_type: 5
					},
					{
						question: "I am attracted to authority but distrustful of it at the same time.",
						question_type: 6
					},
					{
						question: "When things get rough, I tend to crumble and give up--perhaps I give up too easily.",
						question_type: 4
					},
					{
						question: "I don't think I'm particularly stubborn, but people say that I can be hard-headed once I make up my mind.",
						question_type: 9
					},
					{
						question: "When I am insecure, I can be rather aloof and cool with people.",
						question_type: 3
					},
					{
						question: "People who know me appreciate the fact that I talk straight to them and tell them exactly what's on my mind.",
						question_type: 8
					},
					{
						question: "I like to laugh as much as anyone--I should do it more often!",
						question_type: 1
					},
					{
						question: "During the day, I do everything that needs to be done, but when the day is over, I really know how to relax and take it easy.",
						question_type: 9
					},
					{
						question: "I don't like either to take the lead or to be a follower.",
						question_type: 4
					},
					{
						question: "One thing I absolutely cannot stand is being bored--and I make sure that I am never boring myself.",
						question_type: 7
					},
					{
						question: "I find it difficult to get involved with projects if I don't have creative control.",
						question_type: 4
					},
					{
						question: "My health and finances have frequently suffered because I have put other people's needs and interests before my own.",
						question_type: 2
					},
					{
						question: "If I'm criticized or misunderstood, I tend to withdraw and sulk.",
						question_type: 4
					},
					{
						question: "I am very emotional, although I don't often show what I feel--except to those I'm close with--and even then, not always.",
						question_type: 6
					},
					{
						question: "I've found a certain balance in my life, and I see no reason to mess with it.",
						question_type: 9
					},
					{
						question: "I am strong-willed and do not give up or back down easily.",
						question_type: 8
					},
					{
						question: "I am extremely curious and enjoy investigating why things are the way they are--even obvious things are not really so obvious when you really look at them.",
						question_type: 5
					},
					{
						question: "I want to trust people, but often find myself questioning their motives.",
						question_type: 6
					},
					{
						question: "I do not feel very big or powerful--more small and invisible; I'd make a good spy!",
						question_type: 5
					},
					{
						question: "I feel that you have to break some eggs to make an omelet.",
						question_type: 8
					},
					{
						question: "It's important to me to feel successful, even if I'm not yet the success I want to be.",
						question_type: 3
					},
					{
						question: "I always have a goal in focus and know how to motivate myself to achieve it.",
						question_type: 3
					},
					{
						question: "Other people would think I'm crazy if they knew what I was thinking most of the time.",
						question_type: 5
					},
					{
						question: "I long for someone to rescue me and sweep me away from all of this dreary mess.",
						question_type: 4
					},
					{
						question: "For better or worse, I am good at covering up my insecurities--people would never guess what I'm really feeling!",
						question_type: 3
					},
					{
						question: "I have found that people respond warmly to me when I give them some attention and encouragement.",
						question_type: 2
					},
					{
						question: "I love to knock myself out to make people feel welcomed and appreciated.",
						question_type: 2
					},
					{
						question: "I don't mind being around people, and I don't mind being along--either way is fine, as long as I'm at peace with myself.",
						question_type: 9
					},
					{
						question: "My family thinks that I am somewhat strange or eccentric--they've certainly told me that I need to get out more.",
						question_type: 5
					},
					{
						question: "I may not always agree with the rules--and I don't always follow them--but I want to know what they are.",
						question_type: 6
					},
					{
						question: "I've had to work hard for everything I have--I think struggle is good because it toughens you up and makes you clear about what you want.",
						question_type: 8
					},
					{
						question: "So much depends upon me getting things done that I have to be more organized and methodical than others.",
						question_type: 1
					},
					{
						question: "I tend not to follow rules or to go along with expectations because I want to put my own special touch on whatever I do.",
						question_type: 4
					},
					{
						question: "My principles and ideals inspire me toward greater achievement and make my life feel meaningful and worthwhile.",
						question_type: 1
					},
					{
						question: "I can get into a towering rage, but it blows over.",
						question_type: 8
					},
					{
						question: "I've been told that I seem distracted and absentminded--the fact is I understand things, but I just don't want to react to them.",
						question_type: 9
					},
					{
						question: "I love traveling and discovering different kinds of foods, people, and experiences--the whole fabulous whirlwind of life!",
						question_type: 7
					},
					{
						question: "I feel that I have paid a great price for trying to be perfect.",
						question_type: 1
					},
					{
						question: "I tend to spend quite a bit of time imagining scenes and conversations that haven't necessarily happened.",
						question_type: 4
					},
					{
						question: "Many people see me as enigmatic, difficult, and contradictory--and I like that about myself.",
						question_type: 4
					},
					{
						question: "Many responsibilities have fallen on my shoulders; if I hadn't risen to the occasion, God only knows what would have happened.",
						question_type: 1
					},
					{
						question: "I tend to spend more money than I probably should.",
						question_type: 7
					},
					{
						question: "It seems that I am living with a judge inside my head; sometimes the judge is wise and discerning, but often it is simply stern and harsh.",
						question_type: 1
					},
					{
						question: "Being comfortable in every sense of the word appeals to me a lot.",
						question_type: 9
					},
					{
						question: "I like to get into things in depth and pore over details until I've figured something out as completely as possible.",
						question_type: 5
					},
					{
						question: "Most people get themselves worked up too easily; I'm much more even-keeled.",
						question_type: 9
					},
					{
						question: "My genuine concern for others makes me become deeply involved with them--with their hopes, dreams, and needs.",
						question_type: 2
					},
					{
						question: "While there is some part of me that can be wild, generally speaking that just hasn't been my style.",
						question_type: 1
					},
					{
						question: "I am accutely aware of my intuitions, whether or not I have the courage to act on them.",
						question_type: 4
					},
					{
						question: "I'm pretty committed when I'm in a relationship, but when it's over, I move on.",
						question_type: 7
					},
					{
						question: "I don't know exactly how I do it, but I don't let things get to me.",
						question_type: 9
					},
					{
						question: "I often feel alone and lonely, even when I'm around people I'm close to.",
						question_type: 4
					},
					{
						question: "Most people see me as a serious, no-nonsense person--and when all is said and done, I suppose I am.",
						question_type: 1
					},
					{
						question: "When I care about people, I often begin to think of them as 'my people' and feel like I need to watch out for their interests.",
						question_type: 8
					},
					{
						question: "I tend to brood over my negative feelings for a long time before getting free of them.",
						question_type: 4
					},
					{
						question: "I know how much I mess up, so being suspicious of what others are up to just makes sense to me.",
						question_type: 6
					},
					{
						question: "Things get me down once in a while, but I quickly pop back up again.",
						question_type: 7
					},
					{
						question: "I see myself as a highly competent person; it really bothers me when I am anything less than effective and efficient.",
						question_type: 3
					},
					{
						question: "I am extremely independent and don't like having to rely on others for what I really need.",
						question_type: 8
					},
					{
						question: "I have a workaholic streak--I feel adrift if I'm not accomplishing things.",
						question_type: 3
					},
					{
						question: "Sometimes I've had to cut corners a little to achieve my goals.",
						question_type: 3
					},
					{
						question: "I have a hard time leaving well enough alone.",
						question_type: 1
					},
					{
						question: "I am able to express my feelings for people more openly than most.",
						question_type: 2
					},
					{
						question: "I can be warm and supportive, but there is more steel in me than others might think.",
						question_type: 2
					},
					{
						question: "When things are going well for me, I virtually glow with a kind of inner joy in being who I am and having the life that I have.",
						question_type: 3
					},
					{
						question: "I feel more secure doing what's expected of me than striking out on my own.",
						question_type: 6
					},
					{
						question: "I see myself as a challenger, as someone who pushes people beyond their comfort zone to achieve their best.",
						question_type: 8
					},
					{
						question: "I often strive to be the best at what I'm doing--if I can't be outstanding at something, I generally don't bother with it.",
						question_type: 3
					},
					{
						question: "It really bothers me when others don't acknowledge the excellence of what I've done.",
						question_type: 3
					},
					{
						question: "I'm pretty easy to please and usually feel that what I have is good enough for me.",
						question_type: 9
					},
					{
						question: "If I make a mistake, I fear that everyone is going to jump down my throat.",
						question_type: 6
					},
					{
						question: "I tend to take a long time fine-tuning projects I'm working on.",
						question_type: 5
					},
					{
						question: "There are a few people I really look up to--they are sort of my heroes.",
						question_type: 6
					},
					{
						question: "Finding myself and being true to my emotional needs have been extremely important motivations for me.",
						question_type: 4
					},
					{
						question: "I know how to get results; I know how to reward people and how to put pressure on them to get things done.",
						question_type: 8
					},
					{
						question: "Some people see me as jittery and nervous--but they don't know the half of it!",
						question_type: 6
					},
					{
						question: "I can forgive almost anything except bad taste.",
						question_type: 4
					},
					{
						question: "I do not have much sympathy for those who are weak and vacillating--weakness just invites trouble.",
						question_type: 8
					},
					{
						question: "Generally, I don't enjoy working too closely with others.",
						question_type: 4
					},
					{
						question: "I cannot see a stray dog in the street without wanting to bring it home.",
						question_type: 2
					},
					{
						question: "Somebody usually has to come up on the short end of the stick, and I don't want it to be me.",
						question_type: 8
					},
					{
						question: "By most standards, I'm fairly dramatic and tempermental.",
						question_type: 4
					},
					{
						question: "If you need a problem solved, let me work on it by myself, and I'll come up with the answer.",
						question_type: 5
					},
					{
						question: "I am aware of how well my friends and colleagues are doing, and I tend to compare myself with them.",
						question_type: 3
					},
					{
						question: "It is true that I often do more for others than I should--I give away too much and do not think of myself enough.",
						question_type: 2
					},
					{
						question: "I'm more adaptable than most; if things aren't working well, I know how to change my behavior to obtain the results I want.",
						question_type: 3
					},
					{
						question: "I can easily see different points of view, and I tend to agree with people more than I disagree with them.",
						question_type: 9
					},
					{
						question: "I do not understand why so many people have such lax standards.",
						question_type: 1
					},
					{
						question: "I often find myself trying to win people over--especially if they initially seem indifferent to me.",
						question_type: 2
					},
					{
						question: "When you really think about it, you can't get much stranger than so-called normal behavior.",
						question_type: 5
					},
					{
						question: "It's hard for me to take credit for the many things I've done for people, but it bothers me a lot when they don't seem to notice or care.",
						question_type: 2
					},
					{
						question: "I can talk a blue streak when I want to; most of the time, though, I prefer to just watch all the craziness around me.",
						question_type: 5
					},
					{
						question: "Much of my life I have believed that right is right and wrong is wrong--and that's all there is to it.",
						question_type: 1
					},
					{
						question: "I take special joy in entertaining and hosting my friends and extended family.",
						question_type: 2
					},
					{
						question: "I have a tender, even somewhat sentimental side that I show to very few people.",
						question_type: 8
					},
					{
						question: "It feels natural to be friendly; I strike up conversations easily and am on a first-name basis with everyone.",
						question_type: 2
					},
					{
						question: "I have always tried to be honest and objective about myself--and I'm determined to follow my conscience no matter what the cost.",
						question_type: 1
					},
					{
						question: "I am an extremely private person who doesn't let many people into my world.",
						question_type: 5
					},
					{
						question: "Most people are so incredibly ignorant, it's amazing that anything works at all!",
						question_type: 5
					},
					{
						question: "I am deeply moved by human nobility and grace under pressure.",
						question_type: 1
					},
					{
						question: "Often I lose all track of time because I'm concentrating so completely on what I'm doing",
						question_type: 5
					},
					{
						question: "My mind is always chattering--sometimes it seems like I'm thinking about ten things at once.",
						question_type: 7
					},
					{
						question: "I sound out the opinions of people I trust before I have to make a big decision.",
						question_type: 6
					},
					{
						question: "I'm not just a 'fun person'--there is a serious, even dark side to me, although I do not like to go there very much.",
						question_type: 7
					},
					{
						question: "I would rather give someone else their way than create a scene.",
						question_type: 9
					},
					{
						question: "Anxiety seems to be my middle name.",
						question_type: 6
					},
					{
						question: "I am never prouder than when I see someone I've taken under my wing make it on their own.",
						question_type: 8
					},
					{
						question: "When I really want something, I usually find a way to get it.",
						question_type: 7
					},
					{
						question: "I tend to have strong first impressions about people that are difficult to change.",
						question_type: 6
					},
					{
						question: "I don't like making big decisions, but I certainly don't want anyone else to make them for me.",
						question_type: 6
					},
					{
						question: "I hate mistakes, and so I tend to be extremely thorough to make sure that things are being done properly.",
						question_type: 1
					},
					{
						question: "I make special efforts to know what's going on with the people I care about.",
						question_type: 2
					},
					{
						question: "My sense of humor is earthy, sometimes even crude, although I think most people are too prissy and thin-skinned.",
						question_type: 8
					},
					{
						question: "I'm good at the big picture, not so much the little details; it's more enjoyable for me to brainstorm a lot of new ideas than to get involved with implementing them.",
						question_type: 7
					},
					{
						question: "What's important to me is excitement and variety rather than comfort and playing it safe--although I'll take my comforts wherever I can find them.",
						question_type: 7
					},
					{
						question: "I try to present myself to others in the best possible light--but doesn't everyone?",
						question_type: 3
					},
					{
						question: "My feelings have tended to be foreign to me--I feel things strongly for a little while, and then just get on with things.",
						question_type: 3
					},
					{
						question: "You've got to take what life brings, since there's not much you can do about it anyway.",
						question_type: 9
					},
					{
						question: "I feel good about the fact that I am a thoughtful, generous person.",
						question_type: 2
					},
					{
						question: "Other people are great to have along--as long as they want to go where I'm going.",
						question_type: 7
					},
					{
						question: "I want to make a good impression on people, so I'm usually polite, well-mannered, and friendly.",
						question_type: 3
					},
					{
						question: "Only by getting accurate information can you make a rational decision--but then, most people aren't really rational.",
						question_type: 5
					},
					{
						question: "What people seem to like about me is that they feel safe around me.",
						question_type: 9
					},
					{
						question: "I have what might be called a philosophy of life that guides me and gives me a great deal of comfort in difficult times.",
						question_type: 9
					},
					{
						question: "I am a real hard worker; I keep plodding along until the job gets done.",
						question_type: 6
					},
					{
						question: "I believe in emphasizing the positive rather than dwelling on the negative.",
						question_type: 9
					},
					{
						question: "I am curious and adventurous and am usually the first one of my friends to try whatever is new and interesting.",
						question_type: 7
					},
					{
						question: "I feel most alive when I do what others think is impossible; I like to go to the edge and see if I can beat the odds.",
						question_type: 8
					},
					{
						question: "I know a lot about a lot of things, and in a few areas, I consider myself an expert.",
						question_type: 5
					},
					{
						question: "I have a personal sense of mission, maybe even a calling to something higher, and I believe that there is something extraordinary that I may accomplish during my life.",
						question_type: 1
					},
					{
						question: "When I no longer enjoy doing something, I stop doing it.",
						question_type: 7
					},
					{
						question: "My calendar is usually full, and I like to keep it that way; no grass is going to grow under my feet.",
						question_type: 7
					}
	];
	
	return questions;
}

function buildQuiz(questions, quizContainer) {
	const output = [];

	i = 0;
	questions.forEach((currentQuestion, questionType) => {
		output.push(
			`<div class="slide">
				<div class="question lead">
					${currentQuestion.question}
				</div>
			</div>`
		);

		i++; 
	});

	quizContainer.innerHTML = output.join("");
}

function showSlide(slides, n) {
	console.log("showing slide: " + n);
	
	// If done, show results and hide the quiz
	if (currentSlide === slides.length - 1) {
		quiz = document.getElementById("active-quiz");
		quiz.classList.add("invisible"); 
		slides[currentSlide].classList.remove("active-slide");
		showResults();
	} else {
		slides[currentSlide].classList.remove("active-slide");
		slides[n].classList.add("active-slide");
		currentSlide = n;
	}
}

function showResults() {
	resultsContainer = document.getElementById("results");
	resultsContainer.classList.add("active-results"); 

	output = [];
	primary = []; 
	component = []; 
	issues = []; 
	least = [];
	for (i = 0; i < 9; i++) {
		if (score[i] < 30) {
			least.push(i+1);
		} else if (score[i] < 45) {
			issues.push(i+1);
		} else if (score[i] < 60) {
			component.push(i+1);
		} else {
			primary.push(i+1);
		}
	}

	output.push(`<h3 class="display-5">Results</h3>`);

	if (least.length > 0) {
		output.push(`<p>You are probably not type(s): ${least}</p>`);
	}
	if (issues.length > 0) {
		output.push(`<p>You likely have type ${issues} issues.</p>`);
	}
	if (component.length > 0) {
		output.push(`<p>You most likely have type ${component} component(s).</p>`);
	}
	if (primary.length > 0) {
		output.push(`<p>You are most likely a type: ${primary}<p>`);
	}

	for (i = 0; i < 9; i++) {
		output.push(
			`<p>Type ${i+1}: ${score[i]}</p>`
		);			
	}

	resultsContainer.innerHTML = output.join("");
}

function processClick(button_id, slides, questions) {
	if (button_id == "one") {
		val = 1;
	} else if (button_id == "two") {
		val = 2;
	} else if (button_id == "three") {
		val = 3;
	} else if (button_id == "four") {
		val = 4;
	} else if (button_id == "five") {
		val = 5;
	}

	question_type = questions[currentSlide].question_type;
	score[question_type - 1] += val;

	showSlide(slides, currentSlide + 1);
	console.log(score); 
}

function setupListeners(slides, questions) {
	one = document.getElementById("one"); 
	two = document.getElementById("two");
	three = document.getElementById("three");
	four = document.getElementById("four");
	five = document.getElementById("five");
	
	one.addEventListener("click", function() {
		processClick("one", slides, questions);
	});
	two.addEventListener("click", function() {
		processClick("two", slides, questions);
	});
	three.addEventListener("click", function() {
		processClick("three", slides, questions);
	});
	four.addEventListener("click", function() {
		processClick("four", slides, questions);
	});
	five.addEventListener("click", function() {
		processClick("five", slides, questions);
	});
}

function setup() {
	quizContainer = document.getElementById("quiz");
	questions = getQuestions();
	
	for (i = 0; i < 9; i++) {
		score.push(0);
	}
	
	buildQuiz(questions, quizContainer);

	slides = document.querySelectorAll(".slide");

  showSlide(slides, currentSlide, 0);
	setupListeners(slides, questions); 

}
