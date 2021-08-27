# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Movie.destroy_all
Review.destroy_all
User.destroy_all

@admin = User.create!(username: 'henry', email: 'henry@email.com', password: '123456')

puts "#{User.count} users created"

@titanic = Movie.create!(
  title: 'Titanic',
  year: '1997',
  director: 'James Cameron',
  poster_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxAs-VXYiRRFdNziU87v5rGhpcz6ektUYh8w&usqp=CAU',
  plot: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.'
)
@pulpfiction = Movie.create!(
  title: 'Pulp Fiction',
  year: '1994',
  director: 'Quentin tarantino',
  poster_img: '',
  plot: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.'
)
@avatar = Movie.create!(
  title: 'Titanic',
  year: '2009',
  director: 'James Cameron',
  poster_img: '',
  plot: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.'
)
@inception = Movie.create!(
  title: 'Titanic',
  year: '2010',
  director: 'Christopher Nolan',
  poster_img: '',
  plot: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.'
)

Review.create!(review:'The greatest movie i have ever seen', movie: @titanic)