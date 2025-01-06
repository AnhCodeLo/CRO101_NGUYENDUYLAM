var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const database = require("./config/db");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/usersRouter");
var distributorsRoutes = require("./routes/distributorRoutes");
var fruitsRoutes = require("./routes/fruitRoutes");
var uploadsRoutes = require("./routes/uploadRoutes");
var emailRoutes = require("./routes/emailRoutes");
var loginRoutes = require("./routes/loginRoutes");
var loadmoreRoutes = require("./routes/loadmoreRoutes"); // Thêm dòng này

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/distributors", distributorsRoutes);
app.use("/fruits", fruitsRoutes);
app.use("/uploads", uploadsRoutes);
app.use("/sendmail", emailRoutes);
app.use("/login", loginRoutes);
app.use("/loadmore", loadmoreRoutes); // Thêm dòng này để sử dụng routes loadmore

database.connect();

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
