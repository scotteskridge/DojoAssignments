// ///////////////////////demo code for comments in posts////////////////////////////
// // define Schema variable

// const mongoose = require('mongoose');
// Schema = mongoose.Schema


// // define Post Schema
// var PostSchema = new Schema({
//     text: { type: String, required: true },
//     comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
// }, { timestamps: true });


// // define Comment Schema
// var CommentSchema = new Schema({
//     _post: { type: Schema.Types.ObjectId, ref: 'Post' },
//     text: { type: String, required: true }
// }, { timestamps: true });
// // set our models by passing them their respective Schemas
// // mongoose.model('Post', PostSchema);
// // mongoose.model('Comment', CommentSchema);
// // // store our models in variables
// // var Post = mongoose.model('Post');
// // var Comment = mongoose.model('Comment');
// // // route for getting a particular post and comments
// // app.get('/posts/:id', function(req, res) {
// //     Post.findOne({ _id: req.params.id })
// //         .populate('comments')
// //         .exec(function(err, post) {
// //             res.render('post', { post: post });
// //         });
// // });
// // route for creating one comment with the parent post id
// // app.post('/posts/:id', function(req, res) {
// //     Post.findOne({ _id: req.params.id }, function(err, post) {
// //         var comment = new Comment(req.body);
// //         comment._post = post._id;
// //         post.comments.push(comment);
// //         comment.save(function(err) {
// //             post.save(function(err) {
// //                 if (err) { console.log('Error'); } else { res.redirect('/'); }
// //             });
// //         });
// //     });
// // });


// ////more sample code from mongoose docs ///

// ////http://mongoosejs.com/docs/populate.html////


// var personSchema = Schema({
//     _id: Number,
//     name: String,
//     age: Number,
//     stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
// });

// var storySchema = Schema({
//     _creator: { type: Number, ref: 'Person' },
//     title: String,
//     fans: [{ type: Number, ref: 'Person' }]
// });

// var Story = mongoose.model('Story', storySchema);
// var Person = mongoose.model('Person', personSchema);

// // Saving refs

// // Saving refs to other documents works the same way you normally save properties, just assign the _id value:

// var aaron = new Person({ _id: 0, name: 'Aaron', age: 100 });

// aaron.save(function(err) {
//     if (err) return handleError(err);

//     var story1 = new Story({
//         title: "Once upon a timex.",
//         _creator: aaron._id // assign the _id from the person
//     });

//     story1.save(function(err) {
//         if (err) return handleError(err);
//         // thats it!
//     });
// });

// // Population

// // So far we haven't done anything much different. We've merely created a Person and a Story. Now let's take a look at populating our story's _creator using the query builder:

// Story
//     .findOne({ title: 'Once upon a timex.' })
//     .populate('_creator')
//     .exec(function(err, story) {
//         if (err) return handleError(err);
//         console.log('The creator is %s', story._creator.name);
//         // prints "The creator is Aaron"
//     });

// // Field selection

// // What if we only want a few specific fields returned for the populated documents? This can be accomplished by passing the usual field name syntax as the second argument to the populate method:

// Story
//     .findOne({ title: /timex/i })
//     .populate('_creator', 'name') // only return the Persons name
//     .exec(function(err, story) {
//         if (err) return handleError(err);

//         console.log('The creator is %s', story._creator.name);
//         // prints "The creator is Aaron"

//         console.log('The creators age is %s', story._creator.age);
//         // prints "The creators age is null'
//     })


// // Refs to children

// // We may find however, if we use the aaron object, we are unable to get a list of the stories. This is because no story objects were ever 'pushed' onto aaron.stories.

// // There are two perspectives here. First, it's nice to have aaron know which stories are his.

// // aaron.stories.push(story1);
// // aaron.save(callback);


// // This allows us to perform a find and populate combo:

// Person
//     .findOne({ name: 'Aaron' })
//     .populate('stories') // only works if we pushed refs to children
//     .exec(function(err, person) {
//         if (err) return handleError(err);
//         console.log(person);
//     })