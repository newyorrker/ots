var destPath = 'public';

var config = {

    src: {
        root         : 'src',
        templates    : 'src/templates',
        templatesData: 'src/templates/data',
        pagelist     : 'src/index.yaml',
        sass         : 'src/sass',
        // path for sass files that will be generated automatically via some of tasks
        sassGen      : 'src/sass/generated',
        js           : 'src/js',
        img          : 'src/images',
        svg          : 'src/img/svg',
        icons        : 'src/images/icons',
        // path to png sources for sprite:png task
        iconsPng     : 'src/icons',
        // path to svg sources for sprite:svg task
        iconsSvg     : 'src/icons',
        // path to svg sources for iconfont task
        iconsFont    : 'src/icons',
        fonts        : 'src/fonts',
        lib          : 'src/lib'
    },
    dest: {
        root : destPath,
        html : destPath,
        css  : destPath + '/css',
        js   : destPath + '/js',
        img  : destPath + '/images',
        fonts: destPath + '/fonts',
        lib  : destPath + '/lib'
    },
    sass: {
        compressed: {
            outputstyle: 'compressed'
        },
        expanded: {
            outputstyle: 'expanded'
        }
    },
    setEnv: function(env) {
        this.dev = env;
    },

};

module.exports = config;