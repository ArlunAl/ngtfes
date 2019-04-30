function turnOnModal(modalId) {
    let modal = document.getElementById(modalId)
    modal.classList.add("is-visible")
}
function turnOffModal(modalId) {
    let modal = document.getElementById(modalId)
    modal.classList.remove("is-visible")
}

var preventScroll={
    x:0,
    y:0,
    setPos(x=window.pageXOffset,y=window.pageYOffset){
      this.x=x;
      this.y=y;
    },
    handleEvent(){
      window.scrollTo(this.x,this.y);
    },
    enable(){
      this.setPos();
      window.addEventListener("scroll",this);
    },
    disable(){
      window.removeEventListener("scroll",this);
      this.setPos();
    }
};

function switch_menu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("is_shown");
    menu.classList.toggle("is_hidden");
    menu.classList.remove("first_hidden");

    var menu_icon = document.getElementById("menu_icon");
    menu_icon.classList.toggle("is_open");
    menu_icon.classList.toggle("is_close"); 
};