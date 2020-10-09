module.exports = function(api) {
    api.cache(true);

    // 1. Configuration

    // 1.a - presets : type de js que je vais utiliser 

    const presets = [
        '@babel/preset-env',
        '@babel/preset-typescript',
        '@babel/preset-react',
    ];

    // 1.b - plugins : quels plugins "avancés" je vais utiliser 

    const plugins = [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-transform-react-constant-elements',
        '@babel/plugin-transform-runtime',
        '@babel/plugin-transform-regenerator',
        '@babel/plugin-proposal-object-rest-spread'
    ];

    // 2. Ignore : Quel fichiers je souhaite ignore 

    
    const ignore = ['./coverage', './src/__tests__'];
    const config = {presets, plugins}

    return {
        env: {
            development: {...config, ignore},
            production: {...config, ignore},
            test: {...config},
        }
    }
}