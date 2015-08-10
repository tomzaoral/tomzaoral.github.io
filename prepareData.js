"use strict";

var fs = require('fs');

var files = fs.readdirSync("_posts/");

var posts = [];
for (var i = 0; i < files.length; i++) {
  // Exclude git files
  if (files[i].indexOf(".") === 0) {
    continue;
  }
  var file = parseFilename(files[i]);
  posts.push({
    path: file.path,
    title: file.title,
    date: file.date
  });
}

posts.sort(comparePaths);

function comparePaths(a, b) {
  if (a.path < b.path)
    return 1;
  if (a.path > b.path)
    return -1;
  return 0;
}

function parseFilename(file) {
  var path = file.slice(0, -3);
  var arr = path.split('-');
  var date = arr[0] + '-' + arr[1] + '-' + arr[2];
  arr.splice(0, 3);
  var title = arr.join(' ').substr(0, 1).toUpperCase() + arr.join(' ').substr(1);

  return {
    path: path,
    title: title,
    date: date
  };
}

fs.writeFile("posts.json", JSON.stringify(posts, null, 2), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The data file was created!");
});
