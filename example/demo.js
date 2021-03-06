const backand = require('./../src/index');

backand.init({
  appName: 'sdk',
  anonymousToken: '82cfcfe8-c718-4621-8bb6-cd600e23487f',
});


var await = false;

//Test Anonymous
backand.object.getList('items')
  .then(res=> {
    await = res;
    console.log(res.data);
  })
  .catch(err=> console.log(err));

//Test sign in - access token
backand.signin('sdk@backand.com', "Password1")
  .then(res=> {
    return backand.user.getUsername()
  })
  .then(res=> {
    console.log(res);
    return backand.object.getList('items')
  })
  .then(res=> {
    await = res;
    console.log(res.data);
  })
  .catch(err=> console.log(err));

(function wait () {
  console.log('loading...');
   if (!await) setTimeout(wait, 1000);
})();
