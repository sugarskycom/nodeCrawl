let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/crawl');
let MovieSchema = new mongoose.Schema({
    name : String,
    url : String
});
let Movie = mongoose.model('Movie',MovieSchema);
exports.Movie = Movie;