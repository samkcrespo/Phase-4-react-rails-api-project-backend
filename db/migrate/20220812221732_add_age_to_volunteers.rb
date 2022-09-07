class AddAgeToVolunteers < ActiveRecord::Migration[6.1]
  def change
    add_column :volunteers, :age, :integer
  end
end
