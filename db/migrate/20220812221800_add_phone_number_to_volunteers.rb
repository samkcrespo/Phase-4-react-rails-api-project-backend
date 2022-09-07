class AddPhoneNumberToVolunteers < ActiveRecord::Migration[6.1]
  def change
    add_column :volunteers, :phone_number, :string
  end
end
