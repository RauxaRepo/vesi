
/*                                                                                                                                      
VVVVVVVV           VVVVVVVV                  SSSSSSSSSSSSSSS   iiii  
V::::::V           V::::::V                SS:::::::::::::::S i::::i 
V::::::V           V::::::V               S:::::SSSSSS::::::S  iiii  
V::::::V           V::::::V               S:::::S     SSSSSSS        
 V:::::V           V:::::V eeeeeeeeeeee   S:::::S            iiiiiii 
  V:::::V         V:::::Vee::::::::::::ee S:::::S            i:::::i 
   V:::::V       V:::::Ve::::::eeeee:::::eeS::::SSSS          i::::i 
    V:::::V     V:::::Ve::::::e     e:::::e SS::::::SSSSS     i::::i 
     V:::::V   V:::::V e:::::::eeeee::::::e   SSS::::::::SS   i::::i 
      V:::::V V:::::V  e:::::::::::::::::e       SSSSSS::::S  i::::i 
       V:::::V:::::V   e::::::eeeeeeeeeee             S:::::S i::::i 
        V:::::::::V    e:::::::e                      S:::::S i::::i 
         V:::::::V     e::::::::e         SSSSSSS     S:::::Si::::::i
          V:::::V       e::::::::eeeeeeee S::::::SSSSSS:::::Si::::::i
           V:::V         ee:::::::::::::e S:::::::::::::::SS i::::::i
            VVV            eeeeeeeeeeeeee  SSSSSSSSSSSSSSS   iiiiiiii                                                                                                                                
*/





const pkg = require('../package');

const ConfigOptions = function () {
	const config = this;


  // source directory 
  config.srcDir = '../assets/src'; 
  // dist directory
  config.distDir = '../assets/dist';
  // local development : for local testing
	config.localDir = '../app';

	
  /*
    Local directories
    ===================================
  */
	config.local = {
    imagesDir: `${config.srcDir}/images/**/*`,
    viewsDir: `${config.srcDir}/views/*.html`,
    fontsDir: `${config.srcDir}/fonts/**/*`,

    appcss: `${config.localDir}/css`,
    appfonts: `${config.localDir}/css/fonts`,
		appjs: `${config.localDir}/js`,
		appimg: `${config.localDir}/images`,
	}
  

  /*
   Framework Scss/css directories
   ===================================
   scssDir : location of all scss files
   distDir : location of unminified css
  */
	config.css = {
		scssDir: `${config.srcDir}/scss`,
    distDir: `${config.distDir}/css`,
  };


  
  /*
   Framework Javascript directories
   ===================================
   srcDir : source javascript
   distDir : compiled javascript
  */
  config.js = {
		srcDir: `${config.srcDir}/js`, // config.js.srcDir
		distDir: `${config.distDir}/js`, // config.js.distDir
	};
  
  
  config.creds = {
    user : 'CSAlaskaAPI',
    pass : '@Lze1nIuDW'

  }

};

module.exports = new ConfigOptions();