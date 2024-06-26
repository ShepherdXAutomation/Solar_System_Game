// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Constraint = Matter.Constraint,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint;

// create an engine
var engine = Engine.create();

var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: '#0f0f13' // Optional: set a background color
    }
});

// Set the canvas to fill the screen and remove any margins
document.body.style.margin = '0';
document.body.style.overflow = 'hidden';

// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80);
var ball = Bodies.circle(260, 100, 40, { density: 0.04 });
//var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
// Function to create an asteroid
function createAsteroid(x, y, radius) {
    return Bodies.circle(x, y, radius, {
        density: 0.001,
        frictionAir: 0.001,
        restitution: 0.8,
        render: {
            fillStyle: '#564d4d'
        }
    });
}

// Function to shoot an asteroid from point (x, y) towards target (targetX, targetY)
function shootAsteroid(x, y, targetX, targetY) {
    // Calculate angle between click and center point
    const angle = Math.atan2(targetY - y, targetX - x);

    // Calculate force vector
    const forceMagnitude = 0.05; // Adjust as necessary
    const forceX = Math.cos(angle) * forceMagnitude;
    const forceY = Math.sin(angle) * forceMagnitude;

    // Create an asteroid at the center and apply force
    const asteroid = createAsteroid(x, y, 20); // Adjust radius as necessary
    World.add(engine.world, [asteroid]);
    Body.applyForce(asteroid, { x: asteroid.position.x, y: asteroid.position.y }, { x: forceX, y: forceY });
}
// create a mouse controlled constraint
var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: false
            }
        }
    });

    var sun = Bodies.circle(50, 50, 300, {
        density: 1,
        render: {
            fillStyle: 'yellow'
        },
        collisionFilter: {
            category: 0x0001,
            mask: 0x0001 // Only collide with default category
        }
    });
    
    var mercury = Bodies.circle(350, 350, 5, {
        density: 1,
        render: {
            fillStyle: 'grey'
        },
        collisionFilter: {
            category: 0x0001,
            mask: 0x0001 // Only collide with default category
        }
    });
    
    var mercury_elastic = Constraint.create({
        pointA: { x: 350, y: 350 },
        bodyB: mercury,
        density: 1,
        stiffness: 0.001,
        length: 5,
        render: {
            visible: false,
            lineWidth: 7,
            strokeStyle: '#ffffff'
        }
    });
// add 
    var venus = Bodies.circle(400, 380, 10, {
        density: 1,
        render: {
            fillStyle: '#FFECA1'
        },
        collisionFilter: {
            category: 0x0001,
            mask: 0x0001 // Only collide with default category
        }
    });
    var venus_elastic = Constraint.create({
        pointA: { x: 400, y: 380 },
        bodyB: venus,
        density: 1,
        stiffness: 0.001,
        length: 7,
        render: {
            visible: false,
            lineWidth: 5,
            strokeStyle: '#ffffff'
        }
    });
    var earth = Bodies.circle(450, 420, 10, {
        density: 1,
        render: {
            fillStyle: '#2FA002'
        },
        collisionFilter: {
            category: 0x0001,
            mask: 0x0001 // Only collide with default category
        }
    });
    var earth_elastic = Constraint.create({
        pointA: { x: 450, y: 420 },
        bodyB: earth,
        density: 1,
        stiffness: 0.001,
        length: 7,
        render: {
            visible: false,
            lineWidth: 5,
            strokeStyle: '#ffffff'
        }
    });
    var mars = Bodies.circle(520, 450, 7, {
        density: 1,
        render: {
            fillStyle: '#A00A02'
        },
        collisionFilter: {
            category: 0x0001,
            mask: 0x0001 // Only collide with default category
        }
    });
    var mars_elastic = Constraint.create({
        pointA: { x: 520, y: 420 },
        bodyB: mars,
        density: 1,
        stiffness: 0.001,
        length: 7,
        render: {
            visible: false,
            lineWidth: 5,
            strokeStyle: '#ffffff'
        }
    });
    var jupiter = Bodies.circle(630, 480, 70, {
        density: 1,
        render: {
            fillStyle: '#D3611A'
        },
        collisionFilter: {
            category: 0x0001,
            mask: 0x0001 // Only collide with default category
        }
    });
    var jupiter_elastic = Constraint.create({
        pointA: { x: 630, y: 480 },
        bodyB: jupiter,
        density: 1,
        stiffness: 0.001,
        length: 5,
        render: {
            visible: false,
            lineWidth: 5,
            strokeStyle: '#ffffff'
        }
    });
    var saturn = Bodies.circle(780, 510, 55, {
        density: 1,
        render: {
            fillStyle: '#A0984D'
        },
        collisionFilter: {
            category: 0x0001,
            mask: 0x0001 // Only collide with default category
        }
    });
    var saturn_elastic = Constraint.create({
        pointA: { x: 780, y: 510 },
        bodyB: saturn,
        density: 1,
        stiffness: 0.001,
        length: 5,
        render: {
            visible: false,
            lineWidth: 5,
            strokeStyle: '#ffffff'
        }
    });
    var uranus = Bodies.circle( 910, 450, 55, {
        density: 1,
        render: {
            fillStyle: '#2BD7CB'
        },
        collisionFilter: {
            category: 0x0001,
            mask: 0x0001 // Only collide with default category
        }
    });
    var uranus_elastic = Constraint.create({
        pointA: { x: 910, y: 450 },
        bodyB: uranus,
        density: 1,
        stiffness: 0.001,
        length: 5,
        render: {
            visible: false,
            lineWidth: 5,
            strokeStyle: '#ffffff'
        }
    });
    var neptune = Bodies.circle(1100, 430, 60, {
        density: 1,
        render: {
            fillStyle: 'blue'
        },
        collisionFilter: {
            category: 0x0001,
            mask: 0x0001 // Only collide with default category
        }
    });
    
    var neptune_elastic = Constraint.create({
        pointA: { x: 1100, y: 430 },
        bodyB: neptune,
        density: 1,
        stiffness: 0.001,
        length: 10,
        render: {
            visible: false,
            lineWidth: 5,
            strokeStyle: '#ffffff'
        }
    });

   
    var sun_elastic = Constraint.create({
        pointA: { x: 50, y: 50 },
        bodyB: sun,
        density: 1,
        stiffness: 0.001,
        length: 10,
        render: {
            visible: false,
            lineWidth: 5,
            strokeStyle: '#ffffff'
        }
    });
