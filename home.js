// Tillarni o'zgartirish uchun kod
document.getElementById('english-btn').addEventListener('click', function() {
    setLanguage('en');
});

document.getElementById('russian-btn').addEventListener('click', function() {
    setLanguage('ru');
});

document.getElementById('uzbek-btn').addEventListener('click', function() {
    setLanguage('uz');
});

// Tilni o'zgartirish funksiyasi
const translations = {
    en: {
        headerTitle: 'You are welcome',
        labelName: 'Name:',
        labelAge: 'Age:',
        labelBirthdate: 'Birthdate:',
        labelGender: 'Gender:',
        submitBtn: 'Submit',
        alertEmptyFields: 'Please fill in all the fields.',
        alertSuccess: 'Form submitted successfully!',
        redirectUrl: './come-eng.html'  // Tilga mos sahifa
    },
    ru: {
        headerTitle: 'Добро пожаловать',
        labelName: 'Имя:',
        labelAge: 'Возраст:',
        labelBirthdate: 'Дата рождения:',
        labelGender: 'Пол:',
        submitBtn: 'Отправить',
        alertEmptyFields: 'Пожалуйста, заполните все поля.',
        alertSuccess: 'Форма успешно отправлена!',
        redirectUrl: './come-rus.html'  // Tilga mos sahifa
    },
    uz: {
        headerTitle: 'Saytga xush kelibsiz',
        labelName: 'Ismingiz:',
        labelAge: 'Yoshingiz:',
        labelBirthdate: 'Tug\'ilgan sana:',
        labelGender: 'Jinsingiz:',
        submitBtn: 'Yuborish',
        alertEmptyFields: "Iltimos, barcha maydonlarni to'ldiring.",
        alertSuccess: 'Forma muvaffaqiyatli yuborildi!',
        redirectUrl: './come-uzb.html'  // Tilga mos sahifa
    }
};

// Tilni o'zgartirish
function setLanguage(language) {
    const lang = translations[language];

    document.documentElement.lang = language;
    document.getElementById('header-title').innerText = lang.headerTitle;
    document.getElementById('label-name').innerText = lang.labelName;
    document.getElementById('label-age').innerText = lang.labelAge;
    document.getElementById('label-birthdate').innerText = lang.labelBirthdate;
    document.getElementById('label-gender').innerText = lang.labelGender;
    document.getElementById('submit-btn').innerText = lang.submitBtn;

    // Tilni saqlash
    localStorage.setItem('selectedLanguage', language);
}

// Formani yuborish
document.getElementById('submit-btn').addEventListener('click', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.getElementById('gender').value;

    // Agar barcha ma'lumotlar to'ldirilmagan bo'lsa
    if (!name || !age || !birthdate || !gender) {
        const lang = document.documentElement.lang;
        alert(translations[lang].alertEmptyFields);
        return;
    }

    // Formani muvaffaqiyatli yuborishdan so'ng
    const lang = document.documentElement.lang;
    alert(translations[lang].alertSuccess);

    // Tanlangan tilga mos sahifaga yo'naltirish
    window.location.href = translations[lang].redirectUrl;
});
