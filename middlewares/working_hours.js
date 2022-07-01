function workingHours(req, res, next) {
  const day = new Date().getDay();
  const hour = new Date().getHours();

  if (hour > 17 || hour < 8 || day === 6 || day === 0) {
    res.send(
      "<div style='width:80%; margin:auto; text-align:center; font-size:20px;  align-items:center; justify-content:center; height:250px' role='alert'><p style='  padding: 50px;color: #721c24; background-color: #f8d7da; border-color: #f5c6cb;'><strong>We are sorry!</strong> You should come back in working days</p> <br> <img src='https://i0.wp.com/marketbusinessnews.com/wp-content/uploads/2015/08/Business-hours-often-means-nine-to-five.jpg?resize=470%2C263' /></div>"
    );
  } else {
    next();
  }
}
module.exports = workingHours;