// add mouse control
var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            render: {
                visible: false
            },
            stiffness: 0.02
        }
    });


    
// add all of the bodies to the world
World.add(engine.world, [sun, neptune, mercury, venus, earth, mars, jupiter, saturn, uranus, sun_elastic, mercury_elastic, venus_elastic, earth_elastic, mars_elastic, jupiter_elastic, saturn_elastic, uranus_elastic, neptune_elastic, mouseConstraint]);

Matter.Events.on(render, 'afterRender', function(event) {
    var context = render.context;
    context.fillStyle = '#fff';
    context.font = '16px Arial';
    context.fillText('Mars', mars.position.x-20, mars.position.y- 10);

    context.fillStyle = '#fff';
    context.font = '16px Arial';
    context.fillText('Mercury', mercury.position.x-20, mercury.position.y-10);

    context.fillStyle = '#fff';
    context.font = '16px Arial';
    context.fillText('Venus', venus.position.x-20, venus.position.y-10);

    context.fillStyle = '#fff';
    context.font = '16px Arial';
    context.fillText('Earth', earth.position.x-20, earth.position.y-10);

    context.fillStyle = '#fff';
    context.font = '16px Arial';
    context.fillText('Jupiter', jupiter.position.x-30, jupiter.position.y);

    context.fillStyle = '#fff';
    context.font = '16px Arial';
    context.fillText('Saturn', saturn.position.x-30, saturn.position.y);

    context.fillStyle = '#fff';
    context.font = '16px Arial';
    context.fillText('Uranus', uranus.position.x-30, uranus.position.y);

    context.fillStyle = '#fff';
    context.font = '16px Arial';
    context.fillText('Neptune', neptune.position.x-30, neptune.position.y);

    context.fillStyle = 'black';
    context.font = '24px Arial';
    context.fillText('Sun', sun.position.x-30, sun.position.y);
});



render.mouse = mouse;
// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);
   // Correct event binding for mouse click
   Events.on(engine, 'mousedown', function(event) {
    const mousePosition = event.mouse.position;
    const x = render.options.width / 2;
    const y = render.options.height;
    shootAsteroid(x, y, mousePosition.x, mousePosition.y);
});
// Resize the render canvas on window resize
window.addEventListener('resize', function() {
    render.canvas.width = window.innerWidth;
    render.canvas.height = window.innerHeight;
    render.options.width = window.innerWidth;
    render.options.height = window.innerHeight;
});

