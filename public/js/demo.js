window.onload = function() {
    let c = init("canvas").c,
        canvas = init("canvas").canvas,
      w = (canvas.width = window.innerWidth),
      h = (canvas.height = window.innerHeight);
    //initiation
    function cc(A,B,C){
      let D = 2*(A.x*(B.y-C.y)+B.x*(C.y-A.y)+C.x*(A.y-B.y));
      let S = {
        x: (1/D)*((A.x*A.x+A.y*A.y)*(B.y-C.y)+(B.x*B.x+B.y*B.y)*(C.y-A.y)+(C.x*C.x+C.y*C.y)*(A.y-B.y)),
        y: (1/D)*((A.x*A.x+A.y*A.y)*(C.x-B.x)+(B.x*B.x+B.y*B.y)*(A.x-C.x)+(C.x*C.x+C.y*C.y)*(B.x-A.x))
      }
      return S;
    }
    function dist(A,B){
      return Math.sqrt(Math.pow(A.x-B.x,2)+Math.pow(A.y-B.y,2));
    }
    class point{
      constructor(x,y){
        this.x = x;
        this.y = y;
      }
      update(x,y){
        this.x = x;
        this.y = y;
      }
    }
    class triangle{
      constructor(A,B,C,lw){
        this.a = A;
        this.b = B;
        this.c = C;
        this.s = cc(A,B,C);
        this.ty = this.c;
        this.lw = lw;
        
        this.x = dist(this.s,this.a);
        this.c1 = dist(this.a,this.b)/2;
        this.c2 = dist(this.b,this.c)/2;
        this.c3 = dist(this.c,this.a)/2;
        this.a2ab = Math.atan2(this.a.y-this.b.y,this.a.x-this.b.x);
        this.a2bc = Math.atan2(this.b.y-this.c.y,this.b.x-this.c.x);
        this.a2ca = Math.atan2(this.c.y-this.a.y,this.c.x-this.a.x);
        this.rab = Math.sqrt(this.x*this.x-this.c1*this.c1);
        this.rbc = Math.sqrt(this.x*this.x-this.c2*this.c2);
        this.rca = Math.sqrt(this.x*this.x-this.c3*this.c3);
        
        this.s1 = {
          x:this.s.x+(this.rab/2)*Math.cos(this.a2ab+Math.PI/2), 
          y:this.s.y+(this.rab/2)*Math.sin(this.a2ab+Math.PI/2) 
        };
        this.s2 = {
          x:this.s.x+(this.rbc/2)*Math.cos(this.a2bc+Math.PI/2), 
          y:this.s.y+(this.rbc/2)*Math.sin(this.a2bc+Math.PI/2)
        };
        this.s3 = {
          x:this.s.x+(this.rca/2)*Math.cos(this.a2ca+5*Math.PI/2), 
          y:this.s.y+(this.rca/2)*Math.sin(this.a2ca+5*Math.PI/2)
        };
      }
      update(A,B,C){
        this.a = A;
        this.b = B;
        this.c = C;
        this.s = cc(A,B,C);
        this.ty = this.c;
        
        this.x = dist(this.s,this.a);
        this.c1 = dist(this.a,this.b)/2;
        this.c2 = dist(this.b,this.c)/2;
        this.c3 = dist(this.c,this.a)/2;
        this.a2ab = Math.atan2(this.a.y-this.b.y,this.a.x-this.b.x);
        this.a2bc = Math.atan2(this.b.y-this.c.y,this.b.x-this.c.x);
        this.a2ca = Math.atan2(this.c.y-this.a.y,this.c.x-this.a.x);
        this.rab = Math.sqrt(this.x*this.x-this.c1*this.c1);
        this.rbc = Math.sqrt(this.x*this.x-this.c2*this.c2);
        this.rca = Math.sqrt(this.x*this.x-this.c3*this.c3);
        
        this.s1 = {
          x:this.s.x+(this.rab/2)*Math.cos(this.a2ab+Math.PI/2), 
          y:this.s.y+(this.rab/2)*Math.sin(this.a2ab+Math.PI/2) 
        };
        this.s2 = {
          x:this.s.x+(this.rbc/2)*Math.cos(this.a2bc+Math.PI/2), 
          y:this.s.y+(this.rbc/2)*Math.sin(this.a2bc+Math.PI/2)
        };
        this.s3 = {
          x:this.s.x+(this.rca/2)*Math.cos(this.a2ca+5*Math.PI/2), 
          y:this.s.y+(this.rca/2)*Math.sin(this.a2ca+5*Math.PI/2)
        };
      }
      move(m){
        this.c = m;
        this.s = cc(this.a,this.b,this.c);
        
        this.x = dist(this.s,this.a);
        this.c1 = dist(this.a,this.b)/2;
        this.c2 = dist(this.b,this.c)/2;
        this.c3 = dist(this.c,this.a)/2;
        this.a2ab = Math.atan2(this.a.y-this.b.y,this.a.x-this.b.x);
        this.a2bc = Math.atan2(this.b.y-this.c.y,this.b.x-this.c.x);
        this.a2ca = Math.atan2(this.c.y-this.a.y,this.c.x-this.a.x);
        this.rab = Math.sqrt(this.x*this.x-this.c1*this.c1);
        this.rbc = Math.sqrt(this.x*this.x-this.c2*this.c2);
        this.rca = Math.sqrt(this.x*this.x-this.c3*this.c3);
        
        this.s1 = {
          x:this.s.x+(this.rab/2)*Math.cos(this.a2ab+Math.PI/2), 
          y:this.s.y+(this.rab/2)*Math.sin(this.a2ab+Math.PI/2) 
        };
        this.s2 = {
          x:this.s.x+(this.rbc/2)*Math.cos(this.a2bc+Math.PI/2), 
          y:this.s.y+(this.rbc/2)*Math.sin(this.a2bc+Math.PI/2)
        };
        this.s3 = {
          x:this.s.x+(this.rca/2)*Math.cos(this.a2ca+5*Math.PI/2), 
          y:this.s.y+(this.rca/2)*Math.sin(this.a2ca+5*Math.PI/2)
        };
      }
      iterate(it){
        this.it = it;
        // this.t1 = new triangle(this.a,this.b,this.s1,this.lw/2);
        // this.t2 = new triangle(this.a,this.s2,this.c,this.lw/2);
        // this.t3 = new triangle(this.b,this.c,this.s3,this.lw/2);
        
        this.t4 = new triangle(this.a,this.s1,this.s3,this.lw/2);
        this.t5 = new triangle(this.b,this.s2,this.s1,this.lw/2);
        this.t6 = new triangle(this.c,this.s3,this.s2,this.lw/2);
        
        this.t7 = new triangle(this.s1,this.s2,this.s3,this.lw/2);
        
        if(it < 2){
          // this.t1.iterate(it+1);
          // this.t2.iterate(it+1);
          // this.t3.iterate(it+1);
          
          this.t4.iterate(it+1);
          this.t5.iterate(it+1);
          this.t6.iterate(it+1);
          
          this.t7.iterate(it+1);
        }
        
        // this.t1.show();
        // this.t2.show();
        // this.t3.show();
        
        this.t4.show();
        this.t5.show();
        this.t6.show();
        
        this.t7.show();
      }
      show(){
        // c.beginPath();
        // c.lineTo(this.a.x,this.a.y);
        // c.lineTo(this.b.x,this.b.y);
        // c.lineTo(this.c.x,this.c.y);
        // c.strokeStyle="white";
        // c.lineWidth=this.lw;
        // c.lineJoin="round";
        // c.closePath();
        // c.stroke();
        
        c.fillStyle="white";
        c.fillRect(this.a.x-1,this.a.y-1,2,2);
        c.fillRect(this.b.x-1,this.b.y-1,2,2);
        c.fillRect(this.c.x-1,this.c.y-1,2,2);
        
        c.fillStyle="#00ffff";
        c.fillRect(this.s.x-0.5,this.s.y-0.5,1,1);
        c.fillStyle="#00ffff";
        c.fillRect(this.s1.x-0.5,this.s1.y-0.5,1,1);
        c.fillStyle="#00ffff";
        c.fillRect(this.s2.x-0.5,this.s2.y-0.5,1,1);
        c.fillStyle="#00ffff";
        c.fillRect(this.s3.x-0.5,this.s3.y-0.5,1,1);
        
      }
    }
    
    let s = h/3,
        A = new point(
          w/2+s*Math.cos(0),
          h/2+s*Math.sin(0)),
        B = new point(
          w/2+s*Math.cos(Math.PI/3), 
          h/2+s*Math.sin(Math.PI/3)),
        C = new point(
          w/2+s*Math.cos(2*Math.PI/3),  
          h/2+s*Math.sin(2*Math.PI/3)),
        D = new point(
          w/2+s*Math.cos(Math.PI),  
          h/2+s*Math.sin(Math.PI)),
        E = new point(
          w/2+s*Math.cos(4*Math.PI/3),  
          h/2+s*Math.sin(4*Math.PI/3)),
        F = new point(
          w/2+s*Math.cos(5*Math.PI/3),  
          h/2+s*Math.sin(5*Math.PI/3)),
        G = new point(
          w/2,  
          h/2),
        lb = 1,
        T = new triangle(A,B,G,lb),
        T2 = new triangle(B,C,G,lb),
        T3 = new triangle(C,D,G,lb),
        T4 = new triangle(D,E,G,lb),
        T5 = new triangle(E,F,G,lb),
        T6 = new triangle(F,A,G,lb),
        tx = w/2,
        ty = h/2,
        spd = 0;
        
    
    function draw() {
      //animation
      if(mouse.x){
        T.move(mouse);
        T2.move(mouse);
        T3.move(mouse);
        T4.move(mouse);
        T5.move(mouse);
        T6.move(mouse);
      }else{
        T.move({x: tx,y: ty});
        T2.move({x: tx,y: ty});
        T3.move({x: tx,y: ty});
        T4.move({x: tx,y: ty});
        T5.move({x: tx,y: ty});
        T6.move({x: tx,y: ty});
        tx = w/2+(s*Math.cos(Math.PI/6)-45)*Math.cos(spd);
        ty = h/2+(s*Math.cos(Math.PI/6)-70)*Math.sin(spd);
        spd+=0.05;
      }
      
      T.iterate(0);
      T2.iterate(0);
      T3.iterate(0);
      T4.iterate(0);
      T5.iterate(0);
      T6.iterate(0);
      T.show();
      T2.show();
      T3.show();
      T4.show();
      T5.show();
      T6.show();
    }
    
    let mouse = {
      x: false,
      y: false
    };
    let last_mouse = {};
    
    canvas.addEventListener(
      "mousemove",
      function(e) {
        last_mouse.x = mouse.x;
        last_mouse.y = mouse.y;
    
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
      },
      false
    );
      
      canvas.addEventListener("mouseleave", function(e) {
      mouse.x = false;
    });
      
    function init(elemid) {
      let canvas = document.getElementById(elemid),
        c = canvas.getContext("2d"),
        w = (canvas.width = window.innerWidth),
        h = (canvas.height = window.innerHeight);
      c.fillStyle = "rgba(30,30,30,1)";
      c.fillRect(0, 0, w, h);
      return {c:c,canvas:canvas};
    }
    
    window.requestAnimFrame = (function() {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback);
        }
      );
    });
    
    function loop() {
      window.requestAnimFrame(loop);
      c.fillStyle = "rgba(30,30,30,1)";
      c.fillRect(0, 0, w, h);
      draw();
    }
    
    window.addEventListener("resize", function() {
      (w = canvas.width = window.innerWidth),
      (h = canvas.height = window.innerHeight);
        s = h/3,
        A.update(w/2+s*Math.cos(0),h/2+s*Math.sin(0));
        B.update(
          w/2+s*Math.cos(Math.PI/3), 
          h/2+s*Math.sin(Math.PI/3)),
        C.update(
          w/2+s*Math.cos(2*Math.PI/3),  
          h/2+s*Math.sin(2*Math.PI/3)),
        D.update(
          w/2+s*Math.cos(Math.PI),  
          h/2+s*Math.sin(Math.PI)),
        E.update(
          w/2+s*Math.cos(4*Math.PI/3),  
          h/2+s*Math.sin(4*Math.PI/3)),
        F.update(
          w/2+s*Math.cos(5*Math.PI/3),  
          h/2+s*Math.sin(5*Math.PI/3)),
        G.update(
          w/2,  
          h/2),
        T.update(A,B,G),
        T2.update(B,C,G),
        T3.update(C,D,G),
        T4.update(D,E,G),
        T5.update(E,F,G),
        T6.update(F,A,G),
        tx = w/2,
        ty = h/2,
      loop();
    });
    
    loop();
    setInterval(loop, 1000 / 60);
    }