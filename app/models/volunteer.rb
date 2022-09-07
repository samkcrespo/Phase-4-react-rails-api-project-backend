class Volunteer < ApplicationRecord
    has_secure_password
    
    has_many :signups
    has_many :events, through: :signups

    validates :first_name, :last_name, :email, presence: true
    validates :first_name, length: { minimum: 2 }
    validates :last_name, length: { minimum: 2 }
  
    validates :username, uniqueness: true

end
