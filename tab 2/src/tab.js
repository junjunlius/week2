class Tab{
     constructor () {
          this.init();
     }
     init () {
        this.createDivs();
     }
     createDivs () {
         let box = document.createElement('div');
         let uli = this.createNav();
         let oli = this.createTab();
         box.className = 'box';

         
         box.append(uli);
         box.append(oli);
        
         document.body.append(box);
         this.main()
     }
     createNav () {
         let uli =document.createElement('ul');
         uli.className = 'uli';

         uli.id = 'nav';

         let lis1 = document.createElement('li');
         lis1.innerHTML = 1;
         uli.append(lis1);

         let lis2 = document.createElement('li');
         lis2.innerHTML = 2;
         uli.append(lis2);

         let lis3 = document.createElement('li');
         lis3.innerHTML = 3;
         uli.append(lis3);

         let lis4 = document.createElement('li');
         lis4.innerHTML = 4;
         uli.append(lis4);

         let lis5 = document.createElement('li');
         lis5.innerHTML = 5;
         uli.append(lis5);
         
         return uli;
       

     }
     createTab () {
        let oli =document.createElement('ol');
        oli.className = 'oli';
        oli.id = 'oli';

        let lis1 = document.createElement('li');
        lis1.innerHTML = 11111111;
        oli.append(lis1);

        let lis2 = document.createElement('li');
        lis2.innerHTML = 22222222;
        oli.append(lis2);

        let lis3 = document.createElement('li');
        lis3.innerHTML = 33333333;
        oli.append(lis3);

        let lis4 = document.createElement('li');
        lis4.innerHTML = 44444444;
        oli.append(lis4);

        let lis5 = document.createElement('li');
        lis5.innerHTML = 55555555;
        oli.append(lis5);
        
        return oli;

    }
    main () {
        let nav = document.querySelectorAll('.uli')[0];
         // console.log(nav);
        let ulis = nav.getElementsByTagName('li');

        let tablis = document.querySelectorAll('.oli')[0];
        // console.log(nav);
        let olis = tablis.getElementsByTagName('li');

        console.log(olis);
        for (let i=0;i<ulis.length;i++) {
               ulis[i].addEventListener('click', () => {
                   
                   for (let j=0;j<olis.length;j++) {
                        olis[j].style.display = 'none';
                        ulis[j].className = '';
                   }
                   olis[i].style.display = 'block';
                   ulis[i].className = 'bg';
                  
               })
        }
        
         
    }
}
new Tab();