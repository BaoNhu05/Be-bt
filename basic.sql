CREATE DATABASE food_app;
USE food_app;

CREATE TABLE `Users` (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255)
);

CREATE TABLE Restaurant (
  res_id INT AUTO_INCREMENT PRIMARY KEY,
  res_name VARCHAR(255),
  image VARCHAR(255),
  `desc` VARCHAR(255)
);


CREATE TABLE Food_type (
  type_id INT AUTO_INCREMENT PRIMARY KEY,
  type_name VARCHAR(255)
);

CREATE TABLE Food (
  food_id INT AUTO_INCREMENT PRIMARY KEY,
  food_name VARCHAR(255),
  image VARCHAR(255),
  price FLOAT,
  `desc` VARCHAR(255),
  type_id INT,
  FOREIGN KEY (type_id) REFERENCES Food_type(type_id)
);

CREATE TABLE Sub_food (
  sub_id INT AUTO_INCREMENT PRIMARY KEY,
  sub_name VARCHAR(255),
  sub_price FLOAT,
  food_id INT,
  FOREIGN KEY (food_id) REFERENCES Food(food_id)
);

CREATE TABLE Orders (
  user_id INT,
  food_id INT,
  amount INT,
  code VARCHAR(50),
  arr_sub_id VARCHAR(255),
  PRIMARY KEY (user_id, food_id),
  FOREIGN KEY (user_id) REFERENCES Users(id),
  FOREIGN KEY (food_id) REFERENCES Food(food_id)
);

CREATE TABLE Like_res (
  user_id INT,
  res_id INT,
  date_like DATETIME,
  PRIMARY KEY (user_id, res_id),
  FOREIGN KEY (user_id) REFERENCES Users(id),
  FOREIGN KEY (res_id) REFERENCES Restaurant(res_id)
);

CREATE TABLE Rate_res (
  user_id INT,
  res_id INT,
  amount INT,
  date_rate DATETIME,
  PRIMARY KEY (user_id, res_id),
  FOREIGN KEY (user_id) REFERENCES Users(id),
  FOREIGN KEY (res_id) REFERENCES Restaurant(res_id)
);
