const questions = [
    {
        text: "Ketika memulai proyek baru, fokus utama saya adalah:",
        options: [
            { text: "Membayangkan kesuksesan dan penghargaan yang akan didapat.", type: "gain" },
            { text: "Memastikan saya tidak membuat kesalahan yang berakibat fatal.", type: "pain" }
        ]
    },
    {
        text: "Dalam menghadapi tenggat waktu (deadline), saya merasa:",
        options: [
            { text: "Terdorong untuk bekerja keras agar terhindar dari stres dan teguran.", type: "pain" },
            { text: "Bersemangat menyelesaikan tugas untuk segera merasakan pencapaian.", type: "gain" }
        ]
    },
    {
        text: "Saat mempertimbangkan pindah pekerjaan, alasan utama saya adalah:",
        options: [
            { text: "Mencari tantangan baru dan peluang promosi yang lebih baik.", type: "gain" },
            { text: "Meninggalkan lingkungan kerja yang penuh tekanan dan tidak nyaman.", type: "pain" }
        ]
    },
    {
        text: "Ketika melihat pesaing lebih maju, saya merasa:",
        options: [
            { text: "Khawatir tertinggal dan segera mencari cara untuk mengejar.", type: "pain" },
            { text: "Terinspirasi untuk berinovasi dan melampaui pencapaian mereka.", type: "gain" }
        ]
    },
    {
        text: "Dalam hal keuangan, prioritas saya adalah:",
        options: [
            { text: "Memiliki dana darurat yang kuat agar aman dari krisis.", type: "pain" },
            { text: "Menginvestasikan uang untuk melipatgandakan kekayaan.", type: "gain" }
        ]
    },
    {
        text: "Saat belajar keterampilan baru, dorongan saya adalah:",
        options: [
            { text: "Memperluas kapasitas diri untuk mencapai tujuan yang lebih tinggi.", type: "gain" },
            { text: "Mencegah diri saya menjadi tidak relevan atau tertinggal di masa depan.", type: "pain" }
        ]
    },
    {
        text: "Menghadapi risiko dalam bisnis atau karir, saya lebih cenderung:",
        options: [
            { text: "Menganalisis secara detail untuk meminimalkan kemungkinan gagal.", type: "pain" },
            { text: "Mengambil peluang besar meskipun ada kemungkinan tidak berhasil.", type: "gain" }
        ]
    },
    {
        text: "Jika saya melakukan kesalahan besar, fokus saya adalah:",
        options: [
            { text: "Memperbaiki masalah secepatnya agar dampaknya tidak meluas.", type: "pain" },
            { text: "Mencari tahu pelajaran apa yang bisa saya ambil untuk sukses ke depannya.", type: "gain" }
        ]
    },
    {
        text: "Definisi sukses bagi saya adalah:",
        options: [
            { text: "Mencapai puncak potensi dan mendapatkan pengakuan luas.", type: "gain" },
            { text: "Merasa aman, stabil, dan bebas dari masalah besar.", type: "pain" }
        ]
    },
    {
        text: "Ketika diberi tanggung jawab besar, saya:",
        options: [
            { text: "Khawatir akan mengecewakan orang lain, sehingga bekerja ekstra hati-hati.", type: "pain" },
            { text: "Melihatnya sebagai kesempatan untuk membuktikan kemampuan terbaik saya.", type: "gain" }
        ]
    },
    {
        text: "Saat menetapkan target tahunan, saya lebih suka:",
        options: [
            { text: "Menetapkan target ambisius yang akan mengubah hidup saya.", type: "gain" },
            { text: "Menetapkan target realistis yang pasti bisa saya capai tanpa stres berlebih.", type: "pain" }
        ]
    },
    {
        text: "Menjelang presentasi penting, pikiran dominan saya adalah:",
        options: [
            { text: "\"Saya harap saya tidak terlihat bodoh atau lupa materi.\"", type: "pain" },
            { text: "\"Saya tidak sabar untuk memukau audiens dengan ide saya.\"", type: "gain" }
        ]
    },
    {
        text: "Saya merasa paling puas ketika:",
        options: [
            { text: "Memecahkan rekor pribadi atau mencapai sesuatu yang baru.", type: "gain" },
            { text: "Berhasil menyelesaikan daftar tugas yang panjang dan terhindar dari tumpukan pekerjaan.", type: "pain" }
        ]
    },
    {
        text: "Alasan utama saya menjaga kesehatan adalah:",
        options: [
            { text: "Takut jatuh sakit dan tidak bisa beraktivitas.", type: "pain" },
            { text: "Ingin memiliki energi maksimal untuk mengejar semua impian saya.", type: "gain" }
        ]
    },
    {
        text: "Menghadapi perubahan tak terduga, reaksi awal saya adalah:",
        options: [
            { text: "Mencari cara untuk mengembalikan stabilitas dan kontrol.", type: "pain" },
            { text: "Mencari peluang baru yang mungkin muncul dari situasi tersebut.", type: "gain" }
        ]
    }
];

