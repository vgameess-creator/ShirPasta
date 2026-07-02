* { box-sizing: border-box; font-family: Arial, Helvetica, sans-serif; }

body { background-color: #f5f5f5; margin: 0; padding: 20px; display: flex; justify-content: center; }

.app-container { display: flex; gap: 20px; max-width: 1200px; width: 100%; }

.controls-section { display: flex; flex-direction: column; gap: 15px; width: 350px; }

.control-box { background-color: white; border: 1px solid #000; padding: 15px; box-shadow: 2px 2px 5px rgba(0,0,0,0.1); }

.control-box h3 { margin-top: 0; text-decoration: underline; text-align: center; font-size: 16px; margin-bottom: 15px; }

.control-box label { display: block; margin-bottom: 8px; cursor: pointer; }

.input-group { display: flex; align-items: center; margin-bottom: 10px; }
.input-group label { width: 80px; margin-bottom: 0; font-weight: bold; }
.input-group input, .input-group textarea { flex: 1; padding: 5px; border: 1px solid #ccc; }
.input-group textarea { height: 60px; resize: none; }

/* דרישות מטלה: עיצוב כפתור שליחה (מנוטרל ופעיל) */
.submit-btn {
    display: block; width: 100%; margin: 15px auto 0; padding: 12px;
    background-color: #4CAF50; color: white; border: none; cursor: pointer;
    font-weight: bold; font-size: 16px; border-radius: 5px; transition: 0.3s;
}

.submit-btn:disabled {
    background-color: gray;
    opacity: 0.5; /* דרישת מטלה: כפתור מופיע בשקיפות 0.5 */
    cursor: not-allowed;
}

.submit-btn:not(:disabled):hover { background-color: #45a049; }

/* אזור תצוגה מקדימה */
.preview-section { flex: 1; background-color: white; border: 2px solid #000; display: flex; flex-direction: column; }
.preview-header { border-bottom: 2px solid #000; padding: 10px 20px; background-color: #eee; }
.preview-header h2 { margin: 0; font-size: 24px; color: #333; }

.preview-grid { display: grid; grid-template-columns: 1fr 250px; grid-template-rows: 200px 1fr; flex: 1; }
.grid-drink { grid-column: 2; grid-row: 1 / 3; border-right: 2px solid #000; padding: 15px; }
.grid-topping { grid-column: 1; grid-row: 1; border-bottom: 2px solid #000; padding: 15px; }
.grid-main-dish { grid-column: 1; grid-row: 2; padding: 15px; text-align: center; }

.preview-grid h3 { margin: 0 0 10px 0; }

.grid-main-dish img { max-height: 300px; max-width: 100%; object-fit: contain; }

/* גלריית תמונות לתוספות ושתייה */
.items-gallery { display: flex; flex-wrap: wrap; gap: 10px; }

/* דרישות מטלה: תמונות צ'ק-בוקס מופיעות מראש בחצי שקיפות */
.faded-img {
    width: 60px; height: 60px; object-fit: contain;
    opacity: 0.3; /* מותאם ל"חצי שקיפות", אפשר לשנות ל-0.5 */
    filter: grayscale(80%);
    transition: 0.3s all;
}

/* הדגשת התמונה בבחירה */
.faded-img.active-img {
    opacity: 1;
    filter: none;
    transform: scale(1.15);
}

/* מודל סיכום (Modal) */
.modal { display: none; position: fixed; z-index: 1000; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.6); }
.modal-content { background-color: #fff; margin: 10% auto; padding: 25px; border-radius: 8px; width: 400px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); }
.modal-content h2 { margin-top: 0; text-align: center; border-bottom: 2px solid #4CAF50; padding-bottom: 10px; color: #333; }
.modal-content p { font-size: 16px; margin-bottom: 8px; border-bottom: 1px dashed #ccc; padding-bottom: 5px;}
#close-modal-btn { display: block; width: 100%; padding: 10px; margin-top: 20px; background-color: #333; color: white; border: none; cursor: pointer; border-radius: 5px; font-size: 16px;}
#close-modal-btn:hover { background-color: #555; }
