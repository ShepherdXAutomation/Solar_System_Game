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
    var mars = Bodies.circle(490, 450, 7, {
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
        pointA: { x: 490, y: 450 },
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
    var jupiter = Bodies.circle(550, 550, 70, {
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
        pointA: { x: 550, y: 550 },
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
    var saturn = Bodies.circle(650, 700, 55, {
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
        pointA: { x: 650, y: 700 },
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
    var uranus = Bodies.circle( 800, 750, 55, {
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
        pointA: { x: 800, y: 750 },
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
    var neptune = Bodies.circle(850, 850, 60, {
        density: 1,
        render: {
            fillStyle: 'blue'
        },
        collisionFilter: {
            category: 0x0001,
            mask: 0x0001 // Only collide with default category
        }
    });
    
    var pointBody = Bodies.circle(400, 400, 10, {
        isStatic: true,
        render: {
            fillStyle: 'red'
        },
        collisionFilter: {
            category: 0x0004,
            mask: 0x0000 // Collides with nothing
        }
    });
    
    var neptune_elastic = Constraint.create({
        pointA: { x: 850, y: 850 },
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

// Resize the render canvas on window resize
window.addEventListener('resize', function() {
    render.canvas.width = window.innerWidth;
    render.canvas.height = window.innerHeight;
    render.options.width = window.innerWidth;
    render.options.height = window.innerHeight;
});