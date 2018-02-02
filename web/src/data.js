class check {
    constructor () {
        this.all = document.getElementById('all')
        this.noAll = document.getElementById('noAll')
        this.fan = document.getElementById('fan')
        this.ha = document.getElementById('ha')
        this.inp = document.querySelectorAll('input')
        this.list = document.querySelector('.list')
        this.contant = document.querySelector('.contant')
        this.init()
    }
    init () {
        this.allCheck()
        this.noAllCheack()
        this.fanCheck()
        this.subCheck()
    }
    // 全选
    allCheck () {
        let flag = false;
        this.all.onclick =  () => {
            [...this.inp].map((item) => {
                if(!item.checked) {
                    item.checked = !flag;
                }
            })
        }
    }
    // 全不选
     noAllCheack () {
     	let flag = false;
         this.noAll.onclick = () => {
         	  [...this.inp].map((item) => {
                 if(item.checked){
                     item.checked= flag;
                     this.list.innerHTML = ''
                 }
            })
           }
     }
    // 反选
    fanCheck(){
        this.fan.onclick = () => {
            [...this.inp].map((item) => {
                if(item.checked==true){
                    item.checked=false;
                } else {
                    item.checked = true;
                }
            })
     	 }
    }
    subCheck(){
        let span = document.getElementsByTagName('span')
        this.ha.onclick = () =>{
            this.list.innerHTML = '';
            for (let i=0;i<this.inp.length;i++){
                if(this.inp[i].checked){
                    let li = document.createElement('li')
                    li.innerHTML = `${span[i].innerText}`
                    this.list.appendChild(li)
                    // this.contant.style.display = 'block'
                }
            }
        }
    }

}
new check()