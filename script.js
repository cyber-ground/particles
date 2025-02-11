'use strict';
import {console_color,console_red,console_orange,console_yellow,console_green,
	console_blue,console_purple,console_magenta,console_cyan} from './logColor.js';

// --------------------------------------------------------------------------------
//*                           --- BASIC PARTICLES ---
// --------------------------------------------------------------------------------

  // const canvas = document.querySelector('canvas');
  // const ctx = canvas.getContext('2d', { willReadFrequently: true});
  // canvas.width = innerWidth;
  // canvas.height = innerHeight;
  // const particleArray = [];
  // const numOfParticles = 100;
  // const multiplySize = 2;
  // const velocity = 3;
  // let hue = 50;
  // const mouse = {
  //   x: undefined,
  //   y: undefined,
  //   radius: 100,
  // }

  // //* event -----------------------------
  
  // canvas.addEventListener('click', (e) => {
  //   mouse.x = e.clientX;
  //   mouse.y = e.clientY;
  //   // createParticle();
  //   console.log(particleArray.length);
  // });
  // canvas.addEventListener('mousemove', (e) => {
  //   mouse.x = e.clientX;
  //   mouse.y = e.clientY;
  //   // createParticle();
  //   // hue++;
  //   // if(hue >= 360) {hue = 0}
  // });

  // canvas.addEventListener('mouseleave', (e) => {
  //   mouse.x = undefined;
  //   mouse.y = undefined;
  // });

  // window.addEventListener('resize', () => {
  //   canvas.width = innerWidth;
  //   canvas.height = innerHeight;
  //   particleArray.forEach(particle => {
  //     const px = particle.x + particle.radius;
  //     const py = particle.y + particle.radius;
  //     if(px > canvas.width) { particle.x += -100 }
  //     if(py > canvas.height) { particle.y += -100 }
  //   });
  // });

  // //* class -----------------------------

  // class Particle {
  //   constructor(ctx, x, y, radius) {
  //     this.ctx = ctx;
  //     this.x = x;
  //     this.y = y;
  //     this.radius = radius;
  //     // let x = Math.random() * canvas.width/2 + canvas.width/4; //*cxPos
  //     // let y = Math.random() * canvas.height/2 + canvas.height/4; //*cyPos
  //     this.vx = (Math.random() - 0.5) * velocity;
  //     this.vy = (Math.random() - 0.5) * velocity;
  //     this.pv = Math.random()/1000; //* plus value
  //     this.color = `hsl(${hue}, 100%, 50%)`;
  //     this.ease = 0.5;
  //     this.friction = 0.8;
  //   }
  //   draw() {
  //     this.ctx.fillStyle = this.color;
  //     this.ctx.beginPath();
  //     this.ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
  //     this.ctx.fill();
  //   }
  //   wallDetect() {
  //     if(this.x + this.radius > canvas.width || this.x - this.radius < 0) {
  //       this.vx = -this.vx * this.friction;
  //     }
  //     if(this.y + this.radius > canvas.height || this.y - this.radius < 0) {
  //       this.vy = -this.vy * this.friction;
  //     }
  //   }
  //   bugDetect() {
  //     if(this.x + this.radius > canvas.width) { this.x += -1}
  //     if(this.x - this.radius < 0) { this.x += 1} 
  //     if(this.y + this.radius > canvas.height) { this.y += -1}
  //     if(this.y - this.radius < 0) { this.y += 1}
  //   }
  //   mouseColDetect() {
  //     const dx = this.x - mouse.x;
  //     const dy = this.y - mouse.y;
  //     // const distance = dx*dx+dy*dy;
  //     // const distance = Math.hypot(dx, dy);
  //     const distance = Math.sqrt(dx*dx+dy*dy);
  //     const angle = Math.atan2(dy, dx);
  //     if(distance < this.radius + mouse.radius) {
  //       this.vx += Math.cos(angle) * this.ease;
  //       this.vy += Math.sin(angle) * this.ease;
  //     }
  //   }
  //   colDetect() {
  //     for (let i = 0; i < particleArray.length; i++) {
  //       if(this === particleArray[i]) continue;
  //       const dx = particleArray[i].x - this.x;
  //       const dy = particleArray[i].y - this.y;
  //       const distance = Math.sqrt(dx*dx+dy*dy);
  //       const radius = this.radius + particleArray[i].radius;
  //       if(distance <= radius) {
  //         let rvx = Math.random() > 0.5 ? Math.random()/10 : -Math.random()/10;
  //         let rvy = Math.random() > 0.5 ? -Math.random()/20 : Math.random()/20;
  //         this.vx *= -1 + rvx;
  //         this.vy *= -1 + rvy;
  //       }
  //       if(distance <= radius -2) { this.pv = -0.01} //* avoid bug
  //     }
  //     //* First try was... Not accurate --- 
  //     // particleArray.forEach(particle => {
  //     //   particleArray.forEach(target => {
  //     //     const dx = particle.x - target.x;
  //     //     const dy = particle.y - target.y;
  //     //     const distance = Math.sqrt(dx*dx+dy*dy);
  //     //     if(distance <= this.radius) {
  //     //       target.vx = -target.vx;
  //     //       target.vy = -target.vy;
  //     //     }
  //     //   })
  //     // });
  //   }
  //   update() {
  //     this.draw();
  //     this.wallDetect();
  //     this.bugDetect();
  //     this.colDetect();
  //     this.mouseColDetect();
  //     this.color = `hsl(${hue}, 100%, 50%)`;
  //     this.x += this.vx;
  //     this.y += this.vy;
  //     this.radius += this.pv;
  //     if(this.radius > multiplySize+2) { this.pv = -Math.random()/1000 }
  //     if(this.radius < 0.5) { this.pv = Math.random()/1000 } 
  //     // if(this.radius > 0.2) { this.radius -= 0.1 } //* shrink delete
  //   }
  // }


  // //* function -----------------------------

  // // function createParticle() {
  // //   for (let i = 0; i < numOfParticles; i++) {
  // //     particleArray.push(new Particle(ctx));
  // //   }
  // // } createParticle();
  
  // //* create particle with no collision ---
  // //* NEED constructor(ctx, x, y, radius)  
  // function createParticleWithNoCollision() {
  //   for (let i = 0; i < numOfParticles; i++) {
  //     // let x = Math.random() * canvas.width; //*og
  //     // let y = Math.random() * canvas.height; //*og
  //     let radius = 1 + Math.random() * multiplySize;
  //     let x = radius + Math.random() * (canvas.width - radius*2);
  //     let y = radius + Math.random() * (canvas.height - radius*2);
  //     if(i !== 0) {
  //       for (let j = 0; j < particleArray.length; j++) {
  //         const dx = x - particleArray[j].x;
  //         const dy = y - particleArray[j].y;
  //         const distance = Math.sqrt(dx*dx+dy*dy);
  //         if(distance <= radius+particleArray[j].radius) {
  //           // x = Math.random() * canvas.width; //*og
  //           // y = Math.random() * canvas.height; //*og
  //           x = radius + Math.random() * (canvas.width - radius*2);
  //           y = radius + Math.random() * (canvas.height - radius*2);
  //           j = -1;
  //         }
  //       }
  //     }
  //     particleArray.push(new Particle(ctx, x, y, radius));
  //   }
  // } createParticleWithNoCollision();
  
  // function handleParticle() {
  //   particleArray.forEach((particle, index) => {
  //     particle.update();
  //     particleArray.forEach(target => {
  //       const dx = particle.x - target.x;
  //       const dy = particle.y - target.y;
  //       const distance = Math.sqrt(dx*dx+dy*dy);
  //       if(distance < 200) {
  //         ctx.beginPath();
  //         ctx.strokeStyle = particle.color;
  //         ctx.lineWidth = particle.radius/10;
  //         ctx.moveTo(particle.x, particle.y);
  //         ctx.lineTo(target.x, target.y);
  //         ctx.stroke();
  //         ctx.closePath(); 
  //       }
  //     });
  //     if(particle.radius < 0.3) { particleArray.splice(index, 1) } //* delete index
  //     if(particleArray.length < numOfParticles) { //* add new particle
        // for (let i = 0; i < numOfParticles - particleArray.length; i++) {
        //   let radius = Math.random() * multiplySize;
        //   particleArray.push(new Particle(ctx, canvas.width/2, canvas.height/2, radius));
        // }
  //     }
  //   });
  // }

  //   function animate() {
  //     ctx.clearRect(0, 0, canvas.width, canvas.height);
  //     // ctx.fillStyle = 'rgba(0,0,0,0.05)';
  //     // ctx.fillRect(0, 0, canvas.width, canvas.height);
  //     // ctx.globalAlpha = .5;
  //     handleParticle();
  //     hue += 0.05;
  //     if(hue >= 360) {hue = 0}
  //     // console.log(hue);
  //     // console.log(particleArray.length);
  //     requestAnimationFrame(animate);
  //   } 
  //   animate(); 



 //* -------------------------------------
  // function distance(x1, y1, x2, y2) {
  //   const dx = x2 - x1;
  //   const dy = y2 - y1;
  //   return Math.sqrt(dx*dx+dy*dy);
  // }
  // function distance(x1, y1, x2, y2) {
  //   const xDist = x2 - x1;
  //   const yDist = y2 - y1;
  //   return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
  // }
  //* -------------------------------------------------------------
