module.exports = {
    lintOnSave: false,

    pwa: {
        name: 'cudeschin',
        themeColor: '#00a0af',
        msTileColor: '#00a0af',
        // Icons live in public/images/icons, not in the plugin default public/img/icons
        iconPaths: {
            faviconSVG: null,
            favicon32: 'images/icons/favicon-32x32.png',
            favicon16: 'images/icons/favicon-16x16.png',
            appleTouchIcon: 'images/icons/apple-touch-icon-152x152.png',
            maskIcon: 'images/icons/safari-pinned-tab.svg',
            msTileImage: 'images/icons/msapplication-icon-144x144.png'
        }
    }
};
