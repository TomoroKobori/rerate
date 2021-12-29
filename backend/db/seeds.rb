# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
10.times do |i|
  Project.create!(
    title: "Sample Title #{SecureRandom.alphanumeric(6)}",
    status: Project.statuses.keys.shuffle.first,
    point: [1,3,5,10].shuffle.first
  )
end