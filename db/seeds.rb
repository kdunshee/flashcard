# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require "faker"

  25.times do
    flashcard_name = Faker::Hacker.flashcard_name
    User.create(flashcard_name: flashcard)
  end

  #attempted to run faker multiple times with multiple variations of name and faker propertiest but was unsuccessful. 