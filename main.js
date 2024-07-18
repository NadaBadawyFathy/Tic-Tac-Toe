
let allItems = document.querySelectorAll('.tic .box li');

let ox = document.querySelector('.tic .xo');

let restart = document.querySelector('.tic .restart');

let array = ['X','O','X','O','X','O','X','O','X'];

let a=[],b=[],c=[],d=[],e=[],f=[],g=[],h=[],i=[];

allItems.forEach(function (ele,index) {
    
    ele.onclick = function () {

        if (this.innerHTML === '') {
            this.innerHTML = array[0];

            if (index === 0 || index === 1 || index === 2 ){
                a.push(array[0]);
                
                if (a.length === 3 && [...new Set(a)].length === 1) {
                    ox.innerHTML = `${a[0]} is Winner`;
                }
            }
            if (index === 3 || index === 4 || index === 5 ){
                b.push(array[0]);
                
                if (b.length === 3 && [...new Set(b)].length === 1) {
                    ox.innerHTML = `${b[0]} is Winner`;
                }
            }
            if (index === 6 || index === 7 || index === 8 ){
                c.push(array[0]);
                
                if (c.length === 3 && [...new Set(c)].length === 1) {
                    ox.innerHTML = `${c[0]} is Winner`;
                }
            }
            if (index === 0 || index === 4 || index === 8 ){
                d.push(array[0]);
                
                if (d.length === 3 && [...new Set(d)].length === 1) {
                    ox.innerHTML = `${d[0]} is Winner`;
                }
            }
            if (index === 2 || index === 4 || index === 6 ){
                e.push(array[0]);
                
                if (e.length === 3 && [...new Set(e)].length === 1) {
                    ox.innerHTML = `${e[0]} is Winner`;
                }
            }
            if (index === 1 || index === 4 || index === 7 ){
                f.push(array[0]);
                
                if (f.length === 3 && [...new Set(f)].length === 1) {
                    ox.innerHTML = `${f[0]} is Winner`;
                }
            }
            if (index === 0 || index === 3 || index === 6 ){
                g.push(array[0]);
                
                if (g.length === 3 && [...new Set(g)].length === 1) {
                    ox.innerHTML = `${g[0]} is Winner`;
                }
            }
            if (index === 2 || index === 5 || index === 8 ){
                h.push(array[0]);
                
                if (h.length === 3 && [...new Set(h)].length === 1) {
                    ox.innerHTML = `${h[0]} is Winner`;
                }
            }

            array.shift();

            if(ox.innerHTML !=="X is Winner" && !array.length) {
                ox.innerHTML += `<span>No Winner</span>`;
            }
        }
    }
})

restart.addEventListener('click',function (ele) {
    location.reload();
})