// --------------------------------------------------------------------------------
//*                           --- BASIC PARTICLES ---
// --------------------------------------------------------------------------------

// numOfParticles pc100 ios60 / multiplySize pc40 ios1
const mobile = navigator.userAgent.match(/iPhone|Android.+Mobile/);
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d', { willReadFrequently: true});
canvas.width = innerWidth;
canvas.height = innerHeight;
const particleArray = [];
const numOfParticles = 60; 
const multiplySize = 1; 
const velocity = 3;
let hue = 50;
const mouse = {
  x: undefined,
  y: undefined,
  radius: 50,
}

//* event -----------------------------

canvas.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

canvas.addEventListener('mouseleave', (e) => {
  mouse.x = undefined;
  mouse.y = undefined;
});

canvas.addEventListener('touchstart', (e) => { 
  e.preventDefault();
  mouse.x = e.touches[0].clientX; 
  mouse.y = e.touches[0].clientY;
});

canvas.addEventListener('touchmove', (e) => { 
  mouse.x = e.touches[0].clientX; 
  mouse.y = e.touches[0].clientY;
  // hue++; if(hue >= 360) {hue = 0}
});

canvas.addEventListener('touchend', (e) => { 
  mouse.x = undefined; 
  mouse.y = undefined;
});


window.addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  particleArray.forEach(particle => {
    const px = particle.x + particle.radius;
    const py = particle.y + particle.radius;
    if(px > canvas.width) { particle.x += -100 }
    if(py > canvas.height) { particle.y += -100 }
  });
});

