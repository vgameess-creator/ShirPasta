// ==========================================
// 1. מילון התמונות המלא
// ==========================================

const dishImages = {
    'פנה': {
        'פסטו': 'PHOTO-2026-07-02-23-39-23.jpg',
        'שמנת': 'PHOTO-2026-07-02-23-39-24 2.jpg',
        'פטריות': 'PHOTO-2026-07-02-23-39-24 3.jpg',
        'עגבניות': 'PHOTO-2026-07-02-23-39-24.jpg',
        'רוזה': 'PHOTO-2026-07-02-23-39-23 3.jpg',
        'ללא רוטב': 'PHOTO-2026-07-02-23-39-23 2.jpg'
    },
    'פוזילי': {
        'פסטו': 'PHOTO-2026-07-02-23-39-11.jpg',
        'שמנת': 'PHOTO-2026-07-02-23-39-15.jpg',
        'פטריות': 'PHOTO-2026-07-02-23-39-11 5.jpg',
        'עגבניות': 'PHOTO-2026-07-02-23-39-11 4.jpg', 
        'רוזה': 'PHOTO-2026-07-02-23-39-11 3.jpg',
        'ללא רוטב': 'PHOTO-2026-07-02-23-39-11 2.jpg'
    },
    'ספגטי': {
        'פסטו': 'PHOTO-2026-07-02-23-39-07.jpg',
        'שמנת': 'PHOTO-2026-07-02-23-39-07 5.jpg',
        'עגבניות': 'PHOTO-2026-07-02-23-39-07 4.jpg',
        'רוזה': 'PHOTO-2026-07-02-23-39-07 3.jpg',
        'ללא רוטב': 'PHOTO-2026-07-02-23-39-07 2.jpg'
    },
    'פרפלה': {
        'פסטו': 'PHOTO-2026-07-02-23-39-39 2.jpg',
        'פטריות': 'PHOTO-2026-07-02-23-39-39.jpg',
        'רוזה': 'PHOTO-2026-07-02-23-39-40 2.jpg',
        'עגבניות': 'PHOTO-2026-07-02-23-39-40 3.jpg',
        'שמנת': 'PHOTO-2026-07-02-23-39-40 4.jpg',
        'ללא רוטב': 'PHOTO-2026-07-02-23-39-40.jpg'
    }
};

const imageAssets = {
    toppings: {
        'טבעות בצל': 'PHOTO-2026-07-02-23-40-09.jpg',
        'סלט ירקות': 'PHOTO-2026-07-02-23-40-10 2.jpg',
        'ציפס': 'PHOTO-2026-07-02-23-40-10 3.jpg', 
        'לחם שום': 'PHOTO-2026-07-02-23-40-10 4.jpg',
        'סלט יווני': 'PHOTO-2026-07-02-23-40-10 5.jpg',
        'גבינת פרמזן': 'PHOTO-2026-07-02-23-40-10.jpg'
    },
    drinks: {
        'תה חם': 'PHOTO-2026-07-02-23-39-55 4.jpg',  
        'מים': 'PHOTO-2026-07-02-23-39-55 5.jpg',      
        'אספרסו': 'PHOTO-2026-07-02-23-39-55 6.jpg',   
        'קולה': 'PHOTO-2026-07-02-23-39-55.jpg',       
        'תה קר': 'PHOTO-2026-07-02-23-39-54 2.jpg',    
        'מיץ תפוזים': 'PHOTO-2026-07-02-23-39-54.jpg', 
        'מיץ תפוחים קר': 'PHOTO-2026-07-02-23-39-55 2.jpg', 
        'פאנטה': 'PHOTO-2026-07-02-23-39-55 3.jpg'     
    }
};

// ==========================================
// 2. אלמנטים מה-HTML
// ==========================================

