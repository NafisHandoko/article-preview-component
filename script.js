function shareActive(){
    if((window.matchMedia("(max-width:768px)")).matches){
        document.getElementById('author').classList.toggle('author-share-active');
        document.getElementById('profile').classList.toggle('profile-share-active');
        document.getElementById('share-bubble2').classList.toggle('share-bubble2-active');
    }else{
        document.getElementById('share-bubble').classList.toggle('share-bubble-active');
    }
}

window.matchMedia("(max-width:768px)").addEventListener("change",() => {
    if(document.getElementById('share-bubble').classList.contains("share-bubble-active") || document.getElementById('share-bubble2').classList.contains("share-bubble2-active")){
        document.getElementById('share-bubble').classList.toggle('share-bubble-active');
        document.getElementById('author').classList.toggle('author-share-active');
        document.getElementById('profile').classList.toggle('profile-share-active');
        document.getElementById('share-bubble2').classList.toggle('share-bubble2-active');
    }
})