//* class -----------------------------

class Particle {
  constructor(ctx, x, y, radius) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.radius = radius;
    // this.x = mouse.x;
    // this.y = mouse.y;
    // this.x = Math.random() * canvas.width/2 + canvas.width/4;
    // this.y = Math.random() * canvas.height/2 + canvas.height/4;
    // this.x = Math.random() * canvas.width; //*og
    // this.y = Math.random() * canvas.height; //*og
    // this.radius = 1 + Math.random() * multiplySize; //*og
    this.velocity = {
      x: (Math.random() - 0.5) * velocity,
      y: (Math.random() - 0.5) * velocity,
    }
    this.mass = 1; //*** absolute */
    this.pv = Math.random()/1000; //* plus value
    this.color = `hsl(${hue}, 100%, 50%)`;
    this.ease = 0.5;
    this.friction = 0.8;
  }
  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
    this.ctx.fill();
  }
  wallDetect() {
    if(this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.velocity.x = -this.velocity.x * this.friction;
    }
    if(this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.velocity.y = -this.velocity.y * this.friction;
    }
  }
  bugDetect() {
    if(this.x + this.radius > canvas.width) { this.x += -1}
    if(this.x - this.radius < 0) { this.x += 1}
    if(this.y + this.radius > canvas.height) { this.y += -1}
    if(this.y - this.radius < 0) { this.y += 1}
  }
  mouseColDetect() {
    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    // const distance = dx*dx+dy*dy;
    // const distance = Math.hypot(dx, dy);
    const distance = Math.sqrt(dx*dx+dy*dy);
    const angle = Math.atan2(dy, dx); 
    if(distance < this.radius + mouse.radius) {
      this.velocity.x += Math.cos(angle) * this.ease;
      this.velocity.y += Math.sin(angle) * this.ease;
    }
  }
  colDetect() {
    for (let i = 0; i < particleArray.length; i++) {
      if(this === particleArray[i]) continue;
      const dx = particleArray[i].x - this.x;
      const dy = particleArray[i].y - this.y;
      const distance = Math.sqrt(dx*dx+dy*dy);
      const radius = this.radius + particleArray[i].radius;
      if(distance <= radius) {
        resolveCollision(this, particleArray[i]); //*** */
      }
      // if(distance <= radius -2) { this.pv = -0.01} //* no need avoid bug
    }
  }
  update() {
    this.draw();
    this.wallDetect();
    this.bugDetect();
    this.colDetect();
    this.mouseColDetect();
    this.color = `hsl(${hue}, 100%, 50%)`;
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.radius += this.pv;
    if(this.radius > (mobile ? multiplySize+1 : multiplySize+2)) 
      { this.pv = -Math.random()/1000 }
    if(this.radius < 1) { this.pv = Math.random()/1000 } //*>
    // if(this.radius > 0.2) { this.radius -= 0.1 } //* shrink
  }
}