const mainDishImg = document.getElementById('main-dish-img');
const sideToppingImg = document.getElementById('side-topping-img');
const sideDrinkImg = document.getElementById('side-drink-img');
const displayNameSpan = document.getElementById('display-name');
const nameInput = document.getElementById('customer-name');

// מצב התחלתי
let currentPasta = document.querySelector('input[name="pasta-shape"]:checked').value;
let currentSauce = document.querySelector('input[name="sauce"]:checked').value;

// ==========================================
// 3. פונקציות לעדכון תמונות
// ==========================================

function updateMainDishImage() {
    if (dishImages[currentPasta] && dishImages[currentPasta][currentSauce]) {
        mainDishImg.src = `images/${dishImages[currentPasta][currentSauce]}`;
        mainDishImg.style.display = 'block';
    } else {
        // אם אין תמונה ספציפית (כמו ספגטי פטריות), נסתיר או נציג משהו דיפולטיבי
        mainDishImg.style.display = 'none';
        console.warn(`תמונה חסרה עבור: ${currentPasta} + ${currentSauce}`);
    }
}

// עדכון צורת פסטה ורוטב
document.querySelectorAll('input[name="pasta-shape"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        currentPasta = e.target.value;
        updateMainDishImage();
    });
});

document.querySelectorAll('input[name="sauce"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        currentSauce = e.target.value;
        updateMainDishImage();
    });
});

// פונקציה כללית לטיפול בצ'קבוקסים מרובים (מציגה את האחרון שנבחר)
function updateCheckboxImage(inputsSelector, imgElement, assetsObject) {
    const inputs = document.querySelectorAll(inputsSelector);
    inputs.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const checkedItems = Array.from(inputs).filter(cb => cb.checked);
            if (checkedItems.length > 0) {
                const lastChecked = checkedItems[checkedItems.length - 1].value;
                if(assetsObject[lastChecked]) {
                    imgElement.src = `images/${assetsObject[lastChecked]}`;
                    imgElement.style.display = 'block';
                }
            } else {
                imgElement.style.display = 'none';
            }
        });
    });
}

updateCheckboxImage('input[name="drink"]', sideDrinkImg, imageAssets.drinks);
updateCheckboxImage('input[name="topping"]', sideToppingImg, imageAssets.toppings);

// עדכון שם הלקוח בלייב
nameInput.addEventListener('input', (e) => {
    displayNameSpan.textContent = e.target.value;
});

// קריאה ראשונית להצגת התמונה של הפנה ללא רוטב בעת טעינת העמוד
updateMainDishImage();

// ==========================================
// 4. לוגיקת שליחת הזמנה (Modal)
// ==========================================

const submitBtn = document.getElementById('submit-btn');
const modal = document.getElementById('summary-modal');
const closeModalBtn = document.getElementById('close-modal-btn');

submitBtn.addEventListener('click', () => {
    // איסוף נתונים
    const name = nameInput.value || 'לא צוין שם';
    const phone = document.getElementById('customer-phone').value || 'לא צוין טלפון';
    const notes = document.getElementById('customer-notes').value || 'ללא הערות';
    
    const toppings = Array.from(document.querySelectorAll('input[name="topping"]:checked')).map(cb => cb.value).join(', ') || 'ללא תוספות';
    const drinks = Array.from(document.querySelectorAll('input[name="drink"]:checked')).map(cb => cb.value).join(', ') || 'ללא שתייה';

    // הזנת נתונים למודל
    document.getElementById('summary-name').textContent = name;
    document.getElementById('summary-phone').textContent = phone;
    document.getElementById('summary-pasta').textContent = currentPasta;
    document.getElementById('summary-sauce').textContent = currentSauce;
    document.getElementById('summary-toppings').textContent = toppings;
    document.getElementById('summary-drinks').textContent = drinks;
    document.getElementById('summary-notes').textContent = notes;

    // הצגת המודל
    modal.style.display = 'block';
});

// סגירת המודל
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// סגירה בלחיצה מחוץ למודל
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});