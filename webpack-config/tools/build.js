import webpack from 'webpack';
import config from '../webpack.config'

process.env.NODE_ENV = 'production';

webpack(config).run((error, stats) => {
    if(error) {
        console.error(error);
        return 1;
    }

    console.log(stats);

});