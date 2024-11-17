const textBtn = document.getElementById('btn');

textBtn.addEventListener('click', () => {
    const textSecond = document.getElementById('text');
    textSecond.textContent = 'ボタンをクリックしました';
    textSecond.appendChild('textSecond');
})