// State
let userName = "";
let currentQuestionIndex = 0;
let userAnswers = new Array(15).fill(null); // stores 'pain' or 'gain'

// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const usernameInput = document.getElementById('username');
const nameError = document.getElementById('name-error');
const startBtn = document.getElementById('start-btn');

const questionCounter = document.getElementById('question-counter');
const progressBar = document.getElementById('progress-bar');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const backBtn = document.getElementById('back-btn');

const restartBtn = document.getElementById('restart-btn');

// Narratives
const narratives = {
    painDominant: {
        pattern: "Anda sangat didorong oleh keinginan untuk menghindari risiko, masalah, dan kegagalan. Anda lebih memilih keamanan dan stabilitas dibandingkan potensi keuntungan yang tidak pasti.",
        strength: "Anda sangat teliti, analitis, dan memiliki kemampuan manajemen risiko yang luar biasa. Anda bisa diandalkan untuk menjaga stabilitas dan mencegah krisis.",
        weakness: "Rasa takut gagal bisa menghambat Anda mengambil peluang berharga. Anda mungkin rentan terhadap stres atau kecemasan karena terlalu fokus pada skenario terburuk.",
        productive: "Gunakan kemampuan antisipasi Anda untuk membuat rencana cadangan (Plan B), lalu beranikan diri melangkah. Pasangkan diri Anda dengan rekan yang visioner agar tercipta keseimbangan."
    },
    painLeaning: {
        pattern: "Anda cenderung menghindari risiko, meski kadang masih terbuka pada peluang jika situasinya relatif aman.",
        strength: "Anda adalah perencana yang hati-hati dan menjaga kualitas pekerjaan dengan baik.",
        weakness: "Terkadang Anda terlalu lama menganalisis (analysis paralysis) sehingga kehilangan momentum.",
        productive: "Latih diri Anda untuk menetapkan batas waktu dalam mengambil keputusan agar tidak terjebak dalam rasa ragu."
    },
    gainDominant: {
        pattern: "Anda sangat digerakkan oleh pencapaian, pengakuan, dan peluang baru. Anda berani mengambil risiko besar demi imbalan yang besar pula.",
        strength: "Anda sangat inovatif, ambisius, dan memiliki energi tinggi. Anda adalah motor penggerak perubahan dan pertumbuhan.",
        weakness: "Anda bisa menjadi terlalu impulsif, mengabaikan detail penting, atau meremehkan risiko yang ada.",
        productive: "Sebelum mengeksekusi ide besar, luangkan waktu untuk mengevaluasi risikonya secara objektif. Bekerjasamalah dengan orang yang detail dan terstruktur."
    },
    gainLeaning: {
        pattern: "Anda cenderung fokus pada pencapaian dan peluang, meski masih memiliki batasan dalam mengambil risiko.",
        strength: "Anda bersemangat untuk maju dan mampu memotivasi diri sendiri serta orang lain.",
        weakness: "Anda mungkin mudah bosan dengan rutinitas atau hal-hal yang bersifat administratif.",
        productive: "Gunakan energi Anda untuk memulai inisiatif baru, namun pastikan Anda memiliki sistem untuk mendelegasikan atau menyelesaikan tugas rutin."
    },
    balanced: {
        pattern: "Anda memiliki keseimbangan yang sangat baik antara mengejar pencapaian (GAIN) dan menghindari risiko (PAIN).",
        strength: "Anda sangat adaptif. Anda bisa bertindak berani saat peluangnya bagus, namun tetap berhati-hati saat situasinya tidak pasti.",
        weakness: "Terkadang Anda bisa mengalami kebingungan internal ketika dorongan mengambil risiko berbenturan kuat dengan insting keamanan Anda.",
        productive: "Anda sangat cocok untuk peran kepemimpinan strategis karena Anda bisa melihat dua sisi mata uang. Terus gunakan keseimbangan ini dalam pengambilan keputusan."
    }
};

