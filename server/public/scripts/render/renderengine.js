const render = () => {
    const build = new window.GloryGameEngine.default();
    const engine = build.renderEngine();
    engine.cwrap("main", "number", ["number"]);
};


window.onload = render();
