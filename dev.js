// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
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

// Planets and the Sun
var sun = Bodies.circle(window.innerWidth * 0.1, window.innerHeight * 0.1, 50, {
    isStatic: true,
    render: { fillStyle: 'yellow' }
});

// Function to create planets
function createPlanet(x, y, radius, color) {
    return Bodies.circle(window.innerWidth * x, window.innerHeight * y, radius, {
        density: 1,
        render: { fillStyle: color }
    });
}

// Creating planets
var mercury = createPlanet(0.2, 0.2, 5, 'grey'),
    venus = createPlanet(0.25, 0.25, 10, '#FFECA1'),
    earth = createPlanet(0.3, 0.3, 10, '#2FA002'),
    mars = createPlanet(0.35, 0.35, 7, '#A00A02'),
    jupiter = createPlanet(0.4, 0.4, 70, '#D3611A'),
    saturn = createPlanet(0.45, 0.45, 55, '#A0984D'),
    uranus = createPlanet(0.5, 0.5, 55, '#2BD7CB'),
    neptune = createPlanet(0.55, 0.55, 60, 'blue');

// Function to create constraints
function createConstraint(pointA, bodyB) {
    return Constraint.create({
        pointA: pointA,
        bodyB: bodyB,
        stiffness: 0.001,
        render: { lineWidth: 5, strokeStyle: '#ffffff' }
    });
}

// Creating constraints
var planetConstraints = [
    createConstraint({ x: mercury.position.x, y: mercury.position.y }, mercury),
    createConstraint({ x: venus.position.x, y: venus.position.y }, venus),
    createConstraint({ x: earth.position.x, y: earth.position.y }, earth),
    createConstraint({ x: mars.position.x, y: mars.position.y }, mars),
    createConstraint({ x: jupiter.position.x, y: jupiter.position.y }, jupiter),
    createConstraint({ x: saturn.position.x, y: saturn.position.y }, saturn),
    createConstraint({ x: uranus.position.x, y: uranus.position.y }, uranus),
    createConstraint({ x: neptune.position.x, y: neptune.position.y }, neptune)
];

// Add all bodies and constraints to the world
World.add(engine.world, [sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune].concat(planetConstraints));

// Resize handler to update planet positions
window.addEventListener('resize', function() {
    render.canvas.width = window.innerWidth;
    render.canvas.height = window.innerHeight;
    render.options.width = window.innerWidth;
    render.options.height = window.innerHeight;

    // Update positions based on new window dimensions
    Body.setPosition(sun, { x: window.innerWidth * 0.1, y: window.innerHeight * 0.1 });
    let planets = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune];
    let relativePositions = [0.2, 0.25, 0.3, 0.35, 0.4, 0.45
