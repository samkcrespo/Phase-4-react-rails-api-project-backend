# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "seeding volunteer/user"

volunteer1 = Volunteer.create!(username: 'samcrespo', password: '1234', email: 'samcrespo@example.com', first_name: 'Sam', last_name: 'Crespo', age: 27, phone_number: '123-456-7890')

puts "seeding events"

event1 = Event.create(name: "Highway Cleanup", when: "22 June 2022", location: "I-225")
event2 = Event.create(name: "Feed Homeless", when: "23 June 2022", location: "Downtown")
event3 = Event.create(name: "Direct Traffic", when: "24 June 2022", location: "Mile High Stadium")
event4 = Event.create(name: "Chaperone Field Trip", when: "25 June 2022", location: "Denver Zoo")
event5 = Event.create(name: "Take Care of Animals", when: "26 June 2022", location: "Denver Animal Shelter")
event6 = Event.create(name: "Keep Denver Beautiful", when: "30 June 2022", location: "City Park")
event7 = Event.create(name: "Keep Denver Beautiful", when: "1 July 2022", location: "City Park")
event8 = Event.create(name: "Keep Denver Beautiful", when: "7 July 2022", location: "City Park")


puts "seeding signups"
signup1 = Signup.create(event_id: event1.id, volunteer_id: volunteer1.id)
# signup2 = Signup.create(event_id: event1.id, volunteer_id: volunteer2.id)
# signup3 = Signup.create(event_id: event1.id, volunteer_id: volunteer3.id)
# signup4 = Signup.create(event_id: event2.id, volunteer_id: volunteer4.id)
# signup5 = Signup.create(event_id: event2.id, volunteer_id: volunteer5.id)
# signup6 = Signup.create(event_id: event2.id, volunteer_id: volunteer6.id)
# signup7 = Signup.create(event_id: event3.id, volunteer_id: volunteer7.id)
# signup8 = Signup.create(event_id: event3.id, volunteer_id: volunteer8.id)
# signup9 = Signup.create(event_id: event3.id, volunteer_id: volunteer9.id)
# signup10 = Signup.create(event_id: event4.id, volunteer_id: volunteer10.id)
# signup11 = Signup.create(event_id: event4.id, volunteer_id: volunteer11.id)
# signup12 = Signup.create(event_id: event4.id, volunteer_id: volunteer12.id)
