const tab = document.querySelectorAll('.tab-item');
const tc = document.querySelectorAll('.ttt');
function selectitm(e){
    remvt();
    remvct();
    this.classList.add('tab-border');
    const tts = document.querySelector(`.${this.id}-ct`);
    tts.classList.add('tt');
}
function remvt(){
    tab.forEach(item=>{
        item.classList.remove('tab-border');
    });
};

function remvct(){
    tc.forEach(item=>{
        item.classList.remove('tt');
    });
};
   

tab.forEach(item=>{
    item.addEventListener('click',selectitm);
});

