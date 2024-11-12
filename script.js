   const questions = [
    { question: "מהו SOC?", options: ["Security Operations Center", "Service Operations Control", "Security Optimization Center"], correctAnswer: 0 },
    { question: "מהם שלושת סוגי האירועים העיקריים ב-SOC?", options: ["Network, Server, Application", "Security, Performance, Compliance", "Virus, Phishing, DDoS"], correctAnswer: 1 },
    { question: "מהו SIEM?", options: ["מערכת לניהול וניטור אירועים", "שירות של ניתוח נתונים", "שיטת הצפנה"], correctAnswer: 0 },
    { question: "מה תפקידו של אנליסט SOC?", options: ["ניטור אירועים ותקריות אבטחת מידע", "ניהול שרתים", "פיתוח תוכנות אבטחה"], correctAnswer: 0 },
    { question: "מה זה IDS?", options: ["מערכת לזיהוי חדירות", "מערכת הצפנה", "פרוטוקול לניהול תעבורת רשת"], correctAnswer: 0 },
    { question: "מה זה IPS?", options: ["מערכת למניעת חדירות", "מערכת ניהול רשת", "מערכת לשליחת דוחות"], correctAnswer: 0 },
    { question: "מהו התקפת DDoS?", options: ["תקיפה שמטרתה לשבש שירות על ידי הצפת תעבורה", "פרוטוקול לניהול אבטחת מידע", "תוכנה להצפנת קבצים"], correctAnswer: 0 },
    { question: "מה זה Phishing?", options: ["התחזות על מנת לגנוב מידע", "תקיפת הצפה", "תקיפת מערכת לזיהוי חדירות"], correctAnswer: 0 },
    { question: "מהי חומת אש?", options: ["מערכת להגנה על הרשת מתעבורה מזיקה", "מערכת להצפנת מידע", "תוכנה לניהול שרתים"], correctAnswer: 0 },
    { question: "מהו פרוטוקול SSL?", options: ["פרוטוקול לאבטחת מידע בתקשורת אינטרנטית", "פרוטוקול לשליחת דואר אלקטרוני", "מערכת זיהוי תעבורה"], correctAnswer: 0 },
    { question: "מה זה Malware?", options: ["תוכנה זדונית הפוגעת במחשב או במידע", "תוכנה לניהול אבטחה", "תוכנה להצפנת קבצים"], correctAnswer: 0 },
    { question: "מה זה ניתוח נתונים פורנזי?", options: ["ניתוח נתונים כדי לאתר עקבות של תקיפה", "שיטת הצפנה", "מערכת להגנה על רשתות"], correctAnswer: 0 },
    { question: "מהו אירוע אבטחה?", options: ["אירוע חריג שנחשב לאיום על האבטחה", "עדכון גרסת מערכת", "בדיקה תקופתית"], correctAnswer: 0 },
    { question: "מה זה Endpoint Security?", options: ["הגנה על תחנות קצה כגון מחשבים אישיים", "שירות ענן מאובטח", "ספק הגנת סייבר"], correctAnswer: 0 },
    { question: "מהו פרוטוקול SSH?", options: ["פרוטוקול להתחברות מאובטחת לשרת", "שירות ענן", "פרוטוקול להעברת דואר אלקטרוני"], correctAnswer: 0 },
    { question: "מה זה Hashing?", options: ["שיטה ליצירת ערך ייחודי לנתונים", "פרוטוקול להגנה על רשתות", "תקיפת רשתות"], correctAnswer: 0 },
    { question: "מהו Honeypot?", options: ["מכשיר להטעיית תוקפים ברשת", "מערכת לניהול אירועי אבטחה", "מערכת הצפנה"], correctAnswer: 0 },
    { question: "מהו Botnet?", options: ["רשת של מחשבים נגועים שנשלטים מרחוק", "פרוטוקול ניהול אירועים", "מערכת לניהול שרתים"], correctAnswer: 0 },
    { question: "מה זה SIEM Log Correlation?", options: ["תהליך של ניתוח אירועים על ידי חיבור בין נתונים", "שיטת תקיפה", "תוכנה לניהול רשתות"], correctAnswer: 0 },
    { question: "מהי גישת Least Privilege?", options: ["מתן הגישה המינימלית הנדרשת למשתמש", "מתן גישה מלאה למנהלים בלבד", "מדיניות ניהול סיכונים"], correctAnswer: 0 },
    { question: "מהי התקפת Brute Force?", options: ["ניסיון פריצה על ידי ניסוי כל צירוף אפשרי", "התחזות במיילים", "תקיפת הצפה"], correctAnswer: 0 },
    { question: "מה זה Threat Intelligence?", options: ["מידע המאפשר זיהוי ותגובה לאיומים", "שיטת הצפנה", "מערכת לשליחת דוחות"], correctAnswer: 0 },
    { question: "מה זה Vulnerability?", options: ["חולשת אבטחה במערכת", "מערכת לניהול אירועי אבטחה", "תוכנה לניהול רשת"], correctAnswer: 0 },
    { question: "מה זה Red Team ו-Blue Team?", options: ["צוותי תקיפה והגנה בסימולציות אבטחה", "צוותי תשתיות", "סוגי הגדרות רשת"], correctAnswer: 0 },
    { question: "מהו פרוטוקול IMAP?", options: ["פרוטוקול לקריאת דואר אלקטרוני", "פרוטוקול הצפנה", "פרוטוקול זיהוי תעבורה"], correctAnswer: 0 },
    { question: "מהי גישת Zero Trust?", options: ["גישה שבה נדרש אימות לכל גישה ברשת", "גישה המאפשרת גישה חופשית ברשת", "גישה לניהול אירועי אבטחה"], correctAnswer: 0 },
    { question: "מהי תקיפת SQL Injection?", options: ["תקיפת מסד נתונים על ידי הכנסת קוד זדוני", "תקיפת הצפה על רשת", "ניסיון לגנוב דואר אלקטרוני"], correctAnswer: 0 },
    { question: "מהו תפקידו של Playbook ב-SOC?", options: ["אוסף נהלים לתגובה לאירועי אבטחה", "תוכנית הדרכה", "מערכת לניהול שרתים"], correctAnswer: 0 },
    { question: "מה זה Incident Response?", options: ["תגובה מהירה לאירועי אבטחה", "תיעוד תוכנות", "שיטת ניתוח נתונים"], correctAnswer: 0 },
    { question: "מהי בדיקת Patch Management?", options: ["ניהול עדכוני תוכנה למניעת חולשות", "עדכון תעבורה ברשת", "שיטת הצפנה"], correctAnswer: 0 }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const answersContainer = document.getElementById("answers-container");
const nextButton = document.getElementById("next-button");
const finishButton = document.getElementById("finish-button");
const resultContainer = document.getElementById("result-container");

function showQuestion() {
    const questionData = questions[currentQuestionIndex];
    questionContainer.innerHTML = `<h2>${questionData.question}</h2>`;
    answersContainer.innerHTML = "";
    
    questionData.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("answer-option");
        optionElement.textContent = option;
        optionElement.addEventListener("click", () => selectAnswer(index));
        answersContainer.appendChild(optionElement);
    });
}

function selectAnswer(selectedIndex) {
    const questionData = questions[currentQuestionIndex];
    if (selectedIndex === questionData.correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        finishButton.style.display = "block";
        nextButton.style.display = "none";
    }
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    showQuestion();
});

finishButton.addEventListener("click", () => {
    questionContainer.style.display = "none";
    answersContainer.style.display = "none";
    finishButton.style.display = "none";
    resultContainer.style.display = "block";
    resultContainer.innerHTML = `<h2>סיימת את המבחן!</h2><p>הציון שלך הוא: ${score} מתוך ${questions.length}</p>`;
});

showQuestion();
