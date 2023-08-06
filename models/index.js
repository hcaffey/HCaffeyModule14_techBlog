const User = require('./User');
const Post = require('./Post');
const Comment = require('./comment');
// unclear why vscode wants comment lowercase, file name is capital

User.hasMany(Comment, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
  });
  
  User.hasMany(Post, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
  });

Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

module.exports = {
  User,
  Comment,
  Post
};