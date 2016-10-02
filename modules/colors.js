const async = require('async');
const getColors = require('get-image-colors');

class Colors {
  static getColor(url) {
    return new Promise((resolve, reject) => {
      getColors(url, (err, colors) => {
        if (!colors)
          return reject();
        let result = null;
        for (let i = 0; i < 5; i++) {
          const rgb = colors[i].rgb();
          const hsv = colors[i].hsv();
          const colorful = hsv[1] > 0.3 && hsv[2] > 0.3;
          if (result == null || colorful) {
            result = {rgb, hsv, url}
            if (colorful)
              break;
          }
        }
        return resolve(result);
      });
    });
  }

  static getColors(urls) {
    return new Promise(resolve => {
      async.parallel(urls.map(url => {
        return callback => {
          Colors.getColor(url).then(results => {
            callback(null, results);
          }, err => {
            callback(null, null);
          });
        };
      }), (err, results) => {
        resolve(results.filter(r => r));
      });
    });
  }
}

module.exports = Colors;