//* function -----------------------------

// canvas.addEventListener('click', (e) => {
//   mouse.x = e.clientX;
//   mouse.y = e.clientY;
//   createParticle();
//   console.log(particleArray.length);
// });

// function createParticle() {
//   for (let i = 0; i < numOfParticles; i++) {
//     particleArray.push(new Particle(ctx));
//   }
// } createParticle();


//* create particle with no collision ---
//* NEED constructor(ctx, x, y, radius)  
function createParticleWithNoCollision() {
  for (let i = 0; i < numOfParticles; i++) {
    let radius = 1 + Math.random() * multiplySize;
    let x = radius + Math.random() * (canvas.width - radius*2);
    let y = radius + Math.random() * (canvas.height - radius*2);
    if(i !== 0) {
      for (let j = 0; j < particleArray.length; j++) {
        const dx = x - particleArray[j].x;
        const dy = y - particleArray[j].y;
        const distance = Math.sqrt(dx*dx+dy*dy);
        if(distance <= radius*2+particleArray[j].radius) {
          x = radius + Math.random() * (canvas.width - radius*2);
          y = radius + Math.random() * (canvas.height - radius*2);
          j = -1;
        }
      }
    }
    particleArray.push(new Particle(ctx, x, y, radius));
  }
} createParticleWithNoCollision();

function handleParticle() {
  particleArray.forEach((particle, index) => {
    particle.update();
    particleArray.forEach(target => {
      const dx = particle.x - target.x;
      const dy = particle.y - target.y;
      const distance = Math.sqrt(dx*dx+dy*dy);
      //* draw line between particles */ 
      if(distance < (mobile ? 100 : 200)) { 
        ctx.beginPath();
        ctx.strokeStyle = particle.color;
        ctx.lineWidth = particle.radius/10;
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(target.x, target.y);
        ctx.stroke();
        ctx.closePath(); 
      }
    });
    //* no need activate with resolveCollision
    // if(particle.radius < 0.5) { particleArray.splice(index, 1) } //* delete index
    // if(particleArray.length < numOfParticles) { //* add new particle
    //   for (let i = 0; i < numOfParticles - particleArray.length; i++) { //*>
    //     particleArray.push(new Particle(ctx, canvas.width/2, canvas.height/2, multiplySize*3));
    //   }
    // }
  });
}

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.fillStyle = 'rgba(0,0,0,0.05)';
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    // ctx.globalAlpha = .5;
    handleParticle();
    hue += 0.05;
    if(hue >= 360) {hue = 0}
    requestAnimationFrame(animate);
    // console.log(hue);
    // console.log(particleArray.length);
  } 
  animate(); 


  function rotate(velocity, angle) {
    const rotatedVelocities = {
        x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
        y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
    };
    return rotatedVelocities;
  }
  
  function resolveCollision(particle, otherParticle) {
  const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
  const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;
  const xDist = otherParticle.x - particle.x;
  const yDist = otherParticle.y - particle.y;
  // Prevent accidental overlap of particles
  if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
    // Grab angle between the two colliding particles
    const angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);
    // Store mass in var for better readability in collision equation
    const m1 = particle.mass;
    const m2 = otherParticle.mass;
    // Velocity before equation
    const u1 = rotate(particle.velocity, angle);
    const u2 = rotate(otherParticle.velocity, angle);
    // Velocity after 1d collision equation
    const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
    const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };
    // Final velocity after rotating axis back to original location
    const vFinal1 = rotate(v1, -angle);
    const vFinal2 = rotate(v2, -angle);
    // Swap particle velocities for realistic bounce effect
    particle.velocity.x = vFinal1.x;
    particle.velocity.y = vFinal1.y;
    otherParticle.velocity.x = vFinal2.x;
    otherParticle.velocity.y = vFinal2.y;
  }
}


// --------------------------------------------------------------------------------


















































// -------------------------------------------------------------------------------------------



























// -------------------------------------------------------------------------------------------










