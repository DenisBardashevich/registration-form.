const blockBtnIn = document.querySelector('.block_btnin');
const blockBtnUp = document.querySelector('.block_btnup');
const formBox = document.querySelector('.form_box');
const block = document.querySelector('.block')
const body = document.body;

console.log ()
blockBtnUp.addEventListener('click', function () {
    formBox.classList.add('active');
    body.classList.add('active');
    block.classList.add('active');
});

blockBtnIn.addEventListener('click', function () {
    formBox.classList.remove('active');
    body.classList.remove('active');
    block.classList.remove('active');
});