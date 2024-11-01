const orderService = require('./services/orderService.js');
const userService = require('./services/userService.js');
const logger = require('./utils/logger.js');
const logToFile = require('./utils/fileLogger.js');

// Get user IDs
userId1 = userService.createUser("Philip", 36);
userId2 = userService.createUser("Tamana", 33);
userId3 = userService.createUser ("Brian", 40);

// output user activity to log file
logToFile.userLog(userService.showUsers());

// Take the order
orderService.getOrder(userId1,"Yam", 5);
orderService.getOrder(userId2,"Goat", 1);
orderService.getOrder(userId3,"Fish", 1);
orderService.getOrder(userId1,"Rice", 3);

// Output the order
console.log(orderService.showOrder());

// Search for a given product in the order
console.log(orderService.filterOrder("Yam"));

// Search for products a particular user bought
console.log(orderService.filterOrderByUserId(userId1));

// Output order details using the logger utility
console.log("----")
logger.log(orderService.showOrder());

// Output order details to file using fileLogger utility
logToFile.orderLog(orderService.showOrder());