// Functions
function init() {
    startBtn.addEventListener('click', startTest);
    usernameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') startTest();
    });
    
    backBtn.addEventListener('click', prevQuestion);
    restartBtn.addEventListener('click', resetTest);
}

function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

function startTest() {
    const name = usernameInput.value.trim();
    if (!name) {
        nameError.classList.add('visible');
        return;
    }
    nameError.classList.remove('visible');
    userName = name;
    
    currentQuestionIndex = 0;
    userAnswers.fill(null);
    
    loadQuestion();
    showScreen(quizScreen);
}

// Fisher-Yates Shuffle for options
function shuffleOptions(options) {
    const shuffled = [...options];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    
    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    
    // Update progress bar
    const progress = ((currentQuestionIndex) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    
    questionText.textContent = question.text;
    
    optionsContainer.innerHTML = '';
    
    // We shuffle so PAIN/GAIN aren't always A/B
    // We need to keep track of the original type to save the answer
    // For simplicity, we just randomize visual order every time it loads unless we want it stable.
    // To make it stable if user goes back, we could use a seeded shuffle or store option layout.
    // For this simple app, we'll randomize options each load.
    const shuffledOptions = shuffleOptions(question.options);
    
    shuffledOptions.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt.text;
        
        // Restore selected answer if exists
        if (userAnswers[currentQuestionIndex] === opt.type) {
            btn.classList.add('selected');
        }

        btn.addEventListener('click', () => {
            document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            userAnswers[currentQuestionIndex] = opt.type;
            
            // Auto advance with slight delay
            setTimeout(() => {
                nextQuestion();
            }, 300);
        });
        
        optionsContainer.appendChild(btn);
    });

    backBtn.disabled = currentQuestionIndex === 0;
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    // Calculate Score
    let painScore = 0;
    let gainScore = 0;
    
    userAnswers.forEach(ans => {
        if (ans === 'pain') painScore++;
        if (ans === 'gain') gainScore++;
    });

    const diff = Math.abs(painScore - gainScore);
    let categoryKey = '';
    let categoryName = '';

    if (painScore > gainScore) {
        if (diff >= 4) {
            categoryKey = 'painDominant';
            categoryName = 'PAIN Dominant';
        } else if (diff >= 2) {
            categoryKey = 'painLeaning';
            categoryName = 'PAIN Leaning';
        } else {
            categoryKey = 'balanced';
            categoryName = 'Balanced';
        }
    } else if (gainScore > painScore) {
        if (diff >= 4) {
            categoryKey = 'gainDominant';
            categoryName = 'GAIN Dominant';
        } else if (diff >= 2) {
            categoryKey = 'gainLeaning';
            categoryName = 'GAIN Leaning';
        } else {
            categoryKey = 'balanced';
            categoryName = 'Balanced';
        }
    } else {
        categoryKey = 'balanced';
        categoryName = 'Balanced';
    }

    // Update UI
    document.getElementById('result-name').textContent = userName;
    document.getElementById('result-category').textContent = categoryName;
    document.getElementById('score-pain').textContent = painScore;
    document.getElementById('score-gain').textContent = gainScore;

    // Set chart bars (delay slightly for animation)
    setTimeout(() => {
        document.getElementById('bar-pain').style.width = `${(painScore / 15) * 100}%`;
        document.getElementById('bar-gain').style.width = `${(gainScore / 15) * 100}%`;
    }, 100);

    const narrative = narratives[categoryKey];
    document.getElementById('narrative-pattern').textContent = narrative.pattern;
    document.getElementById('narrative-strength').textContent = narrative.strength;
    document.getElementById('narrative-weakness').textContent = narrative.weakness;
    document.getElementById('narrative-productive').textContent = narrative.productive;

    showScreen(resultScreen);
}

function resetTest() {
    usernameInput.value = '';
    userName = '';
    currentQuestionIndex = 0;
    userAnswers.fill(null);
    document.getElementById('bar-pain').style.width = '0%';
    document.getElementById('bar-gain').style.width = '0%';
    showScreen(welcomeScreen);
}

// Init
init();
