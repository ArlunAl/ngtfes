// yayo
history.replaceState('','','#');
var modal = {
  sample: {
    heading: "aiueo",
    imgSrc: "./imgs/fruit.jpeg",
    text: "faie;nwaiofnew@oiafwe",
  },
  sample2: {
    heading: "kakikukeko",
    imgSrc: "./imgs/animal.jpeg",
    text: "fewma,eflknwe@apfjweoapmnokihpaisjdn;ak;lnew",
  }
}
function fillDataToModal(modalData) {
  let heading = document.getElementsByClassName("modal_window-heading")[0]
  let text = document.getElementsByClassName("modal_window-text")[0]
  let img = document.getElementsByClassName("modal_window-img")[0]
  
  // console.log(heading, img, text)
  heading.textContent = modalData.heading
  text.textContent    = modalData.text
  img.setAttribute("src", modalData.imgSrc)
}
// -----------------------

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